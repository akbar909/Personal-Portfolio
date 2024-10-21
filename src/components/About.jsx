import React, { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    });
  })
  return (
    <div
      id="about"
      className="container mx-auto px-8 md:px-12 lg:px-28 bg-primary text-secondary"
    >
      <div className="pb-16 flex flex-col justify-center ">
        <div data-aos="fade-right" className="pb-8 mt-20 ">
          <p className="text-4xl font-bold inline border-b-4 border-gradient">
            About
          </p>
        </div>
        <div data-aos="fade-up" className='leading-6'>
          <p className="md:text-xl text-secondary mt-6 text-justify"> 
            As a web developer with a year of hands-on experience in the MERN stack—MongoDB, 
            Express.js, React, and Node.js specialize in building dynamic, responsive web 
            applications that offer seamless user experiences. My expertise extends to crafting 
            visually compelling and user-friendly interfaces through Figma, ensuring that both form 
            and function are meticulously balanced. </p> 
            <br /> 
            <p className="md:text-xl text-secondary text-justify"> 
              Driven by a passion for problem-solving, I am committed to continuous learning 
              and staying at the forefront of emerging technologies. My portfolio reflects my 
              dual strengths in development and design, showcasing projects that not only highlight 
              my technical proficiency but also my dedication to delivering polished, 
              high-quality digital solutions. </p>
        </div>
      </div>
    </div>
  );
};

export default About;
