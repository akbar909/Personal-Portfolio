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
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <div className="flex z-10 justify-between items-center w-full h-16 px-8 text-[#E94B3CFF] bg-[#2D2926FF] bg top-0 fixed">
      <div>
        <h1 className="lg:text-5xl text-3xl">Ghulam Akbar</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium hover:text-red-500  hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer  z-10 text-[#FCF6F5FF] md:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
    

      {nav && (
        <ul data-aos="fade-down" className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-[#E94B3CFF] bg-[#2D2926FF]">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 hover:scale-105 hover:text-[#FCF6F5FF] duration-300 cursor-pointer capitalize py-6 text-4xl"
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
