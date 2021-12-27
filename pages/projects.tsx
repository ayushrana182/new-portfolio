import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectNavbar from '../components/ProjectNavbar'
import { projects } from '../data'
import { Cateogry } from '../type'

const Projects = () => {

    const [project, setProject] = useState(projects)
    const [active, setActive] = useState("all")

    const handleFilter = (category: Cateogry | "all") => {
        if (category === "all") {
            setProject(projects)
            setActive(category)
            return
        } else {
          const newArray =  projects.filter((p) => p.category.includes(category))
          setProject(newArray)
          setActive(category)
          console.log(newArray)
        }
    }
    return (
        <div className='px-5 py-2 overflow-y-scroll' style={{height:"65vh"}}>
        <ProjectNavbar handleFilter = {handleFilter} active={active}/>
            <div className="relative grid grid-cols-12 gap-4 my-3">
                {project.map((project) => 
                    <div className='col-span-12 p-2 bg-gray-200 rounded-l sm:col-span-6 lg:col-span-4 dark:bg-dark-200' key={project.name}>
                        <ProjectCard project={project} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Projects
