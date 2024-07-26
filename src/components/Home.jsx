import React, { useEffect } from "react";
import HeroImage from "../assets/image2.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import AOS from 'aos'
import 'aos/dist/aos.css';


const Home = () => {

  useEffect(() => {
      AOS.init({
        duration: 1200,
      });
})

  return (
    <div
      name="home"
      className=""
    >
      <div className="flex text-[#E94B3CFF] bg-[#2D2926FF] flex-col md:flex-row px-8 md:px-28 justify-between items-center">
        <div data-aos="fade-right" className="mt-28 gap-4">
          <h2 className="text-[#FCF6F5FF] text-2xl md:text-3xl lg:text-4xl">
            I'm a Mern Stack Developer
          </h2>
          <p className="max-w-lg py-4 text-justify text-[#FAEBEFFF]/ text-[#FCF6F5FF]">
            I have 3 years of MERN stack experience, specializing in responsive web applications
            with MongoDB, Express.js, React, and Node.js. I'm also proficient in Figma for
            creating intuitive and visually appealing UIs.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group flex items-center text-[#FCF6F5FF] w-fit px-6 py-3 my-2 rounded-lg bg-gradient-to-r from-[#E94B3CFF] to-[#2D2926FF] to-blue-500/ cursor-pointer "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div data-aos="fade-left" className="">
          <img
            src={HeroImage}
            alt="my profile"
            data-aos="fade-in"
            className="rounded-2xl mb-8 md:mt-20 lg:mt-28 w-[340px] h-[380px] lg:w-[330px] lg:h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
