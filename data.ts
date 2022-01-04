import { RiComputerLine } from "react-icons/ri";
import { IconType } from "react-icons";
import { IProject, IService, ISkill } from "./type";
import {BsCircleFill, BsFileCodeFill} from "react-icons/bs";
import {BiGitRepoForked, BiNetworkChart} from "react-icons/bi";
import { AiFillApi, AiFillGithub, AiFillHtml5, AiOutlineApi } from "react-icons/ai";
import {CgUserlane} from "react-icons/cg";
import {FaAtlassian, FaCss3Alt, FaDev, FaFigma, FaLockOpen, FaNode, FaPython, FaReact, FaVuejs} from "react-icons/fa";
import {DiJavascript1, DiSass} from "react-icons/di";
import {SiAdobeillustrator, SiAdobephotoshop, SiNextdotjs, SiPostman, SiTailwindcss, SiTypescript} from "react-icons/si";
import {SiExpress} from "react-icons/si";
import { GiSolidLeaf } from "react-icons/gi";


export const services: IService[] = [
  {
    id:1,
    Icon: RiComputerLine,
    title: "Frontend Development",
    about: "I can build beautiful and scalable SPA's using React and other Javascript Libraries",
  },
  {
    id:2,
    Icon: BiNetworkChart,
    title: "Backend Development",
    about: "Well versed with handling database, server, API using Express & other popular frameworks",
  },

  {
    id:3,
    Icon: AiFillApi,
    title: "API Development",
    about: "I can develop robust REST API's using ExpressJS and Vanilla NodeJS ",
  },

  {
    id:4,
    Icon: BsFileCodeFill,
    title: "Competitive Coder",
    about: "Ranked 4 kyu on Codewars JavaScript Kata's",
  },
  {
    id:5,
    Icon: CgUserlane,
    title: "UI/UX Designer",
    about: "I can design stunning user interfaces and be a bridge between beautiful UI and Code",
  },
  {
    id:6,
    Icon: FaLockOpen,
    title: "OpenSource Contributor",
    about: "I love working with the community and contributing in OpenSource Projects in my free time ",
  },
];

export const languages: ISkill[] = [
  {
    Icon:DiJavascript1,
    name:"JavaScript",
    level:"100"
  },
  {
    Icon:SiTypescript,
    name:"TypeScript",
    level:"100"
  },
  {
    Icon:FaReact,
    name:"React",
    level:"100"
  },
  {
    Icon:FaNode,
    name:"NodeJS",
    level:"100"
  },  
  {
    Icon:SiExpress,
    name:"ExpressJS",
    level:"100"
  },
  {
    Icon:FaVuejs,
    name:"Vue",
    level:"100"
  },
  {
    Icon:GiSolidLeaf,
    name:"SolidJS",
    level:"100"
  },
  {
    Icon:AiFillHtml5,
    name:"HTML",
    level:"100"
  },
  {
    Icon:FaCss3Alt,
    name:"CSS",
    level:"100"
  },
  {
    Icon:DiSass,
    name:"SASS",
    level:"100"
  },
  {
    Icon:FaPython,
    name:"Python",
    level:"100"
  }
]

export const tools: ISkill[] = [
  {
    Icon:BiGitRepoForked,
    name:"Git",
    level:"100"
  },
  {
    Icon:AiFillGithub,
    name:"Github",
    level:"100"
  },
  {
    Icon:SiPostman,
    name:"Postman",
    level:"100"
  },
  {
    Icon:FaDev,
    name:"Dev Tools",
    level:"100"
  },  
  {
    Icon:FaAtlassian,
    name:"Atlassian",
    level:"100"
  },
  {
    Icon:SiAdobephotoshop,
    name:"Photoshop",
    level:"100"
  },
  {
    Icon:SiAdobeillustrator,
    name:"Illustrator",
    level:"100"
  },
  {
    Icon:FaFigma,
    name:"Figma",
    level:"100"
  },
  {
    Icon:AiOutlineApi,
    name:"REST API",
    level:"100"
  },
  {
    Icon:SiNextdotjs,
    name:"NextJS",
    level:"100"
  },
  {
    Icon:SiTailwindcss,
    name:"TailwindCSS",
    level:"100"
  }
]

export const projects: IProject[] = [
  {id:1,
    name: "JMusic",
    description:"A Blue Collar Coder community project around music and experimentation in user interface design.",
    image_path: "/images/jmusic.PNG",
    deployed_url: "https://jherr.github.io/jmusic/#/",
    github_url: "https://github.com/ayushrana182/jmusic",
    category: ["React", "JavaScript", "TypeScript"],
    key_tech:["React", "JavaScript", "Twin Macro", "TypeScript"],
  },
  {id:2,
    name: "Portfolio",
    description:"My portfolio website built using TypeScript NextJS.",
    image_path: "/images/portfolio.PNG",
    deployed_url: "https://jherr.github.io/jmusic/#/",
    github_url: "https://github.com/ayushrana182/new-portfolio",
    category: ["React",  "TypeScript"],
    key_tech:["React", "JavaScript",  "TypeScript", "NextJS", "TailwindCSS", "FramerMotion"],
  },
  {id:3,
    name: "Web3 React",
    description:"A web3 based blockchain explorer built using React and Web3.",
    image_path: "/images/metamask.PNG",
    deployed_url: "https://web3-react-qilgbfxus-ayushrana182.vercel.app/",
    github_url: "https://github.com/ayushrana182/web3-react",
    category: ["React", "JavaScript", "Web3"],
    key_tech:["React", "JavaScript", "Web3", "MetaMask", "Ethereum"],
  },
  {id:4,
    name: "Pokemon fowerReact TypeScript",
    description:"Pokemon Dashboard built using React, TypeScript and Fower(CSS in JS).",
    image_path: "/images/pokemon.PNG",
    deployed_url: "https://web3-react-qilgbfxus-ayushrana182.vercel.app/",
    github_url: "https://github.com/ayushrana182/web3-react",
    category: ["React", "JavaScript", "TypeScript"],
    key_tech:["React", "JavaScript","Fower", "TypeScript"],
  },
  {id:5,
    name: "Chat-o-matic",
    description:"Realtime Chat App | React, GraphQL & Websockets.",
    image_path: "/images/vanilla-node-rest.PNG",
    deployed_url: "https://web3-react-qilgbfxus-ayushrana182.vercel.app/",
    github_url: "https://github.com/ayushrana182/chat-o-matic",
    category: ["React", "JavaScript", "GraphQL"],
    key_tech:["React", "JavaScript","WebSockets", "GraphQL"],
  },
  {id:6,
    name: "Vanilla-NodeJS-REST-API",
    description:"In an actual project, I would most likely use Express or some other framework, but I wanted to do this for learning purpose so as to see a bit of what goes on under the hood.",
    image_path: "/images/vanilla-node-rest.PNG",
    deployed_url: "https://web3-react-qilgbfxus-ayushrana182.vercel.app/",
    github_url: "https://github.com/ayushrana182/Vanilla-Nodejs-REST-API",
    category: ["NodeJS", "JavaScript" ],
    key_tech:["NodeJS", "JavaScript"],
  },
  
  
]