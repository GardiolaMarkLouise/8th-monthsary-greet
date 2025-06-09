import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import useSound from 'use-sound';
import loveSong from './assets/love-song.mp3';
import photo from './assets/photo-card.jpg';

const App = () => {
  const [play, { stop }] = useSound(loveSong, { volume: 0.5 });
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 flex flex-col items-center justify-center text-center p-4">
      <Confetti numberOfPieces={showCard ? 300 : 0} />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-pink-800 mb-4"
      >
        Happy 8th Monthsary, Love! 💖
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-lg md:text-xl text-pink-700 max-w-xl mb-6"
      >
        Thank you for 8 months of laughter, growth, and unwavering love. Here's to forever and beyond. 💑
      </motion.p>

      {!showCard ? (
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            play();
            setShowCard(true);
          }}
          className="bg-pink-600 hover:bg-pink-700 text-white text-lg font-medium px-6 py-3 rounded-full shadow-lg transition"
        >
          Open Your Surprise 💌
        </motion.button>
      ) : (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8 bg-white p-4 rounded-2xl shadow-xl w-80"
        >
          <img src={photo} alt="Us" className="rounded-xl mb-4" />
          <p className="text-pink-700 text-base">
            This is just a simple reminder of how much I love you. Cheers to our journey, hand in hand, heart to heart. ❤️
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default App;
