import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Icons from "./components/Icons";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
// import Resume from "./components/Resume";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      {/* <Resume /> */}
      <Contact />
      <Icons />
      <SocialLinks />
    </div>
  );
}

export default App;
