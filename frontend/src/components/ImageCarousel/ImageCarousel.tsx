'use client';

import Image from 'next/image';
import React, { use, useState } from 'react';
import CarouselBtn from './CarouselBtn';
import CarouselBtnGroup from './CarouselBtnGroup';

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
        <CarouselBtnGroup>
          {/* Start Button */}
          <CarouselBtn
            handleClick={() => setCurrImgIdx(0)}
          >
            <svg className='fill-white w-4 group-hover:fill-cyan-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M105.4 297.4C92.9 309.9 92.9 330.2 105.4 342.7L265.4 502.7C277.9 515.2 298.2 515.2 310.7 502.7C323.2 490.2 323.2 469.9 310.7 457.4L173.3 320L310.6 182.6C323.1 170.1 323.1 149.8 310.6 137.3C298.1 124.8 277.8 124.8 265.3 137.3L105.3 297.3zM457.4 137.4L297.4 297.4C284.9 309.9 284.9 330.2 297.4 342.7L457.4 502.7C469.9 515.2 490.2 515.2 502.7 502.7C515.2 490.2 515.2 469.9 502.7 457.4L365.3 320L502.6 182.6C515.1 170.1 515.1 149.8 502.6 137.3C490.1 124.8 469.8 124.8 457.3 137.3z"/></svg>
            Start
          </CarouselBtn>

          {/* Previous Button */}
          <CarouselBtn
            handleClick={() => setCurrImgIdx(currImgIdx === 0 ? dogImageHrefs.length - 1 : currImgIdx - 1)}
          >
            Previous
          </CarouselBtn>
        </CarouselBtnGroup>

        {/* Page Number */}
        <p className='font-semibold mx-4'>{currImgIdx + 1}/{dogImageHrefs.length}</p>

        <CarouselBtnGroup>
          {/* Next Button */}
          <CarouselBtn
            handleClick={() => setCurrImgIdx((currImgIdx + 1) % dogImageHrefs.length)}
          >
            Next
          </CarouselBtn>

          {/* Last Button */}
          <CarouselBtn
            handleClick={() => setCurrImgIdx(dogImageHrefs.length - 1)}
          >
            Last
            <svg className='fill-white w-4 group-hover:fill-cyan-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M535.1 342.6C547.6 330.1 547.6 309.8 535.1 297.3L375.1 137.3C362.6 124.8 342.3 124.8 329.8 137.3C317.3 149.8 317.3 170.1 329.8 182.6L467.2 320L329.9 457.4C317.4 469.9 317.4 490.2 329.9 502.7C342.4 515.2 362.7 515.2 375.2 502.7L535.2 342.7zM183.1 502.6L343.1 342.6C355.6 330.1 355.6 309.8 343.1 297.3L183.1 137.3C170.6 124.8 150.3 124.8 137.8 137.3C125.3 149.8 125.3 170.1 137.8 182.6L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7z"/></svg>
          </CarouselBtn>
        </CarouselBtnGroup>
      </div>
    </>
  )
}

export default ImageCarousel;