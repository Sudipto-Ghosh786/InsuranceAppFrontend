import React, { useState } from 'react';
import { Fa500Px, FaTimes } from 'react-icons/fa';
import InsuranceBuildingLogo from '../assets/building-icon.png';

export default function NavigationBar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    return setNav(!nav);
  }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div className='flex px-2 items-center'>
        <img src={InsuranceBuildingLogo} alt="insurance-building-logo" style={{ width: "50px" }} />
        <h1 className='text-lg font-bold'>Insurance Company</h1>
      </div>

      {/* Menu */}
      <div className='hidden md:flex h-full items-center'>
        <ul className=' w-full h-full hidden md:flex items-center'>
          <li className='m-2'>Home</li>
          <li className='m-2'>Policies</li>
          <li className='m-2'>About Us</li>
          <li className='h-14 m-4 flex items-center border border-red-500 hover:border-red-700 text-red-500 hover:text-red-700 font-semibold rounded focus:outline-none'>
              Register
          </li>
          <li className='h-14 m-4 flex items-center bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded'>
            Login
          </li>
        </ul>
      </div>

      {/* Hamburgermenu */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <Fa500Px /> : <FaTimes />}
      </div>

      {/* Mobile View */}
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <ul className='absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>Policies</li>
          <li className='py-6 text-4xl'>About Us</li>
          <li className='py-6 text-4xl h-14 m-4 flex items-center border border-red-500 hover:border-red-700 text-red-500 hover:text-red-700 font-semibold rounded focus:outline-none'>
              Register
          </li>
          <li className='py-6 text-4xl h-14 m-4 flex items-center bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded'>
            Login
          </li>
        </ul>
      </div>
    </div>
  )
}
