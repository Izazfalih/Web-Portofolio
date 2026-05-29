const projects = [
  {
    title: "Stardew Valley Web Project",
    description:
      "Developed an interactive, game-themed web interface implementing precise pixel art layouts. Engineered complex JavaScript logic to power character movement, a dynamic inventory management system, user profiling, and an automated item-drop notification system for mining mechanics.",
    badges: ["HTML", "CSS Flexbox/Grid", "JavaScript", "UI Design"],
    links: [
      { label: "Code", href: "#" },
      { label: "Live Demo", href: "#" },
    ],
  },
  {
    title: "L'Architecte Hotel System",
    description:
      "Developed a full-stack hotel reservation and management web application. Designed and implemented robust backend CRUD (Create, Read, Update, Delete) functionalities to seamlessly handle guest data, room availability, and secure MySQL database integrations.",
    badges: ["PHP", "MySQL", "Laravel", "HTML", "CSS"],
    links: [
      { label: "Code", href: "#" },
      { label: "Live Demo", href: "#" },
    ],
  },
  {
    title: "LSTM Stock Price Prediction",
    description:
      "Built a time-series Deep Learning model leveraging LSTM (Long Short-Term Memory) architecture to forecast BBCA stock prices. Successfully managed the complete AI pipeline, including raw financial data preprocessing, feature engineering, and neural network training using TensorFlow.",
    badges: ["Python", "TensorFlow", "Scikit-Learn", "Data Visualization"],
    links: [{ label: "Code", href: "#" }],
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
              className="flex flex-col bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-4 py-2 text-sm rounded-md bg-white text-slate-900 font-medium hover:bg-slate-200 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
