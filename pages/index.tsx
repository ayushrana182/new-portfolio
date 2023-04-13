import { motion } from "framer-motion";
import { GetServerSidePropsContext, GetStaticProps } from "next";
import { fadeInOut, routeAnimation, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const index = (props) => {
  return (
    <motion.div
      className="flex flex-col px-6 pt-1 flex-grow"
      variants={routeAnimation}
      initial="initial"
      exit="exit"
      animate="animate"
    >
      <h5 className="my-3 font-medium">
        As an experienced web developer and passionate technology enthusiast, I
        approach programming as more than just a job, but as a lifelong pursuit.
        With a deep love of learning and a commitment to constantly improving my
        craft, I bring a creative and analytical approach to every project I
        undertake. Currently working as a Software Engineer at Kotuko, I am
        always seeking out new challenges and opportunities to grow my skills.
        In my free time, I indulge in personal projects that allow me to explore
        new technologies and develop innovative solutions. Whether it is
        building dynamic websites, crafting elegant software solutions, or
        diving into the latest emerging technologies, I am dedicated to
        delivering high-quality work that meets and exceeds expectations. If you
        are looking for a skilled and passionate developer who brings
        creativity, curiosity, and a can-do attitude to every project, looking
        forward to connect!
      </h5>

      <div
        className="p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">Services</h6>
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid gap-6 lg:grid-cols-2 "
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInOut}
              key={service.id}
              className="lg:col-span-1 bg-gray-200 dark:bg-dark-200 rounded-lg"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
export default index;

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
