import { motion } from "framer-motion";

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center pt-20 pb-32">
      <div className="section grid lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: copy ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase tracking-[0.2em] text-sm text-teal-600 mb-6">
            Digital Strategy • Development • Growth
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-slate-900">
            Helping businesses leverage smart digital solutions.
          </h1>

          <p className="text-slate-500 text-lg mt-6 max-w-xl leading-relaxed">
            Teslim helps organizations modernize operations, improve efficiency,
            and unlock growth through smart technology adoption.
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 rounded-full bg-teal-500 text-white font-semibold shadow-xl transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              Let's Talk
            </button>

            <button
              onClick={() => scrollTo("work")}
              className="px-8 py-4 rounded-full border border-slate-300 bg-white font-semibold transition duration-300 hover:scale-105 hover:shadow-xl hover:border-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
            >
              View Work
            </button>
          </div>
        </motion.div>

        {/* ── Right: floating image card ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-[420px] sm:h-[500px] items-center justify-center"
        >
          {/* Glow blobs – decorative, hidden from assistive tech */}
          <div
            aria-hidden="true"
            className="absolute h-72 w-72 rounded-full bg-teal-300/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute right-8 top-20 h-56 w-56 rounded-full bg-emerald-300/30 blur-3xl"
          />

          {/* Card */}
          <div className="glass-card relative z-10 w-full max-w-[380px] sm:max-w-[420px] rounded-[36px] p-6 shadow-2xl">
            <div className="overflow-hidden rounded-[28px] h-[320px] sm:h-[420px]">
              <img
                src="/hero-photo.jpg"
                alt="Project showcase"
                className="w-full h-full object-cover transition duration-700 hover:scale-110"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;