'use client'

import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

const Hero = React.memo(() => {
  return (
    <div
    className="flex flex-col items-center gap-10 justify-center pb-10"
    >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-[85vh] min-h-[600px] flex flex-col items-start px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 justify-center relative text-white"
    >
      <motion.video
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        src="/hero_compressed.webm"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        Your browser does not support the video tag. Here is a <a href="/hero.mov">link to the video</a> instead.
      </motion.video>
      <motion.div
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full h-full bg-black/80 z-10"
      ></motion.div>
      <div className="relative z-20 px-4 sm:px-8 md:px-12 lg:px-0 w-full max-w-6xl mx-auto">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.1rem] sm:tracking-[0.2rem] md:tracking-[0.3rem]"
          style={{ fontFamily: '"Merriweather", serif' }}
        >
          RishiRaj Corporation
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl pt-4 sm:pt-6 md:pt-8 lg:pt-10 font-semibold"
        >
          Where Controlled Explosions Drive Unlimited Potential
        </motion.p>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-sm sm:text-base md:text-lg text-gray-300 pt-2 sm:pt-4 max-w-2xl"
        >
          RishiRaj Corporation is a trusted name in explosive mining, offering complete blasting solutions with unmatched expertise. 100% mining. No compromises.
        </motion.p>
        
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="mt-6 sm:mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-300 hover:scale-105 text-sm sm:text-base"
          onClick={() => window.location.href = '/contact'}
        >
          Get a Free Consultation
        </motion.button>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap gap-4 sm:gap-6 mt-8 sm:mt-10 items-center "
        >
          {[
            { value: "30+", label: "Years of Experience" },
            { value: "1000+", label: "Projects Completed" },
            { value: "99.9%", label: "Safety Record" }
          ].map((item, index) => (
            <div key={index} className="text-center px-2 sm:px-0">
              <p className="text-xl sm:text-xl font-bold">{item.value}</p>
              <p className="text-[0.6rem] sm:text-sm">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>


    </motion.div>
          {/* licenses and PESO verification */}
          <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="  bg-gray-200 shadow-xl rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
 py-6 sm:py-8 text-center"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 flex items-center justify-center gap-4">
            <Image
              src="/PESO-Logo-redesign-removebg-preview.png"
              alt="PESO Logo"
              width={64}
              height={64}
              className="h-10 sm:h-16 w-auto"
            />
            <p className="text-sm sm:text-base text-gray-800">
              <span className="font-semibold text-black">Licensed & Verified:</span> All operations are conducted under valid licenses and verified by <span className="font-semibold text-black">PESO (Petroleum and Explosives Safety Organization)</span>.
            </p>
          </div>
        </motion.div>
        </div>
  );
});

Hero.displayName = "Hero";
export default Hero;