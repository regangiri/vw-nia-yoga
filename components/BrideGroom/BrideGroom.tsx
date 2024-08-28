// import Container from '../components/Container';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ImagesStock } from '../ImageGallery/ImagesStock';
import useBrideGroom from './hooks';
import Link from 'next/link';

export default function BrideGroom() {
  const { animation, brideAnimation, brideGroomLayout, ref } = useBrideGroom();
  return (
    <div className="bride-groom-section text-palewhite min-h-screen snap-center">
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
              &quot;So they are no longer two, but one flesh. Therefore what God
              has joined together, let no one separate.&quot;
            </p>
          </motion.span>
          <motion.span
            animate={brideGroomLayout}
            className="text-center text-md md:text-base pt-2 font-baskervville"
          >
            <span>Matthew 19:6 (NET)</span>
          </motion.span>

          <div
            ref={ref}
            className="flex lg:flex-row flex-col  lg:gap-x-52 pt-24"
          >
            <motion.div
              animate={animation}
              className="text-center mb-16 lg:mb-0"
            >
              <div className="mb-4 lg:h-72 lg:w-72 h-64 w-64 mx-auto relative">
                <Image
                  src={ImagesStock.bride}
                  alt="Bride"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h1 className="font-baskervville pb-1 text-secondary font-medium text-3xl">
                Advenia Pratiwi Cintya Arini
              </h1>
              <p className="font-baskervville text-sm md:text-sm">
                Daughter of Mr. Harry S. Halim & Mrs. Sutarni
              </p>
              <div className="flex items-center justify-center my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D2E4E8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <Link
                  href="https://www.instagram.com/giselladvenia/"
                  target="_blank"
                >
                  <span className="pl-1">giselladvenia</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              animate={brideAnimation}
              ref={ref}
              className="text-center"
            >
              <div className="mb-4 lg:h-72 lg:w-72 h-64 w-64 mx-auto relative rounded-full overflow-hidden">
                <Image
                  src={ImagesStock.groom}
                  alt="Groom"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>

              <h1 className="font-baskervville pb-1 font-medium text-3xl text-secondary">
                Hizkia Yoga Wicaksana{' '}
              </h1>
              <p className="font-baskervville text-sm md:text-sm">
                Son of Mr. Salar (✝) & Mrs. Christina Miyarti
              </p>
              <div className="flex items-center justify-center my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D2E4E8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <Link
                  href="https://www.instagram.com/hizkia_yoga/"
                  target="_blank"
                >
                  <span className="pl-1">hizkia_yoga</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
