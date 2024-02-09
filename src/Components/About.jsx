import React from "react";

const About = () => {
  return (
    <div id="about" className="min-h-[70vh] text-white  my-10">
      <section className="container mx-auto p-5 md:p-10 lg:p-5">
        <div className="w-full flex flex-col lg:flex  items-center justify-center gap-1 ">
          <p className="text-yellow-400 font-bold text-3xl  md:text-5xl ">
            About
          </p>
          <p className="text-justify md:text-center md:text-base lg:text-lg  my-4 lg:w-11/12">
          I'm Prathap, and I'm excited to share that I've recently earned my BCA degree and completed the MERN stack developer institute. Throughout my journey, I've developed a strong foundation in web development and have honed my skills through hands-on experience.
          <br />
          <br />
          <span>I'm particularly proud of the two projects I completed during my training, which are now showcased in my portfolio. These projects not only demonstrate my proficiency in the MERN stack but also highlight my ability to tackle real-world challenges creatively. I'm eager to continue growing as a developer and contribute my expertise to innovative projects. 
            </span>  </p>
          <div className="my-5 grid lg:flex  gap-5 w-full text-black font-semibold  lg:h-[60vh] xl:h-[55vh]   ">
            <div className="w-full md:w-6/12 md:mx-auto lg:w-[30%] p-5  text-center grid rounded-lg bg-yellow-400  hover:shadow-lg hover:shadow-black transition duration-100 hover:scale-95">
              <p className="my-3 text-3xl font-Poppins underline">Tech Skill</p>
              <div className="text-justify text-gray-950   gap-2  ">
                <p className="py-1"><span className="font-bold">Frontend</span>  : HTML v5,CSS v4,Js ES7,React Js</p>
                <p className="py-1"><span className="font-bold">Backend</span> : Node Js,Express Js</p>
                <p className="py-1"><span className="font-bold">Framework</span>  : Tailwind Css v3</p>
                <p className="py-1"><span className="font-bold">Databese</span>  : MongoDB,Atles</p>
                <p className="py-1"><span className="font-bold">Version Controler </span> : Git & GitHub</p>
                <p className="py-1"><span className="font-bold">Tools</span>: Vistual Studio Code,Rest Api</p>
            </div>
              </div>
            <div className="w-full md:w-6/12 md:mx-auto lg:w-[30%] p-5  text-center grid rounded-lg  bg-yellow-400 hover:shadow-lg hover:shadow-black transition duration-100 hover:scale-95">
              <p className="my-3 text-3xl font-Poppins underline">Education</p>
              <div className="text-justify text-gray-950   gap-2  ">
                <div  my-1>
                  <dt className="font-bold my-1">
                    BCA (Bacheler Of Computer Application)
                  </dt>
                  <dd>GTN Arts College,Dindigul</dd>
                  <dd>CGPA -7.1</dd>
                </div >
                <div className="">
                  <dt className="font-bold my-1">
                    HSC (Higher Secondary)
                  </dt>
                  <dd>St.Mary's Higher Secondary Scchool,Dindigul</dd>
                  <dd>Mark-60%</dd>
                </div>
                <div >
                  <dt className="font-bold my-1">
                    SSLC (Secondary School)
                  </dt>
                  <dd></dd>
                  <dd>Mark-72%</dd>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
