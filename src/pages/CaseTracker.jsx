import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const steps = ["Pending", "In Progress", "Completed"];
const statusColors = {
  Pending: "bg-red-600",
  "In Progress": "bg-yellow-400",
  Completed: "bg-green-500",
};

export default function CaseTracker() {
  const [id, setId] = useState("");
  const [cases, setCases] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("cases");
    if (saved) setCases(JSON.parse(saved));
  }, []);

  const handleTrack = () => {
    const found = cases.find(
      (c) => c.caseId.toLowerCase().trim() === id.toLowerCase().trim()
    );
    setResult(found || null);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-32 px-4">
      <h2 className="text-3xl text-[#C9A24D] font-bold mb-6 text-center">
        Track Your Case
      </h2>

      <div className="flex gap-3 w-full max-w-sm">
        <input
          placeholder="Enter Case ID"
          className="p-3 bg-zinc-900 border border-zinc-700 rounded-xl flex-1 placeholder-gray-400"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button
          onClick={handleTrack}
          className="px-5 rounded-xl bg-[#C9A24D] text-black font-semibold hover:bg-[#e1b85c] transition"
        >
          Track
        </button>
      </div>

      {result ? (
        <div className="mt-10 bg-zinc-900/70 p-6 rounded-2xl w-full max-w-md border border-white/10 shadow-xl">
          <p className="text-xs text-gray-400">{result.caseId}</p>
          <h3 className="text-[#C9A24D] text-lg font-semibold mt-1">
            {result.clientName}
          </h3>
          <p className="text-gray-300 text-sm mb-6">Case: {result.caseType}</p>

          {/* Timeline */}
          <div className="flex justify-between items-center">
            {steps.map((step) => {
              const isActive = step === result.status; // Sirf current status highlight
              return (
                <div key={step} className="flex-1 text-center">
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0.3 }}
                    animate={{
                      scale: isActive ? 1.2 : 0.8,
                      opacity: isActive ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.4 }}
                    className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                      isActive ? statusColors[step] : "bg-zinc-700"
                    }`}
                  ></motion.div>
                  <p
                    className={`text-xs mt-2 font-semibold ${
                      step === "Pending"
                        ? "text-red-400"
                        : step === "In Progress"
                        ? "text-yellow-300"
                        : "text-green-400"
                    }`}
                  >
                    {step}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        id && (
          <p className="mt-8 text-red-400 text-sm">
            No case found for this ID
          </p>
        )
      )}
    </div>
  );
}
