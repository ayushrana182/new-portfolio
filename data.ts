import { RiComputerLine } from "react-icons/ri";
import { IconType } from "react-icons";
import { IService, ISkill } from "./type";
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