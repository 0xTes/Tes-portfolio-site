import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-36 pb-20">
      <div className="section grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase tracking-[0.2em] text-sm text-teal-600 mb-6">
            Strategic Technology Consulting
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-slate-900">
            Building digital ecosystems that scale businesses.
          </h1>

          <p className="text-slate-500 text-lg mt-6 max-w-xl leading-relaxed">
            Bridget helps organizations modernize operations,
            improve efficiency, and unlock growth through smart
            technology adoption.
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
            <button className="px-7 py-4 rounded-full bg-teal-500 text-white font-medium shadow-lg">
              Let’s Talk
            </button>

            <button className="px-7 py-4 rounded-full border border-slate-300 bg-white">
              View Work
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px]"
        >
          <div className="glass-card rounded-[36px] absolute inset-0 transition duration-300 hover:-translate-y-2 hover:shadow-2xl" />

            {/* ADD THIS BLOCK HERE */}
  <div className="absolute inset-8 rounded-3xl bg-white/70 p-6">
    <div className="h-28 rounded-2xl bg-teal-100 mb-4" />

    <div className="grid grid-cols-2 gap-4">
      <div className="h-24 rounded-2xl bg-emerald-100" />
      <div className="h-24 rounded-2xl bg-slate-100" />
    </div>
  </div>

  {/* Existing floating card */}
        <div className="glass-card rounded-3xl p-6 absolute top-12 left-8 w-60 z-10 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="font-semibold">Digital Strategy</h3>
            <p className="text-sm text-slate-500 mt-2">
              Growth-focused transformation.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 absolute bottom-12 right-8 w-64 z-10 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="font-semibold">Systems Design</h3>
            <p className="text-sm text-slate-500 mt-2">
              Scalable architecture for teams.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;