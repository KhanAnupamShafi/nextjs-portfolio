'use client';
import { Tab } from '@headlessui/react';
import { useEffect, useState } from 'react';
import ExperienceCard from './ExperienceCard';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type Props = {
  experiences: Experience[];
};

export default function TabExperience({ experiences }: Props) {
  const [currentTab, setCurrentTab] = useState(
    experiences?.length - 1
  );
  useEffect(() => {
    localStorage.setItem('currentTab', JSON.stringify(currentTab));
  }, [currentTab]);

  let numbering = 1;

  return (
    <div className="relative mb-40 sm:mb-4 mt-20 lg:mt-48 2xl:mt-0">
      <Tab.Group
        defaultIndex={
          currentTab !== null
            ? Number(currentTab)
            : experiences?.length - 1
        }
        onChange={(currentTab: any) => {
          setCurrentTab(currentTab);
        }}>
        <div className="2xl:ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 place-items-center items-center ">
          <Tab.List className="col-span-12 2xl:col-span-6 flex flex-col">
            {experiences?.map((experience) => {
              numbering += 1;
              return (
                <div key={numbering}>
                  <h1 className="text-6xl font-black text-[#101014] dark:text-white -mb-2.5 ">
                    {numbering >= 0 && numbering <= 9
                      ? `0${numbering - 1}`
                      : `${numbering - 1}`}
                  </h1>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        'border-solid hover:border-pink  border-2 rounded-xl px-10 py-4 text-center z-30 w-60 lg:w-96    transition-all hover:shadow-violet-5xl hover:bg-pink dark:hover:shadow-light-xl active:outline-none focus:outline-none mb-5',
                        selected
                          ? 'bg-pink border-transparent text-[#222]'
                          : 'border-2 border-solid border-pink dark:text-white'
                      )
                    }>
                    {experience?.companyTitle}

                    {/* {category} */}
                  </Tab>
                </div>
              );
            })}
          </Tab.List>
          <Tab.Panels className="mt-2 col-span-12 2xl:col-span-6 flex flex-col justify-center items-center min-h-full">
            {experiences.map((experience) => (
              <Tab.Panel
                key={experience?._id}
                className={classNames(
                  'rounded-xl bg-white p-1',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}>
                {/* className="relative rounded-md p-3 hover:bg-gray-100"> */}
                <ExperienceCard experience={experience} />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
}
