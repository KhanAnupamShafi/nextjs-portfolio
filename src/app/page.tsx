import ContactMe from './components/Contact';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="overflow-hidden relative">
      <main className="scrollbar-thin sm:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-theme-light border border-r-0 border-l-0 divide-y divide-gray-100 dark:divide-gray-700 font-sans w-full snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden">
        <section id="hero" className="snap-start ">
          <Hero />
        </section>
        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
      </main>
    </div>
  );
}
