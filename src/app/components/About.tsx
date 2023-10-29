'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Img from '../../assets/about.png';
import Triangle from '../../assets/triangle.svg';
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row  px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 sm:top-24 uppercase tracking-[20px] -mr-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <div className="grid grid-cols-12 gap-4  h-[84.5vh] ml-4 sm:mx-12 md:mx-16 w-full">
        <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
          <div className="items-center w-3/4 -mt-20 relative">
            <Image
              src={Triangle}
              alt="Triangle 3d Vector"
              className="hidden md:block relative -right-0 bottom-0 w-2/3 md:w-28 motion-safe:animate-[spin_6s_infinite]"
            />
            <div className="flex items-center mb-5">
              <hr className="w-16 sm:w-24 mr-1 border-violet" />
              <h4 className="font-light gradient-text text-sm md:text-7xl">
                Who am I?
              </h4>
            </div>
            <h5 className="text-xl font-light text-violet text-justify">
              &ldquo;A fresher with experience&ldquo;, this line says
              exactly who he is. He is a software developer who crafts
              beautiful web and apps. His perfect balance of technical
              &amp; managerial skills stands him apart from the crowd.
            </h5>
            <div className="grid sm:grid-cols-2 md:grid-cols-none xl:grid-cols-2 gap-4 mt-6">
              <div className="sm:col-span-1 xl:col-span-1">
                <button
                  type="button"
                  className="font-bold px-6 sm:px-4 xl:px-6 py-4 w-64 sm:w-52 md:w-56 2xl:w-60 text-xl h-25 transition-all
              rounded overflow-hidden border-2 border-transparent hover:shadow-light-xl bg-pink-400 text-blue hover:outline-none hover:bg-transparent hover:text-pink-700 hover:border-pink-800 focus:outline-none
             ">
                  Know More
                </button>
              </div>
              <div className="sm:col-span-1 xl:col-span-1">
                <button
                  type="button"
                  className="font-bold px-6 sm:px-4 xl:px-6 py-4 w-64 sm:w-52 md:w-56 2xl:w-60 text-xl h-25 transition-all
              rounded overflow-hidden border-2 border-transparent hover:shadow-light-xl bg-transparent text-blue hover:outline-none hover:bg-transparent hover:text-pink-700 border-pink-700 focus:outline-none
             ">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:col-span-5 lg:col-span-6 text-justify text-white items-center justify-start">
          <div className="m-auto  pointer-events-none text-right">
            <Image
              src={Img}
              alt="Harsh Goel"
              className="w-100 lg:w-[450px] "
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
