import React from 'react';
import { motion } from 'framer-motion';
import useGift from './hooks';

const Gift = () => {
  const {
    downloadButtonAnimation,
    inView,
    qrisAnimation,
    ref,
    titleAnimation,
  } = useGift();

  return (
    <div className=" bg-palewhite px-4 pt-12 pb-24 sm:px-6 lg:px-8 w-full">
      <div className="flex flex-col justify-center text-center">
        <h1
          //   animate={titleAnimation}
          className="text-4xl lg:text-6xl font-baskervville font-semibold drop-shadow-sm drop text-[#816f5A] mb-8"
        >
          Gift
        </h1>
        <span className="font-sans text-xl text-[#816F5A]">
          In our day of love, your presence is a present for us!
        </span>
        <span className="font-sans text-base pb-24 text-[#816F5A]">
          If you wish to share some blessings through digital platform, we
          welcome your love with our utmost gratitude.
        </span>
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-36 w-full text-[#816F5A]">
          <div className="flex flex-col text-lg mb-8 md:mb-0">
            <span>BCA a.n. Kelvin Christiandy Sutiono</span>
            <span>7130374497</span>
          </div>
          <div className="flex flex-col text-lg">
            <span>Mandiri a.n. Sherrish Serafinna Tanudirdjo</span>
            <span>1170010926277</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gift;
