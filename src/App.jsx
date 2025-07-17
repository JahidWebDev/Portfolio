import React from 'react';
import Navber from "./Components/Navber"; 
import About from "./Components/About"; 
import MySkills from "./Components/MySkills"; 
import Projects from "./Components/Projects"; 
import Experience from "./Components/Experience"; 
import Contact from "./Components/Contact"; 
import Footer from "./Components/Footer"; 

const App = () => {
  return (
    <>
      <Navber />
      <About/>
      <MySkills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
