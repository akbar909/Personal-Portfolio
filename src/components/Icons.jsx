import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
const Icons = () => {
  const [isHovered, setIsHovered] = useState(false);
  const linkedInProfileUrl = 'https://www.linkedin.com/in/ghulam-akbar-01182126b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  const [isHovered1, setIsHovered1] = useState(false);
  const gitHubLink = 'https://github.com/akbar909'
  const [isHovered2, setIsHovered2] = useState(false);
  const email = 'jamaliakbar909@gmail.com';
  return (
    <div className='flex flex-row justify-center gap-8 text-4xl pb-6 lg:hidden '>
      <div className="relative flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} >

        {isHovered && (
          <h1 className="absolute -left-16 text-xs font-semibold text-white bg-black p-1 rounded">
            LinkedIn
          </h1>
        )}
        <a href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer">

          <FaLinkedin className='bg-gray-500  text-white rounded-md p-1 hover:scale-110 duration-200' />
        </a>
      </div>
      <div className="relative flex items-center"
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)} >

        {isHovered1 && (
          <h1 className="absolute -top-8 -left-1 text-xs font-semibold text-white bg-black p-1 rounded">
            GitHub
          </h1>
        )}
        <a href={gitHubLink} target="_blank" rel="noopener noreferrer">

          <FaGithub className='bg-gray-500  text-white rounded-md p-1 hover:scale-110 duration-200' />
        </a>
      </div>

      <div className="relative flex items-center"
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)} >

        {isHovered2 && (
          <h1 className="absolute  left-11 text-xs font-semibold text-white bg-black p-1 px-3 rounded">
            Mail
          </h1>
        )}
        <a  href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
        <IoMailOutline className='bg-gray-500  text-white rounded-md p-1 hover:scale-110 duration-200' />
        </a>
      </div>
    </div>
  )
}

export default Icons