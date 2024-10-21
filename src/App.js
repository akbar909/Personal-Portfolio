import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="bg-primary">
      <NavBar />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
