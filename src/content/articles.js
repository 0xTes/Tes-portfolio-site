// Add an article by supplying this same shape. Content blocks keep the page
// independent from a particular publishing source or rich-text editor.
export const articles = [
  {
    slug: "find-and-fix-business-bottlenecks",
    title: "How to find the digital bottlenecks holding your business back",
    description:
      "A practical framework for spotting the website, workflow, and information gaps that quietly cost growing businesses time and revenue.",
    category: "Systems & Growth",
    publishedAt: "2026-07-25",
    readingTime: "8 min read",
    featuredImage: null,
    // Paste a TikTok post URL here when the companion video is published.
    tiktok: {
      url: "",
      title: "Companion TikTok video",
    },
    // A Substack embed URL can be added without changing the article template.
    substack: {
      embedUrl: "",
      title: "Read this post on Substack",
    },
    content: [
      {
        type: "paragraph",
        text: "Most growing businesses do not have a single dramatic technology problem. They have a collection of small frictions: a lead that lands in the wrong inbox, a customer who cannot find a clear next step, a team member who manually copies information between tools, or a website that looks credible but does not answer the questions buyers ask before they are ready to talk. Each one seems manageable on its own. Together, they slow decisions, create inconsistent experiences, and make growth feel harder than it should.",
      },
      {
        type: "paragraph",
        text: "The useful question is not, “What software should we buy?” It is, “Where does momentum stop?” That shift matters because a bottleneck is an outcome problem before it is a tools problem. A thoughtful audit reveals whether the best next move is to clarify an offer, improve a page, connect systems, automate a handoff, or simply remove a step that no longer needs to exist.",
      },
      {
        type: "heading",
        text: "Start with the customer journey, not the tool stack",
      },
      {
        type: "paragraph",
        text: "Map the path from first attention to a completed outcome. For a service business, that might be a social post, a website visit, an inquiry, a discovery call, a proposal, and onboarding. For a product-led business, it could be an ad, a product page, a purchase, an order update, and a support request. Write down what the person needs at each stage, what your business needs to know, and where that information currently lives.",
      },
      {
        type: "paragraph",
        text: "This does not need to be a complicated process map. A simple line of stages will often surface the issue. If prospective clients repeatedly ask the same question on calls, the website may not be setting expectations. If every sale requires someone to re-enter contact details, the handoff is fragile. If leads go quiet after downloading something useful, the follow-up system may be unclear. Good systems make the preferred action obvious for both the customer and the team.",
      },
      {
        type: "heading",
        text: "Look for friction with a measurable cost",
      },
      {
        type: "paragraph",
        text: "Not every inconvenience deserves an automation project. Prioritize the places where friction creates a real cost: lost or delayed revenue, repetitive manual work, avoidable mistakes, slow response times, poor visibility, or a customer experience that makes trust harder to build. The most valuable improvements usually sit at the intersection of frequency and consequence. A task done five times a day, with a high chance of error, is often more important than a rare task that merely feels annoying.",
      },
      {
        type: "list",
        items: [
          "Where does a customer wait longer than they should?",
          "Which process relies on someone remembering the next step?",
          "Where are people copying the same information more than once?",
          "Which page attracts attention but gives visitors no confident path forward?",
          "What information is needed for decisions but difficult to find?",
        ],
      },
      {
        type: "paragraph",
        text: "Those questions turn vague frustration into evidence. They also protect you from the common temptation to add a platform before the underlying process is understood. Automating a confusing process simply makes confusion happen faster. Before choosing software, agree on the trigger, owner, input, next action, and definition of done for the process you want to improve.",
      },
      {
        type: "heading",
        text: "Treat your website as part of operations",
      },
      {
        type: "paragraph",
        text: "A website is often treated as a marketing asset that sits apart from the business. In practice, it is one of the first systems your customers use. It should reduce uncertainty, show the right proof, guide qualified visitors to a next step, and collect the information your team needs to respond well. When it does not, your team ends up doing the explanatory work manually through emails, calls, and direct messages.",
      },
      {
        type: "paragraph",
        text: "Review your highest-intent pages with fresh eyes. Can a visitor quickly understand who you help, what changes after working with you, and what they should do next? Is the primary action visible without forcing someone to hunt for it? Do forms ask only for information that will actually be used? Is the page readable on a phone, with body copy that is easy to scan and buttons large enough to use? These are not cosmetic details. They influence whether attention turns into a useful conversation.",
      },
      {
        type: "heading",
        text: "Design the smallest useful system",
      },
      {
        type: "paragraph",
        text: "The best first solution is usually smaller than expected. A clear landing page, a structured intake form, and an automatic acknowledgement may be enough to replace an inbox-driven lead process. A shared source of truth can eliminate a spreadsheet chain. A lightweight automation can notify the right person when a condition is met. Start with the smallest change that reliably improves the outcome, then observe what the business needs next.",
      },
      {
        type: "paragraph",
        text: "Simplicity makes systems easier to maintain, easier to explain to a new team member, and safer to change as the business evolves. It also leaves room for judgment. The goal is not to remove people from every process; it is to remove the repetitive work that prevents people from focusing on customers, quality, and decisions that need a human perspective.",
      },
      {
        type: "heading",
        text: "Use AI where clarity already exists",
      },
      {
        type: "paragraph",
        text: "AI is useful when it works inside a clearly defined workflow. It can help summarize structured information, prepare a first draft, classify incoming requests, surface patterns, or turn a repeatable process into a faster starting point. It is less useful as a vague layer placed on top of disconnected tools and inconsistent data. If people cannot agree on the desired result, the relevant inputs, or who reviews the output, an AI tool will usually add uncertainty rather than remove it.",
      },
      {
        type: "paragraph",
        text: "A practical approach is to choose one high-frequency workflow with a clear owner, establish a baseline, test the improvement, and keep a human review step where it matters. Measure a small number of meaningful signals: response time, completion rate, hours saved, error rate, conversion rate, or customer satisfaction. That gives you a grounded way to decide whether to expand, refine, or stop.",
      },
      {
        type: "heading",
        text: "Turn the audit into an order of operations",
      },
      {
        type: "paragraph",
        text: "A bottleneck audit is only valuable if it produces a sensible sequence. Start with the issue closest to revenue or customer trust. Next, address the repetitive work that is consuming time every week. Finally, improve reporting and visibility so the team can see whether the changes are helping. This order creates momentum without asking the business to transform everything at once.",
      },
      {
        type: "paragraph",
        text: "Keep the result visible in a short, living list: the problem, the expected outcome, the owner, the first small action, and the signal that will show progress. Review it regularly. As the business changes, some bottlenecks disappear and others become more important. The purpose of a better website, a better system, or a useful AI workflow is not to look more sophisticated. It is to make the business easier to run and easier to choose.",
      },
    ],
    checklist: {
      title: "A quick bottleneck audit",
      introduction:
        "Use this checklist to find the next improvement worth making before you add another tool or redesign a process.",
      items: [
        "Name the journey stage where prospects, customers, or team members lose momentum.",
        "Write down the trigger, owner, input, next action, and definition of done.",
        "Estimate the cost in time, errors, missed opportunities, or delayed decisions.",
        "Choose the smallest change that would make the next step clearer or faster.",
        "Set one meaningful signal to review after the change is live.",
      ],
    },
    cta: {
      title: "Want a clearer path forward?",
      text: "Book a discovery call to talk through the bottlenecks in your website, workflows, or customer journey and identify a practical first step.",
      label: "Book a discovery call",
    },
  },
];

export function findArticle(slug) {
  return articles.find((article) => article.slug === slug) || articles[0];
}
