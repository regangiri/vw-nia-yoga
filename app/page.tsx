'use client';
import BrideGroom from '@/components/BrideGroom/BrideGroom';
import Gift from '@/components/Gift/Gift';
import Guestbook from '@/components/GuestBook/GuestBook';
import HeroHome from '@/components/HeroHome/HeroHome';
import ImageGallery from '@/components/ImageGallery/ImageGallery';
import Landing from '@/components/Landing/Landing';
import Livestream from '@/components/Livestream/Livestream';
import MusicPlayer from '@/components/Music/MusicPlayer';
import Navbar from '@/components/Navbar/Navbar';
import Rsvp from '@/components/Rsvp/Rsvp';
import Thankyou from '@/components/Thankyou/Thankyou';
import { addRSVP, getGuestData } from '@/helpers/supabase';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLanding, setIsLanding] = useState(true);

  const handleClick = () => {
    setIsLanding(false);
  };

  if (isLanding) {
    return (
      <>
        <Head>
          <title>Kelvin Sherrish Holy Matrimony</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Landing btnAction={handleClick} />
      </>
    );
  }

  return (
    <div>
      <Navbar />
      <HeroHome />
      <BrideGroom />
      <Rsvp />
      <Livestream />
      <Gift />
      <Guestbook />
      <ImageGallery />
      <MusicPlayer />
      <Thankyou />
    </div>
  );
}
