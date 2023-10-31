'use client';
import { motion } from 'framer-motion';
import TabExperience from './ui/Tab';

type Props = {
  experiences: Experience[];
};
const Experience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-full 2xl:h-screen flex flex-col relative overflow-hidden text-left max-w-full mx-2 sm:mx-10 justify-center items-center">
      <h3 className="text-xl md:absolute top-0 -mb-5 sm:mt-5 md:mt-0 md:mb-0 md:top-[88px] uppercase tracking-[20px] -mr-[20px] text-gray-500 z-10">
        Experience
      </h3>

      <TabExperience experiences={experiences} />

      {/* <div className="mt-10 grid 2xl:grid-cols-2 gap-4 place-items-center">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience._id}
            experience={experience}
          />
        ))}
      </div> */}
    </motion.div>
  );
};

export default Experience;
