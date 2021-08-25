import { RiComputerLine } from "react-icons/ri";
import { IconType } from "react-icons";
import { IService } from "./type";

export const services: IService[] = [
  {
    icon: RiComputerLine,
    title: "Frontend Development",
    about: "I can build beautiful and scalable SPA's using React and other Javascript Libraries",
  },
  {
    icon: RiComputerLine,
    title: "Backend Development",
    about: "Well versed with handling database, server, API using Express & other popular frameworks",
  },

  {
    icon: RiComputerLine,
    title: "API Development",
    about: "I can develop robust REST API's using ExpressJS and Vanilla NodeJS ",
  },

  {
    icon: RiComputerLine,
    title: "Competitive Coder",
    about: "4 kyu rank on Codewars Kata",
  },
  {
    icon: RiComputerLine,
    title: "UI/UX Designer",
    about: "I can design stunning user interfaces and be a bridge between beautiful UI and Code",
  },
  {
    icon: RiComputerLine,
    title: "OpenSource Contributor",
    about: "I love working with the community and contributing in OpenSource Projects in my free time ",
  },
];
