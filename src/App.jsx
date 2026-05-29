import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Aurora from './components/Aurora'; 

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-purple-500/30 overflow-x-hidden relative">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-50">
        <Aurora
          colorStops={['#31108f', '#7a22b8', '#130426']} // Gradasi Ungu Gelap Mewah pilihanmu
          speed={0.5}
          blend={0.5}
          amplitude={1.0}
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
        </main>
        <Contact />
        
        <footer className="py-8 text-center text-xs text-gray-600 border-t border-white/5 mt-20">
          &copy; {new Date().getFullYear()} Izaz Falih. All rights reserved.
        </footer>
      </div>
      
    </div>
  );
}

export default App;