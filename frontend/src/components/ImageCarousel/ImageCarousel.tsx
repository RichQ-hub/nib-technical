'use client';

import Image from 'next/image';
import React, { use, useState } from 'react';

const ImageCarousel = ({
  dogImageUrls,
}: {
  dogImageUrls: Promise<string[]>;
}) => {
  const dogImageHrefs = use(dogImageUrls);
  const [currImgIdx, setCurrImgIdx] = useState<number>(0);

  return (
    <div className='max-w-[600px] mx-auto'>
      {/* Image Figure */}
      <figure className='h-[400px]'>
        <Image
          className='w-full h-full object-fill'
          src={dogImageHrefs[currImgIdx]}
          alt={dogImageHrefs[currImgIdx]}
          height={400}
          width={600}
        />
      </figure>

      {/* Scroll Button Group */}
      <div className='flex justify-between items-center'>
        <button
          type='button'
          onClick={() => setCurrImgIdx(currImgIdx === 0 ? dogImageHrefs.length - 1 : currImgIdx - 1)}
        >
          Previous
        </button>

        {/* Page Number */}
        <p>{currImgIdx + 1}/{dogImageHrefs.length}</p>

        <button
          type='button'
          onClick={() => setCurrImgIdx((currImgIdx + 1) % dogImageHrefs.length)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default ImageCarousel;