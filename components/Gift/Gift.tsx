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
          className="text-4xl lg:text-6xl font-baskervville font-semibold drop-shadow-sm drop text-primary mb-8"
        >
          Gift
        </h1>
        <span className="font-sans text-xl text-primary pb-4">
          In our day of love, your presence is a present for us!
        </span>
        <span className="font-sans text-base pb-24 text-primary">
          If you wish to share some blessings through digital platform, we
          welcome your love with our utmost gratitude.
        </span>
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-36 w-full text-primary">
          <div className="flex flex-col text-lg mb-8 md:mb-0">
            <span>BCA a.n. Advenia Pratiwi Cintya</span>
            <span>5485095184</span>
          </div>
          <div className="flex flex-col text-lg">
            <span>BNI a.n. Hizkia Yoga Wicaksana</span>
            <span>0776860962</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gift;
