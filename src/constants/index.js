import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  express,
  mongodb,
  purchasekorea,
  threeD,
  chess,
  dice,
  claude,
  tracker,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "React", icon: reactjs },
  { title: "Node", icon: nodejs },
  { title: "Express", icon: express },
  { title: "MongoDB", icon: mongodb },
  
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Full-Stack Web Developer",
    company_name: "Owonto",
    icon: eduskill,
    iconBg: "#161329",
    date: "Aug 2022 - Present",
    points: [
      "Architected and optimized 12+ RESTful APIs in Node.js/Express, reducing response time by 25% for 10K+ daily requests.",
      "Built CI/CD pipelines on AWS (EC2, S3) and Azure, cutting deployment cycle time by 40% and eliminating manual release errors.",
      "Developed responsive front-ends in React and TypeScript, achieving 95+ Lighthouse score and 100% client sign-off.",
      "Reduced page load time by 35% via code-splitting, lazy loading, image optimization, and CDN caching.",
      "Integrated OpenAI API to add AI-assisted features (smart search suggestions, automated content tagging), improving user engagement by 18%.",
      "Delivered features 15% ahead of schedule collaborating cross-functionally in Agile/Scrum sprints.",
      "Engineered mobile-first UIs in React and TailwindCSS, improving mobile usability by 45% across 5 client projects.",
      "Ran A/B tests via Google Optimize, driving 22% conversion lift on key landing pages.",
      "Implemented SEO optimizations (structured data, meta tags, Core Web Vitals), boosting organic traffic by 35% in 3 months.",
      "Streamlined design-to-code handoff with UX team, reducing iteration cycles by 20%.",
    ],
  },
];

export const projects = [
  {
    name: "Purchase Korea",
    description:
      "Purchase Korea is an online storefront designed to help foreigners from around the world buy gifts for their loved ones in South Korea. ",
    tags: [
      { name: "Typescript", color: "blue-text-gradient" },
      { name: "Tailwind", color: "green-text-gradient" },
      { name: "Payload", color: "pink-text-gradient" },
      { name: "Stripe", color: "blue-text-gradient" },
    ],
    image: purchasekorea,
    source_code_link: "https://github.com/aastik7/hippokart",
  },
  {
    name: "3D Web Slider Page",
    description:
      "A visually dynamic and interactive online shopping experience designed with a mobile-first approach.",
    tags: [
      { name: "Swiper.js", color: "blue-text-gradient" },
      { name: "GSAP", color: "green-text-gradient" },
      { name: "Remix Icon", color: "pink-text-gradient" },
    ],
    image: threeD,
    source_code_link: "https://github.com/aastik7/3D-Web-Slider-Landing-Page",
  },
  {
    name: "Dice Game",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: dice,
    source_code_link:
      "https://github.com/aastik7/dice-game",
  },
  {
    name: "Chess Multiplayer Online",
    description:
      "A real-time, multiplayer Chess game! Challenge your friends or random opponents to a battle of wits on the virtual chessboard.",
    tags: [  { name: "Node.js", color: "green-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "Socket.IO", color: "pink-text-gradient" }, 
    ],
    image: chess,
    source_code_link: "https://github.com/aastik7/Chess",
  },
  {
    name: "Claude AI Signup",
    description:
      "A modern Next.js application that replicates the Claude AI interface and functionality.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Giest", color: "pink-text-gradient" },
    ],
    image: claude,
    source_code_link: "https://github.com/aastik7/claude-clone",
  },
  {
    name: "Real-Time Location Tracker",
    description:
      "A real-time location tracking application built with Express.js, Socket.IO, and Leaflet. Track and share locations instantly on an interactive map.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "Leaflet", color: "green-text-gradient" },
      { name: "Express.js", color: "pink-text-gradient" },
    ],
    image: tracker,
    source_code_link:
      "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
