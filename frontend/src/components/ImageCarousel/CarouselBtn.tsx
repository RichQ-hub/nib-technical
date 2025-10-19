'use client';

import React from 'react';

const CarouselBtn = ({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick: () => void;
}) => {
  return (
    <button
      className='group flex items-center gap-2 px-3 py-1 border-[1px] border-cyan-50 rounded-xs font-semibold cursor-pointer hover:border-cyan-500 hover:text-cyan-500 active:scale-95'
      type='button'
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default CarouselBtn