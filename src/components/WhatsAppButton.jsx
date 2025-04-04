import React, { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';

export default function WhatsAppButton() {

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative">
      <a
        href="https://api.whatsapp.com/send?phone=5513981618608"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 !z-50 md:hover:scale-110 duration-300 right-4 truncate bg-green-500 text-white w-fit h-fit p-4 rounded-full flex items-center justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <i><BsWhatsapp size={40} /></i>
      </a>
    </div>
  )
}
