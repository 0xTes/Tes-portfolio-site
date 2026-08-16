import horizontalLogo from "../assets/branding/teslim-digital-horizontal.webp";
import PageShell from "../components/PageShell";
import Seo from "../components/Seo";
import { SUPPORT_EMAIL } from "../lib/site";

const privacySections = [
  {
    title: "1. Introduction",
    content: [
      { type: "paragraph", text: "Teslim Digital respects your privacy and is committed to protecting your personal information." },
      { type: "paragraph", text: "This Privacy Policy explains what information we collect, how we use it, and the choices available to you when using our website." },
    ],
  },
  {
    title: "2. Information We Collect",
    content: [
      { type: "paragraph", text: "Depending on how you interact with our website, we may collect:" },
      { type: "subheading", text: "Information You Provide" },
      { type: "list", items: ["Name", "Email address", "Company name", "Phone number (if provided)", "Information submitted through forms, inquiries, consultations, newsletters, or communications"] },
      { type: "subheading", text: "Automatically Collected Information" },
      { type: "paragraph", text: "When you visit our website, we may collect limited technical information such as:" },
      { type: "list", items: ["Browser type", "Device information", "IP address", "Referring website", "Pages visited", "Date and time of visits"] },
    ],
  },
  {
    title: "3. How We Use Information",
    content: [
      { type: "paragraph", text: "We use information to:" },
      { type: "list", items: ["Respond to inquiries", "Provide requested services", "Communicate about projects", "Improve website functionality", "Maintain security", "Send newsletters or updates where consent has been provided", "Comply with legal obligations"] },
    ],
  },
  {
    title: "4. Cookies",
    content: [
      { type: "paragraph", text: "We may use essential cookies necessary for the operation of this website." },
      { type: "paragraph", text: "At the time of publication, Teslim Digital does not intentionally use advertising cookies for behavioral advertising." },
      { type: "paragraph", text: "If analytics, advertising, personalization, or additional tracking technologies are introduced in the future, this Privacy Policy will be updated accordingly." },
    ],
  },
  {
    title: "5. Analytics",
    content: [
      { type: "paragraph", text: "Where analytics tools are implemented, they may collect aggregated information about website usage to help us improve performance, content, and user experience." },
      { type: "paragraph", text: "Analytics data is generally not used to personally identify visitors." },
    ],
  },
  {
    title: "6. Third-Party Services",
    content: [
      { type: "paragraph", text: "We may use trusted third-party service providers including:" },
      { type: "list", items: ["Website hosting providers", "Email service providers", "Scheduling tools", "CRM systems", "Analytics providers", "Payment processors", "Marketing and automation platforms"] },
      { type: "paragraph", text: "These providers process information in accordance with their own privacy policies." },
    ],
  },
  {
    title: "7. Data Retention",
    content: [
      { type: "paragraph", text: "We retain information only for as long as reasonably necessary to:" },
      { type: "list", items: ["Provide services", "Respond to inquiries", "Meet legal obligations", "Resolve disputes", "Maintain business records"] },
    ],
  },
  {
    title: "8. Security",
    content: [
      { type: "paragraph", text: "We use reasonable administrative, technical, and organizational measures to protect information." },
      { type: "paragraph", text: "However, no internet transmission or storage method can be guaranteed to be completely secure." },
    ],
  },
  {
    title: "9. Children's Privacy",
    content: [
      { type: "paragraph", text: "This website is intended for businesses and professional users." },
      { type: "paragraph", text: "We do not knowingly collect personal information from children under 13 years of age." },
      { type: "paragraph", text: "If we become aware that such information has been collected, we will take reasonable steps to remove it." },
    ],
  },
  {
    title: "10. International Data Transfers",
    content: [
      { type: "paragraph", text: "Depending on the location of our service providers, information may be processed in countries outside your jurisdiction." },
      { type: "paragraph", text: "Where applicable, we take reasonable steps to ensure appropriate safeguards are in place." },
    ],
  },
  {
    title: "11. Your Rights",
    content: [
      { type: "paragraph", text: "Depending on your location and applicable laws, you may have rights relating to:" },
      { type: "list", items: ["Access", "Correction", "Deletion", "Restriction of processing", "Objection to processing", "Data portability"] },
      { type: "paragraph", text: "Requests may be submitted using the contact information below." },
    ],
  },
  {
    title: "12. Changes to This Privacy Policy",
    content: [
      { type: "paragraph", text: "We may update this Privacy Policy periodically." },
      { type: "paragraph", text: "Changes become effective when published on this website unless otherwise stated." },
    ],
  },
  {
    title: "13. Contact",
    content: [
      { type: "paragraph", text: "If you have questions regarding this Privacy Policy, please contact:" },
      { type: "contact", items: ["Teslim Digital", `Email: ${SUPPORT_EMAIL}`] },
    ],
  },
];

