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
      className="px-8 md:px-12 lg:px-28 bg-[#2D2926FF] text-[#FCF6F5FF]"
    >
      <div className=" pb-16  mx-auto flex flex-col justify-center ">
        <div data-aos="fade-right" className="pb-8 mt-20 ">
          <p  className="text-4xl font-bold inline border-b-4 border-gradient">
            About
          </p>
        </div>
        <div data-aos="fade-up" className='leading-6'>

        <p className="md:text-xl text-[#FCF6F5FF] mt-6 text-justify">
          I am a web developer with 1 year of experience in the MERN stack: MongoDB,
          Express.js, React, and Node.js, specializing in creating responsive web applications.
          With strong skills in Figma, I design intuitive and visually appealing user
          interfaces that enhance the user experience.
        </p>

        <br />

        <p className="md:text-xl text-[#FCF6F5FF] text-justify">
          Passionate about problem-solving, I continuously learn
          and stay updated with the latest trends and technologies. My portfolio
          showcases projects that reflect my expertise in both development
          and design, demonstrating my ability to deliver high-quality digital solutions.
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
