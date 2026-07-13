import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-36">
      <div className="section grid items-center gap-20 lg:grid-cols-2">

        {/* Left: Section Heading */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-sm uppercase tracking-[0.2em] text-teal-600">
            About
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Building technology that works for your business—not the other way around.
          </h2>
        </motion.div>

        {/* Right: About Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-[32px] p-10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <p className="text-lg leading-relaxed text-slate-600">
            I believe technology should simplify operations, support growth,
            and create measurable value—not introduce unnecessary complexity.
            Every project begins with understanding your business, your goals,
            and the challenges standing in the way of sustainable growth.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            From strategy and planning to websites, intelligent systems, and
            automation, I build digital solutions that are reliable,
            maintainable, and designed to evolve alongside your business.
            My focus isn't just delivering a project—it's creating technology
            that continues to generate value long after launch.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;