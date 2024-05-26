import Image from 'next/image';
import { motion } from 'framer-motion';
import { EnvelopeSimpleOpen } from 'phosphor-react';

export default function Landing({ btnAction }: any) {
  return (
    <div className="relative landing bg-cover overflow-hidden h-screen text-white flex justify-center items-center">
      <motion.div
        animate="visible"
        initial="hidden"
        variants={{
          visible: {
            opacity: 1,
            transition: {
              duration: 2,
            },
          },
          hidden: {
            opacity: 0,
          },
        }}
        className="absolute top-0 left-2 w-12 h-24 max-w-md mx-auto sm:flex sm:justify-center justify-center"
      >
        <Image
          src="/images/ks-logo-white.png"
          fill
          className="object-contain"
          alt=""
        />
      </motion.div>
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-16 sm:mt-24">
          <div className="text-center">
            <motion.h1
              animate="visible"
              initial="hidden"
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 2,
                  },
                },
                hidden: {
                  y: -100,
                  opacity: 0,
                },
              }}
              className="text-lg tracking-tight flex flex-col lg:text-2xl"
            >
              <span className="block text-palewhite xl:inline drop-shadow-xl font-semibold text-base md:text-2xl my-3 tracking-[0.2em] font-baskervville">
                THE WEDDING OF
              </span>
            </motion.h1>

            <motion.div
              animate="visible"
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 2,
                  },
                },
                hidden: {
                  opacity: 0,
                },
              }}
              className="w-64 md:w-80 mt-7 max-w-lg mx-auto sm:flex sm:justify-center justify-center md:mt-8"
            >
              <span className="text-6xl lg:text-7xl font-baskervville tracking-wider">
                Kelvin & Sherrish
              </span>
            </motion.div>
            <motion.p
              animate="visible"
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 2,
                  },
                },
                hidden: {
                  opacity: 0,
                },
              }}
              className="mt-4 text-white font-bold tracking-widest text-sm lg:text-xl font-baskervville"
            >
              Valid for 2 people
            </motion.p>
            <motion.div
              animate="visible"
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 2,
                  },
                },
                hidden: {
                  opacity: 0,
                },
              }}
              className="mt-1 max-w-md mx-auto b sm:flex sm:justify-center justify-center md:mt-12"
            >
              <div
                className="rounded-md  flex justify-center"
                onClick={btnAction}
              >
                <a className="md:w-full lg:w-full text-center w-64 flex items-center space-x-4 justify-center px-8 py-3  border border-accent  backdrop-blur-md text-base font-medium rounded-md text-white  hover:bg-white hover:text-black md:py-2 md:text-lg md:px-10 cursor-pointer font-sans">
                  <span className="font-baskervville">Be Our Guest</span>
                  <EnvelopeSimpleOpen size={24} weight="bold" />
                </a>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
