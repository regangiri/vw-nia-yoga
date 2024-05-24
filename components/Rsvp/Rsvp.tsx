'use client';
import { useEffect, useState } from 'react';
import Select from '../Select/Select';
import Modal from '../Modal/Modal';
import useRsvp from './hooks';
import { addRSVP } from '@/helpers/supabase';
// import { addRSVP } from '../helpers/supabase';
// import Select from '../components/Select';
// import Modal from '../components/Modal';

function RSVP() {
  const {
    options,
    jumlahOrang,
    showModal,
    setShowModal,
    name,
    setName,
    telephone,
    setTelephone,
    totalGuest,
    setTotalGuest,
    confirmation,
    setConfirmation,
  } = useRsvp();
  const resetForm = () => {
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '')
    );
    setName('');
    setTelephone('');
    setTotalGuest(jumlahOrang[0]);
    setConfirmation(options[0]);
    // setResepsiRsvp('');
    // setConfirmation(options[0]);
    const inputElement = document.querySelector(
      'input[name="pemberkatan"]:checked'
    ) as HTMLInputElement | null;
    if (inputElement) {
      inputElement.checked = false;
    }

    const inputElementResepsi = document.querySelector(
      'input[name="resepsi"]:checked'
    ) as HTMLInputElement | null;
    if (inputElementResepsi) {
      inputElementResepsi.checked = false;
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addRSVP(name, telephone, totalGuest.value, confirmation);
    setShowModal(true);
    resetForm();
  };
  return (
    <div className="relative py-16">
      <div className="absolute inset-0 lg:bg-gray-50 bg-primary">
        <div className="absolute inset-y-0 left-0 bg-gray-50" />
      </div>
      <div className="relative lg:grid lg:grid-cols-6 lg:mx-48">
        <div className="lg:col-span-12 xl:col-span-3 xl:rounded-l-2xl xl:rounded-r-none lg:rounded-t-2xl text-center py-16 bg-primary text-secondary">
          <h1 className="text-3xl font-typography mb-3 font-semibold">
            Holy Matrimony
          </h1>
          <h1 className="text-3xl font-typography mb-8 font-semibold">
            Gereja Baptis Indonesia Kebayoran
          </h1>
          <p className="font-bold font-typography text-xl tracking-wider mb-8">
            10.00 WIB
          </p>
          <p className="text-white">Jl. Tirtayasa Raya No.1,</p>
          <p className="mb-[35px] text-white">
            Kebayoran Baru, Jakarta Selatan
          </p>
          <div className="relative p-auto">
            <iframe
              className="relative m-auto w-3/4 lg:w-[30rem] md:w-[30rem] rounded-md shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31730.922340519137!2d106.80054131475246!3d-6.21546318789588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1663fa2ed0d%3A0x9b3784773456dfe7!2sKebayoran%20Baptist%20Church!5e0!3m2!1sen!2sid!4v1715851504856!5m2!1sen!2sid"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="lg:col-span-12 py-16  xl:col-span-3 xl:rounded-r-2xl xl:rounded-l-none lg:rounded-b-2xl lg:border px-auto">
          <div className="mx-auto">
            <h1 className="text-3xl mx-auto lg:w-96 w-full text-center relative font-typography mb-8 font-semibold">
              RSVP
            </h1>
            <form
              onSubmit={handleSubmit}
              action="#"
              method="POST"
              className="grid grid-cols-1 gap-y-6 px-10 lg:px-0"
              id="formRSVP"
            >
              <div className="lg:mx-auto md:mx-auto">
                <label htmlFor="name" className="sr-only">
                  Full name
                </label>
                <input
                  autoComplete="off"
                  required
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  className="block shadow-sm lg:w-96 w-full md:w-[500px] py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                  placeholder="Full name"
                />
              </div>
              <div className="lg:mx-auto md:mx-auto">
                <label htmlFor="telephone" className="sr-only">
                  Telephone Number
                </label>
                <input
                  autoComplete="off"
                  required
                  onChange={(event) => setTelephone(event.target.value)}
                  type="number"
                  name="telephone"
                  id="telephone"
                  className="block shadow-sm lg:w-96 w-full md:w-[500px] py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                  placeholder="Telephone number"
                />
              </div>
              <div className="lg:mx-auto md:mx-auto">
                <label htmlFor="total-guest" className="sr-only">
                  Total guest
                </label>
                <div className="mx-auto lg:w-96 w-full md:w-[500px] z-50">
                  <Select
                    selected={totalGuest}
                    setSelected={setTotalGuest}
                    options={jumlahOrang}
                  />
                </div>
              </div>
              <h5 className="py-0 px-0 text-center text-base font-medium font-baskerville">
                Can you attend the Holy Matrimony at the Church ?
              </h5>

              <div
                onChange={(e: any) => {
                  setConfirmation(e.target.value);
                  // console.log('harom');
                }}
                className="mx-auto lg:w-96 w-full md:w-[500px] text-base font-baskerville"
              >
                <input type="radio" id="ya" name="resepsi" value="ya" />
                <label htmlFor="ya" className="mx-1 mr-3 p-2">
                  Yes
                </label>

                <input
                  type="radio"
                  id="tidak"
                  name="resepsi"
                  value="tidak"
                  required
                />
                <label className="mx-1 p-2" htmlFor="tidak">
                  No
                </label>
              </div>
              <div className="mx-auto lg:w-96 w-full md:w-[500px]">
                <button
                  type="submit"
                  className="inline-flex lg:w-96 w-full md:w-[500px] justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-secondary hover:bg-transparent hover:border-secondary hover:backdrop-blur-md hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal
        open={showModal}
        setOpen={setShowModal}
        title="RSVP has been sent!"
        description={'RSVP has been sent.Thank you for your participation.'}
      />
    </div>
  );
}

export default RSVP;
