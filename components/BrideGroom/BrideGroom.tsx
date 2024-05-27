// import Container from '../components/Container';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ImagesStock } from '../ImageGallery/ImagesStock';
import useBrideGroom from './hooks';

export default function BrideGroom() {
  const { animation, brideAnimation, brideGroomLayout, ref } = useBrideGroom();
  return (
    <div className="bride-groom-section text-palewhite">
      <div>
        <div className="flex flex-col items-center py-16 px-4 ">
          <motion.h1
            animate={brideGroomLayout}
            className="ig-target font-baskervville tracking-wider text-4xl lg:text-6xl text-secondary font-semibold"
          >
            Bride & Groom
          </motion.h1>
          <motion.span
            animate={brideGroomLayout}
            className="text-center text-md md:text-base pt-8 font-baskervville"
          >
            <p>
              Love is patient, love is kind. It does not envy, it does not
              boast, it is not proud. It always protects, <br /> always trusts,
              always hopes, always perseveres.
            </p>
          </motion.span>
          <motion.span
            animate={brideGroomLayout}
            className="text-center text-md md:text-base pt-2 font-baskervville"
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
              <h1 className="font-baskervville pb-1 text-secondary font-medium text-3xl">
                Kelvin Christiandy Sutiono
              </h1>
              <p className="font-baskervville text-sm md:text-sm">
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

              <h1 className="font-baskervville pb-1 font-medium text-3xl text-secondary">
                Sherrish Serafinna Tanudirdjo
              </h1>
              <p className="font-baskervville text-sm md:text-sm">
                Daughter of Mr. Budianto Tanudirdjo & Mrs. Lindy Rustandi
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
