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
}