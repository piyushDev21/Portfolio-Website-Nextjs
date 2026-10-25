export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const contactEmail = "piyushsk2002@gmail.com";

export const resumePath = "/Piyush_Kumar_Resume.pdf";

export const gridItems = [
  {
    id: 1,
    title: "Shipping safety-critical aviation software at Airbus",
    description: "2+ years, end to end",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Based in Bengaluru, open to relocating across Europe",
    description: "English (fluent) · Hindi (native)",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Frontend to cloud",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Airbus Spot Award for shipping a POC two weeks early",
    description: "Recognition",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Building a Word-like editor for 10,000+ page documents",
    description: "What I'm working on",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Hiring for a full stack role? Let's talk.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const techStack = {
  left: ["React", "TypeScript", "Spring Boot", "Django"],
  right: ["Kafka", "AWS", "PostgreSQL"],
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Microservices",
    des: "Product, order and inventory services that deploy independently, secured with JWT and containerised with Docker. Orders are priced from the catalogue and reserve stock all-or-nothing.",
    img: "/project-ecommerce.svg",
    iconLists: ["/openjdk.svg", "/springboot.svg", "/docker.svg", "/postgresql.svg", "/mongodb.svg"],
    link: "https://github.com/piyushDev21/microservice-parent",
  },
  {
    id: 2,
    title: "AI Research Assistant",
    des: "Chrome extension that turns any web page into a summary, key points or related topics in one click. React side panel, Spring Boot API, Google Gemini.",
    img: "/project-research-assistant.svg",
    iconLists: ["/react.svg", "/ts.svg", "/springboot.svg", "/googlegemini.svg", "/googlechrome.svg"],
    link: "https://github.com/piyushDev21/AI-website-summarizer-backend",
  },
  {
    id: 3,
    title: "Portfolio Website",
    des: "This site: a responsive, animated portfolio built with Next.js, Tailwind CSS and Framer Motion, deployed on Netlify.",
    img: "/project-portfolio.svg",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/fm.svg"],
    link: "https://github.com/piyushDev21/Portfolio-Website-Nextjs",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Airbus India",
    period: "Aug 2024 – Present",
    desc: "Sole developer of a Word-like authoring platform for regulated aircraft safety documentation that handles 10,000+ page documents with track changes and multi-user collaboration. Builds full-stack features for a mission-critical flight-safety analytics platform in React, TypeScript and Django REST Framework.",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer Intern",
    company: "Airbus India",
    period: "Jan 2024 – Jul 2024",
    desc: "Built a document review platform that made aircraft manual reviews 5x faster and was later adopted for safety analysis. Secured its APIs with JWT and rate limiting on AWS API Gateway over a Spring Boot, PostgreSQL and Kafka backend, and cut frontend API calls by 50%.",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Airbus Spot Award",
    company: "Airbus India",
    period: "Q3 2026",
    desc: "Recognised for delivering the document editor proof of concept two weeks ahead of plan, which won stakeholder approval for full development.",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "B.Tech, Electrical Engineering",
    company: "Punjab Engineering College",
    period: "2020 – 2024",
    desc: "Chandigarh, India. Alongside the degree: 400+ data structures and algorithms problems solved on LeetCode.",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/piyushDev21",
    img: "/git.svg",
  },
  {
    id: 2,
    name: "LeetCode",
    link: "https://leetcode.com/u/piyush2108k/",
    img: "/LeetCode_logo.png",
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/piyush-kumar-7424b5210/",
    img: "/link.svg",
  },
];
