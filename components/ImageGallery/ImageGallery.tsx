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
      className="w-full bg-palewhite pb-6 overlflow-hidden text-md text-center flex flex-col items-center"
    >
      <motion.h1 className="text-3xl xxs:text-4xl sm:text-5xl text-[#816f5A] text-center py-6 font-baskervville">
        Our Cherished Moments
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
