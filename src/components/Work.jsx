import { motion } from "framer-motion";

const projects = [
  {
    title: "SEVENTEE Hotel Website",
    description:
      "A motel struggling with manual bookings and repeated loss of physical logbooks. Built a single-page website with an embedded Google Form for digital bookings.",
  },
  {
    title: "Economical Solutions LLC",
    description:
      "Helped build and launch an ecommerce website using Ecwid, integrated Tawk.to live chat, managed inventory, and coordinated stakeholders toward business goals.",
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
          Projects that solved real business problems
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="glass-card group rounded-[30px] p-8 min-h-[320px] flex flex-col justify-between transition duration-500 hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02]"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4 leading-snug">
                  {project.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <span className="mt-8 text-teal-600 font-medium transition duration-300 group-hover:translate-x-1">
                Project Summary →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;