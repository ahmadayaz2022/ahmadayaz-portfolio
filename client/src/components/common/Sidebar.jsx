import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-[280px] bg-slate-900 border-r border-slate-800 p-6">

      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        CMS Panel
      </h1>

      <div className="flex flex-col gap-4">

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/hero">Manage Hero</Link>
        <Link to="/dashboard/projects">Manage Projects</Link>
        <Link to="/dashboard/skills">Manage Skills</Link>
        <Link to="/dashboard/experience">Manage Experience</Link>
        <Link to="/dashboard/education">Manage Education</Link>
        <Link to="/dashboard/contact">Manage Contact</Link>

      </div>

    </div>
  );
}

export default Sidebar;