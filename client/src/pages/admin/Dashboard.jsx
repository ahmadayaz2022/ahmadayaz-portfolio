import AdminSidebar from "../../components/admin/AdminSidebar";

function Dashboard() {
  return (
    <div className="flex bg-slate-950 text-white">
      <AdminSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-5xl font-bold mb-10">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 rounded-2xl">
            <h2 className="text-2xl mb-4">
              Projects
            </h2>

            <p className="text-4xl font-bold text-cyan-400">
              10
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h2 className="text-2xl mb-4">
              Messages
            </h2>

            <p className="text-4xl font-bold text-cyan-400">
              25
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h2 className="text-2xl mb-4">
              Skills
            </h2>

            <p className="text-4xl font-bold text-cyan-400">
              20+
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;