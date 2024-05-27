import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useGift = () => {
  const { ref, inView } = useInView();
  const titleAnimation = useAnimation();
  const qrisAnimation = useAnimation();
  const downloadButtonAnimation = useAnimation();
  // const saveFile = () => {
  //   saveAs('/static/images/niken-qr.jpg', 'niken-qr.jpg');

  // };

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

  return {
    ref,
    inView,
    titleAnimation,
    qrisAnimation,
    downloadButtonAnimation,
  };
};

export default useGift;
