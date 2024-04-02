import React from "react";
import Profile from "../assets/Picsart_23-12-07_18-39-42-464.png";
import resume from "../assets/Prathapresume.pdf"
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// import {fadeIn} from'../variants'
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import  BG from '../assets/jose-ignacio-pompe-VkF6IXHVIvA-unsplash.jpg'

const Home = () => {
  return (
    <div id="home" className="md:h-[80vh] lg:h-[90vh] text-white">
      <section className="container mx-auto p-5 md:p-10 lg:p-5">
        <div className="w-full  md:flex   items-center justify-center md:mt-16 lg:mt-10 xl:mt-0 mx-auto ">
          <div className=" w-full justify-center  lg:justify-start  md:w-1/2  p-5 lg:p-16  ">
            <p
             
              className="text-center  text-lg lg:text-4xl dancing  mx-auto"
            >
             hello im
              <span className="text-5xl lg:text-5xl mx-1 font-DancingScript text-yellow-400 ">
                Prathap
              </span>
            </p>
            <p className="text-center  text-2xl md:text-4xl lg:text-4xl xl:text-6xl  font-DancingScript ">
              <span className="">I'm a </span>
              <span className="text-yellow-400">MERN Stack</span>
              <span className="md:pl-0 ">
                
                Devloper...<span className="text-white">!</span>
              </span>
            </p>
            <div className="flex justify-center  text-2xl pt-5 ">

            <a className=" hover:text-blue-800" target="_blank" href="https://github.com/Prathap12072003">
            <FaGithub className="lg:mr-5 mr-6 hover:shadow shadow-gray-400  lg:mx-0 transition duration-100 hover:scale-125"  />
              </a>
              <a className=" hover:text-blue-800"
                target="_blank"
                href="https://www.linkedin.com/in/prathap1207/"
              >
                <FaLinkedin className=" hover:shadow shadow-gray-400  lg:mx-0 transition duration-100 hover:scale-125 " />
              </a>
              
            </div>
            <div className="flex  mt-2">
             <a href={resume} download="resume.pdf" className="mx-auto ">
             <Button variant="contained" style={{backgroundColor:"rgb(73, 105, 137)"}} endIcon={<FileDownloadIcon />}>
  Resume  
</Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex ">
          <img
              src={Profile}
              className=" lg:w-9/12 xl:w-10/12  mx-auto 5"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
// Typr animation
{
  /* <TypeAnimation  sequence={[
                  'MERN',
                  2000,
                  'Mongo DB',
                  2000,
                  'Express',
                  2000,
                  'React js',
                  2000,
                  'Node js',
                  2000,
                ]}
                speed={50}
                className="px-7"
                wrapper="span"
                repeat={Infinity}
                /> */
}
