import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import pythonicon from "../../assets/icons/python.png";
import expressicon from "../../assets/icons/expressicon.svg";
import bootstrapicon from "../../assets/icons/bootstrap.png";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import aihubMockup from "../../assets/img/aihub.webp";
import FisherSupermarket from "../../assets/img/FisherSupermarket.webp";
import mindfulpathMockup from "../../assets/img/mindfulpath.webp";
import profilepicture from "../img/me2.webp";
import psqlicon from "../../assets/icons/psql.png";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import obbycoaching from "../../assets/img/obcoaching2edited.webp"
import kidsinabox from "../../assets/img/2kids1boxedited.webp"
import fampic from "../../assets/img/fampic2edited.webp"
import obbyconference from "../../assets/img/obbyconferenceedited.webp"
// import Imprint from "../../components/Imprint";
// import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    en: "Hello! I'm Obby.",
  },
  subtitle: "Fullstack Developer ",
  description: {
    // en: `I'm Obby, a Fullstack Developer with a passion for Frontend Development and AI. I love building with new technologies and I'm constantly challenging myself with new projects. Let's build the future together!`,
    en: `I'm Obby, a Fullstack Developer with a passion for Frontend Development and AI. I love building with new technologies and I'm constantly challenging myself with new projects. The best way to grow is by building, so let's build!`,
  },
  buttons: [
    {
      name: "Contact",
      label: {
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Fisher Supermarket",
    description_EN:
      "An online shopping website that connects to our backend database and allows customers to purchase a variety of goods online. I aided in the component design, website architecture, and project management team, including connecting our inventory to JDA-MMS.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: figmaicon },
    ],
    image: FisherSupermarket,
    deploymenturl: "https://github.com/Obby1",
    githuburl: "https://github.com/Obby1",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Mindful Path",
    description_EN:
      "An AI empowered mentorship app. Features include voice activated AI interactions, custom AI models, and 3D modeling. I built this app across the stack to explore the possibilities of AI. Frontend is built with React, backend is built with NodeJS. JWT is used for IAM authentication.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "PostgreSQL", icon: psqlicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
// add other tech stacks used -> azure, google cloud, openAI, etc.
    ],
    image: mindfulpathMockup,
    deploymenturl: "https://mindfulpath.app/",
    githuburl:
      "https://github.com/Obby1",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "AI Hub",
    description_EN:
      "Built to explore possible use cases for AI, this website uses strictly vanilla javascript, html, and css to demonstrate my proficiency working with older technology stacks. I used Python and PSQL for the backend, along with JWT for IAM authentication.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "Python", icon: pythonicon },
      { name: "PSQL", icon: psqlicon },
    ],
    image: aihubMockup,
    deploymenturl: "https://ai-hub.herokuapp.com/",
    githuburl: "https://github.com/Obby1",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

// import obbycoaching from "../../assets/img/obcoaching2edited.webp"
// import kidsinabox from "../../assets/img/2kids1boxedited.webp"
// import fampic from "../../assets/img/fampic2edited.webp"
// import obbyconference from "../../assets/img/obbyconferenceedited.webp"
export const personalPictures = [
  {
    title: "What's the return policy at Amazon?",
    image: kidsinabox
  },
  {
    title: "Volunteering to teach kiddos BJJ",
    image: obbycoaching
  },
  {
    title: "Happy wife, happy life?",
    image: fampic
  },
  {
    title: "Speaking at a conference",
    image: obbyconference
  },
] as const;

export const liveTickerData = {
  content: {
    de: "Weitere Projekte auf Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "PostgreSQL",
        hash: "#PSQL",
        icon: psqlicon,
        color: "#449C45",
      },
      {
        title: "Bootstrap",
        hash: "#Bootstrap",
        icon: bootstrapicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Python",
        hash: "#Python",
        icon: pythonicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Projekte", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Über mich", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

// export const FooterLinks = [
//   { de: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
//   { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
// ] as const;

export const sideBarRightMail = {
  link: "mailto:obbydelrosario@gmail.com",
  text: "obbydelrosario@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/obby1/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/obby1",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:obbydelrosario@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    
    en: `"The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it."`,
    author: "Steve Jobs",
  },
  {
    en: `"The web is a canvas and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title_EN: "About me",
  description_EN: "A few code snippets about me",
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not attached to my computer, I spend all my free time with my beautiful wife and 2 boys. We love doing jiu jitsu, riding scooters, going to the beach, and watching anime. My family motivates me to do absolute best for them.",
      icon: hardwareicon,
    },
    {
      title: "Taking Things Slow",
      description:
        "Although I love the demanding environment of software engineering, I do my best to take things slow in my personal life. I enjoy meditating, cooking meals for my family, and long walks with my dog Harper. ",
      icon: caricon,
    },
    {
      title: "Success in All Things",
      description:
        "I believe that true happiness comes from full commitment to every aspect of our life. True success to me means giving every project, every person, and every moment in my life my full and undivided attention. ",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    en: "Contact",
  },
  description: {
    en: "Contact me on linked in or write me a message below.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        en: "Your Name",
      },
      type: "text",
      validation: {
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        en: "Your Subject",
      },
      type: "text",
      validation: {
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },    
  button: {
    value: {
      de: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
    en: "I agree that Obby may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
    en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    en: "🦄 Unfortunately I haven't implemented this. Please use e-mail like a normal human being.",
  },
  failedValidationName: {
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
