'use client';
import { urlFor } from '@/lib/sanityClient';
import Image from 'next/image';
import { Tilt } from 'react-tilt';
import CircleSVG from '../../assets/cylinder.svg';
import Button from './ui/Button';
type Props = {
  data: Project;
};
const ProjectLanding = ({ data }: Props) => {
  const {
    title,
    tagline,
    link,
    frontend_link,
    backend_link,
    gallery,
  } = data || {};
  console.log(data);
  return (
    <>
      <div className=" grid grid-cols-12 mx-auto mt-8 text-left lg:mt-0 md:text-left mb-10 md:mb-0">
        <div className="px-5 order-last xl:order-first col-span-12 lg:col-span-12 xl:col-span-6 flex flex-col place-items-center items-center w-[100vw]">
          <div className="items-center pl-10 xl:pl-0 justify-center w-full 2xl:w-3/4 -mt-10 relative z-10">
            <div
              className="relative h-auto py-10 lg:py-20 w-full"
              id="skills">
              <Image
                src={CircleSVG}
                alt="Cylinder Vector"
                className="absolute right-0 top-16 sm:top-7 md:top-28 lg:bottom-7 w-2/3  pointer-events-none opacity-50 transition-all animate-absoluteright"
              />
            </div>
            <h1 className="text-md sm:text-4xl xl:text-3xl font-extrabold dark:text-white leading-none mb-2">
              {title}
            </h1>
            {tagline && (
              <h5 className="lg:w-[400px] sm:text-xl md:text-xl font-light dark:text-violet text-justify mt-4 mb-10">
                {tagline}
              </h5>
            )}
            <div className="grid sm:grid-cols-2 md:grid-cols-none xl:grid-cols-2 gap-4 mt-6">
              {link && (
                <div className="sm:col-span-1 xl:col-span-1">
                  <Button
                    type="solid"
                    text="Visit Project"
                    onClickHandler={() => window.open(link)}
                  />
                  {frontend_link && (
                    <div className="sm:col-span-1 xl:col-span-1 mt-2">
                      <Button
                        type="outlined"
                        text="View on Github"
                        onClickHandler={() =>
                          window.open(frontend_link)
                        }
                      />
                    </div>
                  )}
                  {backend_link && (
                    <div className="sm:col-span-1 xl:col-span-1">
                      <Button
                        type="outlined"
                        text="API Server"
                        onClickHandler={() =>
                          window.open(backend_link)
                        }
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-5 z-20">
          <Tilt>
            <div
              className="my-4 md:m-0 rounded-2xl px-10 md:px-5 pt-10 md:pt-2  justify-center
            transition-all duration-300 transform hover:opacity-80 hover:shadow-violet-5xl w-full">
              <div className="h-full justify-center">
                <Image
                  src={urlFor(gallery[0])?.url()}
                  alt={title + ' ' + tagline}
                  className="rounded-2xl !relative object-contain"
                  fill
                />
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </>
  );
};

export default ProjectLanding;
