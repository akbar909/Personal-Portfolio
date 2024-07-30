import React, { useEffect } from 'react'
import hero from '../assets/image2.png'
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AOS from 'aos';
import { motion } from "framer-motion";
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    });
  }, []);
  return (
    <div className='px-8 md:px-12 lg:px-28  bg-[#2D2926FF] mx-auto lg:py-12'>
      <div className='flex flex-col justify-between md:flex-row gap-4 items-center'>
        <div className='lg:mt-12 mt-28 gap-4'>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5}}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-[#FCF6F5FF] text-3xl md:text-4xl lg:text-5xl">
            I'm a Mern Stack Developer
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5,delay:0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className=' py-4 text-justify max-w-lg leading-6  text-[#FCF6F5FF]'
          >
            I have 3 years of MERN stack experience, specializing in responsive web applications
            with MongoDB, Express.js, React, and Node.js. I'm also proficient in Figma for
            creating intuitive and visually appealing UIs.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5,delay:0.8 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
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
          </motion.div>
        </div>
        <div
          >
          <img
          data-aos="fade-up"
            src={hero}
            alt='HeroImage'
            className='rounded-2xl mb-8 md:mt-20 lg:mt-28 w-[340px] h-[400px] md:w-[300px] md:h-[340px] lg:w-[330px] lg:h-[400px]'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
