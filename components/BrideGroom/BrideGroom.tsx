// import Container from '../components/Container';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import { useAnimation } from 'framer-motion';
import { ImagesStock } from '../ImageGallery/ImagesStock';

export default function BrideGroom() {
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

  return (
    <div className="bride-groom-section text-palewhite">
      <div>
        <div className="flex flex-col items-center py-16 px-4 ">
          <motion.h1
            animate={brideGroomLayout}
            className="ig-target font-italiano tracking-wider text-4xl lg:text-6xl text-secondary font-semibold"
          >
            Bride & Groom
          </motion.h1>
          <motion.span
            animate={brideGroomLayout}
            className="text-center text-md md:text-base pt-8 font-serif"
          >
            <p>
              Love is patient, love is kind. It does not envy, it does not
              boast, it is not proud. It always protects, <br /> always trusts,
              always hopes, always perseveres.
            </p>
          </motion.span>
          <motion.span
            animate={brideGroomLayout}
            className="text-center text-md md:text-base pt-2 font-serif"
          >
            <span>1 Corinthians 13:4, 7 NIV</span>
          </motion.span>

          <div
            ref={ref}
            className="flex lg:flex-row flex-col  lg:gap-x-52 pt-12"
          >
            <motion.div
              animate={animation}
              className="text-center mb-16 lg:mb-0"
            >
              <div className="mb-4 lg:h-72 lg:w-72 h-64 w-64 mx-auto relative">
                <Image
                  src={ImagesStock.groom}
                  alt="Groom"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h1 className="font-typography pb-1 text-secondary font-medium text-3xl">
                Kelvin Christiandy Sutiono
              </h1>
              <p className="font-serif text-sm md:text-sm">
                Son of Mr. Tommy Sutiono & Mrs. Lee Kuan
              </p>
            </motion.div>

            <motion.div
              animate={brideAnimation}
              ref={ref}
              className="text-center"
            >
              <div className="mb-4 lg:h-72 lg:w-72 h-64 w-64 mx-auto relative rounded-full overflow-hidden">
                <Image
                  src={ImagesStock.bride}
                  alt="Bride"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>

              <h1 className="font-typography pb-1 font-medium text-3xl text-secondary">
                Sherrish Serafinna Tanudirdjo
              </h1>
              <p className="font-serif text-sm md:text-sm">
                Daughter of Mr. Budianto Tanudirdjo & Mrs. Lindy Rustandi
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
