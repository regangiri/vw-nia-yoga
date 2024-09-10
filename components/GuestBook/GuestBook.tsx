import { motion } from 'framer-motion';
import Modal from '../Modal/Modal';
import useGuestBook from './hooks';

export default function Guestbook() {
  const {
    guestData,
    showModal,
    guestbookAnimation,
    titleAnimation,
    messageAnimation,
    handleSubmit,
    ref,
    setMessage,
    setName,
    setShowModal,
  } = useGuestBook();
  return (
    <div className="relative font-baskervville">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative mx-auto lg:grid lg:grid-cols-12">
        <div
          ref={ref}
          className="bg-primary py-10 px-6 sm:px-6 lg:col-span-5 lg:px-14 lg:py-16 xl:pr-12"
        >
          <div className="max-w-lg mx-auto lg:max-w-none">
            <motion.h1
              animate={titleAnimation}
              className="text-4xl font-baskervville font-semibold text-secondary pb-10"
            >
              Guestbook
            </motion.h1>
            <form
              onSubmit={handleSubmit}
              action="#"
              method="POST"
              className="grid grid-cols-1 gap-y-6"
            >
              <motion.div animate={guestbookAnimation}>
                <label htmlFor="name" className="sr-only">
                  Full name
                </label>
                <input
                  required
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  maxLength={30}
                  name="name"
                  id="name"
                  autoComplete="off"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                  placeholder="Full name"
                />
              </motion.div>

              <motion.div animate={guestbookAnimation}>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  autoComplete="off"
                  maxLength={150}
                  required
                  onChange={(event) => setMessage(event.target.value)}
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                  placeholder="Write your message here"
                  defaultValue={''}
                />
              </motion.div>
              <motion.div animate={guestbookAnimation}>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-primary bg-secondary hover:bg-primary hover:border-secondary hover:backdrop-blur-md hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                >
                  Submit
                </button>
              </motion.div>
            </form>
          </div>
        </div>
        <div
          className={`${
            guestData?.length > 0 ? 'block' : 'hidden lg:block'
          } wishes-box py-10 lg:col-span-7 lg:py-16  xl:pl-12`}
        >
          <div className="overflow-y-scroll px-6 h-96  lg:pl-10 xl:pl-0 scrollbar-hide">
            {guestData &&
              guestData.map((guest: any, index: number) => {
                return (
                  <motion.div
                    animate={messageAnimation}
                    className="flex items-center pb-4"
                    key={index}
                  >
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://ui-avatars.com/api/?name=${guest.name}`}
                        alt=""
                      />
                    </div>
                    <div className="ml-4 sm:w-72 md:w-3/4 lg:w-3/5">
                      <div className="text-sm leading-5 font-medium text-accent break-words">
                        {guest.name}
                      </div>
                      <div className="mt-0 text-sm leading-5 text-palewhite break-words">
                        {guest.message}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </div>

      <Modal
        open={showModal}
        setOpen={setShowModal}
        title="Message has been sent!"
        description={
          'Thank you for the wishes and prayers. Your message should appear in message box shortly'
        }
      />
    </div>
  );
}
