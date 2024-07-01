import React, { useEffect } from "react";
import HeroImage from "../assets/image.png";
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
      className="bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="pl-6  lg:pl-28 lg:pr-28 lg:gap-48 mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        <div data-aos="fade-right" className="flex flex-col mt-32 justify-center ">
          <h2 className="text-4xl font-bold text-white">
            I'm a Mern Stack Developer
          </h2>
          <p className="text-gray-400 py-4 text-justify pr-4 max-w-lg">
            I have 3 years of MERN stack experience, specializing in responsive web applications
            with MongoDB, Express.js, React, and Node.js. I'm also proficient in Figma for
            creating intuitive and visually appealing UIs.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div data-aos="fade-left" className="pr-3">
          <img
            src={HeroImage}
            alt="my profile"
            data-aos="fade-in"
            className="rounded-2xl mx-auto md:mt-20 lg:mt-28 w-[340px] h-[400px] lg:w-[330px] lg:h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
