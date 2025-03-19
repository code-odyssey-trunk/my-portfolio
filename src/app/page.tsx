import Contact from './components/Contact';
import Footer from './components/layout/Footer';
import Intro from './components/Intro';
import Journey from './components/Journey';
import Navbar from './components/layout/Navbar';
import Work from './components/Work';
import Skills from './components/Skills';

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Work />
      <Journey />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
