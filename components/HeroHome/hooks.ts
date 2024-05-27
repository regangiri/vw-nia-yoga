'use client';
import { useEffect, useState } from 'react';

const useHeroHome = () => {
  const [brand, setBrand] = useState(true);
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setBrand(false);
    } else {
      setBrand(true);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
  });

  return {
    brand,
  };
};

export default useHeroHome;
