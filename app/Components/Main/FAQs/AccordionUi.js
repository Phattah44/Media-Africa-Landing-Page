'use client';

import React, { useState } from 'react';

const AccordionUi = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='p-2'>
      <div
        className='flex justify-between text-[#040C5E] text-sm'
        onClick={() => setIsActive(!isActive)}
      >
        <div className='font-semibold'>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && (
        <div className='text-[#2b306b] text-xs md:text-sm'>{content}</div>
      )}
    </div>
  );
};

export default AccordionUi;
