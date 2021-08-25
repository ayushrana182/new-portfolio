import React, { FunctionComponent, useEffect, useState } from 'react'
import Link from "next/link"
import { useRouter } from 'next/dist/client/router'


const NavItem: FunctionComponent<{
    activeItem:string,
    setActiveItem:Function,
    name:string,
    route:string,
}> = ({activeItem,setActiveItem, name, route}) =>{
    return(
        
            activeItem !== name ? (
                <Link href={route}>
                    <a>
                        <span className="hover:text-green" onClick={()=> setActiveItem(name)}>{name}</span>
                    </a>
                </Link>
            ): null
            
        
    )

    
            }

const Navbar = () => {
    const [activeItem, setactiveItem] = useState<string>("")
    
   const {pathname} = useRouter()
    
    useEffect(() => {
        if(pathname === "/") setactiveItem("About")
        if(pathname === "/projects") setactiveItem("Projects")
        if(pathname === "/resume") setactiveItem("Resume")

       
    }, [])
    
    return (
        <div className="flex justify-between px-5 py-3 my-3">
            <span className="text-xl font-bold border-b-4 text-green border-green md:text-2xl">{activeItem}</span>
            <div className="flex space-x-5 text-lg ">
             <NavItem activeItem={activeItem} setActiveItem={setactiveItem} name="About" route="/about" />
             <NavItem activeItem={activeItem} setActiveItem={setactiveItem} name="Resume" route="/resume" />
             <NavItem activeItem={activeItem} setActiveItem={setactiveItem} name="Projects" route="/projects" />

            </div>
            
        </div>
    )
}

export default Navbar
