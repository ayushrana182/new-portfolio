import { GetServerSidePropsContext, GetStaticProps } from "next"
import ServiceCard from "../components/ServiceCard"
import {services} from "../data"

const index = (props) => {
  return (
    <div className="flex flex-col px-6 pt-1 flex-grow">
      <h5 className="my-3 font-medium">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining
           essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h5>
    
    <div className="p-4 mt-5 bg-gray-400 dark:bg-dark-100"
    style={{marginLeft:"-1.5rem",marginRight:"-1.5rem"}}>
      <h6 className="my-3 text-xl font-bold tracking-wide">Services</h6>
      <div className="grid gap-6 lg:grid-cols-2 ">
        {services.map((service) => (
            <div key={service.id} className="lg:col-span-1 bg-gray-200 dark:bg-dark-200 rounded-lg">

              <ServiceCard service={service}/>
            </div>
        ))}
      </div>
    </div>
    </div>

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