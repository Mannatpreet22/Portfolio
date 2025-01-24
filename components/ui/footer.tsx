import React from 'react';

export default function Footer() {
  return (
    <footer 
      className="bg-black text-gray-300 py-6 px-4 flex flex-col md:flex-row 
                 md:items-center md:justify-between"
    >
      {/* Left Section (e.g. copyright) */}
      <div className="w-full mb-4 md:mb-0 flex justify-center items-center">
        <p className="text-lg">
          &copy;  Mannatpreet Singh Khurana.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}