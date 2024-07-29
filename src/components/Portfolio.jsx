import React, { useEffect } from "react";
import entryhub from "../assets/portfolio/entryhub.png";
import installNode from "../assets/portfolio/installNode.jpg";
import tasktracker from "../assets/portfolio/tasktracker.png";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import social from "../assets/portfolio/SocialMediaPosting.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    return () => {
      AOS.refresh(); // Cleanup
    };
  }, []);

  const portfolios = [
    {
      id: 1,
      src: entryhub,
      link: 'https://github.com/akbar909/EntryHub/tree/main/frontend',
      Demo: 'https://entryhub.vercel.app'
    },
    {
      id: 2,
      src: social,
      link: 'https://github.com/akbar909/Social-media-posting-',
      Demo: 'https://social-media-posting.vercel.app/'
    },
    {
      id: 3,
      src: tasktracker,
      link: 'https://github.com/akbar909/TaskTrackerApp',
      Demo: 'https://task-tracker-app-pink.vercel.app'
    },
    {
      id: 4,
      src: reactSmooth,
      link: 'none',
      Demo: 'none'
    },
    {
      id: 5,
      src: installNode,
      link: 'none',
      Demo: 'none'
    },
    {
      id: 6,
      src: reactWeather,
      link: 'none',
      Demo: 'none'
    },
  ];

  return (
    <div id="portfolio" className="text-[#FCF6F5FF] bg-[#2D2926FF] w-full">
      <div className="p-4 pl-6 pr-6 lg:p-28 mx-auto flex flex-col justify-center">
        <div data-aos="fade-right" className="pb-8 mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gradient">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src, link, Demo }) => (
            <div key={id} data-aos="flip-up" className="shadow-md shadow-[#FCF6F5FF] rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-auto"
              />
              <div className="flex items-center justify-center">
                {Demo && (
                  <a
                    href={Demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                  >
                    Demo
                  </a>
                )}
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
