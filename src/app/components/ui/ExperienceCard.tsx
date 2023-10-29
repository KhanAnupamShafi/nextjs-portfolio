import { urlFor } from '@/lib/sanityClient';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tilt } from 'react-tilt';
const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 0.95, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
};

type Props = {
  experience: Experience;
};
const ExperienceCard = ({ experience }: Props) => {
  return (
    <Tilt
      options={defaultOptions}
      style={{
        transition: 'all',
        duration: '5500ms',
        transform:
          'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      }}>
      <div className="my-4 mx-8 lg:mx-16 rounded-2xl transition-all duration-300 transform hover:opacity-80 hover:shadow-violet-4xl">
        <article className="flex flex-col rounded-lg items-center space-y-4 sm:space-y-5 flex-shrink-0 w-full lg:w-[800px] xl:w-[850px] snap-center bg-[#FAEBEFFF] dark:bg-[#343148FF] p-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 2.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-20 h-20 rounded-full xl:w-32 xl:h-32 object-cover"
            src={urlFor(experience.companyImage).url()}
          />
          <div className="ml-o text-start w-full ">
            <h4 className="text-xl sm:text-2xl font-light text-[#333D79FF] dark:text-[#D7C49EFF]">
              {experience.jobTitle}
            </h4>
            <div className="flex justify-start gap-3">
              <p className="font-bold text-base sm:text-base mt-1 flex align-middle items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
                {experience.companyTitle}
              </p>
              |
              <p className="font-bold text-base sm:text-base mt-1 flex align-middle items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>

                {experience.companyLocation}
              </p>
            </div>
          </div>

          <div className="flex space-x-2 mt-2 w-full">
            {experience?.technologies.map((technology) => (
              <Image
                key={technology._id}
                width={500}
                height={500}
                className="h-8 w-8 object-contain sm:h-10 sm:w-10 lg:w-12 lg:h-12 rounded-full bg-white p-1"
                src={urlFor(technology.image).url()}
                alt={technology.title}
              />
            ))}
          </div>
          <div className="w-full">
            <p className="uppercase pb-5 text-sm text-[#333D79FF] dark:text-[#FDD20EFF]">
              {new Date(experience.dateStarted).toDateString()} -{' '}
              {experience.isCurrentlyWorkingHere
                ? 'Present'
                : new Date(experience.dateEnded).toDateString()}
            </p>

            <ul className="list-disc list-outside text-xs md:text-sm space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
              {experience?.experienceDetails?.point?.map(
                (point, i) => (
                  <li className="text text-justify" key={i}>
                    {point}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* <a href="/project/work-mail-community">
            <img
              src="/images/projects/workmailcommunity.webp"
              alt="Work Mail Community"
              className="rounded-2xl"
            />
          </a> */}
        </article>
      </div>
    </Tilt>
  );
};

export default ExperienceCard;
