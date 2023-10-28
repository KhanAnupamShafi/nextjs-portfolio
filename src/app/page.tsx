import getProjects from '@/utils/getProjects';
import ContactMe from './components/Contact';
import Featured from './components/Featured';
import Hero from './components/Hero';

const getData = async () => {
  const projects = await getProjects();

  return {
    projects,
  };
};
export default async function Home() {
  const { projects } = await getData();

  return (
    <div className="overflow-hidden relative">
      <main className="scrollbar-thin sm:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-theme-light border border-r-0 border-l-0 divide-y divide-gray-100 dark:divide-gray-700 font-sans w-full snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden">
        <section id="hero" className="snap-start ">
          <Hero />
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
