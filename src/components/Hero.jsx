import { motion } from "framer-motion";

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-gradient flex min-h-screen items-center pt-20 pb-32">
      <div className="section grid items-center gap-16 lg:grid-cols-2">

        {/* Left: Hero Copy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-teal-600">
            AI &amp; Automation • Systems • Websites
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-6xl lg:text-7xl">
            Helping businesses grow through strategic websites, intelligent systems, and digital transformation.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500">
            Teslim partners with businesses to design high-performing websites,
            streamline operations with intelligent systems, and implement
            technology that drives measurable growth.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-full bg-teal-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              Book a Strategy Call
            </button>

            <button
              onClick={() => scrollTo("work")}
              className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
            >
              View Work
            </button>
          </div>
        </motion.div>

        {/* Right: Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative flex h-[420px] items-center justify-center sm:h-[500px]"
        >
          <div
            aria-hidden="true"
            className="absolute h-72 w-72 rounded-full bg-teal-300/40 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute right-8 top-20 h-56 w-56 rounded-full bg-emerald-300/30 blur-3xl"
          />

          <div className="glass-card relative z-10 w-full max-w-[380px] rounded-[36px] p-6 shadow-2xl sm:max-w-[420px]">
            <div className="h-[320px] overflow-hidden rounded-[28px] sm:h-[420px]">
              <img
                src="/hero-photo.jpg"
                alt="Portrait of Teslim Yussuph"
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
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