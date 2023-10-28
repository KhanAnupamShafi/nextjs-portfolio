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
  return (
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
            className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-indigo-800 shadow-teal-100">
            <div className="h-56 w-full relative">
              <Image
                fill
                src={urlFor(project.image).url()}
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
                {project.overview}
              </p>

              <a
                href={project.link}
                target="_blank"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500">
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
  );
};

export default MyProjectsPage;
