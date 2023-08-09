import "./App.css";
import {
  About,
  Contact,
  Education,
  Home,
  Navbar,
  Portfolio,
  Skills,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
