import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';

const QuoteButton = () => {
  return (
    <div className="flex justify-center mt-4">
      <motion.div
        whileHover={{
          borderColor: 'transparent',
          transition: { duration: 0.5 },
          backgroundColor: 'darken(var(--primary-color), 30%)',
        }}
        className="relative w-[200px] h-[50px] bg-primary-color text-white font-montserrat rounded transition duration-300 shadow-lg border-2 border-primary-color"
      >
        <Button
          className="w-full h-full flex items-center justify-center bg-transparent border-none"
          style={{
            fontFamily: 'Montserrat',
            fontWeight: '600',
          }}
        >
          GET A QUOTE →
        </Button>
        <div className="absolute inset-0 border-animation"></div>
      </motion.div>
    </div>
  );
};

export default QuoteButton;
