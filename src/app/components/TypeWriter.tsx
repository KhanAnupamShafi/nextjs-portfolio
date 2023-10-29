import { useTypewriter } from 'react-simple-typewriter';

function useTypewriterText() {
  return useTypewriter({
    words: [
      `Hi, ${'👋 Anupam'} here`,
      `Also known as ${'🧙‍♂️ Syntax Sorcerer.'}`,
      ` Catch me in my natural habitat`,
      `Crafting elegant ${'🔍 algorithms'}`,
      `And taming wild ${'🐛 bugs'} in my trusty editor`,
      `When I'm not sipping on ${'☕ code'}`,
      `  you can find me on a quest`,
      `For the perfect blend of ${'💡 logic'}`,
      `And ${'🎨 creativity'}`,
      `${'👨‍💻🔮 #CodingWizardry'}`,
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
