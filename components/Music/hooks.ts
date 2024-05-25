import { useEffect, useState } from 'react';

const useMusicPlayer = () => {
  const [audio] = useState<any>(
    typeof Audio !== 'undefined' && new Audio('/musics/lovecanbe.mp3')
  );
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
    audio.loop = true;
  }, [isPlaying, audio]);

  const handleChange = () => {
    setIsPlaying(!isPlaying);
  };

  return {
    audio,
    isPlaying,
    setIsPlaying,
    handleChange,
  };
};

export default useMusicPlayer;
