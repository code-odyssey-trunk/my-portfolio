'use client';
import Image from 'next/image';
import React, { useEffect, useState, useCallback, useMemo } from 'react';

const Intro = () => {
  const phrases = useMemo(
    () => ['A Software Developer', 'A Fullstack Developer'],
    []
  );
  const [currentPhrase, setCurrentPhrase] = useState('A Software Developer');
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
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <Image
            className="object-cover"
            src="/my.png"
            width={200}
            height={200}
            alt="jasim_Image"
            loading="lazy"
          />
          <div className="ml-10">
            <div className="text-white text-2xl lg:text-3xl mt-4 lg:mt-10">
              Hello!
            </div>
            <div className="text-white text-2xl lg:text-4xl mt-5">I&apos;m Jasim</div>
            <div className="text-white text-2xl lg:text-4xl">Zainudheen</div>
          </div>
        </div>
        <div className="mt-6 lg:mt-0 lg:ml-10 text-center lg:text-left">
          <div className="text-blue-400 text-2xl lg:text-4xl mt-4">
            {currentPhrase}
            <span className="animate-blink">|</span>
          </div>
          <div className="text-gray-400 mt-4">
            Passionate about crafting seamless user experiences through
          </div>
          <div className="text-gray-400">
            highly scalable and efficient software solutions
          </div>
          <div className="mt-6">
            <a
              className="px-4 py-2 bg-blue-400 text-black rounded-lg hover:bg-blue-300 transition-colors"
              href="#journey"
            >
              My story
            </a>
            <a
              className="ml-5 px-4 py-2 text-white border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
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
