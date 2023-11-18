import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-[#040C5E] h-14 p-3'>
      <img src='./logo1.png' width='120px' height='100px' className='' />
      <div className=''>
        <ul className='flex gap-x-4 text-center align-middle p-3'>
          <li className='text-xs font-semibold text-[#F4F6FD] hover:text-[#7d7e7f]'>
            <a href='/#'>HOME</a>
          </li>
          <li className='text-xs font-semibold text-[#F4F6FD] hover:text-[#7d7e7f]'>
            <a href='/#'>ABOUT US</a>
          </li>
          <li className='text-xs font-semibold text-[#F4F6FD] hover:text-[#7d7e7f]'>
            <a href='/#'>INDUSTRIES</a>
          </li>
          <li className='text-xs font-semibold text-[#F4F6FD] hover:text-[#7d7e7f]'>
            <a href='/#'>TEAM</a>
          </li>
          <li className='text-xs font-semibold text-[#F4F6FD] hover:text-[#7d7e7f]'>
            <a href='/#'>TESTIMONIAL</a>
          </li>
          <li className='text-xs font-semibold text-[#F4F6FD] hover:text-[#7d7e7f]'>
            <a href='/#'>FAQs</a>
          </li>
        </ul>
      </div>
      <button className='text-white text-xs p-2 font-bold border-2 hover:text-[#ffc000] border-[#ffc000]'>
        BOOK MEETING
      </button>
    </nav>
  );
};

export default Navbar;
