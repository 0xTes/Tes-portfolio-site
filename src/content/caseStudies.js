import economicalImage from "../assets/projects/economical-solutions.webp";
import privateImage from "../assets/projects/private-project.webp";
import seventeeImage from "../assets/projects/seventee-hotel.webp";

// These records support fuller case studies as measured outcomes become
// publishable. Empty metrics deliberately avoid making unsupported claims.
export const caseStudies = [
  {
    name: "SEVENTEE Hotel Website",
    industry: "Hospitality",
    image: seventeeImage,
    challenge: "Reservations were being managed through a manual process.",
    solution: "A modern motel website with Google Form integration.",
    before: "A less direct reservation intake process.",
    after: "A clearer web-based reservation workflow.",
    results:
      "A smoother booking experience and reduced manual booking management.",
    metrics: [],
    description:
      "Designed and developed a modern motel website with Google Form integration, simplifying reservations, reducing manual booking management, and improving the overall guest experience.",
  },
  {
    name: "Economical Solutions LLC",
    industry: "E-commerce",
    image: economicalImage,
    challenge: "Customers and the operations team needed a smoother purchasing workflow.",
    solution: "Co-developed an e-commerce platform with inventory management and live chat support.",
    before: "A fragmented purchasing and inventory workflow.",
    after: "A unified platform for browsing, purchasing, inventory, and support.",
    results:
      "A smoother purchasing experience and a more efficient operational workflow.",
    metrics: [],
    description:
      "Co-developed an e-commerce platform with inventory management and live chat support, creating a smoother purchasing experience for customers and a more efficient operational workflow for the business.",
  },
  {
    name: "Private Digital Marketing & Branding Platform",
    industry: "Digital marketing & branding",
    image: privateImage,
    private: true,
    challenge: "Improve conversion performance while protecting confidential client information.",
    solution: "A private digital marketing and branding platform built around the client’s workflow.",
    before: "Confidential client workflow.",
    after: "A more streamlined private platform.",
    results:
      "Improved brand positioning and operational workflows while supporting long-term growth.",
    metrics: [],
    description:
      "Confidential client project focused on improving conversion performance, strengthening brand positioning, and streamlining operational workflows while supporting long-term business growth.",
  },
];
