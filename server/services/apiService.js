// Frontend service: services/apiService.js (For your React frontend)

import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post(`${API_URL}/auth/refresh-token`, {
          refreshToken,
        });

        const { token } = response.data;
        localStorage.setItem("token", token);

        originalRequest.headers.Authorization = `Bearer ${token}`;
        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// Real-time polling service
class RealtimeService {
  constructor() {
    this.pollingIntervals = {};
    this.listeners = {};
    this.lastTimestamp = new Date().toISOString();
  }

  // Start polling for dashboard stats
  startDashboardPolling(callback, interval = 10000) {
    this.stopPolling("dashboard");
    
    const poll = async () => {
      try {
        const response = await api.get("/notifications/dashboard");
        callback(response.data.data);
      } catch (error) {
        console.error("Dashboard polling error:", error);
      }
    };

    // Initial fetch
    poll();
    
    // Set interval
    this.pollingIntervals["dashboard"] = setInterval(poll, interval);
  }

  // Start polling for unread message count
  startUnreadCountPolling(callback, interval = 5000) {
    this.stopPolling("unread");
    
    const poll = async () => {
      try {
        const response = await api.get("/notifications/unread-count");
        callback(response.data.data);
      } catch (error) {
        console.error("Unread count polling error:", error);
      }
    };

    poll();
    this.pollingIntervals["unread"] = setInterval(poll, interval);
  }

  // Start polling for recent activity
  startActivityPolling(callback, interval = 15000) {
    this.stopPolling("activity");
    
    const poll = async () => {
      try {
        const response = await api.get("/notifications/recent-activity");
        callback(response.data.data);
      } catch (error) {
        console.error("Activity polling error:", error);
      }
    };

    poll();
    this.pollingIntervals["activity"] = setInterval(poll, interval);
  }

  // Efficient polling - check for updates only if needed
  startEfficientPolling(callback, interval = 10000) {
    this.stopPolling("efficient");
    
    const poll = async () => {
      try {
        const response = await api.get(`/notifications/check-updates?since=${this.lastTimestamp}`);
        
        if (response.data.data.hasUpdates) {
          this.lastTimestamp = response.data.data.currentTimestamp;
          // Fetch full data only if there are updates
          const fullResponse = await api.get("/notifications/dashboard");
          callback(fullResponse.data.data);
        }
      } catch (error) {
        console.error("Efficient polling error:", error);
      }
    };

    poll();
    this.pollingIntervals["efficient"] = setInterval(poll, interval);
  }

  // Stop specific polling
  stopPolling(name) {
    if (this.pollingIntervals[name]) {
      clearInterval(this.pollingIntervals[name]);
      delete this.pollingIntervals[name];
    }
  }

  // Stop all polling
  stopAllPolling() {
    Object.keys(this.pollingIntervals).forEach((key) => {
      clearInterval(this.pollingIntervals[key]);
    });
    this.pollingIntervals = {};
  }
}

export const realtimeService = new RealtimeService();
export default api;