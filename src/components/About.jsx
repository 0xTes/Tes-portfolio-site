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
             Helping businesses scale with smart technologies.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-[32px] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <p className="text-slate-600 text-lg leading-relaxed">
            I help small and medium businesses scale and leverage smart
            technologies. Whether you need a single-page website, want to
            win more business, showcase your services, or launch an online
            store, I can help. My background includes working with diverse
            companies and managing projects with a detail-oriented approach.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;