import { urlFor } from '@/lib/sanityClient';
import Detail from './Detail';
import ProjectLanding from './ProjectLanding';
import TechCard from './ui/TechCard';

type Props = {
  data: Project;
};
const ProjectDetails = ({ data }: Props) => {
  console.log(data);
  return (
    <div className="ml-4 sm:mx-12 md:mx-16">
      <ProjectLanding data={data} />
      <>
        <div className="relative -mt-20">
          <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 place-items-center items-center h-screen">
            <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
              {/* Hero Header */}
              <div className=" justify-end w-3/4 relative  flex flex-col items-end">
                <div className="flex items-center">
                  <hr className="w-16 sm:w-24 mr-1 border-violet" />
                  <h4 className="font-light gradient-text text-sm md:text-2xl">
                    Explore Project Gallery
                  </h4>
                </div>
                {/* TODO Add dynamic taglines */}

                <h1 className="sm:w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-4xl font-normal tracking-wide text-black dark:text-white leading-normal">
                  Take a visual
                  <span className="text-theme-light dark:text-pink font-bold px-2">
                    journey
                  </span>{' '}
                  through the
                </h1>
                <h1 className="mb-3 mt-6 text-xl sm:text-lg md:text-xl font-extrabold text-black dark:text-white leading-10 ">
                  stunning creations
                  <span className="px-2 leading-10 text-theme-light dark:text-pink font-bold">
                    brought to life
                  </span>
                </h1>
              </div>
            </div>
            {/* FIXME Make thie cards of this page dyanmic */}
            <div className="relative col-span-12 md:col-span-5 lg:col-span-6 flex flex-col">
              {data?.gallery &&
                data.gallery.map((item, index) => (
                  <div
                    key={index}
                    className={`w-64 h-auto shadow-light-xl hover:shadow-light-3xl transform transition-all  duration-300 hover:scale-110  ${
                      index % 2 === 0
                        ? ' '
                        : 'my-4 sm:ml-40 sm:-my-6 lg:ml-60 lg:-my-10 z-auto'
                    }`}>
                    <TechCard
                      heading="aa"
                      img={urlFor(item).url()}
                      color="violet"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <Detail project={data} />
      </>
    </div>
  );
};

export default ProjectDetails;
