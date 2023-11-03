'use client';

// import Swiper and modules styles

import { urlFor } from '@/lib/sanityClient';
import {
  motion,
  useAnimation,
  useMotionValue,
  useMotionValueEvent,
} from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {
  projects: Project[];
};
//w-full transition   ease-in-out  scale-100 group-hover:scale-110
const Featured = ({ projects }: Props) => {
  const motionValue = useMotionValue(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const controls = useAnimation();

  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2 },
      });
    } else {
      controls.start({ opacity: 0, y: -200 });
    }
  }, [inView, controls]);

  useMotionValueEvent(motionValue, 'animationStart', () => {
    setAnimationComplete(false);
  });

  useMotionValueEvent(motionValue, 'animationComplete', () => {
    setAnimationComplete(true);
  });
  return (
    <>
      <div className="box">
        <h1 className="heading">Project Gallery</h1>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          // direction="horizontal"
          spaceBetween={66}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1} // Display only one slide on mobile
          breakpoints={{
            640: {
              slidesPerView: 2, // Display one slide on screens wider than 640px
            },
            768: {
              slidesPerView: 3, // Display three slides on screens wider than 768px
            },
          }}
          initialSlide={1}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            enabled: true,
          }}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          className="swiper_container">
          {projects?.map((project) => {
            const { theme, technologies } = project;
            return (
              <SwiperSlide key={project._id}>
                <motion.img
                  animate={{
                    y: 0,
                    opacity: inView ? 1 : 0,
                    transition: { duration: 1.2 },
                  }}
                  style={{
                    y: motionValue,
                    backgroundColor: theme?.hex || 'black',
                  }}
                  initial={{ y: -200, opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  src={urlFor(project.image).url()}
                  alt={project.title}
                  className={`object-contain h-full w-full top-0`}
                />
                <div className="w-10 absolute text-2xl -top-2 flex items-start justify-center rounded-3xl h-full z-2 cursor-pointer"></div>
                <div className="absolute grid place-items-center text-2xl bottom-5 px-5 bg-[#291720b9]">
                  <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#04A777] to-[#51FBC8]">
                    {project.title}
                  </h1>
                </div>

                {animationComplete && (
                  <Link
                    href={`/my-projects/${project._id}`}
                    target="_blank"
                    className="absolute flex items-center justify-center top-8 rounded-3xl overflow-hidden opacity-0 hover:opacity-100 bg-[#04A777]/60 transition-opacity duration-150 ease-in w-full h-full z-2 cursor-pointer">
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
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                    <div className="bg-transparent flex flex-wrap pt-5 absolute top-0 p-5">
                      {project?.technologies?.map((tech) => (
                        <div
                          key={tech?._id}
                          className="px-1.5 py-1 mr-2 dark:text-white bg-[#291720] rounded-md my-0.5">
                          {tech.title}
                        </div>
                      ))}
                    </div>
                  </Link>
                )}

                {/* <Image src={slide_image_1} alt="Image of the project" /> */}
              </SwiperSlide>
            );
          })}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow text-[#ffff] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 bg-slate-400 dark:bg-theme-light rounded-full">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="swiper-button-next slider-arrow  text-[#fff]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 bg-slate-400 dark:bg-theme-light rounded-full">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Featured;
