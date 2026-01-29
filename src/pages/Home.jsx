import Hero from "../components/Hero";
import { motion } from "framer-motion";

/* 🔥 COMMON ANIMATIONS */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const steps = [
  {
    title: "Free Consultation",
    desc: "Understand your legal position before taking any step.",
  },
 
  {
    title: "Strategic Guidance",
    desc: "Know what to do, what not to do, and when.",
  },
  {
    title: "Court Representation",
    desc: "Only when the situation truly demands it.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* ================= HOW TO CONNECT ================= */}
     <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="px-6 md:px-16 py-28 bg-black text-white"
    >
      {/* HEADING */}
      <motion.h2 variants={fadeUp} className="text-center mb-24">
        <span className="block text-sm tracking-[0.4em] text-[#C9A24D] mb-4">
          PROCESS
        </span>
        <span className="block text-4xl md:text-5xl font-semibold tracking-wide">
          How You Connect With Alok
        </span>
      </motion.h2>

      {/* FLOW */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-20">

        {steps.map((item, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center"
          >
            {/* CIRCLE */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.06 }}
              className="relative w-72 h-72 flex items-center justify-center shrink-0"
            >
              {/* Outer Gold */}
              <div className="absolute inset-0 rounded-full border-4 border-[#C9A24D]" />

              {/* Inner Dotted */}
              <div className="absolute inset-6 rounded-full border border-dashed border-white/60" />

              {/* Content */}
              <div className="relative z-10 text-center px-6">
                <h3 className="text-xl font-semibold text-[#C9A24D] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>

            {/* ARROW / HAMMER */}
            {i !== steps.length - 1 && (
              <motion.img
                src="https://pngimg.com/uploads/gavel/gavel_PNG37.png"
                alt="court hammer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="
                  w-14
                  mt-10 md:mt-0
                  md:ml-12
                  rotate-90 md:rotate-0
                "
              />
            )}
          </div>
        ))}

      </div>
    </motion.section>

      {/* ================= EDUCATION ================= */}
    <motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="px-6 md:px-16 py-32 bg-zinc-950 text-white"
>
  <div className="max-w-5xl mx-auto">

    {/* LABEL */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-sm tracking-[0.4em] text-[#C9A24D] mb-6 text-center"
    >
      CREDENTIALS
    </motion.p>

    {/* HEADING – GOLD */}
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="text-4xl md:text-5xl font-semibold text-center mb-16 text-[#C9A24D]"
    >
      Legal Education & Foundation
    </motion.h2>

    {/* CONTENT BLOCK */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="
        relative
        bg-black/40
        border border-white/10
        rounded-3xl
        p-10 md:p-16
        backdrop-blur-xl
      "
    >
      {/* LEFT ACCENT */}
      <span className="absolute left-0 top-10 bottom-10 w-[3px] bg-[#C9A24D]" />

      <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
        Advocate Alok completed his
        <span className="text-white font-medium"> formal legal education </span>
        from
        <span className="text-[#C9A24D] font-medium"> CSJM University</span>,
        developing a disciplined understanding of Indian legal systems,
        procedural law, case interpretation, and courtroom ethics.
      </p>

      {/* QUOTE */}
      <div className="mt-12 border-t border-white/10 pt-8">
        <p className="text-gray-400 italic text-base max-w-2xl">
          “Law is not about arguments.  
          It is about clarity before conflict.”
        </p>

        <p className="mt-4 text-[#C9A24D] tracking-wide">
          — Alok
        </p>
      </div>
    </motion.div>

  </div>
</motion.section>


      {/* ================= WORK PROCESS ================= */}
    <motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="relative px-6 md:px-16 py-32 bg-black text-white overflow-hidden"
>
  {/* BACKGROUND LINE (TIMELINE FEEL) */}
  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

  {/* HEADING */}
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center text-4xl md:text-5xl font-semibold text-[#C9A24D] mb-24"
  >
    How Cases Are Handled
  </motion.h2>

  {/* STEPS */}
  <div className="max-w-6xl mx-auto space-y-24">

    {[
      {
        title: "Understanding the Client",
        desc: "Every case begins by listening carefully, not by assuming facts.",
      },
      {
        title: "Legal Research & Strategy",
        desc: "Law is studied in detail before any action is taken.",
      },
      {
        title: "Transparent Legal Advice",
        desc: "Clear guidance is provided — risks included, not hidden.",
      },
      {
        title: "Focused Court Representation",
        desc: "Arguments are presented with preparation, restraint, and intent.",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className={`relative flex flex-col md:flex-row ${
          i % 2 === 0 ? "md:justify-start" : "md:justify-end"
        }`}
      >
        {/* CONTENT BOX */}
        <div className="md:w-[45%] bg-zinc-900/80 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
          <span className="text-[#C9A24D] text-sm tracking-widest block mb-4">
            STEP {i + 1}
          </span>

          <h3 className="text-2xl font-semibold mb-4">
            {item.title}
          </h3>

          <p className="text-gray-400 leading-relaxed">
            {item.desc}
          </p>
        </div>

        {/* CENTER DOT */}
        <span className="hidden md:block absolute left-1/2 top-10 -translate-x-1/2 w-4 h-4 rounded-full bg-[#C9A24D]" />
      </motion.div>
    ))}

  </div>
</motion.section>


      {/* ================= VALUES ================= */}
    <motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="relative px-6 md:px-16 py-36 bg-zinc-950 text-white overflow-hidden"
>
  {/* BACKGROUND WORD (VERY FAINT) */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.05 }}
    transition={{ delay: 0.6, duration: 1.2 }}
    className="absolute inset-0 flex items-center justify-center text-[12rem] md:text-[18rem] font-bold tracking-widest"
  >
    VALUES
  </motion.div>

  <div className="relative z-10 max-w-5xl mx-auto text-center">

    {/* LABEL */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-sm tracking-[0.4em] text-[#C9A24D] mb-6"
    >
      PRINCIPLES
    </motion.p>

    {/* HEADING */}
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="text-4xl md:text-5xl font-semibold text-[#C9A24D] mb-12"
    >
      Professional Values
    </motion.h2>

    {/* CONTENT */}
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto"
    >
      Legal practice is not driven by shortcuts or exaggeration.  
      It is built on trust, clarity, and responsibility.
      <br /><br />
      Every client interaction is approached with honesty,
      every case with discretion,
      and every legal decision with ethical accountability.
    </motion.p>

    {/* DIVIDER */}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ delay: 0.9, duration: 0.8 }}
      className="origin-center mx-auto my-16 h-px w-32 bg-[#C9A24D]"
    />

    {/* VALUES LIST */}
    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          title: "Transparency",
          desc: "Clear advice, realistic expectations, no hidden agendas.",
        },
        {
          title: "Confidentiality",
          desc: "Client information is treated with absolute discretion.",
        },
        {
          title: "Ethical Practice",
          desc: "Every action guided by law, not convenience.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 + i * 0.2 }}
          className="bg-black/40 border border-white/10 rounded-2xl p-8 backdrop-blur-xl"
        >
          <h3 className="text-xl font-semibold text-[#C9A24D] mb-4">
            {item.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

    </>
  );
}
