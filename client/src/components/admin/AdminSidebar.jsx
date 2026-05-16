import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function AdminSidebar() {
  const navigate = useNavigate();

  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="w-72 min-h-screen glass p-8 border-r border-slate-800">
      <h2 className="text-4xl font-bold gradient-text mb-12">
        Admin Panel
      </h2>

      <div className="flex flex-col gap-5">
        <Link
          to="/admin"
          className="glass p-4 rounded-xl hover:border-cyan-400"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/add-project"
          className="glass p-4 rounded-xl hover:border-cyan-400"
        >
          Add Project
        </Link>

        <Link
          to="/admin/manage-projects"
          className="glass p-4 rounded-xl hover:border-cyan-400"
        >
          Manage Projects
        </Link>

        <Link
          to="/admin/messages"
          className="glass p-4 rounded-xl hover:border-cyan-400"
        >
          Messages
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-500 mt-8 py-4 rounded-xl"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;