import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "918810294632"; // Advocate ka number


const plans = [
  {
    title: "Free Legal Chat",
    price: "₹0",
    duration: "First 10 Minutes",
    highlight: true,
    features: [
      "Initial legal guidance",
      "Basic case understanding",
      "No commitment required",
    ],
  },
  {
    title: "Daily Consultation",
    price: "₹99",
    duration: "Per Day",
    features: [
      "Unlimited chat access (1 Day)",
      "Follow-up legal questions",
      "Priority response",
    ],
  },
  {
    title: "Weekly Legal Support",
    price: "₹499",
    duration: "1 Hour (7 Days)",
    features: [
      "1 hour total consultation",
      "Case strategy discussion",
      "Document & process guidance",
    ],
  },
  {
    title: "Professional Advisory",
    price: "₹999",
    duration: "2 Hours (Premium)",
    features: [
      "In-depth legal advisory",
      "Serious case evaluation",
      "High-priority handling",
    ],
  },
];

export default function Services() {
  return (
    <section className="relative py-32 bg-zinc-950 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#C9A24D]/10 via-black to-black -z-10" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-bold text-[#C9A24D] mb-6"
      >
        Consultation Plans
      </motion.h2>

      <p className="text-center text-gray-400 mb-20 max-w-2xl mx-auto">
        Start with a free legal discussion. Upgrade only when you feel confident
        and need deeper professional guidance.
      </p>

      {/* Plans */}
      <div className="grid md:grid-cols-4 gap-8 px-6 md:px-16 max-w-7xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -12, scale: 1.03 }}
            className={`relative rounded-3xl p-8 backdrop-blur-xl border transition-all duration-500
              ${
                plan.highlight
                  ? "border-[#C9A24D] bg-black/70 shadow-[0_0_40px_rgba(201,162,77,0.35)]"
                  : "border-white/10 bg-black/50 hover:border-[#C9A24D]/50"
              }`}
          >
            {/* Highlight Badge */}
            {plan.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9A24D] text-black text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
                FREE TRIAL
              </span>
            )}

            <h3 className="text-xl font-bold text-[#C9A24D] mb-2">
              {plan.title}
            </h3>

            <div className="my-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              <p className="text-sm text-gray-400">{plan.duration}</p>
            </div>

            <ul className="space-y-3 mt-6 text-sm text-gray-300">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">✔</span> {f}
                </li>
              ))}
            </ul>

          <button
  onClick={() =>
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Hello, I want to start a legal consultation.\n\nPlan: ${plan.title}\nPrice: ${plan.price}`
      )}`,
      "_blank"
    )
  }
  className={`mt-8 w-full py-3 rounded-xl font-semibold transition
    ${
      plan.highlight
        ? "bg-[#C9A24D] text-black hover:bg-[#e1b85c]"
        : "border border-[#C9A24D]/40 text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black"
    }`}
>
  Start Consultation
</button>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
