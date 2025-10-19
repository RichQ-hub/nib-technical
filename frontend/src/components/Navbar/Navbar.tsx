import Image from 'next/image';
import React from 'react';
import Navlinks from './Navlinks';

const Navbar = () => {
  return (
    <nav className='fixed top-0 right-0 left-0 h-14 bg-gray-900 flex items-center z-50 px-4 overflow-hidden'>
      {/* Nib Logo */}
      <div className='flex items-center justify-center'>
        <Image
          src='/nib_logo.gif'
          alt='Nib Logo'
          width={60}
          height={60}
          unoptimized
        />
      </div>
      
      <Navlinks />
    </nav>
  )
}

export default Navbar;