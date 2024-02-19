import React from "react";
import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { LuContact } from "react-icons/lu";
import { MdWork } from "react-icons/md";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="bg-black">
    <nav className="fixed  bottom-2 lg:bottom-8 z-50  w-full overflow-hidden">
      <div className="container mx-auto">
        <div className="w-[280px] lg:w-[400px]  bg-yellow-400 rounded-full flex justify-between  items-center  mx-auto text-2xl   lg:text-3xl backdrop-blur-2xl px-3">
          <Link to="home"
          activeClass="active"
          smooth={true}
          spy={true}
          className=" px-4 py-3">
            <IoHome className="text-black active:text-yellow-200  lg:hover:-translate-y-1"/>
          </Link>
          <Link  to="about" 
          activeClass="active"
          smooth={true}
          spy={true}
          className=" px-4 py-3">
            <IoPerson   className="text-black    active:text-yellow-200  lg:hover:-translate-y-1"/>
          </Link>
          <Link to="work" 
          activeClass="active"
          smooth={true}
          spy={true}
          className=" px-4 py-3">
            <MdWork  className="text-black  active:text-yellow-200  lg:hover:-translate-y-1" />
          </Link>
          <Link  to='contact' 
          activeClass="active"
          smooth={true}
          spy={true}
          className=" px-4 py-3">
            <LuContact className="text-black  active:text-yellow-200  lg:hover:-translate-y-1 "/>
          </Link>
          
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
