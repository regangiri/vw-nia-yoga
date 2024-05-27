'use client';
import { useEffect, useState } from 'react';
import { ImagesStock } from './ImagesStock';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useImageGallery = () => {
  const { ref, inView } = useInView();
  const titleAnimation = useAnimation();
  const videoAnimation = useAnimation();
  const [openModal, setOpenModal] = useState(false);
  const [indexNow, setIndexNow] = useState(0);

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
      videoAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      });
    }
    if (!inView) {
      titleAnimation.start({
        y: 0,
        opacity: 0,
      });
      videoAnimation.start({
        opacity: 0,
      });
    }
  }, [inView]);

  const images = [
    {
      id: 1,
      name: 'our moments',
      src: ImagesStock.ourmoment1,
    },
    {
      id: 2,
      name: 'our moments',
      src: ImagesStock.ourmoment2,
    },
    {
      id: 3,
      name: 'our moments',
      src: ImagesStock.ourmoment3,
    },
    {
      id: 4,
      name: 'our moments',
      src: ImagesStock.ourmoment4,
    },
    {
      id: 5,
      name: 'our moments',
      src: ImagesStock.ourmoment5,
    },
    {
      id: 6,
      name: 'our moments',
      src: ImagesStock.ourmoment6,
    },
    {
      id: 7,
      name: 'our moments',
      src: ImagesStock.ourmoment7,
    },
    {
      id: 8,
      name: 'our moments',
      src: ImagesStock.ourmoment8,
    },
    {
      id: 9,
      name: 'our moments',
      src: ImagesStock.ourmoment9,
    },
    {
      id: 10,
      name: 'our moments',
      src: ImagesStock.ourmoment10,
    },
    {
      id: 11,
      name: 'our moments',
      src: ImagesStock.ourmoment11,
    },
    {
      id: 12,
      name: 'our moments',
      src: ImagesStock.ourmoment12,
    },
    {
      id: 13,
      name: 'our moments',
      src: ImagesStock.ourmoment13,
    },
    {
      id: 14,
      name: 'our moments',
      src: ImagesStock.ourmoment14,
    },
    {
      id: 15,
      name: 'our moments',
      src: ImagesStock.ourmoment15,
    },
    {
      id: 16,
      name: 'our moments',
      src: ImagesStock.ourmoment16,
    },
    {
      id: 17,
      name: 'our moments',
      src: ImagesStock.ourmoment17,
    },
  ];
  return {
    ref,
    titleAnimation,
    videoAnimation,
    images,
    setOpenModal,
    setIndexNow,
    indexNow,
  };
};

export default useImageGallery;
