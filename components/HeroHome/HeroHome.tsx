import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Countdown from '../Countdown/Countdown';
import { Clock } from 'phosphor-react';
import useHeroHome from './hooks';

export default function HeroHome() {
  const { brand } = useHeroHome();
  return (
    <div className="relative header bg-fixed overflow-hidden h-screen text-palewhite flex justify-center ">
      <div className="relative md:pt-6 pb-16 sm:pb-24">
        {brand && (
          <div className="bg-transparent sticky top-0 md:h-12 z-50 h-16 flex items-center justify-center">
            <div className="md:flex md:space-x-10 md:justify-center justify-center py-3">
              <div className="relative w-48 md:w-72 h-24 pt-5 md:pt-3.5">
                <Image
                  src="/images/logoputih.png"
                  className="object-cover"
                  fill
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
        <main className="mt-36 mx-auto max-w-7xl px-4 ">
          <div className="text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.5,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,

                  transition: {
                    delay: 0.5,
                    duration: 0.5,
                  },
                },
              }}
            >
              <h1 className="text-sm tracking-tight md:text-xl font-bold">
                <span className="block xl:inline font-baskervville tracking-wider">
                  Wedding Invitation
                </span>
              </h1>
              <h1 className="font-baskervville text-5xl lg:text-6xl py-4 text-secondary text-shadow-lg">
                Kelvin & Sherrish
              </h1>
              <p className="font-baskervville text-lg font-bold tracking-wider">
                27 July 2024 | 18:30 WIB (GMT +7)
              </p>

              <div className="mt-5  max-w-md mx-auto sm:flex sm:justify-center justify-center md:mt-8 hover:cursor-pointer">
                <div className="rounded-md  flex justify-center">
                  <Link
                    href={`https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NTY2aXFyNTg5MjBubHQ0NXZrc2Y4MTdkMDcgOHByZzZydmltcGU0Yzk0cDUxNzZxa3JsbXNAZw&tmsrc=8prg6rvimpe4c94p5176qkrlms%40group.calendar.google.com`}
                    target="_blank"
                  >
                    <span className="md:w-full lg:w-full text-center w-64 flex items-center space-x-2 justify-center px-8 py-3  border border-secondary bg-secondary  text-base font-medium rounded-md text-primary  hover:backdrop-blur-xl hover:bg-transparent hover:text-secondary md:py-2 md:text-lg md:px-10">
                      <Clock weight="fill" size={24} />
                      <span className="hover:cursor-pointer font-baskervville font-bold">
                        Remind me
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0,
                },
                visible: {
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.7,
                  },
                },
              }}
            >
              <div className="mt-3 max-w-md mx-auto sm:flex sm:justify-center justify-center md:mt-5">
                <Countdown />
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
