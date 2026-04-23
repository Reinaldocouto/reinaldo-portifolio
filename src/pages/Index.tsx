import { About } from '../components/home/About';
import { Contact } from '../components/home/Contact';
import { Experience } from '../components/home/Experience';
import { Footer } from '../components/home/Footer';
import { Hero } from '../components/home/Hero';
import { Highlights } from '../components/home/Highlights';
import { Navbar } from '../components/home/Navbar';
import { Projects } from '../components/home/Projects';
import { Stack } from '../components/home/Stack';

export default function Index() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Navbar />
      <Hero />
      <Highlights />
      <Projects />
      <About />
      <Stack />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
