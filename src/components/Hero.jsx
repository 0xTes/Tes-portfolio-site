import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-20 pb-32">
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
            Teslim helps organizations modernize operations,
            improve efficiency, and unlock growth through smart
            technology adoption.
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
            <button className="
                      px-8 py-4 rounded-full
                      bg-teal-500 text-white font-semibold
                      shadow-xl
                      transition duration-300
                      hover:scale-105 hover:shadow-2xl
                    " 
                  >
              Let’s Talk
            </button>

            <button className="
                      px-8 py-4 rounded-full 
                      border border-slate-300 bg-white
                      font-semibold
                      transition duration-300
                      hover:scale-105 hover:shadow-xl
                    "
                  >
              View Work
            </button>
          </div>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{
    opacity: 1,
    y: [0, -8, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative flex h-[500px] items-center justify-center"
>
  {/* Glow blobs */}
  <div className="absolute h-72 w-72 rounded-full bg-teal-300/40 blur-3xl" />
  <div className="absolute right-8 top-20 h-56 w-56 rounded-full bg-emerald-300/30 blur-3xl" />

  {/* Main dashboard card */}
  <div className="glass-card relative z-10 w-full max-w-[420px] rounded-[36px] p-6 shadow-2xl">
    <div className="overflow-hidden rounded-[28px] h-[420px]">
  <img
    src="/hero-photo.jpg"
    alt="Bridget project showcase"
    className="w-full h-full object-cover transition duration-700 hover:scale-110"
  />
</div>
  </div>
</motion.div>

      </div>
    </section>
  );
}

export default Hero;