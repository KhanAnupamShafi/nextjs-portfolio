import DemoImg from '@/assets/demp.jpg';
import { urlFor } from '@/lib/sanityClient';
import getProjects from '@/utils/getProjects';
import Image from 'next/image';
const getData = async () => {
  const projects = await getProjects();

  return {
    projects,
  };
};

export const revalidate = 15;
type Props = {
  projects: Project[];
};

const MyProjectsPage = async () => {
  const { projects }: Props = await getData();
  console.log(projects);
  return (
    <div className="container">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex flex-col items-center justify-center space-y-2 pt-6 pb-8 md:space-y-5 max-w-sm">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-theme-light sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            Projects Showcase
          </h1>

          <h4 className="mt-4 text-xl">Checkout My Projects</h4>
        </div>

        <div className="grid gap-y-8 sm:gap-6  sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
          {projects.map((project) => (
            <article
              key={project._id}
              className="overflow-hidden relative dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-[#291720] bg-opacity-10 dark:shadow-[#291720] shadow-teal-100">
              <div className="h-56 w-full relative">
                <Image
                  fill
                  src={urlFor(project?.image).url() || DemoImg}
                  alt="Image of the project"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 sm:p-6">
                <a href={project.link} target="_blank">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </a>

                <p className=" line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {project.overview} Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Eum dolores quo iste
                  atque porro dolorum praesentium error accusamus,
                  ullam hic eos iure vero mollitia. Voluptatum aliquid
                  corrupti dicta cupiditate quia.
                </p>

                <div className="bg-transparent bottom-5 flex flex-wrap pt-5">
                  {project?.technologies?.map((tech) => (
                    <div
                      key={tech?._id}
                      className="px-1.5 py-1 mr-2 dark:text-white bg-[#808dad68] rounded-md my-0.5">
                      {tech.title}
                    </div>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="relative group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500">
                  Learn More!
                  <span className="block transition-all group-hover:ms-0.5">
                    &rarr;
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjectsPage;
