import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
// import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      {/* <Portfolio /> */}
      <Contact />
    </>
  );
}

export default App;
