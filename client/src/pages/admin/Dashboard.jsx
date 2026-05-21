import Sidebar from "../../components/common/Sidebar";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-5xl font-bold mb-10">
          Admin Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h2 className="text-4xl font-bold text-cyan-400">12</h2>
            <p>Total Projects</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h2 className="text-4xl font-bold text-cyan-400">8</h2>
            <p>Skills Added</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h2 className="text-4xl font-bold text-cyan-400">4</h2>
            <p>Experience Records</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h2 className="text-4xl font-bold text-cyan-400">3</h2>
            <p>Education Records</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;