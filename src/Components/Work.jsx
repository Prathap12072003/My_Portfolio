import React from "react";
import apiimg from '../assets/weatherimg.png'
// import api from '../assets/apiimages.png'
import vehivleimg from '../assets/car_images-removebg-preview.png'
import processimg from '../assets/processing_img.png'
 
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
           <div className="bg-yellow-400 rounded-lg w-10/12 p-5 mx-auto transition duration-100 hover:scale-105">
            <a href="https://celebrated-faloodeh-9aef87.netlify.app/" target="_blank">
            <img src={apiimg} alt=""  className=" hover:border-4 hover:border-yellow-600 hover:shadow-lg hover:shadow-yellow-600 rounded-3xl mx-auto w-3/4 mt-3"/>
            </a>
            <div className="text-center my-4 ">
            <a className="text-xl font-bold  text-slate-800   hover:text-black  rounded-full p-3 hover:border-b-[4px] hover:shadow-lg hover:shadow-yellow-600 hover:border-yellow-600 active:border-sky-950 " target="_blank" href="https://github.com/Prathap12072003/Weather-API">view sourcecode</a>
            </div>
            <p className="text-center text-base font-medium mt-3">A weather API is a service that provides access to weather data.</p>
          
           </div>
           <div className="bg-yellow-400 rounded-lg w-10/12 p-5 mx-auto transition duration-100 hover:scale-105" >
           <img src={vehivleimg} alt=""  className="mx-auto w-3/4"/>
            <div className="text-center my-4 ">
            <a className="text-xl font-bold  text-slate-800   hover:text-black  rounded-full p-3 hover:border-b-[4px] hover:shadow-lg hover:shadow-yellow-600 hover:border-yellow-600 active:border-sky-950" target="_blank" href="https://github.com/Prathap12072003/Vehicle_Application">view sourcecode</a>
            </div>
            <p className="text-center text-base font-medium mt-3">Our platform is meticulously crafted to serve as a dedicated repository for all your veicle data, encompassing essential details</p>
           </div>
           <div className="bg-yellow-400 rounded-lg w-10/12 p-5 mx-auto transition duration-100 hover:scale-105   ">
            <img src={processimg} alt=""  className="mx-auto w-3/4 lg:mt-6"/>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquam ad quae amet nam illum nisi ex. Consequatur, iure nulla.</p>
           </div>
           <div className="bg-yellow-400 rounded-lg w-10/12 p-5 mx-auto transition duration-100 hover:scale-105">
            <img src={processimg} alt=""  className="mx-auto w-3/4"/>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquam ad quae amet nam illum nisi ex. Consequatur, iure nulla.</p>
           </div>
           <div className="bg-yellow-400 rounded-lg w-10/12 p-5 mx-auto transition duration-100 hover:scale-105">
            <img src={processimg} alt=""  className="mx-auto w-3/4"/>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquam ad quae amet nam illum nisi ex. Consequatur, iure nulla.</p>
           </div>
           <div className="bg-yellow-400 rounded-lg w-10/12 p-5 mx-auto transition duration-100 hover:scale-105">
            <img src={processimg} alt=""  className="mx-auto w-3/4"/>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquam ad quae amet nam illum nisi ex. Consequatur, iure nulla.</p>
           </div>
        </div>
        
      </section>
    </div>
  );
};

export default Work;
