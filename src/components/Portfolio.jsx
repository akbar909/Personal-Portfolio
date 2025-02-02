import React, { useEffect } from "react";
import entryhub from "../assets/portfolio/entryhub.png";
import installNode from "../assets/portfolio/installNode.jpg";
import tasktracker from "../assets/portfolio/tasktracker.png";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import social from "../assets/portfolio/SocialMediaPosting.png";
import chatbot from "../assets/portfolio/chatbot.png";
import ecom from '../assets/portfolio/ecom.png'
import recipe from "../assets/portfolio/recipe.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
    return () => {
      AOS.refresh();
    };
  }, []);

  const portfolios = [
    {
      id: 1,
      src: ecom,
      link: 'https://github.com/akbar909/skbFrontend',
      Demo: 'https://sk-bukhari.vercel.app/shop/home',
    },
    {
      id: 2,
      src: entryhub,
      link: 'https://github.com/akbar909/EntryHub/tree/main/frontend',
      Demo: 'https://entryhub.vercel.app',
    },
    {
      id: 3,
      src: social,
      link: 'https://github.com/akbar909/Social-media-posting-',
      Demo: 'https://social-media-posting.vercel.app/',
    },
    {
      id: 4,
      src: chatbot,
      link: 'https://github.com/akbar909/AiChatBot',
      Demo: 'https://chatbotalpha.vercel.app/',
    },
    {
      id: 5,
      src: recipe,
      link: 'https://github.com/akbar909/Recipe-Sharing-Frontend',
      Demo: 'https://recipe-sharing-frontend.vercel.app/',
    },
    {
      id: 6,
      src: tasktracker,
      link: 'https://github.com/akbar909/TaskTrackerApp',
      Demo: 'https://task-tracker-app-pink.vercel.app',
    },
  
  ];

  return (
    <div id="portfolio" className="bg-primary text-secondary">
      <div className="container mx-auto px-8 md:px-12 lg:px-28 py-16">
        <div data-aos="fade-right" className="pb-8">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold inline border-b-4 border-gradient">
            Portfolio
          </p>
          <p className="py-6 text-lg sm:text-xl md:text-2xl">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.map(({ id, src, link, Demo }) => (
            <div key={id} data-aos="flip-up" className="shadow-md shadow-secondary rounded-lg overflow-hidden">
              <img
                src={src}
                alt={`Project ${id}`}
                className="w-full h-auto object-cover duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center p-4">
                {Demo && Demo !== 'none' && (
                  <a
                    href={Demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 text-center hover:text-red px-4 py-2 m-2 font-medium text-secondary bg-accent hover:bg-accent-dark duration-200"
                  >
                    Demo
                  </a>
                )}
                {link && link !== 'none' && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 text-center hover:text-red  px-4 py-2 m-2 font-medium text-secondary bg-accent hover:bg-accent-dark duration-200"
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
