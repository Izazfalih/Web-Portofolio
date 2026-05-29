import Aurora from './Aurora';

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen -mt-24 pt-24 flex flex-col items-center justify-center text-center px-6 relative"
    >
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#7cff67", "#8f66b4", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.8}
        />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider">
        Izaz Falih
      </h1>
      <h2 className="mt-4 text-xl md:text-2xl text-slate-400">
        Informatics Student
      </h2>
      <div className="mt-10 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-200 transition-colors"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-slate-600 text-slate-200 font-medium hover:bg-slate-800 transition-colors"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
