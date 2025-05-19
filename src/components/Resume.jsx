import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Resume() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);


  return (
    <div id="resume" className="container mx-auto  bg-primary text-secondary py-1  px-8 md:px-12 lg:px-28">
       <div className="pb-8 mt-20 " data-aos="fade-right">
          <p  className="text-4xl font-bold inline border-b-4 border-gradient">
           My Resume
          </p>
        </div>
      <div className="max-w-full mt-4 mx-auto  grid justify-between  grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-32">
        
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-6">EDUCATION</h2>
          <Timeline items={educationData} />
        </div>
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-6">EXPERIENCE</h2>
          <Timeline items={experienceData} />
        </div>
      </div>
    </div>
  );
}

function Timeline({ items }) {
  return (
    <div className="space-y-8 ">
      {items.map((item, index) => (
        <div key={index} className="relative gap-6 px-8 md:px-12 lg:px-16">
          
          <div>
          <div className="absolute -left-[5px] -top-1  w-3 h-3 bg-primary border-2 border-red rounded-full"></div>
          <div className="absolute left-0 top-3 h-full w-0.5 bg-red"></div>
          </div>
          <div className="">
          <div className="mb-1 text-sm">{item.date}</div>
          <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
          <div className="text-gray-400 mb-1">{item.location}</div>
          <p className="text-sm text-gray-300">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const educationData = [
  {
    date: "2018 - 2020",
    title: "Matriculation | Govt: High School District Matiari",
    location: "Matiari, Pakistan",
    description: "I completed my Matriculation degree from Govt: High School Matiari, Pakistan.",
  },
  {
    date: "2020 - 2022",
    title: "Intermediate | Govt: Sarwari Islamia Degree College Hala",
    location: "Hala, Pakistan",
    description: "I completed my Intermediate degree from Govt: S.I College Hala, Pakistan.",
  },
  {
    date: "2022 - 2026 (Expected)",
    title: "BE Computer Systems Engineering | MUET Jamshoro",
    location: "Jamshoro, Pakistan",
    description: "I am pursuing my Bachelor's degree in Computer Systems Engineering from MUET Jamshoro, Pakistan.",
  },
  {
    date: "Nov 2023 - Jan 2024",
    title: "MERN Stack Development | IBA IT Bootcamp Program",
    location: "Hyderabad, Pakistan",
    description: "I completed this course from the IBA IT Bootcamp program in Hyderabad, Pakistan.",
  },
];


const experienceData = [
  {
    date: "Nov 2023 - Dec 2023",
    title: "Web Development Intern | CodSoft",
    location: "Remote",
    description: "Built responsive, pixel-perfect websites with a focus on user experience.",
  },
  {
    date: "Jan 2024 - Feb 2024",
    title: "React JS Intern | CodSoft",
    location: "Remote",
    description: "Developed dynamic, responsive web applications using React JS.",
  },
  {
    date: "Mar 2024 - Oct 2024",
    title: "Web Developer & Code Captain | D3 - Digital Dream Dynamo",
    location: "Jamshoro, Pakistan",
    description: "Managed the website and led the development team to deliver scalable solutions.",
  },
  {
    date: "Sept 2024 - Feb 2025",
    title: "MERN STACK & NEXT JS Intern | ThinkFeat Software House",
    location: "Hyderabad, Pakistan",
    description: "Built responsive, cross-browser web apps and collaborated on reusable components.",
  },
];

