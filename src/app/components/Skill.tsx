'use client';
import { motion } from 'framer-motion';
import SkillCard from './ui/SkillCard';

type Props = {
  skills: Skill[];
};
const Skill = ({ skills }: Props) => {
  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 h-screen justify-start sm:justify-center items-center mt-10 sm:mt-0">
      <h3 className="absolute top-0 sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
        <div className="col-span-12 md:col-span-12 lg:col-span-12 flex flex-col justify-center items-center sm:my-10 mt-16 sm:mt-0">
          <div className="flex items-center justify-center gap-5 lg:mt-16 flex-wrap w-5/6 md:w-full  ">
            {skills?.map((skill) => (
              <SkillCard key={skill._id} skill={skill} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skill;
