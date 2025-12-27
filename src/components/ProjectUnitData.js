import ChefClaude from "../images/ChefClaude.png";
import Assembly from "../images/Assembly.png";
import Meme from "../images/Meme.png";
import SandK from "../images/SandK.png";
import Currenverter from "../images/Currenverter.png";

import htmlIcon from "../Icons/html5.svg";
import cssIcon from "../Icons/css3.svg";
import jsIcon from "../Icons/javascript.svg";
import reactIcon from "../Icons/reactjs.svg";

export default [
  {
    id: 1,
    title: "Strings & Keys",
    description:
      "online marketplace for musical instruments, connecting musicians to buy and sell easily. (UNFINISHED)",
    img: {
      src: SandK,
      alt: "Strings and Keys",
    },
    technologies: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
    ],

    github: "https://github.com/Mohammad-Shararah/Strings-And-Keys",
    date: "March - 2024",
  },
  {
    id: 2,
    title: "Currenverter",
    description:
      "A simple tool that converts values between different currencies using up-to-date exchange rates.",
    img: {
      src: Currenverter,
      alt: "Meme generator",
    },
    technologies: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
    ],

    github: "https://github.com/Mohammad-Shararah/JS-currency-converter",
    date: "October - 2024",
  },
  {
    id: 3,
    title: "Chef Claude",
    description:
      "AI-powered recipe generator that helps users make the most of the ingredients they already have at home.",
    img: {
      src: ChefClaude,
      alt: "Chef Claude Project",
    },
    technologies: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "React", icon: reactIcon },
    ],

    github: "some link",
    date: "July - 2025",
  },

  {
    id: 4,
    title: "Assembly: A puzzel game",
    description:
      "A fun word-guessing game where you piece letters together to find the hidden word.",
    img: {
      src: Assembly,
      alt: "Assembly: A puzzel game",
    },
    technologies: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "React", icon: reactIcon },
    ],

    github: "https://github.com/Mohammad-Shararah/REACT-word-guessing-game",
    date: "July - 2025",
  },
];
