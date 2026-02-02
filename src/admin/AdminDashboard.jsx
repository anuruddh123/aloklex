import { useEffect, useState } from "react";

const statusOrder = ["Pending", "In Progress", "Completed"];

export default function AdminDashboard() {
  const [cases, setCases] = useState([]);
  const [form, setForm] = useState({
    clientName: "",
    caseType: "",
    status: "Pending",
  });

  useEffect(() => {
    const saved = localStorage.getItem("cases");
    if (saved) setCases(JSON.parse(saved));
  }, []);

  // 🔐 Case ID Generator
  const generateCaseId = (type) => {
    const year = new Date().getFullYear();
    const rand = Math.floor(100 + Math.random() * 900);
    return `ALOK-${type.slice(0, 2).toUpperCase()}-${year}-${rand}`;
  };

  // ➕ Add Case
  const addCase = () => {
    if (!form.clientName || !form.caseType)
      return alert("Please fill all fields");

    const newCase = {
      caseId: generateCaseId(form.caseType),
      clientName: form.clientName,
      caseType: form.caseType,
      status: form.status,
      createdAt: new Date().toLocaleDateString(),
      history: [
        { label: "Case Created", date: new Date().toLocaleDateString() },
      ],
    };

    const updated = [newCase, ...cases];
    setCases(updated);
    localStorage.setItem("cases", JSON.stringify(updated));

    setForm({ clientName: "", caseType: "", status: "Pending" });
  };

  // 🔄 Update Status
  const updateStatus = (id, newStatus) => {
    const updated = cases.map((c) =>
      c.caseId === id
        ? {
            ...c,
            status: newStatus,
            history: [
              ...c.history,
              { label: newStatus, date: new Date().toLocaleDateString() },
            ],
          }
        : c
    );

    setCases(updated);
    localStorage.setItem("cases", JSON.stringify(updated));
  };

  // 🗑 Delete Case
  const deleteCase = (id) => {
    if (!window.confirm("Are you sure you want to delete this case?")) return;

    const updated = cases.filter((c) => c.caseId !== id);
    setCases(updated);
    localStorage.setItem("cases", JSON.stringify(updated));
  };

  // 📊 Stats
  const total = cases.length;
  const pending = cases.filter((c) => c.status === "Pending").length;
  const progress = cases.filter((c) => c.status === "In Progress").length;
  const completed = cases.filter((c) => c.status === "Completed").length;

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 py-10">
      <h1 className="text-3xl font-bold text-[#C9A24D] mb-10">
        Admin Case Manager
      </h1>

      {/* 📊 STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <StatCard title="Total Cases" value={total} />
        <StatCard title="Pending" value={pending} color="text-red-400" />
        <StatCard title="In Progress" value={progress} color="text-yellow-400" />
        <StatCard title="Completed" value={completed} color="text-green-400" />
      </div>

      {/* ➕ ADD CASE */}
      <div className="bg-zinc-900 p-6 rounded-2xl mb-12 border border-white/10">
        <h2 className="text-xl text-[#C9A24D] mb-4">Add New Case</h2>

        <div className="grid md:grid-cols-4 gap-4">
          <input
            placeholder="Client Name"
            className="p-3 bg-black border border-zinc-700 rounded-xl"
            value={form.clientName}
            onChange={(e) =>
              setForm({ ...form, clientName: e.target.value })
            }
          />

          <input
            placeholder="Case Type (Criminal / Family etc.)"
            className="p-3 bg-black border border-zinc-700 rounded-xl"
            value={form.caseType}
            onChange={(e) =>
              setForm({ ...form, caseType: e.target.value })
            }
          />

          <select
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value })
            }
            className="p-3 bg-black border border-zinc-700 rounded-xl"
          >
            {statusOrder.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>

          <button
            onClick={addCase}
            className="bg-[#C9A24D] text-black font-semibold rounded-xl"
          >
            Add Case
          </button>
        </div>
      </div>

      {/* 📁 CASE LIST */}
      <div className="space-y-4">
        {cases.map((c) => (
          <div
            key={c.caseId}
            className="bg-zinc-900/70 p-5 rounded-2xl border border-white/10"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs text-gray-400">{c.caseId}</p>
                <h3 className="text-lg text-[#C9A24D]">{c.clientName}</h3>
                <p className="text-gray-300 text-sm">{c.caseType}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Created: {c.createdAt}
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <select
                  value={c.status}
                  onChange={(e) =>
                    updateStatus(c.caseId, e.target.value)
                  }
                  className="bg-black border border-zinc-700 rounded-xl px-4 py-2"
                >
                  {statusOrder.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>

                <button
                  onClick={() => deleteCase(c.caseId)}
                  className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

        {cases.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            No cases added yet
          </p>
        )}
      </div>
    </div>
  );
}

// 🔹 Stats Card Component
function StatCard({ title, value, color = "text-[#C9A24D]" }) {
  return (
    <div className="bg-zinc-900 p-5 rounded-2xl border border-white/10 text-center">
      <p className="text-sm text-gray-400">{title}</p>
      <p className={`text-3xl font-bold ${color}`}>{value}</p>
    </div>
  );
}
