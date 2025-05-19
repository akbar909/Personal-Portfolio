// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";
// import chatbot from "../assets/portfolio/chatbotgem.png";
// import ecom from '../assets/portfolio/ecom.png';
// import entryhub from "../assets/portfolio/entryhub.png";
// import portfolio from "../assets/portfolio/portfolio.png";
// import recipe from "../assets/portfolio/recipe.png";
// import social from "../assets/portfolio/socialapp.png";
// import tasktracker from "../assets/portfolio/tasktracker.png";

// const Portfolio = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1500,
//       once: true,
//     });
//     return () => {
//       AOS.refresh();
//     };
//   }, []);

//   const portfolios = [
//     {
//       id: 0,
//       src: portfolio,
//       link: 'https://github.com/akbar909/portfoliobuilder',
//       Demo: 'https://portfoliobuilder12.netlify.app/',
//     },
//     {
//       id: 1,
//       src: ecom,
//       link: 'https://github.com/akbar909/skbFrontend',
//       Demo: 'https://sk-bukhari.vercel.app/shop/home',
//     },
//     {
//       id: 3,
//       src: social,
//       link: 'https://github.com/akbar909/Social-app-website',
//       Demo: 'https://socialappweb.netlify.app',
//     },
//     {
//       id: 4,
//       src: chatbot,
//       link: 'https://github.com/akbar909/AiChatBot',
//       Demo: 'https://gptchat-bot.netlify.app',
//     },
//     {
//       id: 2,
//       src: entryhub,
//       link: 'https://github.com/akbar909/EntryHub/tree/main/frontend',
//       Demo: 'https://entryhub.vercel.app',
//     },
//     {
//       id: 5,
//       src: recipe,
//       link: 'https://github.com/akbar909/Recipe-Sharing-Frontend',
//       Demo: 'https://recipe-sharing-frontend.vercel.app/',
//     },
//     {
//       id: 6,
//       src: tasktracker,
//       link: 'https://github.com/akbar909/TaskTrackerApp',
//       Demo: 'https://task-tracker-app-pink.vercel.app',
//     },
//   ];

//   return (
//     <div id="project" className="bg-gradient-to-b from-primary to-primary-dark text-secondary py-16">
//       <div className="container mx-auto px-8 md:px-12 lg:px-28">
        // <div data-aos="fade-right" className="pb-8">
        //   <p className="text-4xl font-extrabold inline border-b-4 border-gradient">Projects</p>
        //   <p className="py-6 text-lg sm:text-xl md:text-2xl">Explore my latest work below</p>
        // </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//           {portfolios.map(({ id, src, link, Demo }) => (
//             <div
//               key={id}
//               data-aos="zoom-in"
//               className="relative group shadow-lg shadow-secondary rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
//             >
//               <img
//                 src={src}
//                 alt={`Project ${id}`}
//                 className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-opacity duration-300 flex flex-col justify-center items-center">
//                 <h3 className="text-xl font-bold text-secondary mb-4">Project {id + 1}</h3>
//                 <div className="flex space-x-4">
//                   {Demo && Demo !== 'none' && (
//                     <a
//                       href={Demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-6 py-3 font-medium text-secondary bg-primary hover:bg-accent-dark rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent"
//                     >
//                       Demo
//                     </a>
//                   )}
//                   {link && link !== 'none' && (
//                     <a
//                       href={link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-6 py-3 font-medium text-secondary bg-primary hover:bg-accent-dark rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent"
//                     >
//                       Code
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;



import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import chatbot from "../assets/portfolio/chatbotgem.png";
import ecom from '../assets/portfolio/ecom.png';
import entryhub from "../assets/portfolio/entryhub.png";
import portfolio from "../assets/portfolio/portfolio.png";
import recipe from "../assets/portfolio/recipe.png";
import social from "../assets/portfolio/socialapp.png";
import tasktracker from "../assets/portfolio/tasktracker.png";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out',
    });
    return () => {
      AOS.refresh();
    };
  }, []);

  const [activeCategory, setActiveCategory] = useState("all");

  const portfolios = [
    {
      id: 0,
      title: "Portfolio Builder",
      category: "web",
      src: portfolio,
      link: 'https://github.com/akbar909/portfoliobuilder',
      demo: 'https://portfoliobuilder12.netlify.app/',
    },
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "ecommerce",
      src: ecom,
      link: 'https://github.com/akbar909/skbFrontend',
      demo: 'https://sk-bukhari.vercel.app/shop/home',
    },
    {
      id: 2,
      title: "Social Network",
      category: "social",
      src: social,
      link: 'https://github.com/akbar909/Social-app-website',
      demo: 'https://socialappweb.netlify.app',
    },
    {
      id: 3,
      title: "AI Chatbot",
      category: "ai",
      src: chatbot,
      link: 'https://github.com/akbar909/AiChatBot',
      demo: 'https://gptchat-bot.netlify.app',
    },
    {
      id: 4,
      title: "EntryHub",
      category: "web",
      src: entryhub,
      link: 'https://github.com/akbar909/EntryHub/tree/main/frontend',
      demo: 'https://entryhub.vercel.app',
    },
    {
      id: 5,
      title: "Recipe Sharing",
      category: "community",
      src: recipe,
      link: 'https://github.com/akbar909/Recipe-Sharing-Frontend',
      demo: 'https://recipe-sharing-frontend.vercel.app/',
    },
    {
      id: 6,
      title: "Task Tracker",
      category: "productivity",
      src: tasktracker,
      link: 'https://github.com/akbar909/TaskTrackerApp',
      demo: 'https://task-tracker-app-pink.vercel.app',
    },
  ];

  const categories = ["all", ...new Set(portfolios.map(item => item.category))];
  
  const filteredPortfolios = activeCategory === "all" 
    ? portfolios 
    : portfolios.filter(item => item.category === activeCategory);

  return (
    <div id="project" className="bg-gradient-to-b from-primary to-primary-dark text-secondary py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div data-aos="fade-right" className="pb-8">
          <p className="text-4xl font-extrabold inline border-b-4 border-gradient">Projects</p>
          {/* <p className="py-6 text-lg sm:text-xl md:text-2xl">Explore my latest work below</p> */}
        </div>
        {/* Category Filter */}
        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-secondary text-primary shadow-md' 
                  : 'bg-primary-dark/40 text-secondary hover:bg-primary-dark'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolios.map(({ id, title, src, link, demo }) => (
            <div
              key={id}
              data-aos="fade-up"
              data-aos-delay={id * 50}
              className="bg-primary-dark/30 backdrop-blur-sm rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={src || "/placeholder.svg"}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                
                <div className="flex justify-between mt-4">
                  {demo && demo !== 'none' && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-lg bg-secondary/90 text-primary font-medium transition-all duration-300 hover:bg-accent hover:shadow-md hover:shadow-accent/30"
                    >
                      Live Demo
                    </a>
                  )}
                  
                  {link && link !== 'none' && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-lg  text-secondary font-medium transition-all duration-300  hover:shadow-md"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;