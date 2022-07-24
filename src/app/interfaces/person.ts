import { Experience } from "./experience"
import { Project } from "./project"
import { Skill } from "./skill"
import { Study } from "./study"

export interface Person {
    id:number
    banner:string
    avatar:string
    fullName:string
    contact:string
    title:string
    about:string
    domicile:string
    experiences:Experience[]
    studies:Study[]
    skills:Skill[]
    projects:Project[]
}
