import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Journey from "./components/Journey";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Intro/>
      <Work/>
      <Journey/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
}
