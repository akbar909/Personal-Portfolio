// import React, { useEffect } from "react";
// import HeroImage from "../assets/image2.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
// import AOS from 'aos'
// import 'aos/dist/aos.css';


// const Hero = () => {

//   useEffect(() => {
//       AOS.init({
//         duration: 1200,
//       });
// })

//   return (
//     <div
//       name="home"
//       className=""
//     >
//       <div className="text-[#E94B3CFF] bg-[#2D2926FF] grid grid-flow-row md:grid-flow-col px-8 md:px-28 justify-between items-center">
//         <div data-aos="fade-right" className="mt-28 gap-4">
          // <h2 className="text-[#FCF6F5FF] text-2xl md:text-3xl lg:text-4xl">
          //   I'm a Mern Stack Developer
          // </h2>
//           <p className="max-w-lg py-4 text-justify text-[#FAEBEFFF]/ text-[#FCF6F5FF]">
            // I have 3 years of MERN stack experience, specializing in responsive web applications
            // with MongoDB, Express.js, React, and Node.js. I'm also proficient in Figma for
            // creating intuitive and visually appealing UIs.
//           </p>

          // <div>
          //   <Link
          //     to="portfolio"
          //     smooth
          //     duration={500}
          //     className="group flex items-center text-[#FCF6F5FF] w-fit px-6 py-3 my-2 rounded-lg bg-gradient-to-r from-[#E94B3CFF] to-[#2D2926FF] to-blue-500/ cursor-pointer "
          //   >
          //     Portfolio
          //     <span className="group-hover:rotate-90 duration-300">
          //       <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
          //     </span>
          //   </Link>
          // </div>
//         </div>

//         <div data-aos="fade-left" className="">
//           <img
//             src={HeroImage}
//             alt="my profile"
//             data-aos="fade-in"
//             className="rounded-2xl mb-8 md:mt-20 lg:mt-28 w-[340px] h-[380px] lg:w-[330px] lg:h-[400px]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from 'react'
import { motion } from 'framer-motion'
import hero from '../assets/image2.png'
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <div className='px-8 md:px-28  bg-[#2D2926FF] mx-auto lg:py-12'>
      <div className='flex flex-col justify-between lg:flex-row items-center'>
        <div className='lg:mt-12 mt-28 gap-4'>
        <h2 className="text-[#FCF6F5FF] text-3xl md:text-4xl lg:text-5xl">
            I'm a Mern Stack Developer
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className=' py-4 text-justify max-w-lg  text-[#FCF6F5FF]'
          >
             I have 3 years of MERN stack experience, specializing in responsive web applications
            with MongoDB, Express.js, React, and Node.js. I'm also proficient in Figma for
            creating intuitive and visually appealing UIs.
          </motion.p>
          <div>
            <Link
              to="/portfolio"
              smooth
              duration={500}
              className="group flex items-center text-[#FCF6F5FF] w-fit px-6 py-3 my-2 rounded-lg bg-gradient-to-r from-[#E94B3CFF] to-[#2D2926FF] to-blue-500/ cursor-pointer "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>


        </div>
        <div className=''>
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            src={hero}
            alt='Hero-Image'
            className='rounded-2xl mb-8 md:mt-20 lg:mt-28 w-[340px] h-[380px] lg:w-[330px] lg:h-[400px]'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero