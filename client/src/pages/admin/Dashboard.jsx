import { useState, useEffect, useContext } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { AuthContext } from "../../context/AuthContext";
import API from "../../services/api";

function Dashboard() {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({
    projects: 0,
    messages: 0,
    draftProjects: 0,
    unreadMessages: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const projectsRes = await API.get("/projects/admin/my-projects?limit=1");
      const messagesRes = await API.get("/messages?limit=1");

      setStats({
        projects: projectsRes.data.total || 0,
        messages: messagesRes.data.total || 0,
        draftProjects: projectsRes.data.data.filter(
          (p) => p.status === "draft"
        ).length || 0,
        unreadMessages: messagesRes.data.unreadCount || 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({ title, value, icon, bgColor }) => (
    <div
      className={`${bgColor} p-8 rounded-2xl border border-slate-700 shadow-lg hover:shadow-xl hover:border-cyan-500/50 transition`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-400 text-sm mb-2">{title}</p>
          <p className="text-4xl font-bold text-cyan-400">{value}</p>
        </div>
        <span className="text-4xl">{icon}</span>
      </div>
    </div>
  );

  return (
    <div className="flex bg-slate-950 text-white min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-8 overflow-auto">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-2">
            Welcome back, <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{user?.name}!</span>
          </h1>
          <p className="text-slate-400">
            Here's a quick overview of your portfolio management system
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            title="Total Projects"
            value={stats.projects}
            icon="📁"
            bgColor="bg-gradient-to-br from-blue-900/30 to-blue-950"
          />
          <StatCard
            title="Draft Projects"
            value={stats.draftProjects}
            icon="📝"
            bgColor="bg-gradient-to-br from-yellow-900/30 to-yellow-950"
          />
          <StatCard
            title="Total Messages"
            value={stats.messages}
            icon="💬"
            bgColor="bg-gradient-to-br from-green-900/30 to-green-950"
          />
          <StatCard
            title="Unread Messages"
            value={stats.unreadMessages}
            icon="🔔"
            bgColor="bg-gradient-to-br from-red-900/30 to-red-950"
          />
        </div>

        {/* Quick Actions */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/admin/add-project"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 p-6 rounded-xl text-center transition transform hover:scale-105"
            >
              <span className="text-3xl block mb-2">➕</span>
              <p className="font-semibold">Add New Project</p>
              <p className="text-sm text-slate-200 mt-1">Create a portfolio project</p>
            </a>

            <a
              href="/admin/manage-projects"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 p-6 rounded-xl text-center transition transform hover:scale-105"
            >
              <span className="text-3xl block mb-2">📊</span>
              <p className="font-semibold">Manage Projects</p>
              <p className="text-sm text-slate-200 mt-1">Edit or delete projects</p>
            </a>

            <a
              href="/admin/messages"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 p-6 rounded-xl text-center transition transform hover:scale-105"
            >
              <span className="text-3xl block mb-2">💌</span>
              <p className="font-semibold">View Messages</p>
              <p className="text-sm text-slate-200 mt-1">Check contact form submissions</p>
            </a>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">👤 Account Info</h3>
            <div className="space-y-3 text-slate-400">
              <p>
                <span className="text-slate-300">Name:</span> {user?.name}
              </p>
              <p>
                <span className="text-slate-300">Email:</span> {user?.email}
              </p>
              <p>
                <span className="text-slate-300">Role:</span> Administrator
              </p>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">ℹ️ Need Help?</h3>
            <p className="text-slate-400 mb-4">
              Manage your portfolio efficiently with our admin panel. Add projects, track messages, and keep your portfolio up to date.
            </p>
            <a
              href="/admin/profile"
              className="text-cyan-400 hover:text-cyan-300 font-semibold transition"
            >
              Edit Profile Settings →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;