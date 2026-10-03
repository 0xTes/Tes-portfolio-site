import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

import voltcoreMontage from "../assets/featured-work/voltcore-montage.webp";
import economicalMontage from "../assets/featured-work/economical-solutions-montage.webp";
import { caseStudies } from "../content/caseStudies";

const economicalCaseStudy = caseStudies.find(
  (caseStudy) => caseStudy.name === "Economical Solutions LLC",
);

const featuredProjects = [
  {
    id: "voltcore",
    name: "VoltCore",
    image: voltcoreMontage,
    width: 1448,
    height: 1086,
    alt: "VoltCore montage showing desktop and mobile views of the multilingual ecommerce interface.",
    capabilities: [
      "Website design",
      "Responsive frontend",
      "Multilingual UX",
      "Ecommerce",
    ],
  },
  {
    id: "economical-solutions",
    name: economicalCaseStudy.name,
    image: economicalMontage,
    width: 1600,
    height: 1200,
    alt: "Economical Solutions LLC montage showing desktop and mobile views of the ecommerce, resources, and account experience.",
    capabilities: [
      "Website redesign",
      "Responsive frontend",
      "Digital Product",
      "Ecommerce",
      "Digital Marketing",
    ],
  },
];

export default function FeaturedWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="featured-work"
      aria-labelledby="featured-work-heading"
      className="scroll-mt-24 py-24 md:py-32"
    >
      <div className="section min-w-0">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-teal-600">
            FEATURED WORK
          </p>
          <h2
            id="featured-work-heading"
            className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl"
          >
            Digital work built around real business needs.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            A selection of websites and digital systems designed to improve how
            businesses present, operate, and connect with customers.
          </p>
        </motion.div>

        <div className="mt-14 grid min-w-0 grid-cols-1 gap-8 xl:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              aria-labelledby={`${project.id}-featured-heading`}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : index * 0.12,
                ease: "easeOut",
              }}
              className="glass-card min-w-0 overflow-hidden rounded-[28px]"
            >
              <div className="overflow-hidden border-b border-slate-200/80 bg-white">
                <img
                  src={project.image}
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  onContextMenu={(event) => event.preventDefault()}
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="min-w-0 p-6 sm:p-8">
                <h3
                  id={`${project.id}-featured-heading`}
                  className="text-2xl font-semibold leading-tight text-slate-900 md:text-3xl"
                >
                  {project.name}
                </h3>
                <ul className="mt-4 flex min-w-0 flex-wrap gap-x-5 gap-y-2 text-[1.0625rem] leading-relaxed text-slate-600">
                  {project.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex min-w-0 items-baseline gap-2"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 shrink-0 self-center rounded-full bg-teal-600"
                      />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <Link to="/work" className="button-primary mt-10">
          View All Work
        </Link>
      </div>
    </section>
  );
}
