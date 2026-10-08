import economicalImage from "../assets/featured-work/economical-solutions-montage.webp";
import privateImage from "../assets/projects/private-project.webp";
import seventeeImage from "../assets/projects/seventee-hotel.webp";
import voltcoreImage from "../assets/featured-work/voltcore-montage.webp";

export const caseStudies = [
  {
    name: "VoltCore",
    client: "VoltCore",
    industry: "Electrical supplies / E-commerce",
    serviceCategory:
      "Website design, responsive frontend, multilingual UX and e-commerce",
    image: voltcoreImage,
    imagePresentation: "contain",
    strategicGoal:
      "Create a credible, responsive storefront experience for electrical product discovery while supporting multilingual browsing across desktop and mobile.",
    communicationGoal:
      "Make the catalog, pricing, product information, cart experience and account entry points clear and consistent across supported languages and screen sizes.",
    challenge:
      "The storefront needed a stronger, more consistent customer experience across navigation, product discovery, cart interactions, responsive layouts and multilingual presentation.",
    solution:
      "A responsive electrical e-commerce frontend with structured product discovery, catalog search and filtering, persistent cart behavior, and English, Arabic and Urdu interface support with appropriate RTL/LTR presentation.",
    before:
      "A storefront experience that needed greater consistency across product discovery, responsive behavior, cart interactions and language switching.",
    results:
      "A more cohesive storefront experience with responsive product discovery, persistent cart interactions and multilingual navigation across desktop and mobile.",
    metrics: [],
    metricsNote: "Commercial outcome metrics are not claimed for this project.",
  },
  {
    name: "Economical Solutions LLC",
    client: "Economical Solutions LLC",
    industry: "E-commerce",
    serviceCategory: "E-commerce platform and operations",
    image: economicalImage,
    imagePresentation: "contain",
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
