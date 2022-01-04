import { motion } from "framer-motion"
import { GetServerSidePropsContext, GetStaticProps } from "next"
import { fadeInOut, routeAnimation, stagger } from "../animations"
import ServiceCard from "../components/ServiceCard"
import {services} from "../data"

const index = (props) => {
  return (
    <motion.div className="flex flex-col px-6 pt-1 flex-grow" variants={routeAnimation} initial="initial"  exit="exit" animate="animate">
      <h5 className="my-3 font-medium">
      I am an experienced web developer, amateur software developer, and technology enthusiast. I embrace learning and improving my craft. Programming is more than a job for me, it is a passion. I have personal projects that I like to indulge in during my free time. I am currently building my portfolio, as I am eager to get an entry-level position.</h5>
    
    <div className="p-4 mt-5 bg-gray-400 dark:bg-dark-100"
    style={{marginLeft:"-1.5rem",marginRight:"-1.5rem"}}>
      <h6 className="my-3 text-xl font-bold tracking-wide">Services</h6>
      <motion.div variants={stagger} initial="initial" animate="animate" className="grid gap-6 lg:grid-cols-2 ">
        {services.map((service) => (
            <motion.div
            variants={fadeInOut}
    
            key={service.id} className="lg:col-span-1 bg-gray-200 dark:bg-dark-200 rounded-lg">

              <ServiceCard service={service}/>
            </motion.div>
        ))}
      </motion.div>
    </div>
    </motion.div>

  )
}
export default index

// export const getServerSideProps = async (context:GetServerSidePropsContext) =>{
//   const res= await fetch("http://localhost:3000/api/services")
//   const data = await res.json()
//   // console.log("SERVER", services);
  
//   return{
//     props:{
//       services: data.services,
//     }
//   }
// } 

// export const getStaticProps = async (context:GetStaticProps) =>{
//   const res= await fetch("http://localhost:3000/api/services")
//   const data = await res.json()
//   // console.log("SERVER", services);
  
//   return{
//     props:{
//       services: data.services,
//     }
//   }
// } 