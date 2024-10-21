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
      style: "shadow-orange",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blueDark",
    },
    {
      id: 4,
      src: mongodb,
      title: "MongoDb",
      style: "shadow-green",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky",
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
      style: "shadow-greenLight",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray",
    },
    {
      id: 8,
      src: figma,
      title: "Figma",
      style: "shadow-gray",
    },
  ];

  return (
    <div
      id="skills"
      className="container mx-auto bg-primary px-8 md:px-12 lg:px-28 "
    >
      <div className=" mx-auto flex flex-col justify-center  text-secondary">
        <div data-aos="fade-right" className="mt-20 ">
        <p className="text-4xl  font-bold inline border-b-4 border-gradient">
          Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-10 md:px-0 lg:px-0">
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
