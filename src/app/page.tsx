import getMyExperience from '@/utils/getMyExperience';
import getMyInfo from '@/utils/getMyInfo';
import getProjects from '@/utils/getProjects';
import getMySkills from '@/utils/getSkills';
import About from './components/About';
import ContactMe from './components/Contact';
import Experience from './components/Experience';
import Featured from './components/Featured';
import Hero from './components/Hero';
import Skill from './components/Skill';

const getData = async () => {
  const projects = await getProjects();
  const info = await getMyInfo();
  const exp = await getMyExperience();
  const skills = await getMySkills();

  return {
    projects,
    info,
    exp,
    skills,
  };
};

export const revalidate = 15;
export default async function Home() {
  const { projects, info, exp, skills } = await getData();

  return (
    <div className="overflow-hidden relative">
      <main className="scrollbar-thin sm:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-theme-light border border-r-0 border-l-0 divide-y divide-gray-100 dark:divide-gray-700 font-sans w-full snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden">
        <section id="hero" className="snap-start ">
          <Hero info={info} />
        </section>

        <section id="about" className="snap-start">
          <About />
        </section>
        <section id="experience" className="snap-start">
          <Experience experiences={exp} />
        </section>
        <section id="skills" className="snap-start">
          <Skill skills={skills} />
        </section>
        <section id="projects" className="snap-start">
          <Featured projects={projects} />
        </section>

        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
      </main>
    </div>
  );
}
