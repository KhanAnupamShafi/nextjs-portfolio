'use client';
import { urlFor } from '@/lib/sanityClient';
import Image from 'next/image';
import { Tilt } from 'react-tilt';
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
  console.log(urlFor(gallery[0]).url());
  return (
    <>
      <div className="p-4 grid grid-cols-12 gap-10 md:gap-0 mx-auto w-full mt-8 text-left lg:mt-0 md:text-left mb-10 md:mb-0">
        <div className="order-last md:order-first col-span-12 md:col-span-6 lg:col-span-6 flex flex-col place-content-center items-center">
          <div className="items-center w-3/4 -mt-10 relative">
            <img
              src="/images/vectors/triangle.svg"
              alt="Triangle 3d Vector"
              className="hidden md:block absolute right-0 top-0 w-2/3 md:w-32 animate-spin"
            />
            <h1 className="text-xl sm:text-2xl xl:text-3xl font-extrabold dark:text-white leading-none mb-2">
              {title}
            </h1>
            {tagline && (
              <h5 className="text-xl font-light dark:text-violet text-justify mt-4 mb-10">
                {tagline}
              </h5>
            )}
            <div className="grid sm:grid-cols-2 md:grid-cols-none xl:grid-cols-2 gap-4 mt-6">
              {link && (
                <div className="sm:col-span-1 xl:col-span-1">
                  <Button
                    type="solid"
                    text="Visit Project"
                    onClickHandler={() => window.open(link, '_blank')}
                  />
                </div>
              )}
              {frontend_link && (
                <div className="sm:col-span-1 xl:col-span-1">
                  <Button
                    type="outlined"
                    text="View on Github"
                    onClickHandler={() =>
                      window.open(frontend_link, '_blank')
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-6">
          <Tilt className="Tilt" options={{ max: 25 }}>
            <div
              className="my-4 mx-8 md:m-0 lg:m-10 lg:mx-16 rounded-2xl
            transition-all duration-300 transform hover:opacity-80 hover:shadow-violet-5xl">
              <div className="w-full h-full ">
                <Image
                  src={urlFor(gallery[0])?.url()}
                  alt={title + ' ' + tagline}
                  className="rounded-2xl !relative"
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
