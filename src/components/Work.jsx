import { motion } from "framer-motion";

const projects = [
  {
    title: "Enterprise Workflow Automation",
    description:
      "Redesigned internal systems to reduce operational bottlenecks and improve team efficiency.",
  },
  {
    title: "Digital Growth Strategy",
    description:
      "Developed scalable technology roadmaps for business expansion and market positioning.",
  },
  {
    title: "Platform Architecture",
    description:
      "Built resilient system architecture for high-growth digital products.",
  },
];

function Work() {
  return (
    <section id="work" className="py-36">
      <div className="section">
        <p className="uppercase tracking-[0.2em] text-sm text-teal-600 mb-6">
          Selected Work
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold mb-14 text-slate-900">
          Solutions that deliver measurable results
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="glass-card rounded-[30px] p-8 min-h-[260px] flex flex-col justify-between transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <span className="mt-8 text-teal-600 font-medium">
                View Case Study →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;