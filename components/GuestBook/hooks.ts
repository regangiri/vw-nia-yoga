'use client';
import { getGuestData, sendMessage } from '@/helpers/supabase';
import { useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const useGuestBook = () => {
  const [guestData, setGuestData] = useState<any>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [onSubmitStatus, setOnSubmitStatus] = useState(false);
  const { ref, inView } = useInView();
  const titleAnimation = useAnimation();
  const guestbookAnimation = useAnimation();
  const messageAnimation = useAnimation();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setOnSubmitStatus(true);
    sendMessage({ name, message });
    setShowModal(true);
    resetForm();
  };

  useEffect(() => {
    if (inView) {
      titleAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 2,
          delay: 0.3,
          bounce: 0.5,
        },
      });
      guestbookAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 2,
          bounce: 0.3,
        },
      });
      messageAnimation.start({
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!inView) {
      titleAnimation.start({
        y: -70,
        opacity: 0,
      });
      guestbookAnimation.start({
        x: -200,
        opacity: 0,
      });
      messageAnimation.start({
        x: 500,
        scale: 0,
        opacity: 0,
        transition: {
          duration: 1.2,
        },
      });
    }
  }, [inView]);

  const resetForm = () => {
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '')
    );
    Array.from(document.querySelectorAll('textarea')).forEach(
      (input) => (input.value = '')
    );
    setName('');
    setMessage('');
  };

  useEffect(() => {
    getGuestData().then((data) => {
      setGuestData(data);
    });
  }, []);

  useEffect(() => {
    getGuestData().then((data) => {
      setGuestData(data);
      setOnSubmitStatus(false);
    });
  }, [onSubmitStatus]);

  return {
    titleAnimation,
    guestbookAnimation,
    messageAnimation,
    guestData,
    showModal,
    setShowModal,
    ref,
    handleSubmit,
    setName,
    setMessage,
  };
};

export default useGuestBook;
