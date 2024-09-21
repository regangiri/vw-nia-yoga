// import React from "react";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Image from 'next/image';
import { ImagesStock } from './ImagesStock';
import useImageGallery from './hooks';

export default function ImageGallery() {
  const {
    ref,
    titleAnimation,
    videoAnimation,
    images,
    setIndexNow,
    setOpenModal,
    indexNow,
  } = useImageGallery();
  return (
    <div
      ref={ref}
      className="w-full bg-palewhite pb-6 overflow-hidden text-md text-center flex flex-col items-center"
    >
      <motion.h1 className="text-3xl xxs:text-4xl sm:text-5xl text-primary text-center py-6 font-baskervville">
        Our Cherished Moments
      </motion.h1>

      <motion.div className="images-container relative w-full gap-1 md:gap-3 lg:gap-2 !columns-3">
        {images.map((image, index) => {
          return (
            <Image
              key={image.id}
              width={500}
              height={500}
              src={image.src}
              className="pb-1 md:pb-3 mx-auto"
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
