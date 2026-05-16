import { useEffect, useState } from "react";

import API from "../../services/api";
import AdminSidebar from "../../components/admin/AdminSidebar"

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/messages", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex bg-slate-950 text-white">
      <AdminSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-10">
          Contact Messages
        </h1>

        <div className="space-y-6">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-slate-900 p-6 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-2">
                {msg.name}
              </h2>

              <p className="text-cyan-400 mb-2">
                {msg.email}
              </p>

              <p className="text-gray-300 mb-4">
                {msg.subject}
              </p>

              <p>{msg.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Messages;