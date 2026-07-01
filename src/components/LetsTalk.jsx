import { motion } from "framer-motion";

function LetsTalk() {
  return (
    <section id="contact" className="py-36">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[40px] p-8 md:p-20 text-center"
        >
          <div className="relative overflow-hidden rounded-[40px]">
  {/* Background wallpaper text */}
  <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
    <h2 className="text-[70px] md:text-[140px] font-bold text-slate-300/20 leading-none text-center">
      LET’S TALK
    </h2>
  </div>

  {/* Foreground content */}
  <div className="relative z-10">
    <p className="uppercase tracking-[0.2em] text-sm text-teal-600 mb-5">
      Available for new projects
    </p>

    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mb-12 leading-relaxed">
      Currently taking on freelance and consultancy work.
      Response time: within 24 hours.
    </p>

    <div className="grid md:grid-cols-2 gap-10 items-start">
      {/* Left */}
      <div>
        <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
          How It Works
        </h3>
      </div>

      {/* Right */}
      <div className="space-y-6">
        <div className="glass-card rounded-2xl p-5">
          <p className="text-sm text-teal-600 font-semibold mb-2">1</p>
          <p className="text-slate-700 leading-relaxed">
            Discovery call — 30 mins to understand your goals and challenges.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-5">
          <p className="text-sm text-teal-600 font-semibold mb-2">2</p>
          <p className="text-slate-700 leading-relaxed">
            Proposal — Clear scope, timeline, and fixed or retainer pricing.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-5">
          <p className="text-sm text-teal-600 font-semibold mb-2">3</p>
          <p className="text-slate-700 leading-relaxed">
            Delivery — Regular check-ins, transparent progress, no surprises.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-5">
          <p className="text-sm text-teal-600 font-semibold mb-2">4</p>
          <p className="text-slate-700 leading-relaxed">
            Handover — Full documentation and ongoing support if needed.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
        </motion.div>
      </div>
    </section>
  );
}

export default LetsTalk;