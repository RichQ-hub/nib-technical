import { saira } from '@/fronts';
import Link from 'next/link';
import React from 'react';

const NAV_LINKS = [
  {
    name: 'HOME',
    href: '/',
  },
  {
    name: 'DOGS',
    href: '/dogs',
  },
]

const Navlinks = () => {
  return (
    <ul className={`${saira.className} font-bold text-lg h-full flex items-center ml-4 text-zinc-400`}>
      {NAV_LINKS.map((link, idx) => {
        return (
          <li key={idx} className='h-full'>
            <Link
              className='h-full px-3 hover:text-white flex items-center'
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Navlinks;