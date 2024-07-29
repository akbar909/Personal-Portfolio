import React, {useEffect} from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/nodejs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import figma from "../assets/figma.png";
import mongodb from "../assets/mongodb.jpeg"
import AOS from 'aos'
import 'aos/dist/aos.css';
const Experience = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once : true,
    });
})

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 4,
      src: mongodb,
      title: "MongoDb",
      style: "shadow-green-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: node,
      title: "Node Js",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: figma,
      title: "Figma",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      id="experience"
      className="bg-[#2D2926FF] "
    >
      <div className=" mx-auto p-4 pl-6 lg:pl-28 lg:pr-28  flex flex-col justify-center  text-[#FCF6F5FF]">
        <div data-aos="fade-right" className="mt-20 ">
        <p className="text-4xl  font-bold inline border-b-4 border-gradient">
          Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
            data-aos="flip-down"
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
