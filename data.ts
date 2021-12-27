import { RiComputerLine } from "react-icons/ri";
import { IconType } from "react-icons";
import { IProject, IService, ISkill } from "./type";
import {BsCircleFill} from "react-icons/bs";

export const services: IService[] = [
  {
    id:1,
    Icon: RiComputerLine,
    title: "Frontend Development",
    about: "I can build beautiful and scalable SPA's using React and other Javascript Libraries",
  },
  {
    id:2,
    Icon: RiComputerLine,
    title: "Backend Development",
    about: "Well versed with handling database, server, API using Express & other popular frameworks",
  },

  {
    id:3,
    Icon: RiComputerLine,
    title: "API Development",
    about: "I can develop robust REST API's using ExpressJS and Vanilla NodeJS ",
  },

  {
    id:4,
    Icon: RiComputerLine,
    title: "Competitive Coder",
    about: "Ranked 4 kyu on Codewars JavaScript Kata's",
  },
  {
    id:5,
    Icon: RiComputerLine,
    title: "UI/UX Designer",
    about: "I can design stunning user interfaces and be a bridge between beautiful UI and Code",
  },
  {
    id:6,
    Icon: RiComputerLine,
    title: "OpenSource Contributor",
    about: "I love working with the community and contributing in OpenSource Projects in my free time ",
  },
];

export const languages: ISkill[] = [
  {
    Icon:BsCircleFill,
    name:"JavaScript",
  },
  {
    Icon:BsCircleFill,
    name:"TypeScript",
  },
  {
    Icon:BsCircleFill,
    name:"React",
  },
  {
    Icon:BsCircleFill,
    name:"NodeJS",
  },  
  {
    Icon:BsCircleFill,
    name:"ExpressJS",
  },
  {
    Icon:BsCircleFill,
    name:"Vue",
  },
  {
    Icon:BsCircleFill,
    name:"SolidJS",
  },
  {
    Icon:BsCircleFill,
    name:"HTML",
  },
  {
    Icon:BsCircleFill,
    name:"CSS",
  },
  {
    Icon:BsCircleFill,
    name:"SASS",
  },
  {
    Icon:BsCircleFill,
    name:"Python"
  }
]

export const tools: ISkill[] = [
  {
    Icon:BsCircleFill,
    name:"Git",
  },
  {
    Icon:BsCircleFill,
    name:"Github",
  },
  {
    Icon:BsCircleFill,
    name:"Postman",
  },
  {
    Icon:BsCircleFill,
    name:"Dev Tools",
  },  
  {
    Icon:BsCircleFill,
    name:"Atlassian",
  },
  {
    Icon:BsCircleFill,
    name:"Photoshop",
  },
  {
    Icon:BsCircleFill,
    name:"Illustrator",
  },
  {
    Icon:BsCircleFill,
    name:"Figma",
  },
  {
    Icon:BsCircleFill,
    name:"REST API",
  },
  {
    Icon:BsCircleFill,
    name:"NextJS",
  },
  {
    Icon:BsCircleFill,
    name:"TailwindCSS",
  }
]

export const projects: IProject[] = [
  {
    name: "JMusic",
    description:"A Blue Collar Coder community project around music and experimentation in user interface design.",
    image_path: "/images/jmusic.PNG",
    deployed_url: "https://jherr.github.io/jmusic/#/",
    github_url: "https://github.com/ayushrana182/jmusic",
    category: ["React", "JavaScript", "TypeScript"],
    key_tech:["React", "JavaScript", "Twin Macro", "TypeScript"],
  },
  {
    name: "Portfolio",
    description:"My portfolio website built using TypeScript NextJS.",
    image_path: "/images/portfolio.PNG",
    deployed_url: "https://jherr.github.io/jmusic/#/",
    github_url: "https://github.com/ayushrana182/new-portfolio",
    category: ["React",  "TypeScript"],
    key_tech:["React", "JavaScript",  "TypeScript", "NextJS", "TailwindCSS", "FramerMotion"],
  },
  {
    name: "Web3 React",
    description:"A web3 based blockchain explorer built using React and Web3.",
    image_path: "/images/metamask.PNG",
    deployed_url: "https://web3-react-qilgbfxus-ayushrana182.vercel.app/",
    github_url: "https://github.com/ayushrana182/web3-react",
    category: ["React", "JavaScript", "Web3"],
    key_tech:["React", "JavaScript", "Web3", "MetaMask", "Ethereum"],
  },
  {
    name: "Pokemon fowerReact TypeScript",
    description:"Pokemon Dashboard built using React, TypeScript and Fower(CSS in JS).",
    image_path: "/images/pokemon.PNG",
    deployed_url: "https://web3-react-qilgbfxus-ayushrana182.vercel.app/",
    github_url: "https://github.com/ayushrana182/web3-react",
    category: ["React", "JavaScript", "TypeScript"],
    key_tech:["React", "JavaScript","Fower", "TypeScript"],
  },
  {
    name: "Chat-o-matic",
    description:"Realtime Chat App | React, GraphQL & Websockets.",
    image_path: "/images/vanilla-node-rest.PNG",
    deployed_url: "https://web3-react-qilgbfxus-ayushrana182.vercel.app/",
    github_url: "https://github.com/ayushrana182/chat-o-matic",
    category: ["React", "JavaScript", "GraphQL"],
    key_tech:["React", "JavaScript","WebSockets", "GraphQL"],
  },
  {
    name: "Vanilla-NodeJS-REST-API",
    description:"In an actual project, I would most likely use Express or some other framework, but I wanted to do this for learning purpose so as to see a bit of what goes on under the hood.",
    image_path: "/images/vanilla-node-rest.PNG",
    deployed_url: "https://web3-react-qilgbfxus-ayushrana182.vercel.app/",
    github_url: "https://github.com/ayushrana182/Vanilla-Nodejs-REST-API",
    category: ["NodeJS", "JavaScript" ],
    key_tech:["NodeJS", "JavaScript"],
  },
  
  
]