import React from "react";
import weathergif from "../assets/Yellow and Black Modern Media Logo.gif";
// import api from '../assets/apiimages.png'
import vehivlegif from "../assets/vehicle Info.gif";
import processimg from "../assets/loading.gif";

const Work = () => {
  return (
    <div id="work" className="min-h-[90vh] text-white  my-10 mb-20">
      <section className="container mx-auto p-5 md:p-10 lg:p-5">
        <div className="w-full flex flex-col lg:flex  items-center justify-center gap-1 my-6">
          <p className="text-yellow-400 font-bold text-3xl  md:text-5xl md:mb-6 lg:mb-10 ">
            My Works
          </p>
          {/* <p className="text-justify md:text-center my-4 lg:w-10/12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            odio praesentium expedita dignissimos commodi quae amet facilis
            temporibus perspiciatis harum vero maxime molestias saepe quidem
            iusto facere repudiandae, sint pariatur ipsum quo. Accusamus, do
            lorem. Qui enim suscipit natus unde laborum.
          </p> */}
        </div>
        <div className="grid md:grid-cols-2 lg:w-10/12 lg:mx-auto xl:grid-cols-3  gap- gap-y-6 mt-10 text-gray-950  ">
          <div className="bg-[#FFCD0C] rounded-lg w-10/12 p-5 mx-auto transition duration-100 hover:scale-105">
            <a
              href="https://celebrated-faloodeh-9aef87.netlify.app/"
              target="_blank"
            >
              <img src={weathergif} alt="" className="w-48 ml-2 ssm:ml-8 lg:ml-10  mx-auto " />
            </a>
            <div className="text-center ">
              <a
                className="text-xl font-bold  text-slate-800  animate-none hover:animate-pulse"
                target="_blank"
                href="https://github.com/Prathap12072003/Weather-API"
              >
                view sourcecode
              </a>
            </div>
            <p className="text-start text-base font-medium mt-6">
              A weather API is a service that provides access to weather data.
            </p>
          </div>
          <div className="bg-[#FFCD0C] rounded-lg w-10/12 p-5 mx-auto transition duration-100 hover:scale-105">
            <a href="https://github.com/Prathap12072003/Vehicle_Application">
            <img src={vehivlegif} alt="" className="mx-auto w-48 mt-4"  />
            </a>
            <div className="text-center mt-[-20px]  ">
              <a
                className="text-xl font-bold  text-slate-800 mt-[-40px] animate-none hover:animate-pulse"
                target="_blank"
                href="https://github.com/Prathap12072003/Vehicle_Application"
              >
                view sourcecode
              </a>
            </div>
            <p className="text-justify text-base font-medium   mt-3">
              Our platform is meticulously crafted to serve as a dedicated
              repository for all your veicle data, encompassing essential
              details
            </p>
          </div>
          <div className="bg-[#FFCD0C] rounded-lg w-10/12 p-5 mx-auto transition duration-100 hover:scale-105">
            <img src={processimg} alt="" className="mx-auto w-3/4 lg:mt-6 " />
            <p className="text-justify text-base font-medium  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              aliquam ad quae amet nam illum nisi ex. Consequatur, iure nulla.
            </p>
          </div>
          <div className="bg-[#FFCD0C] rounded-lg w-10/12 p-5 mx-auto transition duration-100 hover:scale-105">
            <img src={processimg} alt="" className="mx-auto w-3/4 " />
            <p className="text-justify text-base font-medium ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              aliquam ad quae amet nam illum nisi ex. Consequatur, iure nulla.
            </p>
          </div>
          <div className="bg-[#FFCD0C] rounded-lg w-10/12 p-5 mx-auto transition duration-100 hover:scale-105">
            <img src={processimg} alt="" className="mx-auto w-3/4" />
            <p className="text-justify text-base font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              aliquam ad quae amet nam illum nisi ex. Consequatur, iure nulla.
            </p>
          </div>
          <div className="bg-[#FFCD0C] rounded-lg w-10/12 p-5 mx-auto transition duration-100 hover:scale-105">
            <img src={processimg} alt="" className="mx-auto w-3/4" />
            <p className="text-justify text-base font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              aliquam ad quae amet nam illum nisi ex. Consequatur, iure nulla.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
