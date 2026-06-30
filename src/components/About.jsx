import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-36">
      <div className="section grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase tracking-[0.2em] text-sm text-teal-600 mb-5">
            About
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
            Technology strategy that drives measurable business growth.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-[32px] p-8"
        >
          <p className="text-slate-600 text-lg leading-relaxed">
            Teslim partners with founders, teams, and enterprises to
            design digital systems that improve efficiency, unlock new
            opportunities, and create sustainable competitive advantage.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;