import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  github,
  threejs,
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mern Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
 
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
 
  {
    name: "git",
    icon: git,
  },
  {
    name: "git",
    icon: github,
  },
 
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Taruna Infosoft",
    icon: web,
    iconBg: "#383E56",
    date: "July 2024 - November 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },



];

const testimonials = [
  {
    testimonial:
      "Master's Of Computer Application.",
    name: "NCRD'S Sterling Institute of Management Studies",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "Bachelor of Computer Science",
    name: "Mulund College of Commerce",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "HSC",
    name: "K.V Pendharkar College",
    designation: "",
    company: "",
    image: "",
  },
 
];

const projects = [
  {
    name: "Uber Like Ride App",
    description:
      "Developed a ride-booking application where users can book rides, and captains can accept them in real-time using Socket.IO for seamless communication. Integrated user and captain login functionality with secure OTP verification for ride confirmation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/atharva3149/ride-app",
  },
  {
    name: "Job Portal",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/atharva3149/jobportal",
  },
  {
    name: "Book Store Application",
    description:
      "Built a MERN stack application enabling users to log in and browse available books seamlessly. Implemented secure authentication and a user-friendly interface for exploring and managing book collections. Designed the backend to handle dynamic book data efficiently, ensuring smooth performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/atharva3149/bookstore",
  },
];

export { services, technologies, experiences, testimonials, projects };
