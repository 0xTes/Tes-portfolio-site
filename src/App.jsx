import "./index.css";

const socialLinks = [
{
name: "GitHub",
shortName: "GH",
link: "https://github.com/bridgetthnkechi87-cloud",
},
{
name: "LinkedIn",
shortName: "in",
link: "https://www.linkedin.com/in/nkechi-ihuoma-bridget",
},
{
name: "X",
shortName: "𝕏",
link: "https://x.com/nkytech",
},
{
name: "Medium",
shortName: "M",
link: "https://medium.com/@bridgetthnkechi87",
},
{
name: "Hashnode",
shortName: "H",
link: "https://hashnode.com/@nkihuoma",
},
];

const featuredProjects = [
{
number: "PROJECT 01",
badge: "TEAM CAPSTONE",
title: "Spring PetClinic on AWS EKS",
description:
"A cloud-native microservices platform deployed on AWS using Terraform, Amazon EKS, Helm, Argo CD, GitHub Actions, Prometheus, and Grafana. I contributed as an Infrastructure Engineer, focusing on Terraform environments and environment configuration.",
tools: ["Terraform", "AWS EKS", "Helm", "Argo CD", "GitHub Actions"],
link: "https://github.com/bridgetthnkechi87-cloud/platform-petclinic",
button: "View My Platform Repository ↗",
},
{
number: "PROJECT 02",
title: "EpicBook Cloud Deployment",
description:
"Deployed a web application using Docker, Docker Compose, Nginx, Terraform, Ansible, Linux configuration, health checks, environment variables, and persistent storage.",
tools: ["Docker", "Nginx", "Terraform", "Ansible", "Linux"],
link: "https://github.com/bridgetthnkechi87-cloud/theepicbook",
button: "View My Project Repository ↗",
},
{
number: "PROJECT 03",
title: "Azure DevOps Website Deployment",
description:
"Built an Azure DevOps CI/CD pipeline to deploy a static finance website to an Azure virtual machine, using SSH and Nginx for automated delivery.",
tools: ["Azure DevOps", "CI/CD", "SSH", "Nginx"],
link: "https://github.com/bridgetthnkechi87-cloud/Mini-Finance-Azure-Devop-CI-CD-project",
button: "View Project Repository ↗",
},
{
number: "PROJECT 04",
title: "React App CI/CD Deployment",
description:
"Built a CI/CD workflow for a React application using Azure DevOps, Terraform, an Ubuntu virtual machine, and Nginx for deployment.",
tools: ["React", "CI/CD", "Terraform", "Azure"],
link: "https://github.com/bridgetthnkechi87-cloud/MY--AZURE-REACT-APP-TERRAFORM",
button: "View Project Repository ↗",
},
{
number: "PROJECT 05",
title: "Book Review AWS Infrastructure",
description:
"Designed a modular three-tier AWS infrastructure for a Book Review application using Terraform. The project provisions a VPC, security groups, public and internal load balancers, EC2 instances, and an RDS MySQL database.",
tools: ["Terraform", "AWS", "VPC", "EC2", "RDS MySQL", "ALB"],
link: "https://github.com/bridgetthnkechi87-cloud/BOOKREVIEW-AWS-TERRAFORM",
button: "View Project Repository ↗",
wide: true,
},
];

const moreProjects = [
{
title: "Ultimate Agentic DevOps with Claude Code",
description:
"An Agentic AI and DevOps workflow project focused on using Claude Code for infrastructure auditing, automation, security checks, and deployment validation.",
tools: ["Agentic AI", "Claude Code", "DevOps", "Automation"],
link: "https://github.com/bridgetthnkechi87-cloud/Ultimate-Agentic-DevOps-with-Claude-Code",
},
{
title: "Kubernetes for DevOps Engineers",
description:
"Hands-on Kubernetes practice covering deployments, services, probes, scaling, ingress, and container orchestration workflows.",
tools: ["Kubernetes", "Docker", "Containers", "DevOps"],
link: "https://github.com/bridgetthnkechi87-cloud/Kubernetes-For-DevOps-Engineers-with-projects",
},
{
title: "Terraform AWS VM",
description:
"Infrastructure-as-Code project for provisioning and configuring an AWS virtual machine environment using Terraform.",
tools: ["Terraform", "AWS", "EC2", "Infrastructure as Code"],
link: "https://github.com/bridgetthnkechi87-cloud/Terraform-aws-vm",
},
];

