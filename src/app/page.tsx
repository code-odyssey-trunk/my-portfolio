import Contact from './components/Contact';
import Footer from './components/layout/Footer';
import Intro from './components/Intro';
import Journey from './components/Journey';
import Work from './components/Work';
import Skills from './components/Skills';
import Projects from './components/Projects';

export default function Home() {
  return (
    <>
      <Intro />
      <Work />
      <Journey />
      <Skills />
      <Projects/>
      <Contact />
      <Footer />
    </>
  );
}
