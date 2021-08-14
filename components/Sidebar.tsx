import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai"
import { GoLocation } from "react-icons/go"
import { GiTie } from "react-icons/gi"

const Sidebar = () => {
    return (
        <div>
            <img src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/1646b4d48e4a4d641c292649e873dc39-1573446490241/d70e2e28-841c-48a3-92e6-e055662e10b8.jpg" alt="User Image" className="w-32 h-32 mx-auto rounded-full" />

            <h3 className="my-4 text=3xl font-medium tracking-wider"> <span> Ayush Dhoj  </span>Rana </h3>
            
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
            <a className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center" href="" download="name">
                <GiTie className="w-6 h-6" />
                Download Resume</a>

            {/* Social Icons */}
            <div className="flex justify-around my-5 text-green-500 w-9/12 md:w-full mx-auto"  >
                <a href="">
                    <AiFillGithub className="w-8 h-8 cursor-pointer"/>
                </a>

                <a href="">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
                </a>

            </div>

            <div className= "py-4 my-5 bg-gray-200" style={{marginLeft:"-1rem", marginRight: "-1rem"}}>
                <div className = "flex items-center justify-center space-x-2" >
                <GoLocation/>
                <span>Kathmandu, Nepal</span>
                </div>
                <p className="my-2">ayushrana182@gmail.com </p>
                <p className="my-2">+977 9861280178 </p>
            </div>
            <button className="bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded full py-2 px-5 text-white my-2">Reach Out</button>
            <button className="bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded full py-2 px-5 text-white my-2">Toggle Theme</button>

        </div>

    )
}

export default Sidebar