function ToolTag({ children }) {
return ( <span className="rounded-full bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-200">
{children} </span>
);
}

function SocialButton({ name, shortName, link }) {
return ( <a
   href={link}
   target="_blank"
   rel="noreferrer"
   aria-label={name}
   title={name}
   className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 font-extrabold text-slate-200 transition hover:border-red-500 hover:bg-red-600 hover:text-white"
 >
{shortName} </a>
);
}

function App() {
return ( <main className="min-h-screen bg-slate-50 text-slate-900"> <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur"> <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"> <a href="#home" className="text-2xl font-extrabold tracking-tight">
INB<span className="text-red-600">.</span> </a>

```
      <div className="hidden gap-6 text-sm font-semibold text-slate-600 md:flex">
        <a href="#home" className="transition hover:text-red-500">
          Home
        </a>
        <a href="#about" className="transition hover:text-red-500">
          About
        </a>
        <a href="#projects" className="transition hover:text-red-500">
          Projects
        </a>
        <a href="#certifications" className="transition hover:text-red-500">
          Certifications
        </a>
        <a href="#blog" className="transition hover:text-red-500">
          Blog
        </a>
        <a href="#contact" className="transition hover:text-red-500">
          Contact
        </a>
      </div>

      <a
        href="#contact"
        className="text-xl font-bold text-slate-700 md:hidden"
        aria-label="Go to contact section"
      >
        ⋯
      </a>
    </div>
  </nav>

  <section
    id="home"
    className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center"
  >
    <div>
      <p className="mb-6 inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
        ● Open to Remote Cloud & DevOps Opportunities
      </p>

      <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
        Ihuoma Nkechi <span className="text-red-600">Bridget.</span>
      </h1>

      <h2 className="mt-7 text-2xl font-bold text-slate-600 sm:text-3xl">
        AI Cloud & DevOps Engineer | Technical Support
        <br />
        AWS | Azure | Kubernetes | Terraform | CI/CD
      </h2>

      <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
        I build reliable cloud infrastructure and automated deployment
        workflows. From Dockerised applications to Terraform environments and
        Kubernetes deployments, I turn complex deployment processes into
        repeatable systems.
      </p>

      <div className="mt-9 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-xl bg-red-600 px-6 py-4 font-bold text-white shadow-lg shadow-red-200 transition hover:bg-red-700"
        >
          View My Projects →
        </a>

        <a
          href="#blog"
          className="rounded-xl bg-slate-900 px-6 py-4 font-bold text-white transition hover:bg-slate-700"
        >
          Read My Blog ↗
        </a>

        <a
          href="#contact"
          className="rounded-xl border border-slate-300 bg-white px-6 py-4 font-bold text-slate-700 transition hover:border-red-500 hover:text-red-500"
        >
          Contact Me
        </a>
      </div>

      <div className="mt-9 flex flex-wrap gap-3">
        {socialLinks.map((social) => (
          <SocialButton key={social.name} {...social} />
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-500">
        <span>◉ 17 GitHub Repositories</span>
        <span>◉ 2 Certifications</span>
        <span>◉ 12+ Blog Articles</span>
      </div>
    </div>

    <div className="space-y-5">
      <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
        <img
          src="/images/Ihuoma Nkechi.png"
          alt="Ihuoma Nkechi Bridget"
          className="h-[380px] w-full object-cover object-[center_15%] sm:h-[500px]"
        
        />

        <div className="bg-slate-950 px-8 py-7 text-white">
          <p className="text-sm font-bold uppercase tracking-widest text-red-400">
            Cloud. Automation. Reliability.
          </p>

          <h3 className="mt-3 text-3xl font-extrabold">
            Ihuoma Nkechi Bridget
          </h3>

          <p className="mt-2 text-base font-medium text-slate-300">
            AI Cloud & DevOps Engineer | Technical Support
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold">
              AWS
            </span>
            <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold">
              Azure
            </span>
            <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold">
              Kubernetes
            </span>
            <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold">
              Terraform
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-5">
        <div className="rounded-3xl bg-white px-4 py-8 text-center shadow-md ring-1 ring-slate-200">
          <p className="text-5xl font-extrabold text-red-600">8+</p>
          <p className="mt-3 text-xl font-bold leading-snug text-slate-700">
            Portfolio <br /> Projects
          </p>
        </div>

        <div className="rounded-3xl bg-white px-4 py-8 text-center shadow-md ring-1 ring-slate-200">
          <p className="text-5xl font-extrabold text-red-600">8</p>
          <p className="mt-3 text-xl font-bold leading-snug text-slate-700">
            Microservices <br /> Deployed
          </p>
        </div>

        <div className="rounded-3xl bg-white px-4 py-8 text-center shadow-md ring-1 ring-slate-200">
          <p className="text-5xl font-extrabold text-red-600">10+</p>
          <p className="mt-3 text-xl font-bold leading-snug text-slate-700">
            DevOps Tools <br /> Used
          </p>
        </div>

        <div className="rounded-3xl bg-white px-4 py-8 text-center shadow-md ring-1 ring-slate-200">
          <p className="text-5xl font-extrabold text-red-600">99.9%</p>
          <p className="mt-3 text-xl font-bold leading-snug text-slate-700">
            Reliability <br /> Focus
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="about" className="bg-slate-950 px-6 py-24 text-white">
    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
      <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-xl">
        <div className="flex items-center gap-5">
          <img
            src="/images/Ihuoma Nkechi.png"
            alt="Ihuoma Nkechi Bridget"
            className="h-20 w-20 rounded-2xl border border-red-500 object-cover object-center"
          />

          <div>
            <h3 className="text-2xl font-extrabold">
              Ihuoma Nkechi Bridget
            </h3>
            <p className="mt-1 text-slate-300">
              AI Cloud & DevOps Engineer
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-4 border-b border-slate-700 pb-8 text-slate-200">
          <p className="flex items-center gap-3">
            <span className="text-red-400">◉</span>
            Open to Remote Opportunities
          </p>

          <p className="flex items-center gap-3">
            <span className="text-red-400">◉</span>
            Open to Collaborations and Freelance Projects
          </p>

          <p className="flex items-center gap-3">
            <span className="text-red-400">◉</span>
            Cloud Infrastructure, Automation, and Technical Support
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-3xl font-extrabold text-red-400">17</p>
            <p className="mt-2 text-sm text-slate-400">Repositories</p>
          </div>

          <div>
            <p className="text-3xl font-extrabold text-red-400">2</p>
            <p className="mt-2 text-sm text-slate-400">Certificates</p>
          </div>

          <div>
            <p className="text-3xl font-extrabold text-red-400">12+</p>
            <p className="mt-2 text-sm text-slate-400">Articles</p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
          About Me
        </p>

        <h2 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
          Building reliable cloud systems with{" "}
          <span className="text-red-500">automation and purpose.</span>
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">
          <p>
            I’m a Cloud and DevOps Engineer passionate about building
            scalable, reliable, and automated solutions that help businesses
            innovate faster.
          </p>

          <p>
            With hands-on experience in cloud infrastructure, CI/CD
            pipelines, Infrastructure as Code, Kubernetes, and modern DevOps
            practices, I focus on creating efficient systems that improve
            software delivery and operational performance.
          </p>

          <p>
            I also use Agentic AI tools such as Claude Code to support
            automation, accelerate troubleshooting, streamline repetitive
            workflows, and improve deployment practices.
          </p>

          <p>
            Alongside my engineering background, my Technical Support
            experience has strengthened my problem-solving, communication,
            and customer-focused approach to technology.
          </p>
        </div>

        <a
          href="#contact"
          className="mt-8 inline-block font-bold text-red-400 transition hover:text-red-300"
        >
          Let’s work together →
        </a>
      </div>
    </div>
  </section>

  <section id="projects" className="bg-slate-950 px-6 py-24 text-white">
    <div className="mx-auto max-w-7xl">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
          Featured Projects
        </p>

        <h2 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
          Real deployment work, built one project at a time.
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          A collection of cloud infrastructure, CI/CD, automation,
          containerisation, and deployment projects that reflect my hands-on
          engineering journey.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <article
            key={project.number}
            className={`rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-red-500 ${
              project.wide ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm font-bold tracking-widest text-red-400">
                {project.number}
              </p>

              {project.badge && (
                <span className="rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs font-bold text-red-300">
                  {project.badge}
                </span>
              )}
            </div>

            <h3 className="mt-6 text-3xl font-extrabold">
              {project.title}
            </h3>

            <p className="mt-5 leading-8 text-slate-300">
              {project.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <ToolTag key={tool}>{tool}</ToolTag>
              ))}
            </div>

            <div className="mt-8 border-t border-slate-800 pt-6">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-red-400 transition hover:text-red-300"
              >
                {project.button}
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>

  <section className="bg-slate-950 px-6 pb-24 text-white">
    <div className="mx-auto max-w-7xl border-t border-slate-800 pt-16">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
            More Projects
          </p>

          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            More experiments, automation, and engineering practice.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            A selection of additional hands-on DevOps, Kubernetes,
            Infrastructure-as-Code, and Agentic AI projects from my GitHub.
          </p>
        </div>

        <a
          href="https://github.com/bridgetthnkechi87-cloud?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-slate-700 bg-white px-5 py-3 font-bold text-slate-950 transition hover:border-red-500 hover:bg-red-600 hover:text-white"
        >
          View All Repositories on GitHub ↗
        </a>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {moreProjects.map((project, index) => (
          <article
            key={project.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-red-500"
          >
            <p className="text-sm font-bold text-red-400">
              EXTRA PROJECT 0{index + 1}
            </p>

            <h3 className="mt-4 text-xl font-extrabold">{project.title}</h3>

            <p className="mt-4 leading-7 text-slate-300">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg bg-slate-800 px-3 py-1 text-sm text-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-block font-bold text-red-400 transition hover:text-red-300"
            >
              View Repository ↗
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>

  <section id="certifications" className="bg-white px-6 py-24">
    <div className="mx-auto max-w-7xl">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
          Certifications & Recognition
        </p>

        <h2 className="mt-5 text-4xl font-extrabold">
          Learning applied through hands-on cloud projects.
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Certifications and recognition that reflect my continued growth in
          cloud engineering, DevOps, security, automation, and practical
          infrastructure delivery.
        </p>
      </div>

      <div className="mt-12 grid gap-7 lg:grid-cols-2">
        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
          <img
            src="/certificates/dmi-devops-certificate.png"
            alt="DevOps Micro Internship Certificate"
            className="h-64 w-full object-cover object-top"
          />

          <div className="p-8">
            <p className="text-sm font-bold tracking-widest text-red-600">
              THE CLOUDADVISORY
            </p>

            <h3 className="mt-4 text-2xl font-extrabold">
              DevOps Micro-Internship with Agentic AI
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Completed hands-on DevOps training covering Linux, Git, CI/CD,
              AWS, Azure, Terraform, Ansible, Docker, Kubernetes, and
              Agentic AI concepts.
            </p>

            <a
              href="/certificates/dmi-devops-certificate.png"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block font-bold text-red-600 transition hover:text-red-800"
            >
              View Certificate ↗
            </a>
          </div>
        </article>

        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
          <img
            src="/certificates/digital-witch-devops-certificate.png"
            alt="Digital Witch DevOps and Cloud Security Certificate"
            className="h-64 w-full object-cover object-top"
          />

          <div className="p-8">
            <p className="text-sm font-bold tracking-widest text-red-600">
              DIGITAL WITCH SUPPORT COMMUNITY
            </p>

            <h3 className="mt-4 text-2xl font-extrabold">
              DevOps & Cloud Security Certification
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Completed Cloud Security and DevOps training covering Azure,
              AWS, Terraform, Kubernetes, Docker, CI/CD, cloud security,
              compliance awareness, and full-stack deployment practice.
            </p>

            <a
              href="/certificates/digital-witch-devops-certificate.png"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block font-bold text-red-600 transition hover:text-red-800"
            >
              View Certificate ↗
            </a>
          </div>
        </article>
      </div>

      <div className="mt-12 rounded-3xl border border-amber-200 bg-amber-50 p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <img
            src="/certificates/champion-of-the-week-dmi.jpeg"
            alt="Champion of the Week Award"
            className="w-full rounded-2xl border border-amber-200 object-cover shadow-sm"
          />

          <div>
            <p className="text-sm font-bold tracking-widest text-amber-700">
              RECOGNITION & AWARDS
            </p>

            <h3 className="mt-4 text-3xl font-extrabold text-slate-900">
              Champion of the Week — DevOps Micro Internship, Cohort 2
            </h3>

            <p className="mt-5 leading-8 text-slate-700">
              Awarded for successful completion of hands-on cloud projects,
              including a personal portfolio deployment on Amazon S3,
              EpicBook deployment on Ubuntu with MySQL RDS, a highly
              available AWS architecture using VPC, ALB, ASG, and Multi-AZ
              RDS, plus a three-tier Book Review application.
            </p>

            <a
              href="/certificates/champion-of-the-week-dmi.jpeg"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-block font-bold text-amber-700 transition hover:text-amber-900"
            >
              View Award ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="bg-slate-900 px-6 py-24 text-white">
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
          Curriculum Vitae
        </p>

        <h2 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
          Want the full picture? Download my CV.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          My CV includes my Cloud and DevOps experience, technical support
          background, selected projects, professional achievements,
          certifications, and technical skills.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-700 bg-slate-950 p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-red-400">
          PDF CV
        </p>

        <h3 className="mt-4 text-2xl font-extrabold">
          Ihuoma Nkechi Bridget
        </h3>

        <p className="mt-3 text-slate-300">
          Agentic AI, Cloud & DevOps Engineer | Technical Support
        </p>

        <a
          href="/documents/Ihuoma-Nkechi-Bridget-CV.pdf"
          download
          className="mt-7 inline-block rounded-xl bg-red-600 px-6 py-4 font-bold text-white transition hover:bg-red-700"
        >
          Download My CV ↗
        </a>
      </div>
    </div>
  </section>

  <section id="blog" className="bg-slate-900 px-6 py-24 text-white">
    <div className="mx-auto max-w-7xl">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
          Technical Writing
        </p>

        <h2 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
          Sharing what I build, learn, troubleshoot, and improve.
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          I document my learning journey through technical articles on
          DevOps, cloud infrastructure, Docker, Kubernetes, Terraform,
          CI/CD, observability, and deployment workflows.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-slate-700 bg-slate-950 p-8">
          <p className="text-sm font-bold tracking-widest text-red-400">
            MEDIUM
          </p>

          <h3 className="mt-5 text-3xl font-extrabold">
            Cloud, DevOps, and Infrastructure Articles
          </h3>

          <p className="mt-5 leading-8 text-slate-300">
            Read my technical articles covering CI/CD automation, Azure
            DevOps, Terraform, Docker deployments, AWS infrastructure,
            Kubernetes, and Agentic AI workflows.
          </p>

          <a
            href="https://medium.com/@bridgetthnkechi87"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-xl bg-red-600 px-6 py-4 font-bold text-white transition hover:bg-red-700"
          >
            Read on Medium ↗
          </a>
        </article>

        <article className="rounded-3xl border border-slate-700 bg-slate-950 p-8">
          <p className="text-sm font-bold tracking-widest text-red-400">
            HASHNODE
          </p>

          <h3 className="mt-5 text-3xl font-extrabold">
            Deployment Stories and Engineering Lessons
          </h3>

          <p className="mt-5 leading-8 text-slate-300">
            Explore my Hashnode articles where I share project walkthroughs,
            deployment lessons, microservices experience, and reflections
            from my hands-on DevOps journey.
          </p>

          <a
            href="https://hashnode.com/@nkihuoma"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-xl border border-slate-600 px-6 py-4 font-bold text-white transition hover:border-red-500 hover:bg-red-600"
          >
            Read on Hashnode ↗
          </a>
        </article>
      </div>
    </div>
  </section>

  <section id="skills" className="bg-slate-950 px-6 py-20 text-white">
    <div className="mx-auto max-w-7xl">
      <p className="text-sm font-bold uppercase tracking-widest text-red-400">
        Skills & Tools
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold">Cloud</h3>
          <p className="mt-3 text-slate-300">
            AWS, Azure, Cloud Infrastructure
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">Containers</h3>
          <p className="mt-3 text-slate-300">
            Docker, Docker Compose, Kubernetes, Helm
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">Automation</h3>
          <p className="mt-3 text-slate-300">
            GitHub Actions, Azure DevOps, Argo CD, Claude Code
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">Infrastructure</h3>
          <p className="mt-3 text-slate-300">
            Terraform, Ansible, Linux, Nginx
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" className="bg-slate-900 px-6 py-24 text-white">
    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
          Contact
        </p>

        <h2 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
          Let’s build something reliable.
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          I am open to remote Cloud, DevOps, and Technical Support
          opportunities, freelance projects, collaborations, and
          conversations about infrastructure automation.
        </p>

        <div className="mt-10 rounded-3xl border border-slate-700 bg-slate-800 p-7">
          <h3 className="text-2xl font-extrabold">Contact Information</h3>

          <div className="mt-7 flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-3xl text-red-400">
              ✉
            </div>

            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-400">Email</p>

              <a
                href="mailto:bridgetthnkechi87@gmail.com"
                className="mt-1 inline-block break-all text-xs font-bold text-white transition hover:text-red-400 sm:text-lg"
              >
                bridgetthnkechi87@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {socialLinks.map((social) => (
            <SocialButton key={social.name} {...social} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://www.upwork.com/freelancers/~01194bee4de2495d1f?mp_source=share"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-red-600 px-6 py-4 font-bold text-white transition hover:bg-red-700"
          >
            Hire Me on Upwork ↗
          </a>

          <a
            href="https://github.com/bridgetthnkechi87-cloud"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-600 px-6 py-4 font-bold text-white transition hover:border-red-500 hover:bg-red-600"
          >
            Visit My GitHub ↗
          </a>
        </div>
      </div>

      <form
        name="contact"
        method="POST"
        action="/?submitted=true"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="rounded-3xl border border-slate-700 bg-slate-800 p-7 sm:p-9"
      >
        <input type="hidden" name="form-name" value="contact" />

        <p className="hidden">
          <label>
            Do not fill this out:
            <input name="bot-field" />
          </label>
        </p>

        <h3 className="text-2xl font-extrabold">Send a Message</h3>

        <div className="mt-7 space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block font-semibold">
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-slate-600 bg-slate-950 px-5 py-4 text-white outline-none placeholder:text-slate-400 focus:border-red-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block font-semibold">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-600 bg-slate-950 px-5 py-4 text-white outline-none placeholder:text-slate-400 focus:border-red-500"
            />
          </div>

          <div>
            <label htmlFor="subject" className="mb-2 block font-semibold">
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="What’s this about?"
              className="w-full rounded-xl border border-slate-600 bg-slate-950 px-5 py-4 text-white outline-none placeholder:text-slate-400 focus:border-red-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block font-semibold">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows="6"
              placeholder="Tell me about your project or idea..."
              className="w-full resize-none rounded-xl border border-slate-600 bg-slate-950 px-5 py-4 text-white outline-none placeholder:text-slate-400 focus:border-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-red-600 px-6 py-4 text-lg font-bold text-white transition hover:bg-red-700"
          >
            Send Message →
          </button>
        </div>
      </form>
    </div>
  </section>
</main>


);
}

export default App;
