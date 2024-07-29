import React, {useEffect} from 'react'
import hero from '../assets/image2.png'
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AOS from 'aos';

import 'aos/dist/aos.css';

const Hero = () => {

  useEffect(() => {
    AOS.init({
        duration: 1500,
        once: true
    });
})
  return (
    <div className='px-8 lg:px-28  bg-[#2D2926FF] mx-auto lg:py-12'>
      <div className='flex flex-col justify-between md:flex-row gap-4 items-center'>
        <div className='lg:mt-12 mt-28 gap-4'>
        <h2 data-aos="fade-right" className="text-[#FCF6F5FF] text-3xl md:text-4xl lg:text-5xl">
            I'm a Mern Stack Developer
          </h2>
          <p data-aos="fade-right" className=' py-4 text-justify max-w-lg leading-6  text-[#FCF6F5FF]'
          >
            I have 3 years of MERN stack experience, specializing in responsive web applications
            with MongoDB, Express.js, React, and Node.js. I'm also proficient in Figma for
            creating intuitive and visually appealing UIs.
          </p>
          <div data-aos="fade-right">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group flex items-center text-[#FCF6F5FF] w-fit px-6 py-3 my-2 rounded-lg bg-gradient-to-r from-[#E94B3CFF] to-[#2D2926FF] cursor-pointer "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>


        </div>
        <div data-aos="fade-left">
          <img
            src={hero}
            alt='HeroImage'
            className='rounded-2xl mb-8 md:mt-20 lg:mt-28 w-[340px] h-[380px] md:w-[300px] md:h-[340px] lg:w-[330px] lg:h-[400px]'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero