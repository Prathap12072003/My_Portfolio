import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    
    <div className="selection:text-yellow-800  bg-slate-800">
    
      <Home />
      <About />
      <Work />
      <Contact />
      <Navbar />
      
      </div>
    
  );
};

export default App;
