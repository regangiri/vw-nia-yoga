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
    <div className="relative">
      <div className="absolute inset-0 bg-gray-50">
        <div className="absolute inset-y-0 left-0 bg-gray-50" />
      </div>
      <div className="relative">
        <div className="text-center py-16 bg-primary text-secondary">
          <h1 className="text-3xl font-baskervville mb-6 font-semibold">
            Holy Matrimony
          </h1>
          <h1 className="text-3xl font-baskervville font-semibold">
            Gereja Santo Arnoldus Janssen
          </h1>
          <p className="font-bold font-baskervville text-xl tracking-wider mb-8">
            12.00 WIB
          </p>
          <p className="text-white font-baskervville mb-[35px]">
            Jl. Ir. H. Juanda No. 164, Bekasi
          </p>

          <div className="relative p-auto">
            <iframe
              className="relative m-auto w-3/4 lg:w-[25rem] rounded-md shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.101652313216!2d107.00958247499064!3d-6.250334693738102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698e9044f11f2d%3A0x720d2090cb8963be!2sSaint%20Arnold%20Janssen%20Catholic%20Church!5e0!3m2!1sen!2sid!4v1724849299788!5m2!1sen!2sid"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
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
