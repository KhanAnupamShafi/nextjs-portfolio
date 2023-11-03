import { urlFor } from '@/lib/sanityClient';
import Image from 'next/image';
import Footer from './Footer';
type Props = {
  project: Project;
};

export default function Detail({ project }: Props): JSX.Element {
  return (
    <>
      {project.video_link && (
        <div className="grid grid-cols-12 h-84.5vh mt-8 text-center lg:mt-0 md:text-left mb-20">
          <div className="md:p-0 px-10 col-span-12 md:col-span-12 lg:col-span-6 flex flex-col justify-center items-center">
            <div className="items-center w-full md:w-3/6 -mt-10 relative ">
              <h1 className="text-3xl sm:text-2xl xl:text-1xl font-extrabold dark:text-white leading-none mb-2">
                Don&apos;t like to read?
              </h1>
              <h5 className="text-xl font-light dark:text-violet text-justify mb-10">
                Well, got you covered. Here&apos;s an awesome video
                for you which walks you through the whole project
              </h5>
            </div>
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-6 flex flex-col justify-center items-center">
            <iframe
              className="m-auto md:w-3/4 md:h-96 md:mx-auto md:text-center"
              src={project.video_link}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="video description"
            />
          </div>
        </div>
      )}
      {project.overview && (
        <div className="text-center mb-10">
          <h1 className="text-xl sm:text-3xl dark:text-white font-bold mb-4">
            Let&apos;s talk about the project
          </h1>
          <p className="text-blue dark:text-violet lg:px-20 mx-auto w-2/3">
            {project.overview}
          </p>
        </div>
      )}
      {project.technologies.length > 0 && (
        <div className="text-center mb-10">
          <h1 className="text-xl sm:text-3xl text-white font-bold mb-8">
            What{' '}
            <span className="dark:text-pink text-red-400">
              Technologies
            </span>{' '}
            are used?
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center text-center">
            {project.technologies.map((tech): JSX.Element => {
              return (
                tech && (
                  <div
                    className="flex flex-col justify-center items-center text-center my-4"
                    key={tech.title}>
                    <Image
                      src={urlFor(tech.image).url()}
                      alt={tech.title}
                      className="mb-2 h-12"
                      width={120}
                      height={120}
                    />
                    <p className="text-theme-light dark:text-violet lg:px-20 text-xl">
                      {tech.title}
                    </p>
                  </div>
                )
              );
            })}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
