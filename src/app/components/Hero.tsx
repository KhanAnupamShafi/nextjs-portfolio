'use client';

import { Cursor } from 'react-simple-typewriter';
// import { urlFor } from "@/sanity";
import { urlFor } from '@/lib/sanityClient';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import TypeWriter from './TypeWriter';
import BackgroundCircles from './ui/BackgroundCircle';
type Props = {
  info: MyPageInfo[];
};

const Hero = ({ info }: Props) => {
  const data = info[0] || [];
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1 }}
      className="h-screen z-0 flex flex-col space-y-4 pt-12 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <Image
        className="relative rounded-full h-40 w-32 mx-auto object-cover z-0"
        height={420}
        width={400}
        src={urlFor(data?.heroImage).url()}
        alt="hero image"
      />
      <div className="absolute top-[22%] h-auto py-10 lg:py-20 -z-10">
        <div className='className="absolute -right-16 md:-right-64 top-52 md:top-0 lg:bottom-36 w-1/3 2xl:w-1/4 pointer-events-none'>
          <Image
            className="animate-spin"
            src="https://harshgoel.me/images/vectors/circle-spin.svg"
            alt="Circle Vector"
            fill
          />
        </div>
        <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
          <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
            <div className="items-center w-3/4 relative">
              <div className='className="block absolute right-0 top-0 w-20 md:w-16 lg:w-52 opacity-60"'>
                <Image
                  src="https://harshgoel.me/images/vectors/boxes.svg"
                  alt="Box Vector"
                  fill
                />
              </div>

              <div className="sm:ml-52 xl:ml-96">
                <a href="/work">
                  <div className="w-14 mt-10 sm:mt-0 transform-all animate-translateright">
                    <Image
                      className="transform translate-y-[100%] translate-x-[2%] "
                      src="https://harshgoel.me/images/vectors/arrows-right.svg"
                      alt="Next"
                      fill
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-6 invisible sm:visible">
            <div className="w-[10px]  p-10 sm:p-24 md:p-4 lg:p-24">
              <Image
                className="w-5 scale-y-[0.47] scale-x-[0.6] animate-pulse left-0 top-0 p-10 sm:p-36 md:p-4 lg:p-24 mr-24 transform -translate-y-[44%] -translate-x-[2%] -rotate-12 -z-0"
                src="https://harshgoel.me/images/companies/headout.svg"
                alt="Works at"
                fill
              />
            </div>
          </div>
        </div>
      </div>

      <div className="z-20 flex flex-col items-center">
        <h2 className="text-sm md:text-base lg:text-lg uppercase text-gray-500 pb-5 tracking-[8px] md:tracking-[12px] lg:tracking-[15px]">
          {data?.role}
        </h2>

        <h1 className="flex items-center">
          <TypeWriter />
          <Cursor
            cursorColor="#F7AB0A"
            cursorStyle={
              <div className="inline text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
                |
              </div>
            }
          />
        </h1>

        <div className="pt-10"></div>
      </div>
    </motion.div>
  );
};

export default Hero;
