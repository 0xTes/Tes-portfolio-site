import economicalImage from "../assets/projects/economical-solutions.webp";
import privateImage from "../assets/projects/private-project.webp";
import seventeeImage from "../assets/projects/seventee-hotel.webp";

export const caseStudies = [
  {
    name: "SEVENTEE Hotel Website",
    client: "SEVENTEE Hotel",
    industry: "Hospitality",
    serviceCategory: "Website and reservation workflow",
    image: seventeeImage,
    strategicGoal:
      "Make the reservation journey easier for guests and less manual for the hotel team.",
    communicationGoal:
      "A clear online path can improve the booking experience before a guest reaches out.",
    challenge: "Reservations were being managed through a manual process.",
    solution: "A modern motel website with Google Form integration.",
    before: "A less direct reservation intake process.",
    results:
      "A smoother booking experience and reduced manual booking management.",
    metrics: [],
    metricsNote: "Outcome metrics will be added when reporting is available.",
  },
  {
    name: "Economical Solutions LLC",
    client: "Economical Solutions LLC",
    industry: "E-commerce",
    serviceCategory: "E-commerce platform and operations",
    image: economicalImage,
    strategicGoal:
      "Connect the customer purchasing journey with the tools the operations team uses every day.",
    communicationGoal:
      "A unified platform can make buying, inventory, and support feel more coordinated.",
    challenge:
      "Customers and the operations team needed a smoother purchasing workflow.",
    solution:
      "Co-developed an e-commerce platform with inventory management and live chat support.",
    before: "A fragmented purchasing and inventory workflow.",
    results:
      "A smoother purchasing experience and a more efficient operational workflow.",
    metrics: [],
    metricsNote: "Outcome metrics will be added when reporting is available.",
  },
  {
    name: "Private Digital Marketing & Branding Platform",
    client: "Confidential client",
    industry: "Digital marketing and branding",
    serviceCategory: "Private growth platform",
    image: privateImage,
    private: true,
    strategicGoal:
      "Improve conversion support while protecting confidential client information.",
    communicationGoal:
      "A focused platform can strengthen positioning and remove friction from a private workflow.",
    challenge:
      "Improve conversion performance while protecting confidential client information.",
    solution:
      "A private digital marketing and branding platform built around the client workflow.",
    before: "A confidential client workflow with opportunities to streamline delivery.",
    results:
      "Improved brand positioning and operational workflows while supporting long-term growth.",
    metrics: [],
    metricsNote: "Client metrics remain confidential.",
  },
];