const termsSections = [
  {
    title: "1. Introduction",
    content: [
      { type: "paragraph", text: "Welcome to Teslim Digital." },
      { type: "paragraph", text: "Teslim Digital is a creative and marketing services business that provides strategy, branding, website development, digital marketing, content, automation, consulting, and related professional services to businesses and organizations." },
      { type: "paragraph", text: "By accessing or using this website, you agree to be bound by these Terms & Conditions." },
      { type: "paragraph", text: "If you do not agree with these Terms, please do not use this website." },
    ],
  },
  {
    title: "2. Services",
    content: [
      { type: "paragraph", text: "The information on this website is provided for general informational and business development purposes." },
      { type: "paragraph", text: "Any specific service engagement, project scope, deliverables, pricing, timelines, and responsibilities will be defined separately through a proposal, agreement, statement of work, or written communication between Teslim Digital and the client." },
    ],
  },
  {
    title: "3. Project Scope",
    content: [
      { type: "paragraph", text: "Project requirements, deliverables, timelines, revisions, and responsibilities are determined on a case-by-case basis." },
      { type: "paragraph", text: "Any work outside an agreed project scope may require additional approval, fees, or revised timelines." },
    ],
  },
  {
    title: "4. Client Responsibilities",
    content: [
      { type: "paragraph", text: "Clients are responsible for:" },
      { type: "list", items: ["Providing accurate information and project requirements.", "Supplying necessary content, assets, approvals, and access credentials when required.", "Reviewing and approving deliverables within reasonable timeframes.", "Ensuring they have the necessary rights to any content, trademarks, images, or materials provided to Teslim Digital."] },
      { type: "paragraph", text: "Project delays resulting from missing information, approvals, or assets may affect delivery timelines." },
    ],
  },
  {
    title: "5. Payments",
    content: [
      { type: "paragraph", text: "Unless otherwise agreed in writing:" },
      { type: "list", items: ["Fees are quoted and invoiced according to the agreed project terms.", "Payment schedules may vary depending on the nature of the engagement.", "Late payments may result in delayed delivery, suspension of work, or additional charges where permitted by law."] },
      { type: "paragraph", text: "Specific pricing and payment terms are governed by individual client agreements." },
    ],
  },
  {
    title: "6. Intellectual Property",
    content: [
      { type: "paragraph", text: "Unless otherwise agreed in writing:" },
      { type: "list", items: ["Clients retain ownership of materials they provide.", "Teslim Digital retains ownership of its proprietary methods, templates, systems, frameworks, processes, and pre-existing intellectual property.", "Upon full payment of applicable fees, clients receive the rights expressly granted in the applicable agreement.", "Teslim Digital may reference completed work in portfolios, case studies, presentations, and marketing materials unless otherwise agreed in writing."] },
    ],
  },
  {
    title: "7. Revisions",
    content: [
      { type: "paragraph", text: "Reasonable revisions may be included where specified in a proposal or agreement." },
      { type: "paragraph", text: "Requests that substantially alter approved work, project direction, or scope may be treated as additional work." },
    ],
  },
  {
    title: "8. Third-Party Services",
    content: [
      { type: "paragraph", text: "Our services may involve third-party platforms, software, APIs, hosting providers, advertising platforms, analytics tools, payment processors, AI services, or other external services." },
      { type: "paragraph", text: "Teslim Digital is not responsible for:" },
      { type: "list", items: ["Third-party outages", "Policy changes", "Platform restrictions", "Account suspensions", "Service interruptions", "Performance or decisions made by third-party providers"] },
    ],
  },
  {
    title: "9. Confidentiality",
    content: [
      { type: "paragraph", text: "We respect confidential business information shared during projects." },
      { type: "paragraph", text: "Both parties agree to use reasonable efforts to protect confidential information and not disclose it except where required by law or necessary to perform agreed services." },
    ],
  },
  {
    title: "10. Disclaimer of Warranties",
    content: [
      { type: "paragraph", text: "This website and our services are provided on an \"as available\" and \"as is\" basis." },
      { type: "paragraph", text: "While we strive to provide professional and effective services, we do not guarantee:" },
      { type: "list", items: ["Revenue increases", "Lead generation results", "Search engine rankings", "Advertising performance", "Social media growth", "Business outcomes", "Specific commercial success"] },
      { type: "paragraph", text: "Our services are intended to improve websites, systems, branding, visibility, marketing effectiveness, and business operations, but individual results vary and cannot be guaranteed." },
    ],
  },
  {
    title: "11. Limitation of Liability",
    content: [
      { type: "paragraph", text: "To the fullest extent permitted by law, Teslim Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of this website or our services." },
      { type: "paragraph", text: "Our total liability relating to any claim shall not exceed the amount paid by the client for the specific services giving rise to the claim." },
    ],
  },
  {
    title: "12. Indemnification",
    content: [
      { type: "paragraph", text: "You agree to indemnify and hold harmless Teslim Digital from claims, damages, liabilities, costs, and expenses arising from:" },
      { type: "list", items: ["Materials supplied by you", "Your misuse of our services", "Your violation of applicable laws", "Your violation of these Terms"] },
    ],
  },
  {
    title: "13. Termination",
    content: [
      { type: "paragraph", text: "We reserve the right to suspend or terminate access to this website or services where necessary, including for misuse, non-payment, unlawful activity, or breach of these Terms." },
      { type: "paragraph", text: "Termination does not affect accrued rights or obligations." },
    ],
  },
  {
    title: "14. Changes to These Terms",
    content: [
      { type: "paragraph", text: "We may update these Terms from time to time." },
      { type: "paragraph", text: "Updated versions will be posted on this website and become effective upon publication unless stated otherwise." },
    ],
  },
  {
    title: "15. Contact Information",
    content: [
      { type: "paragraph", text: "Questions regarding these Terms may be directed to:" },
      { type: "contact", items: ["Teslim Digital", `Email: ${SUPPORT_EMAIL}`] },
    ],
  },
];

