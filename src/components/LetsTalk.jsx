import { motion } from "framer-motion";

function LetsTalk() {
  return (
    <section id="contact" className="py-36">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[40px] p-12 md:p-20 text-center"
        >
          <p className="uppercase tracking-[0.2em] text-sm text-teal-600 mb-5">
            Let’s Talk
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 leading-tight max-w-4xl mx-auto">
            Ready to transform your business with smarter technology?
          </h2>

          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
            Let’s discuss how strategic technology decisions can unlock
            growth, efficiency, and long-term value.
          </p>

          <button className="mt-10 rounded-full bg-teal-500 px-8 py-3 text-white font-medium shadow-lg">
            Schedule Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default LetsTalk;