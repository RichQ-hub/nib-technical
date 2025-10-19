'use client';

import Image from 'next/image';
import React, { use, useState } from 'react';
import CarouselBtn from './CarouselBtn';

const ImageCarousel = ({
  dogImageUrls,
}: {
  dogImageUrls: Promise<string[]>;
}) => {
  const dogImageHrefs = use(dogImageUrls);
  const [currImgIdx, setCurrImgIdx] = useState<number>(0);

  return (
    <>
      {/* Image Figure */}
      <figure className='relative mb-8 h-[500px] bg-stone-950 border-[1px] border-cyan-50'>
        <Image
          className='object-contain'
          src={dogImageHrefs[currImgIdx]}
          alt={dogImageHrefs[currImgIdx]}
          fill
        />
      </figure>

      {/* Scroll Button Group */}
      <div className='flex justify-between items-center'>
        <CarouselBtn
          handleClick={() => setCurrImgIdx(currImgIdx === 0 ? dogImageHrefs.length - 1 : currImgIdx - 1)}
        >
          Previous
        </CarouselBtn>

        {/* Page Number */}
        <p className='font-semibold'>{currImgIdx + 1}/{dogImageHrefs.length}</p>

        <CarouselBtn
          handleClick={() => setCurrImgIdx((currImgIdx + 1) % dogImageHrefs.length)}
        >
          Next
        </CarouselBtn>
      </div>
    </>
  )
}

export default ImageCarousel;