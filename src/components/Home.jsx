import React from "react";
import HeroImage from "../assets/Akbar.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="pl-6 pr-6 lg:pl-28 lg:pr-28 md:gap-28 mx-auto flex flex-col items-center justify-center px-4 md:flex-row">
        <div className="flex flex-col mt-36 justify-center ">
          <h2 className="text-4xl font-bold text-white">
            I'm a Mern Stack Developer
          </h2>
          <p className="text-gray-500 py-4 text-justify pr-4 max-w-lg">
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

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto md:mt-20 lg:mt-28 w-[430px] h-[400px] lg:w-[380px] lg:h-[390px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
