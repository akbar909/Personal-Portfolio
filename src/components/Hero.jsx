import React, { useEffect } from 'react';
import hero from '../assets/image2.png';
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight, MdFileDownload } from "react-icons/md";
import AOS from 'aos';
import { motion } from "framer-motion";
import 'aos/dist/aos.css';
import Icons from './Icons';
import resume from '../assets/AkbarResume.pdf';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div className='container mx-auto  px-8 md:px-12 lg:px-28 bg-primary py-12 lg:py-20'>
      <div className='flex flex-col justify-between md:flex-row gap-6  items-center'>
        <div className='lg:mt-12 mt-28 gap-4'>
          <div className="text-center md:text-left">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-secondary text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide"
            >
              <span className="text-red">Hello, I'm</span>
            </motion.h2>

            <motion.h2
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5 , delay: 0.3}}
             variants={{
               hidden: { opacity: 0, x: -50 },
               visible: { opacity: 1, x: 0 },
             }}
            className="text-white tracking-widest font-bold text-4xl md:text-5xl lg:text-6xl leading-snug mt-2">
              <span className="text-teal-500">Ghulam</span> Akbar
            </motion.h2>
            <motion.h1
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.7 }}
             transition={{ duration: 0.5 , delay: 0.3}}
             variants={{
               hidden: { opacity: 0, x: -50 },
               visible: { opacity: 1, x: 0 },
             }}
            className="text-lg mt-4 mb-3 md:text-2xl lg:text-3xl leading-5 md:leading-snug text-gray-300 font-bold glowing-text">
              <TypeAnimation
                sequence={[
                  'MERN Stack Developer',
                  2000,
                  'Next Js Developer',
                  2000,
                  'React js Developer',
                  2000,
                  'Node Js Developer',
                  2000,
                  'Freelancer',
                  2000,
                  'UX/UI Designer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1.5em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </motion.h1>

          </div>

          <div className='flex items-center gap-4'>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className='hidden lg:flex items-center'
            >
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group flex items-center text-secondary w-fit px-6 py-3 rounded-lg bg-gradient-to-r from-red to-primary cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className='lg:hidden flex items-center'
            >
              <a
                href={resume}
                download
                className="flex items-center hover:scale-110 duration-200 text-secondary w-fit px-6 py-3 rounded-lg bg-gradient-to-r from-red to-primary cursor-pointer"
              >
                Resume
                <span>
                  <MdFileDownload size={22} className="ml-1" />
                </span>
              </a>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Icons />
            </motion.div>
          </div>
        </div>

        <div>
          <img
            data-aos="fade-up"
            src={hero}
            alt='Hero_Image'
            className='rounded-2xl mb-8 md:mt-20 lg:mt-28 w-full max-w-[300px] md:w-[300px] lg:w-[330px] h-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
