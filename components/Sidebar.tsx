import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <img src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/1646b4d48e4a4d641c292649e873dc39-1573446490241/d70e2e28-841c-48a3-92e6-e055662e10b8.jpg" alt="User Image" />
        
        <h3> <span> Ayush Dhoj  </span>Rana </h3>
        <p>Web Developer</p>
        <p>Download Resume</p>

        {/* Social Icons */}

        <div>
            <span>Kathmandu, Nepal</span>
            <p>ayushrana182@gmail.com </p>
            <p>+977 9861280178 </p>
        </div>
        <button>Reach Out</button>
        <button>Toggle Theme</button>

        </div>

    )
}

export default Sidebar
 