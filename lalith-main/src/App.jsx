import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen selection:bg-violet-500/30 selection:text-white cursor-none"> {/* Custom cursor requires cursor-none */}
      <Cursor />
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <>
            <ScrollProgress />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Achievements />
            <Projects />
            <Contact />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
