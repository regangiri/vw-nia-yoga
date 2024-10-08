import React, { useState } from 'react';

const useRsvp = () => {
  const options = [
    { id: 1, value: 'Hadir' },
    { id: 2, value: 'Tidak Hadir' },
  ];

  const jumlahOrang = [
    { id: 1, value: 0 },
    { id: 2, value: 1 },
    { id: 3, value: 2 },
  ];
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [receptionName, setReceptionName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [receptionTelephone, setReceptionTelephone] = useState('');
  const [totalGuest, setTotalGuest] = useState(jumlahOrang[0]);
  const [receptionTotalGuest, setReceptionTotalGuest] = useState(
    jumlahOrang[0]
  );
  const [confirmation, setConfirmation] = useState(options[0]);
  const [receptionConfirmation, setReceptionConfirmation] = useState(
    options[0]
  );

  return {
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
    receptionName,
    setReceptionName,
    receptionTelephone,
    setReceptionTelephone,
    receptionTotalGuest,
    setReceptionTotalGuest,
    receptionConfirmation,
    setReceptionConfirmation,
  };
};

export default useRsvp;
