import React, { FunctionComponent, useState } from "react";
import { AiFillCloseCircle, AiFillGithub, AiFillProject } from "react-icons/ai";
import { IProject } from "../type";
import Image from "next/image"
import { motion } from "framer-motion";
import { fadeInOut, stagger } from "../animations";

const ProjectCard: FunctionComponent<{
    project: IProject;
    showDetail: number | null;
    setShowDetail: (id: number) => void;
}> = ({
    project: {
        category,
        deployed_url,
        description,
        github_url,
        image_path,
        key_tech,
        name,
        id
    },
    showDetail,
    setShowDetail
}) => {

        return (
            <div>

                <Image src={image_path} alt={name} className="cursor-pointer" onClick={() => setShowDetail(id)} width="300" height="150" layout="responsive" />
                <p className="my-2 text-center">{name}</p>
                {
                    showDetail === id && (
                        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 md:p-10 text-black rounbded-lg bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
                            <motion.div variants={stagger} initial="initial" animate="animate">

                                <motion.div variants={fadeInOut} className="border-4 border-gray-100">

                                    <Image src={image_path} alt={name} width="300" height="150" layout="responsive" />
                                </motion.div>

                                {/* <img src={image_path} alt={name} /> */}
                                <motion.div variants={fadeInOut} className="flex justify-center my-4 space-x-3">
                                    <a href={github_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                                        <AiFillGithub /> <span>Github</span>
                                    </a>
                                    <a href={deployed_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 ">
                                        <AiFillProject /> <span>Project</span>
                                    </a>
                                </motion.div>
                            </motion.div>
                            <motion.div variants={stagger} initial="initial" animate="animate">
                                <motion.h2 variants={fadeInOut} className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
                                <motion.h3 variants={fadeInOut} className="mb-3 font-medium">{description}</motion.h3>
                                <motion.div variants={fadeInOut} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                                    {key_tech.map((tech, index) => {
                                        <span key={index}
                                            className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-gray-200"
                                        >{tech} </span>;
                                    })}
                                </motion.div>
                            </motion.div>

                            <button onClick={() => setShowDetail(null)}
                                className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200 "
                            >
                                <AiFillCloseCircle size={30} />
                            </button>
                        </div>
                    )}
            </div>
        );
    };

export default ProjectCard;
