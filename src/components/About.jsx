import AOS from "aos";
import React, { useEffect } from "react";

import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
    // AdSense push (script already in index.html)
    if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
      window.adsbygoogle.push({});
    }
  }, []);
  return (
    <div
      id="about"
      className="container mx-auto px-8 md:px-12 lg:px-28 bg-primary text-secondary"
    >
      <div className="pb-16 flex flex-col justify-center ">
        <div data-aos="fade-right" className="pb-8 mt-20 ">
          <p className="text-4xl font-bold inline border-b-4 border-gradient">
            About
          </p>
        </div>
        <div data-aos="fade-up" className="leading-6">
          <p className="md:text-xl text-secondary mt-6 text-justify">
            I’m a Web Developer with over a year of hands-on experience in the
            MERN stack—MongoDB, Express.js, React.js, and Node.js—along with
            Next.js for building fast, SEO-friendly web applications. I
            specialize in creating dynamic and responsive web solutions that
            provide seamless user experiences, combining clean backend logic
            with smooth frontend interactions.{" "}
          </p>
          <br />
          <p className="md:text-xl text-secondary text-justify">
            With a strong eye for design, I use Figma to craft intuitive UI/UX
            designs and bring them to life using Tailwind CSS and modern
            frontend practices. My work reflects a balance between performance
            and aesthetics, and I’m passionate about building high-quality,
            production-ready applications. I’m always exploring new technologies
            and continuously improving my skills to stay ahead in the
            ever-evolving world of web development.{" "}
          </p>
        </div>
      </div>

      {/* Ad Section */}
      {/* <div className="my-8 flex justify-center bg-secondary">
    
        <ins
          className="adsbygoogle"
          style={{ display: 'inline-block', width: '728px', height: '90px' }}
          data-ad-client="ca-pub-8361394479217460"
          data-ad-slot="3820927521"
          data-ad-format="horizontal"
          data-full-width-responsive="true"
        ></ins>
      </div> */}
    </div>
  );
};

export default About;
