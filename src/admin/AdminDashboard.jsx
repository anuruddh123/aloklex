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

  const generateCaseId = (type) => {
    const year = new Date().getFullYear();
    const rand = Math.floor(100 + Math.random() * 900);
    return `ALOK-${type.slice(0, 2).toUpperCase()}-${year}-${rand}`;
  };

  const addCase = () => {
    if (!form.clientName || !form.caseType)
      return alert("Fill all fields");

    const newCase = {
      caseId: generateCaseId(form.caseType),
      clientName: form.clientName,
      caseType: form.caseType,
      status: form.status,
      history: [
        { label: "Case Created", date: new Date().toLocaleDateString() },
      ],
    };

    const updated = [newCase, ...cases];
    setCases(updated);
    localStorage.setItem("cases", JSON.stringify(updated));

    setForm({ clientName: "", caseType: "", status: "Pending" });
  };

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

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 py-10">
      <h1 className="text-3xl font-bold text-[#C9A24D] mb-10">
        Admin Case Manager
      </h1>

      {/* ADD CASE */}
      <div className="bg-zinc-900 p-6 rounded-2xl mb-12 border border-white/10">
        <h2 className="text-xl text-[#C9A24D] mb-4">Add New Case</h2>

        <div className="grid md:grid-cols-3 gap-4">
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

          <button
            onClick={addCase}
            className="bg-[#C9A24D] text-black font-semibold rounded-xl"
          >
            Add Case
          </button>
        </div>
      </div>

      {/* CASE LIST */}
      <div className="space-y-4">
        {cases.map((c) => (
          <div
            key={c.caseId}
            className="bg-zinc-900/70 p-5 rounded-2xl border border-white/10"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-sm text-gray-400">{c.caseId}</p>
                <h3 className="text-lg text-[#C9A24D]">{c.clientName}</h3>
                <p className="text-gray-300">{c.caseType}</p>
              </div>

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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
