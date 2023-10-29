import { urlFor } from '@/lib/sanityClient';
import Image from 'next/image';

type Props = {
  skill: Skill;
};
const SkillCard = ({ skill }: Props) => {
  console.log(urlFor(skill.image).url());

  return (
    <div className="relative group flex  cursor-pointer  ">
      <div className="h-16 sm:h-16 w-28 bg-white">
        <Image
          fill
          src={urlFor(skill.image).url()}
          alt={skill.title}
          className="p-1 sm:px-3 border !relative w-full h-full border-gray-500 filter group-hover:grayscale transition duration-300 ease-in-out "
        />
      </div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out group-hover:bg-white p-1 sm:px-4 h-16 sm:h-16 w-full border z-0">
        <div className="flex items-center justify-center ">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-black opacity-100">
            100%
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
