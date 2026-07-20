import { motion, useReducedMotion } from "framer-motion";

import seventeeImage from "../assets/projects/seventee-hotel.webp";
import economicalImage from "../assets/projects/economical-solutions.webp";
import privateImage from "../assets/projects/private-project.webp";

// Default blur strength (in px) applied to any project marked `private: true`.
// Individual projects can still override this with `blurAmount`.
const DEFAULT_NDA_BLUR_PX = 5;

const projects = [
  {
    title: "SEVENTEE Hotel Website",
    description:
      "Designed and developed a modern motel website with Google Form integration, simplifying reservations, reducing manual booking management, and improving the overall guest experience.",
    image: seventeeImage,
  },
  {
    title: "Economical Solutions LLC",
    description:
      "Co-developed an e-commerce platform with inventory management and live chat support, creating a smoother purchasing experience for customers and a more efficient operational workflow for the business.",
    image: economicalImage,
  },
  {
    title: "Private Digital Marketing & Branding Platform",
    description:
      "Confidential client project focused on improving conversion performance, strengthening brand positioning, and streamlining operational workflows while supporting long-term business growth.",
    image: privateImage,
    private: true,
    // Uncomment to override the default blur just for this project:
    // blurAmount: 7,
  },
];

function Work() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      className="py-36"
      aria-labelledby="work-heading"
    >
      <div className="section min-w-0">
        <p className="mb-6 text-sm uppercase tracking-[0.2em] text-teal-600">
          Selected Work
        </p>

        <h2
          id="work-heading"
          className="mb-6 min-w-0 max-w-3xl break-words text-4xl font-semibold text-slate-900 md:text-5xl"
        >
          Projects that solved real business problems
        </h2>

        <p className="min-w-0 max-w-3xl break-words text-lg leading-relaxed text-slate-600">
          Every project represents a unique business challenge. My focus isn't
          simply delivering websites or systems, but building practical digital
          solutions that improve operations, strengthen brands, and create
          long-term value for the businesses I work with.
        </p>

        <div className="mt-14 grid min-w-0 gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {projects.map((project, index) => {
            const blurPx = project.private
              ? project.blurAmount ?? DEFAULT_NDA_BLUR_PX
              : 0;

            return (
              <motion.div
                key={project.title}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: 35 }
                }
                whileInView={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 1, y: 0 }
                }
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="group relative min-w-0 min-h-[420px] overflow-hidden rounded-[30px] shadow-xl focus-within:ring-2 focus-within:ring-teal-500"
              >
                {/* Background image */}
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  style={blurPx ? { filter: `blur(${blurPx}px)` } : undefined}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 transition duration-500 group-hover:bg-black/60" />

                {/* Content */}
                <div className="relative z-10 flex h-full min-w-0 flex-col justify-end p-10 text-white">
                  {project.private && (
                    <span className="mb-4 w-fit max-w-full break-words rounded-full bg-white/20 px-4 py-2 text-xs font-semibold backdrop-blur-md">
                      Private Client Deployment
                    </span>
                  )}

                  <h3 className="mb-3 min-w-0 break-words text-xl font-semibold transition-colors duration-300 group-hover:text-teal-200 md:text-2xl">
                    {project.title}
                  </h3>

                  <p className="min-w-0 break-words leading-relaxed text-white/85">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Work;
