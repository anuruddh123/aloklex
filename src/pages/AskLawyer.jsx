import { useState } from "react";
import { motion } from "framer-motion";

export default function AskLawyer() {
  const [q, setQ] = useState("");
  const [list, setList] = useState([]);

  const add = () => {
    if (!q) return;
    setList([...list, { q, a: "Pending reply from Advocate Alok" }]);
    setQ("");
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 py-16 max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#C9A24D] mb-6 text-center">
        Ask a Lawyer
      </h2>

      <textarea
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Write your legal question here..."
        className="w-full bg-zinc-900 p-4 rounded-xl border border-zinc-700"
      />

      <button
        onClick={add}
        className="mt-4 bg-[#C9A24D] text-black px-6 py-2 rounded-xl"
      >
        Submit Question
      </button>

      <div className="mt-10 space-y-4">
        {list.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900 p-5 rounded-xl"
          >
            <p className="font-semibold">Q: {item.q}</p>
            <p className="text-gray-400 mt-2">A: {item.a}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
