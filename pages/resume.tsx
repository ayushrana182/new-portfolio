import React from 'react'
import Bar from '../components/Bar'
import { languages, tools } from '../data'
import { motion } from 'framer-motion'
import { fadeInOut, routeAnimation } from '../animations'

const resume = () => {

    return (
        <motion.div animate="animate" initial="initial" variants={routeAnimation} exit="exit" className="px-6 py-2">
            {/* education and experience */}

            <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={fadeInOut} initial="initial" animate="animate">
                    <h5 className='my-3 text-2xl font-bold'>Education</h5>
                    <div>
                        <h5 className='my-2 text-xl font-bold'>Bachelor In Information Management</h5>
                        <p className='font-semibold'>Tribhuvan University, Kathmandu (2015-2019)</p>
                        <p className='my-3'>I am an experienced web developer, amateur software developer, and technology enthusiast. I embrace learning and improving my craft. Programming is more than a job for me, it is a passion. I have personal projects that I like to indulge in during my free time. I am currently building my portfolio, as I am eager to get an entry-level position.</p>
                    </div>
                </motion.div>
                <motion.div variants={fadeInOut} initial="initial" animate="animate">
                    <h5 className='my-3 text-2xl font-bold'>Experience</h5>
                    <div>
                        <h5 className='my-2 text-xl font-bold'>Jr.Software Developer</h5>
                        <p className='font-semibold'>Dryhurst Corporation Remote (2020-Present)</p>
                        <p className='my-3'>I have worked as a Jr.Developer for Dryhurst Corporation (Illinois, Chicago) </p>
                    </div>
                </motion.div>
            </div>
            {/* Language and Tool */}
            <div className="grid gap-9 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2x1 font-bold"> Languages & Framework</h5>
                    <div className="my-2">
                        {
                            languages.map((language,) => {
                                return (
                                    <Bar data={language} key={language.name} />
                                )
                            }
                            )}
                    </div>
                </div>
           
            {/* Language and Tool */}
            <div>
                <h5 className="my-3 text-2x1 font-bold"> Tools & Softwares</h5>
                <div className="my-2">
                    {
                        tools.map((tool) => {
                            return (
                                <Bar data={tool} key={tool.name} />
                            )
                        }
                        )}
                </div>
            </div>
            </div>


        </motion.div>
    )
}

export default resume
