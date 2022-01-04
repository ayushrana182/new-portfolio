import { motion } from 'framer-motion'
import React, { FunctionComponent } from 'react'
import { ISkill } from '../type'

const Bar: FunctionComponent<{
    data: ISkill
}> = ({ data: { Icon, name, level } }) => {
    const bar_width = `${level}%`;
    const variants = {
        initial: {
            width: 0
        },
        animate: {
            width:bar_width ,
            transition: {
                duration: 0.4,
                type:"spring",
                damping: 20,
                stiffness:100
            }

        }
    }

    return (
        <div className='my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300'>
            <motion.div variants={variants} initial="initial" animate="animate" className="flex items-center px-4 py-1 text-black rounded-full dark:text-white bg-gradient-to-r from-green to-blue-500" >
                <Icon className="mr-3" />
                {name}
            </motion.div>
        </div>
    )
}

export default Bar