function LegalSection({ section }) {
  return (
    <section className="border-t border-slate-200/80 pt-8 first:border-t-0 first:pt-0">
      <h3 className="text-xl font-semibold leading-tight text-slate-900 md:text-2xl">
        {section.title}
      </h3>
      <div className="mt-4 space-y-4 text-[1.0625rem] leading-relaxed text-slate-600 md:text-lg">
        {section.content.map((item, index) => {
          if (item.type === "list") {
            return (
              <ul key={`${section.title}-list-${index}`} className="list-disc space-y-2 pl-6 marker:text-teal-600">
                {item.items.map((entry) => <li key={entry}>{entry}</li>)}
              </ul>
            );
          }

          if (item.type === "subheading") {
            return <h4 key={item.text} className="pt-2 text-base font-semibold text-slate-800 md:text-lg">{item.text}</h4>;
          }

          if (item.type === "contact") {
            return (
              <address key={`${section.title}-contact`} className="not-italic text-slate-700">
                {item.items.map((entry) => <p key={entry}>{entry}</p>)}
              </address>
            );
          }

          return <p key={`${item.text.slice(0, 30)}-${index}`}>{item.text}</p>;
        })}
      </div>
    </section>
  );
}

function LegalDocument({ title, sections }) {
  return (
    <section className="rounded-[32px] border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm sm:p-10 md:p-12">
      <header className="border-b border-slate-200 pb-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
        <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-teal-700">Effective Date: July 2026</p>
      </header>
      <div className="mt-8 space-y-9">
        {sections.map((section) => <LegalSection key={section.title} section={section} />)}
      </div>
    </section>
  );
}

export default function Legal() {
  return (
    <>
      <Seo
        title="Legal | Teslim Digital"
        description="Read the Teslim Digital Privacy Policy and Terms & Conditions."
        path="/legal"
      />
      <PageShell mainClassName="pt-0">
        <section className="border-b border-slate-800 bg-slate-950 px-6 py-16 text-white md:py-20">
          <div className="section">
            <img src={horizontalLogo} alt="Teslim Digital" className="w-60 max-w-full" />
            <p className="mt-12 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Legal</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">Privacy Policy &amp; Terms</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">Clear information about how Teslim Digital handles website information and the terms that govern use of this website.</p>
          </div>
        </section>

        <div className="section space-y-10 py-16 md:space-y-14 md:py-24">
          <LegalDocument title="Privacy Policy" sections={privacySections} />
          <LegalDocument title="Terms & Conditions" sections={termsSections} />
        </div>
      </PageShell>
    </>
  );
}
