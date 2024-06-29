import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import AOS from 'aos'
import 'aos/dist/aos.css';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: true
    });
})
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    // {
    //   id: 5,
    //   link: "resume",
    // },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <div className="flex z-10 justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="lg:text-5xl text-2xl md:text-3xl font-signature ml-2">Ghulam Akbar</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium hover:text-gray-500 text-gray-300 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    

      {nav && (
        <ul data-aos="fade-down" className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 hover:scale-105 hover:text-white duration-300 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
         
  );
};

export default NavBar;
