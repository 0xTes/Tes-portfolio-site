import { motion } from "framer-motion";

const services = [
  {
    title: "Digital Transformation",
    description:
      "Modernizing business operations through strategic technology adoption.",
  },
  {
    title: "Systems Architecture",
    description:
      "Designing scalable infrastructure and workflow systems.",
  },
  {
    title: "Strategic Advisory",
    description:
      "Helping leadership make informed technology decisions.",
  },
];

function Services() {
  return (
    <section id="services" className="py-36">
      <div className="section">
        <p className="uppercase tracking-[0.2em] text-sm text-teal-600 mb-6">
          Services
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold mb-14 text-slate-900">
          High-impact consulting services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card rounded-[28px] p-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-slate-900">
                {service.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;