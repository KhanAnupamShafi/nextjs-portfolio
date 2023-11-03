import { urlFor } from '@/lib/sanityClient';
import Image from 'next/image';

type Props = {
  skill: Skill;
};
const SkillCard = ({ skill }: Props) => {
  return (
    <div className="relative group flex  cursor-pointer  ">
      <div className="h-10 sm:h-16 sm:w-24 min-w-[50px] rounded-md opacity-80 bg-[#dee1ef]">
        <Image
          fill
          src={urlFor(skill.image).url()}
          alt={skill.title}
          className="p-0.5 sm:px-3 border !relative rounded-md w-full h-full border-gray-500 filter group-hover:grayscale transition duration-300 ease-in-out object-contain"
        />
      </div>
      <div className="absolute opacity-0 group-hover:opacity-90 z-10 transition duration-200 ease-in-out group-hover:bg-white p-2 sm:px-4 h-10 sm:h-16 min-w-[50px] sm:w-full border ">
        <div className="flex items-center justify-center ">
          <p className=" text-sm p-2 font-bold text-black opacity-100">
            {skill.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
