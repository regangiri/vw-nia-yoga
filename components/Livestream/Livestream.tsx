import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

function Livestream() {
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

  return (
    <div ref={ref} className="livestream-container text-palewhite py-16">
      <motion.h1
        animate={titleAnimation}
        className=" text-secondary font-semibold text-4xl lg:text-6xl pb-3 sm:mx-10 text-center font-italiano pt-2"
      >
        Livestream
      </motion.h1>
      <motion.div
        animate={titleAnimation}
        className="livestream-message text-center pt-7 pb-5  px-4 sm:text-lg sm:pt-9 sm:px-16  text-sm font-serif"
      >
        <p className="pb-6">
          As much as we&apos;d love all of you to attend our celebration in
          person, we understand that some conflict in schedule might hinder your
          presence in our holy matrimony. We sincerely appreciate your love and
          support and hope that you could join us from afar through the
          following link as we exchange our vows of a lifetime.
        </p>
      </motion.div>
      <div className="pt-12 flex md:flex-row flex-col justify-center px-8 gap-4">
        <div className="flex flex-col justify-center w-full lg:w-1/2 items-center description-container">
          <motion.div
            animate={livestreamDescriptionAnimation}
            className="holy-matrimony-detail text-center font-serif text-base sm:text-2xl"
          >
            <h3>Virtual Holy Matrimony</h3>
            <h2 className="pb-5">Kelvin & Sherrish</h2>
            <p>Saturday, July 27th 2024</p>
            <p className="pb-5">10:00 WIB - Finish</p>

            <p>Gereja Baptis Indonesia Kebayoran</p>
          </motion.div>
        </div>
        <motion.div
          animate={youtubeVideoAnimation}
          className="flex justify-center text-center flex-col items-center pb-12 lg:pb-0 w-full lg:w-2/3 video-container mb-5"
        >
          <iframe
            className="relative m-auto w-full my-10 rounded-md shadow-lg"
            src="https://www.youtube.com/embed/6gR8jmIWPTk"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}

export default Livestream;
