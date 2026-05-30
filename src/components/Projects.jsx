import { ExternalLink } from 'lucide-react';

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.34-1.27-1.7-1.27-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a10.97 10.97 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const projects = [
  {
    title: "Stardew Valley Web Project",
    description:
      "Developed an interactive, game-themed web interface implementing precise pixel art layouts. Engineered complex JavaScript logic to power character movement, a dynamic inventory management system, user profiling, and an automated item-drop notification system for mining mechanics.",
    badges: ["HTML", "CSS Flexbox/Grid", "JavaScript", "UI Design"],
    links: [
      { label: "Code", href: "#", icon: Github, isDemo: false }, // <-- Pakai Github
      { label: "Live Demo", href: "#", icon: ExternalLink, isDemo: true },
    ],
  },
  {
    title: "L'Architecte Hotel System",
    description:
      "Developed a full-stack hotel reservation and management web application. Designed and implemented robust backend CRUD (Create, Read, Update, Delete) functionalities to seamlessly handle guest data, room availability, and secure MySQL database integrations.",
    badges: ["PHP", "MySQL", "Laravel", "HTML", "CSS"],
    links: [
      { label: "Code", href: "#", icon: Github, isDemo: false }, // <-- Pakai Github
      { label: "Live Demo", href: "#", icon: ExternalLink, isDemo: true },
    ],
  },
  {
    title: "LSTM Stock Price Prediction",
    description:
      "Built a time-series Deep Learning model leveraging LSTM (Long Short-Term Memory) architecture to forecast BBCA stock prices. Successfully managed the complete AI pipeline, including raw financial data preprocessing, feature engineering, and neural network training using TensorFlow.",
    badges: ["Python", "TensorFlow", "Scikit-Learn", "Data Visualization"],
    links: [
      { label: "Code", href: "#", icon: Github, isDemo: false } // <-- Pakai Github
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-10">
          My Projects
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors shadow-xl"
            >
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              
              <p className="mt-3 text-slate-400 text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              
              {/* Bagian Badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700 font-mono"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              
              <div className="mt-6 flex gap-3">
                {project.links && project.links.map((link) => {
                  const IconComponent = link.icon || null;
                  
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-xl font-medium transition-all flex-1 ${
                        link.isDemo
                          ? "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-md shadow-purple-500/10"
                          : "border border-white/10 bg-white/5 hover:bg-white/10 text-white"
                      }`}
                    >
                      {IconComponent && <IconComponent className="w-4 h-4" />}
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;