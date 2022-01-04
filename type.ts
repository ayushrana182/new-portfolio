import { IconType } from "react-icons/lib";

export interface IService{
    id:number,
    title:string,
    about:string,
    Icon:IconType
}

export interface ISkill {
    name: string
    Icon:IconType
    level:string
}

export interface IProject {
    id:number,
    name: string,
    description: string,
    image_path: string,
    deployed_url: string,
    github_url: string,
    category: Cateogry[],
    key_tech:string[],
}

export type Cateogry = "React" | "JavaScript" | "TypeScript" | "Web3" | "GraphQL" | "NodeJS";