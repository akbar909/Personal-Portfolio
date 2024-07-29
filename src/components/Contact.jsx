import React, {useEffect} from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once : true,
    });
})
  return (
    <div
      id="contact"
      className=" bg-[#2D2926FF] p-4 text-[#FCF6F5FF]"
    >
      <div className="flex flex-col p-4 lg:pl-28 lg:pr-28 justify-center mx-auto ">
        <div data-aos="fade-right" className="pb-8 mt-16">
          <p className="text-4xl font-bold inline border-b-4 border-gradient">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div data-aos="fade-up" className=" flex justify-center items-center">
          <form
            action="https://formsubmit.co/jamaliakbar909@gmail.com"
            method="POST"

            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md  focus:outline-none"
            />
            <input
              type="text"
              name="email"
              required
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md  focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md  focus:outline-none"
            ></textarea>

            <button className="bg-gradient-to-r from-[#E94B3CFF] to-[#2D2926FF]  px-6 py-3 my-8 mx-auto flex items-center rounded-md duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
