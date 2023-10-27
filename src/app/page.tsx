import ContactMe from './components/Contact';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="border border-r-0 border-l-0 divide-y divide-gray-100 dark:divide-gray-700 font-sans ">
      <div className="">
        {/* <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
          Home
        </h1> */}
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin sm:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-theme-light">
          <section id="hero" className="snap-start ">
            <Hero />
          </section>
          <section id="contact" className="snap-start">
            <ContactMe />
          </section>
        </div>
      </div>
    </main>
  );
}
