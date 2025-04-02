'use client';
import Image from 'next/image';
import React, { useEffect, useState, useCallback, useMemo } from 'react';

const Intro = () => {
  const phrases = useMemo(
    () => ['Software Developer', 'Fullstack Developer'],
    []
  );
  const [currentPhrase, setCurrentPhrase] = useState('Software Developer');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const tick = useCallback(() => {
    const i = phraseIndex % phrases.length;
    const fullPhrase = phrases[i];
    const updatedPhrase = isDeleting
      ? fullPhrase.substring(0, currentPhrase.length - 1)
      : fullPhrase.substring(0, currentPhrase.length + 1);

    setCurrentPhrase(updatedPhrase);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedPhrase === fullPhrase) {
      setIsDeleting(true);
      setDelta(2000); // Pause at end
    } else if (isDeleting && updatedPhrase === '') {
      setIsDeleting(false);
      setPhraseIndex((prevIndex) => prevIndex + 1);
      setDelta(100); // Pause before typing next
    }
  }, [currentPhrase, isDeleting, phraseIndex, phrases]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [tick, delta]);

  return (
    <div id="intro" className="bg-gray-900 py-10 lg:py-30 lg:px-30">
      <div className="container mx-auto flex flex-col lg:flex-row items-center pt-15">
        <div className="w-full lg:w-1/2 flex items-start px-4 lg:px-0">
          <Image
            className="rounded-full w-[120px] h-[120px] object-cover"
            src="/my.png"
            width={200}
            height={200}
            alt="jasim_Image"
            loading="lazy"
          />
          <div className="ml-6 flex flex-col justify-center">
            <div className="text-white text-2xl lg:text-3xl">Hello!</div>
            <div className="text-white text-2xl lg:text-4xl mt-2">I&apos;m Jasim</div>
            <div className="text-white text-2xl lg:text-4xl">Zainudheen</div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 px-4 lg:px-0 lg:ml-10">
          <div className="text-blue-400 text-2xl lg:text-4xl mb-4">
            {currentPhrase}
            <span className="animate-blink">|</span>
          </div>
          <div className="text-gray-400 max-w-md space-y-2">
            <p>Passionate about crafting seamless user experiences through highly scalable and efficient software solutions</p>
          </div>
          <div className="mt-8 space-x-4">
            <a
              className="px-4 py-2 bg-blue-400 text-black rounded-lg hover:bg-blue-300 transition-colors"
              href="#journey"
            >
              My story
            </a>
            <a
              className="px-4 py-2 text-white border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
              href="#"
            >
              See my work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
