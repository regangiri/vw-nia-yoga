'use client';
import { useEffect, useState } from 'react';

const useNavbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
  });

  return {
    navbar,
    changeBackground,
  };
};

export default useNavbar;
