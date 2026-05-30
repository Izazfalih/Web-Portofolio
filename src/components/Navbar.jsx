function Navbar() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between gap-4 px-3 py-3 rounded-full bg-white/5 backdrop-blur-xl backdrop-saturate-150 border border-white/10 shadow-2xl shadow-black/20">
        <a
          href="#home"
          className="pl-4 text-base font-semibold text-white tracking-tight"
        >
          Izaz Falih
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/CV_IZAZ_FALIH.pdf"
          download="CV_IZAZ_FALIH.pdf"
          className="px-5 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition-colors"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
