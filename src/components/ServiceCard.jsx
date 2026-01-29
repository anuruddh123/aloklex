import { motion } from "framer-motion";

export default function ServiceCard({ index, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ scale: 1.08, rotateX: 6, rotateY: 3, z: 50 }}
      className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl cursor-pointer group overflow-hidden"
    >
      {/* GOLD CIRCLE NUMBER */}
      <div className="absolute -top-6 left-6 w-14 h-14 rounded-full bg-[#C9A24D] flex items-center justify-center text-black font-bold text-lg shadow-lg">
        {index + 1}
      </div>

      {/* GLASS HOVER EFFECT */}
      <div className="absolute inset-0 rounded-3xl border border-[#C9A24D]/30 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

      {/* TITLE */}
      <h3 className="text-2xl font-bold text-[#C9A24D] mb-3">{title}</h3>

      {/* DESCRIPTION */}
      <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>

      {/* HOVER SHINE */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-tr from-[#C9A24D]/30 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition duration-700 pointer-events-none"></div>
    </motion.div>
  );
}
