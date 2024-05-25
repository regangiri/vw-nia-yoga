import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

function Thankyou() {
  const { ref, inView } = useInView();
  const titleAnimation = useAnimation();
  const thankyouTextAnimation = useAnimation();
  const iconAnimation = useAnimation();

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
      thankyouTextAnimation.start({
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 2,
          bounce: 0.3,
        },
      });
      iconAnimation.start({
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
      thankyouTextAnimation.start({
        scale: 0.5,
        opacity: 0,
      });
      iconAnimation.start({
        x: 0,
        scale: 0.2,
        opacity: 0,
        transition: {
          duration: 1.2,
        },
      });
    }
  }, [inView]);

  return (
    <div className="text-center text-black bg-opacity-100 flex flex-col items-center py-16 thankyou-container">
      <div>
        <div ref={ref} className="px-2">
          <motion.h1
            animate={titleAnimation}
            className="text-4xl lg:text-6xl text-secondary font-baskervville mb-10 font-semibold"
          >
            Thank You
          </motion.h1>
          <motion.p
            animate={thankyouTextAnimation}
            className="my-5 md:my-2 text-base md:text-xl font-sans text-white"
          >
            Your presence and blessings would bring us great honor and joy as we
            begin our new chapter.
          </motion.p>
          <motion.div
            animate={iconAnimation}
            className="flex items-center justify-center flex-col"
          >
            <div className="relative w-64 h-96 items-center">
              <Image
                src="/images/ks-logo-white.png"
                fill
                className="object-contain"
                alt="asd"
              />
            </div>
            <h1 className="mt-10 text-lg sm:text-2xl text-gray-300">
              #SHERlovewithKELV
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Thankyou;
