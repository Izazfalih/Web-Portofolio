import aboutPhoto from "../assets/izaz.png";

function About() {
  return (
    <>
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <img
              src={aboutPhoto}
              alt="Izaz Falih"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-slate-700 shadow-lg flex-shrink-0"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                About Me
              </h1>
              <p className="text-slate-300 leading-relaxed text-lg">
                I am an Informatics student passionate about creating intuitive and
                interactive digital experiences. I thrive on solving problems,
                exploring new technologies, and turning creative ideas into
                accessible tools. Currently, I am deeply focusing on mastering
                JavaScript, using it to breathe life into web applications through
                dynamic features and interactive logic. With a strong foundation in
                both front-end and back-end development, I am always eager to
                learn, adapt, and collaborate on building impactful software
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experiences" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider">
              Experience
            </h1>
            <p className="mt-3 text-slate-400 text-base md:text-lg">
              My professional journey and key experiences
            </p>
          </div>

          <div className="relative pl-8 md:pl-12">
            <span className="absolute left-0 top-8 w-4 h-4 rounded-full bg-slate-900 border-2 border-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.6)]" />
            <span className="absolute left-[7px] top-12 bottom-0 w-px bg-gradient-to-b from-purple-400/40 to-transparent" />

            <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-2xl shadow-purple-900/20">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wide">
                    Software Developer Intern
                  </h3>
                  <p className="mt-1 text-purple-400 font-medium">Unstop</p>
                </div>
                <p className="text-slate-400 text-sm md:text-base whitespace-nowrap">
                  Sep 2024 - Present
                </p>
              </div>

              <ul className="space-y-3 text-slate-300 leading-relaxed">
                {[
                  "Integrated AI-driven n8n automation workflows across internal REST API endpoints and a custom CMS, adding white-label support and dynamic window-title configuration",
                  "Built an AI workflow system to auto-generate and validate vendor assignments, cutting creation and validation time by 60–70%",
                  "Enhanced front-end UI components to surface the new workflow system, streamlining vendor-facing task flows",
                  "Managed CI/CD pipelines via Git and Jenkins to maintain consistent deployments across environments",
                  "Tracked sprint progress and maintained technical documentation in Jira and Confluence",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {["n8n", "REST APIs", "Git", "Jenkins", "Jira"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-md border border-white/15 bg-white/5 text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
