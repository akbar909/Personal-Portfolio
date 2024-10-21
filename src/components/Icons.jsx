import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
const Icons = () => {
  
  const linkedInProfileUrl = 'https://www.linkedin.com/in/ghulam-akbar-01182126b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  const gitHubLink = 'https://github.com/akbar909'
  const email = 'jamaliakbar909@gmail.com';
  return (
    <div className='flex flex-row justify-center gap-8 text-4xl lg:hidden '>
      <div className=" flex items-center">
        <a href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer">

          <FaLinkedin className='bg-secondary  text-primary rounded-md p-1 hover:scale-110 duration-200' />
        </a>
      </div>
      <div className="relative flex items-center">
        <a href={gitHubLink} target="_blank" rel="noopener noreferrer">

          <FaGithub className='bg-secondary  text-primary rounded-md p-1 hover:scale-110 duration-200' />
        </a>
      </div>
      <div className="flex items-center">
        <a  href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
        <IoMailOutline className='bg-secondary  text-primary rounded-md p-1 hover:scale-110 duration-200' />
        </a>
      </div>
    </div>
  )
}

export default Icons