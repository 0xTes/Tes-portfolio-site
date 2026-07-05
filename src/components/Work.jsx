import { motion } from "framer-motion";

import seventeeImage from "../assets/projects/seventee-hotel.png";
import economicalImage from "../assets/projects/economical-solutions.png";
import privateImage from "../assets/projects/private-project.png";

// Default blur strength (in px) applied to any project marked `private: true`
// that doesn't set its own `blurAmount`. This honors NDAs by obscuring
// specifics while keeping the image recognizable as real work, not hiding it
// entirely. Tweak this one number to change the blur site-wide, or set
// `blurAmount` on an individual project below to override just that image —
// so any future NDA project just needs `private: true` (and optionally its
// own `blurAmount`) to get the same treatment automatically.
const DEFAULT_NDA_BLUR_PX = 3;

const projects = [
  {
    title: "SEVENTEE Hotel Website",
    description:
      "Built a booking website with Google Form integration, replacing manual reservation logs.",
    image: seventeeImage,
  },
  {
    title: "Economical Solutions LLC",
    description:
      "Built and launched ecommerce infrastructure, integrated live chat, and managed inventory workflows.",
    image: economicalImage,
  },
  {
    title: "Private Digital Marketing & Branding Platform",
    description:
      "Confidential client project focused on conversion optimization and operational workflow improvements.",
    image: privateImage,
    private: true,
    // Uncomment to override the default blur just for this project:
    // blurAmount: 5,
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
          {projects.map((project, index) => {
            const blurPx = project.private
              ? project.blurAmount ?? DEFAULT_NDA_BLUR_PX
              : 0;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="group relative overflow-hidden rounded-[30px] min-h-[420px] shadow-xl"
              >
                {/* Background image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  // Inline style (not a Tailwind class) on purpose: the blur
                  // amount is a runtime number from data, and Tailwind's
                  // build-time scanner can't see dynamically-built class
                  // names like `blur-[${n}px]`, so a class here would
                  // silently produce no CSS at all. This also composes
                  // safely with the group-hover:scale-110 class above since
                  // filter and transform are separate CSS properties.
                  style={blurPx ? { filter: `blur(${blurPx}px)` } : undefined}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-500" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
                  {project.private && (
                    <span className="mb-4 w-fit rounded-full bg-white/20 px-4 py-2 text-xs font-semibold backdrop-blur-md">
                      Private Client Deployment
                    </span>
                  )}

                  <h3 className="text-xl md:text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-white/85 leading-relaxed">
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