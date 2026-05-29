import aboutPhoto from "../assets/izaz.png";
import FuzzyText from './FuzzyText';

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
            <h2 className="text-4xl font-bold text-white tracking-tight">
              Experience
            </h2>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-md p-12 rounded-2xl shadow-xl flex flex-col items-center justify-center min-h-[400px] gap-4">
            <FuzzyText
              fontSize="120px"
              fontWeight={900}
              baseIntensity={0.2}
              hoverIntensity={0.5}
              enableHover
            >
              404
            </FuzzyText>

            <FuzzyText
              fontSize="60px"
              fontWeight={700}
              baseIntensity={0.18}
              hoverIntensity={0.5}
              enableHover
            >
              not found
            </FuzzyText>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
