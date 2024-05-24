import React from 'react';
import Image from 'next/image';
// import { saveAs } from 'file-saver';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import bankQR from '../../public/static/images/niken-qr.jpg';

const Gift = () => {
  //   const saveFile = () => {
  //     saveAs('/static/images/niken-qr.jpg', 'niken-qr.jpg');
  //   };

  const { ref, inView } = useInView();
  const titleAnimation = useAnimation();
  const qrisAnimation = useAnimation();
  const downloadButtonAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      titleAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 2,
          delay: 0.3,
          bounce: 0.5,
        },
      });
      qrisAnimation.start({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: 'spring',
          duration: 2,
          bounce: 0.3,
        },
      });
      downloadButtonAnimation.start({
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
    if (!inView) {
      titleAnimation.start({
        y: -70,
        opacity: 0,
      });
      qrisAnimation.start({
        x: 0,
        scale: 0.5,
        opacity: 0,
      });
      downloadButtonAnimation.start({
        x: 0,
        scale: 0.5,
        opacity: 0,
        transition: {
          duration: 1.2,
        },
      });
    }
  }, [inView]);

  return (
    <div className=" bg-palewhite px-4 pt-12 pb-24 sm:px-6 lg:px-8 w-full">
      <div className="flex flex-col justify-center text-center">
        <h1
          //   animate={titleAnimation}
          className="text-4xl lg:text-6xl font-italiano font-semibold drop-shadow-sm drop text-secondary mb-8"
        >
          Gift
        </h1>
        <span className="font-sans text-xl">
          In our day of love, your presence is a present for us!
        </span>
        <span className="font-sans text-base pb-24">
          If you wish to share some blessings through digital platform, we
          welcome your love with our utmost gratitude.
        </span>
        <motion.div className="flex-col md:flex-row items-center justify-center gap-36">
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
