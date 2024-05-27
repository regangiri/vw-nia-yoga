'use client';
import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useBrideGroom = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const brideAnimation = useAnimation();
  const brideGroomLayout = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 2,
          delay: 0.3,
          bounce: 0.5,
        },
      });
      brideAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 2,
          delay: 0.3,
          bounce: 0.5,
        },
      });
      brideGroomLayout.start({
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: -70,
        opacity: 0,
      });
      brideAnimation.start({
        y: 70,
        opacity: 0,
      });
      brideGroomLayout.start({
        y: 0,
        scale: 0,
        opacity: 0,
      });
    }
  }, [inView]);

  return {
    brideGroomLayout,
    ref,
    animation,
    brideAnimation,
  };
};

export default useBrideGroom;
