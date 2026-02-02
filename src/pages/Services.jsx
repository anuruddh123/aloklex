import { services } from "../data/services";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section className="relative w-full py-32 bg-black text-white overflow-hidden">
      {/* Background Courtroom */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10 opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f')",
        }}
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center text-4xl md:text-5xl font-bold text-[#C9A24D] mb-24 tracking-wide"
      >
        Client Journey With Alok
      </motion.h2>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#C9A24D]/40 rounded-full" />

        {services.map((service, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={service.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`relative w-full flex ${
                isLeft ? "justify-start md:pr-12" : "justify-end md:pl-12"
              } mb-20`}
            >
              {/* Card */}
              <div className="relative md:w-1/2 bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl group hover:scale-105 hover:rotate-1 transition-transform duration-500">
                {/* Golden Step Circle */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#C9A24D] flex items-center justify-center text-black font-bold text-lg shadow-lg z-10">
                  {i + 1}
                </div>

                <h3 className="text-xl font-bold text-[#C9A24D] mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.desc}</p>

                {/* Floating Icons */}
                <div className="absolute -top-6 -right-6 opacity-20 text-3xl animate-pulse pointer-events-none">
                  ⚖️
                </div>
                <div className="absolute -bottom-6 -left-6 opacity-20 text-2xl animate-pulse pointer-events-none">
                  📜
                </div>

                {/* Hover Shine */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#C9A24D]/20 to-transparent opacity-0 group-hover:opacity-70 transition duration-700 pointer-events-none"></div>
              </div>

              {/* Connector Dots */}
              <div
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-full bg-[#C9A24D]/10 rounded-full z-0`}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Fallback */}
      <div className="md:hidden flex flex-col gap-8 mt-16">
        {services.map((s, i) => (
          <div key={s.id} className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-[#C9A24D] flex items-center justify-center text-black font-bold text-lg mb-3">
              {i + 1}
            </div>
            <h3 className="text-xl font-bold text-[#C9A24D]">{s.title}</h3>
            <p className="text-gray-300 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}