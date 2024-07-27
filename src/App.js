import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Icons from "./components/Icons";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="bg-[#2D2926FF]">
      <NavBar />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Icons />
      <SocialLinks />
    </div>
  );
}

export default App;
