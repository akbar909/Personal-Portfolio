import React, { useEffect } from "react";
import entryhub from "../assets/portfolio/entryhub.png";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import tasktracker from "../assets/portfolio/tasktracker.png";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import AOS from 'aos'
import 'aos/dist/aos.css';
const Portfolio = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
})
  const portfolios = [
    {
      id: 1,
      src: entryhub,
      link: 'https://github.com/akbar909/EntryHub/tree/main/frontend',
      Demo: 'https://entryhub.vercel.app'
    },
    {
      id: 2,
      src: tasktracker,
      link: 'https://github.com/akbar909/TaskTrackerApp',
      Demo: 'https://task-tracker-app-pink.vercel.app'
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="portfolio"
      className="text-[#E94B3CFF]/ text-[#FCF6F5FF] bg-[#2D2926FF] w-full text-white/ "
    >
      <div className=" p-4 pl-6 pr-4  lg:pl-28 lg:pr-28 mx-auto flex flex-col justify-center ">
        <div data-aos="fade-right" className="pb-8 mt-20">
          <p className="text-4xl  font-bold inline border-b-4 border-gradient">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src , link, Demo }) => (
            <div key={id} data-aos="flip-up" className="shadow-md shadow-[#FCF6F5FF] rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a 
                href={Demo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a
                href={link}
                target="-blank"
                rel="noopener noreferrer"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
