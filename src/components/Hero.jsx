import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";




export default function Home() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      
      {/* BACKGROUND COURTROOM IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center sm:bg-center md:bg-[center_top]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80 md:bg-black/75" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-16
        py-20 sm:py-24
        grid grid-cols-1 md:grid-cols-2
        gap-10 md:gap-12
        items-center min-h-[100svh]">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-center md:text-left"
        >
          <p className="text-[11px] sm:text-sm tracking-widest text-[#C9A24D] mb-3">
            NYAYSATHI • DIGITAL LEGAL SUPPORT
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Justice Begins <br />
            <span className="text-[#C9A24D]">With the Right Counsel</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base max-w-xl mx-auto md:mx-0">
            Advocate Alok provides professional legal consultation, case
            guidance, and trusted legal solutions with transparency and
            integrity.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
           <button
  onClick={() => navigate("/consultation")}
  className="px-6 py-3 rounded-xl bg-[#C9A24D] text-black font-semibold hover:bg-[#e1b85c] transition"
>
  Book Free Consultation
</button>


            <button className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition">
              Ask a Legal Question
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
   
      </div>
    </section>
  );
}
