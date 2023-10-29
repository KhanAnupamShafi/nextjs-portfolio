import getMyExperience from '@/utils/getMyExperience';
import getMyInfo from '@/utils/getMyInfo';
import getProjects from '@/utils/getProjects';
import About from './components/About';
import ContactMe from './components/Contact';
import Experience from './components/Experience';
import Featured from './components/Featured';
import Hero from './components/Hero';

const getData = async () => {
  const projects = await getProjects();
  const info = await getMyInfo();
  const exp = await getMyExperience();

  return {
    projects,
    info,
    exp,
  };
};
export default async function Home() {
  const { projects, info, exp } = await getData();
  console.log(info);

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
