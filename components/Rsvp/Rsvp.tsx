'use client';
import { useEffect, useState } from 'react';
import Select from '../Select/Select';
import Modal from '../Modal/Modal';
import useRsvp from './hooks';
import { addRSVP, addRSVPReception } from '@/helpers/supabase';
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
    receptionConfirmation,
    setReceptionConfirmation,
    receptionName,
    receptionTelephone,
    receptionTotalGuest,
    setReceptionName,
    setReceptionTelephone,
    setReceptionTotalGuest,
  } = useRsvp();
  const resetForm = () => {
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '')
    );
    setName('');
    setReceptionName('');
    setTelephone('');
    setReceptionTelephone;
    setReceptionTotalGuest(jumlahOrang[0]);
    setTotalGuest(jumlahOrang[0]);
    setConfirmation(options[0]);
    setReceptionConfirmation(options[0]);
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
  const handleSubmitReception = (e: any) => {
    e.preventDefault();
    addRSVPReception(
      receptionName,
      receptionTelephone,
      receptionTotalGuest.value,
      receptionConfirmation
    );
    setShowModal(true);
    resetForm();
  };
  return (
    <div className="relative pt-0 md:pt-28">
      <div className="absolute inset-0 bg-gray-50">
        <h1 className="text-4xl lg:text-6xl font-baskervville mb-12 font-semibold text-[#816f5A] text-center py-8 hidden md:block">
          Holy Matrimony
        </h1>
        <div className="absolute inset-y-0 left-0 bg-gray-50" />
      </div>
      <div className="relative lg:grid lg:grid-cols-6 lg:mx-48">
        <div className="lg:col-span-12 xl:col-span-3 xl:rounded-l-2xl xl:rounded-r-none lg:rounded-t-2xl text-center py-16 bg-primary text-secondary">
          <h1 className="text-3xl font-baskervville mb-3 font-semibold">
            Holy Matrimony
          </h1>
          <h1 className="text-3xl font-baskervville mb-8 font-semibold">
            Gereja Baptis Indonesia Kebayoran
          </h1>
          <p className="font-bold font-baskervville text-xl tracking-wider mb-8">
            10.00 WIB
          </p>
          <p className="text-white font-baskervville">
            Jl. Tirtayasa Raya No.1,
          </p>
          <p className="mb-[35px] text-white font-baskervville">
            Kebayoran Baru, Jakarta Selatan
          </p>
          <div className="relative p-auto">
            <iframe
              className="relative m-auto w-3/4 lg:w-[25rem] rounded-md shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31730.922340519137!2d106.80054131475246!3d-6.21546318789588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1663fa2ed0d%3A0x9b3784773456dfe7!2sKebayoran%20Baptist%20Church!5e0!3m2!1sen!2sid!4v1715851504856!5m2!1sen!2sid"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="lg:col-span-12 py-16  xl:col-span-3 xl:rounded-r-2xl xl:rounded-l-none lg:rounded-b-2xl lg:border px-auto">
          <div className="mx-auto">
            <h1 className="text-3xl mx-auto lg:w-96 w-full px-2 text-center relative font-baskervville mb-8 font-semibold text-[#816F5A]">
              Holy Matrimony RSVP
            </h1>
            <form
              onSubmit={handleSubmit}
              action="#"
              method="POST"
              className="grid grid-cols-1 gap-y-6 px-10 lg:px-0"
              id="formRSVP"
            >
              <div className="lg:mx-auto md:mx-auto">
                <label htmlFor="reception-name" className="sr-only">
                  Full name
                </label>
                <input
                  autoComplete="off"
                  required
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  name="reception-name"
                  id="reception-name"
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
              <h5 className="py-0 px-0 text-center text-base font-medium font-baskerville text-[#816F5A]">
                Can you attend the Holy Matrimony at the Church ?
              </h5>

              <div
                onChange={(e: any) => {
                  setConfirmation(e.target.value);
                }}
                className="mx-auto lg:w-96 w-full md:w-[500px] text-base font-baskerville"
              >
                <input type="radio" id="ya" name="resepsi" value="ya" />
                <label htmlFor="ya" className="mx-1 mr-3 p-2 text-[#816F5A]">
                  Yes
                </label>

                <input
                  type="radio"
                  id="tidak"
                  name="resepsi"
                  value="tidak"
                  required
                />
                <label className="mx-1 p-2 text-[#816F5A]" htmlFor="tidak">
                  No
                </label>
              </div>
              <div className="mx-auto lg:w-96 w-full md:w-[500px]">
                <button
                  type="submit"
                  className="inline-flex lg:w-96 w-full md:w-[500px] justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-[#816F5A] bg-secondary hover:bg-transparent hover:border-secondary hover:backdrop-blur-md hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <h1 className="relative text-4xl lg:text-6xl font-baskervville font-semibold text-[#816f5A] text-center pt-8 hidden md:block">
        Wedding Reception
      </h1>
      <div className="absolute inset-y-0 left-0 bg-gray-50" />
      <div className="relative lg:grid lg:grid-cols-6 lg:mx-48 mt-6">
        <div className="lg:col-span-12 xl:col-span-3 xl:rounded-l-2xl xl:rounded-r-none lg:rounded-t-2xl text-center py-16 bg-primary text-secondary">
          <h1 className="text-3xl font-baskervville mb-3 font-semibold">
            Wedding Reception
          </h1>
          <h1 className="text-3xl font-baskervville mb-8 font-semibold">
            OPEN Restaurant - Double Tree
          </h1>
          <p className="font-bold font-baskervville text-xl tracking-wider mb-8">
            18.30 WIB
          </p>
          <p className="text-white font-baskervville">
            Jl. Pegangsaan Timur No.17, Cikini, Jakarta,
          </p>
          <p className="mb-[35px] text-white font-baskervville">
            Cikini, Jakarta Pusat
          </p>
          <div className="relative p-auto">
            <iframe
              className="relative m-auto w-3/4 lg:w-[25rem] rounded-md shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.486547481386!2d106.84073407499025!3d-6.199359293788381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f46b1fa858ff%3A0x40b16030c217653a!2sOPEN%20Restaurant!5e0!3m2!1sen!2sid!4v1716642006606!5m2!1sen!2sid"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="lg:col-span-12 py-16 xl:col-span-3 xl:rounded-r-2xl xl:rounded-l-none lg:rounded-b-2xl lg:border px-auto">
          <div className="mx-auto">
            <h1 className="text-3xl mx-auto lg:w-96 w-full px-2 text-center relative font-baskervville mb-8 font-semibold text-[#816F5A]">
              Wedding Reception RSVP
            </h1>
            <form
              onSubmit={handleSubmitReception}
              action="#"
              method="POST"
              className="grid grid-cols-1 gap-y-6 px-10 lg:px-0"
              id="formRSVP"
            >
              <div className="lg:mx-auto md:mx-auto">
                <label htmlFor="reception-name" className="sr-only">
                  Full name
                </label>
                <input
                  autoComplete="off"
                  required
                  onChange={(event) => setReceptionName(event.target.value)}
                  type="text"
                  name="reception-name"
                  id="reception-name"
                  className="block shadow-sm lg:w-96 w-full md:w-[500px] py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                  placeholder="Full name"
                />
              </div>
              <div className="lg:mx-auto md:mx-auto">
                <label htmlFor="reception-telephone" className="sr-only">
                  Telephone Number
                </label>
                <input
                  autoComplete="off"
                  required
                  onChange={(event) =>
                    setReceptionTelephone(event.target.value)
                  }
                  type="number"
                  name="reception-telephone"
                  id="reception-telephone"
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
                    selected={receptionTotalGuest}
                    setSelected={setReceptionTotalGuest}
                    options={jumlahOrang}
                  />
                </div>
              </div>
              <h5 className="py-0 px-0 text-center text-base font-medium font-baskerville text-[#816F5A]">
                Can you attend the reception at the restaurant ?
              </h5>

              <div
                onChange={(e: any) => {
                  setReceptionConfirmation(e.target.value);
                }}
                className="mx-auto lg:w-96 w-full md:w-[500px] text-base font-baskerville"
              >
                <input type="radio" id="ya" name="resepsi" value="ya" />
                <label htmlFor="ya" className="mx-1 mr-3 p-2 text-[#816F5A]">
                  Yes
                </label>

                <input
                  type="radio"
                  id="tidak"
                  name="resepsi"
                  value="tidak"
                  required
                />
                <label className="mx-1 p-2 text-[#816F5A]" htmlFor="tidak">
                  No
                </label>
              </div>
              <div className="mx-auto lg:w-96 w-full md:w-[500px]">
                <button
                  type="submit"
                  className="inline-flex lg:w-96 w-full md:w-[500px] justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-[#816F5A] bg-secondary hover:bg-transparent hover:border-secondary hover:backdrop-blur-md hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
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
