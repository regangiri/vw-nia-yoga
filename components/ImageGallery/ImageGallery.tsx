// import React from "react";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
// import storyImg from '../../public/assets/images/story.png';
// import NewModal from "./NewModal";
import Image from 'next/image';
import { ImagesStock } from './ImagesStock';

export default function ImageGallery() {
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

  return (
    <div
      ref={ref}
      className="w-full bg-palewhite pb-6 overlflow-hidden text-md text-center flex flex-col items-center"
    >
      <motion.h1 className="text-3xl xxs:text-4xl sm:text-5xl text-secondary text-center py-6 font-baskervville">
        Our Cherished Moment
      </motion.h1>
      <div className="flex flex-col items-center lg:pb-0 w-full lg:w-1/2 justify-center video-container mb-5">
        <iframe
          className="relative m-auto w-full  rounded-md shadow-lg"
          src="https://www.youtube.com/embed/xh0EdUg0Lgk?si=qQ3OrrZ54KMVs0Re"
          height="500"
          // width="600"
          style={{ border: 0 }}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <motion.div className="images-container relative w-full gap-1 md:gap-3 columns-4">
        {images.map((image, index) => {
          return (
            <Image
              key={image.id}
              width={500}
              height={500}
              src={image.src}
              className="mb-1 md:mb-3 mx-auto"
              loading="lazy"
              alt="loading"
              onClick={() => {
                setOpenModal(true);
                setIndexNow(index);
              }}
            />
          );
        })}
      </motion.div>
      {/* <NewModal open={openModal} setOpen={setOpenModal}>
        <div className="groom-bride-image mb-4 w-full h-full max-w-lg mx-auto relative">
          <img
            src={images[indexNow].src}
            alt="image"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </NewModal> */}
    </div>
  );
}
