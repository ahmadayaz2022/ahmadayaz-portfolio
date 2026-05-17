import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function AdminSidebar() {
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menuItems = [
    { label: "Dashboard", path: "/admin", icon: "📊" },
    { label: "Add Project", path: "/admin/add-project", icon: "➕" },
    { label: "Manage Projects", path: "/admin/manage-projects", icon: "📁" },
    { label: "Messages", path: "/admin/messages", icon: "💬" },
    { label: "Profile", path: "/admin/profile", icon: "👤" },
  ];

  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 border-r border-slate-800 p-6 flex flex-col">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
          AdminHub
        </h1>
        <p className="text-slate-500 text-sm">Portfolio Management</p>
      </div>

      {/* User Info */}
      {user && (
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mb-8">
          <p className="text-slate-400 text-xs mb-1">Logged in as</p>
          <p className="text-white font-semibold truncate">{user.name}</p>
          <p className="text-slate-500 text-xs truncate">{user.email}</p>
        </div>
      )}

      {/* Menu Items */}
      <nav className="flex-1 space-y-3">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500 hover:bg-slate-800 transition duration-200 group"
          >
            <span className="text-lg group-hover:scale-110 transition">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 rounded-lg transition duration-200 transform hover:scale-105 mt-8"
      >
        🚪 Logout
      </button>

      {/* Footer */}
      <p className="text-slate-600 text-xs text-center mt-6">
        Manage your portfolio with ease
      </p>
    </div>
  );
}

export default AdminSidebar;