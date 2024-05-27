'use client';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useLivestream = () => {
  const { ref, inView } = useInView();
  const titleAnimation = useAnimation();
  const livestreamDescriptionAnimation = useAnimation();
  const youtubeVideoAnimation = useAnimation();

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
      livestreamDescriptionAnimation.start({
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 2,
          bounce: 0.3,
        },
      });
      youtubeVideoAnimation.start({
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!inView) {
      titleAnimation.start({
        y: -70,
        opacity: 0,
      });
      livestreamDescriptionAnimation.start({
        scale: 0.5,
        opacity: 0,
      });
      youtubeVideoAnimation.start({
        x: 500,
        scale: 0,
        opacity: 0,
        transition: {
          duration: 1.2,
        },
      });
    }
  }, [inView]);

  return {
    ref,
    titleAnimation,
    youtubeVideoAnimation,
    livestreamDescriptionAnimation,
  };
};

export default useLivestream;
