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
  mongoDB,
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
  { title: "MongoDB", icon: mongoDB },
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
    title: "Full Stack Developer",
    company_name: "Owonto",
    icon: eduskill,
    iconBg: "#161329",
    date: "Sept 2023 - November 2024",
    points: [
      "Developed user interfaces with seamless front-end/back-end integration.",
      "Maintained RESTful APIs, enhancing application performance by 25%, and designed custom responsive websites, achieving a 100% client satisfaction rate.",
      "Deployed applications on (AWS/Azure/Google Cloud).",
      "Optimized website performance, improving page load speed.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "VA Creations",
    icon: mathwork,
    iconBg: "#161329",
    date: "Aug 2022 - Sept 2023",
    points: [
      "Developed and implemented user-friendly interfaces.",
      "Implemented A/B testing strategies to optimize UI/UX design.",
      "Implemented SEO best practices, resulting in improved search engine rankings for client websites.",
      "Integrated new features and improving existing workflows, aligning business goals.",
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
