import React from "react";
import { MdAttachEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
const Contact = () => {
  return (
    <div id="contact" className="mt-10">
      <section className="bg-slate-900 w-full mx-auto">
        <div className="h-[48vh] lg:h-[55vh] pt-10">
          <h1 className="flex justify-center text-yellow-400 font-bold text-3xl  md:text-5xl ">
            Contact me
          </h1>
          <div className=" text-white mt-10 p-0 md:p-5 lg:text-xl ">
            <p className="flex space-x-2 justify-center md:justify-start mb-4 lg:mb-4">
             <MdAttachEmail className="text-2xl md:text-3xl mt-1 transition duration-100 hover:scale-125 " />
              <span>prathap6047@gmail.com</span>
            
            </p>

            <p className="flex  space-x-2 justify-center md:justify-start">
              <FaWhatsapp  className="text-2xl md:text-3xl text-green-400 transition duration-100 hover:scale-125" />
              <span>7824977674</span>
            </p>
            <div className="flex space-x-5  justify-center md:justify-end text-white mt-10 md:mt-[-34px]  text-2xl lg:text-3xl lg:mt-[-55px] lg:mr-6 md:w-1/2 md:ml-auto ">
              <a className=" hover:text-blue-800   lg:text-white p-[2px]" target="_blank" href="https://github.com/Prathap12072003">
                <FaGithub className="transition duration-100 hover:scale-125"  />
              </a>

              <a className=" hover:bg-red-600  rounded-md bg-red-500 lg:bg-inherit p-[2px]"
                target="_blank"
                href="https://www.instagram.com/imnobitaa.____/"
              >
                <FaInstagram className="transition duration-100 hover:scale-125" />
              </a>
              <a className=" hover:text-blue-800   lg:text-white p-[2px]"
                target="_blank"
                href="https://www.linkedin.com/in/prathap1207/"
              >
                <FaLinkedin className="transition duration-100 hover:scale-125" />
              </a>

             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
