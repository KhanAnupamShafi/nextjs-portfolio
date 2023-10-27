import ContactMe from './components/Contact';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="divide-y divide-gray-100 dark:divide-gray-700 font-sans">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
          Home
        </h1>
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
      </div>
    </main>
  );
}
