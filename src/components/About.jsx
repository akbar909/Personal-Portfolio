import React, { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init({
        duration: 1500,
        // once: true
    });
})
  return (
    <div
      name="about"
      className="bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" p-4 pl-6 lg:pl-28 lg:pr-28  mx-auto flex flex-col justify-center ">
        <div data-aos="fade-right" className="pb-8 mt-28 ">
          <p  className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div data-aos="fade-up">

        <p className="md:text-xl text-gray-400 mt-6 text-justify pr-4">
          I am a web developer with 3 years of experience in the MERN stack: MongoDB,
          Express.js, React, and Node.js, specializing in creating responsive web applications.
          With strong skills in Figma, I design intuitive and visually appealing user
          interfaces that enhance the user experience.
        </p>

        <br />

        <p className="md:text-xl text-gray-400 text-justify pr-4">
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
