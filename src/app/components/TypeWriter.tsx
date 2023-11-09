import { useTypewriter } from 'react-simple-typewriter';

function useTypewriterText() {
  return useTypewriter({
    words: [
      `Hey there! 👋 I'm ${'💻 Anupam'} —`,
      `Crafting code wonders as a ${'🔮 Web Wizard'}`,
      `In my realm, I weave ${'✨ digital spells'}`,
      `Sipping on cups of ${'☕ code brew'}`,
      `Join my journey through ${'🌐 web realms'}`,
      `Exploring ${'🧩 complex algorithms'}`,
      `Painting the web with ${'🎨 innovation'}`,
      `${'👨‍💻✨ #CodeAdventures'}`,
    ],
    loop: true,
    delaySpeed: 2000,
  })[0]; // Extract the text from the useTypewriter hook
}

const TypeWriter = () => {
  const text = useTypewriterText();

  return (
    <span className="mr-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
      {text}
    </span>
  );
};

export default TypeWriter;
