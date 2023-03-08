import React from 'react';
import { Link } from 'react-router-dom';

const MobileNav = ({open, setOpen}) => {
  return (
    <ul className='flex flex-col text-center items-center py-6 text-gray-800 text-xs uppercase absolute bg-white w-full space-y-4 z-20 left-0 top-14 lg:hidden'>
        <li className='w-full'>
          <Link
          onClick={() => {setOpen(!open)}}
          className='hover:bg-gray-200 duration-300 w-full inline-block py-2'
           to="about">About</Link>
        </li>
        <li 
        className='w-full'>
          <Link
          onClick={() => {setOpen(!open)}}
          className='hover:bg-gray-100 duration-300 w-full inline-block py-2' 
          to="/projects">Work</Link>
        </li>
        <li className='w-full'>
          <Link
          onClick={() => {setOpen(!open)}}
          className='hover:bg-gray-100 duration-300 w-full inline-block py-2' 
          to="/team"
          >Team</Link>
        </li>
        <li className='w-full'>
          <Link
          onClick={() => {setOpen(!open)}}
          className='hover:bg-gray-100 duration-300 w-full inline-block py-2' 
          to="/blog">
            Blog</Link>
        </li>
        <li className='w-full text-center'>
          <Link
          onClick={() => {setOpen(!open)}}
          className='hover:bg-gray-100 duration-300 w-full text-center inline-block py-2'
           to="/contact">Contact</Link>
        </li>
      </ul>
  )
}

export default MobileNav