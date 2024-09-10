'use client';
import BrideGroom from '@/components/BrideGroom/BrideGroom';
import Footer from '@/components/Footer/Footer';
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
import { Suspense, useState } from 'react';

export default function Home() {
  const [isLanding, setIsLanding] = useState(true);

  const handleClick = () => {
    setIsLanding(false);
  };

  if (isLanding) {
    return (
      <Suspense>
        <Landing btnAction={handleClick} />
      </Suspense>
    );
  }

  return (
    <div>
      <Navbar />
      <HeroHome />
      <BrideGroom />
      <Rsvp />
      {/* <Livestream /> */}
      <Gift />
      <Guestbook />
      <ImageGallery />
      <Thankyou />
      <Footer />
      <MusicPlayer />
    </div>
  );
}
