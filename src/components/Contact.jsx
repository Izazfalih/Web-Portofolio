const socials = [
  { label: "Github", href: "https://github.com/" },
  { label: "Linkedin", href: "https://linkedin.com/" },
  { label: "Twitter", href: "https://twitter.com/" },
  { label: "Facebook", href: "https://facebook.com/" },
  { label: "Instagram", href: "https://instagram.com/" },
];

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-10">Izaz Falih</h3>

        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
              Email
            </h4>
            <p className="mt-2">
              <a
                href="mailto:izazfalih@gmail.com"
                className="text-white hover:text-slate-300 transition-colors"
              >
                izazfalih@gmail.com
              </a>
            </p>
            <h4 className="mt-6 text-sm font-semibold text-slate-400 uppercase tracking-wider">
              Location
            </h4>
            <p className="mt-2 text-white">Indonesia</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
              Social
            </h4>
            <ul className="mt-2 space-y-1">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-slate-300 transition-colors inline-flex items-center gap-1"
                  >
                    {social.label} <span aria-hidden="true">&#8599;</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-slate-400 md:text-right">
            <p>Designed and Developed by Izaz Falih</p>
            <p className="mt-1">&copy; 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
