import React, { useState } from 'react';
import logoe from '../assets/logos.png'
import {FaBars,FaTimes,FaLinkedin,FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll';
const Navbar = () => {
  const [nav,setNav]=useState(false)
  const clickHandler=()=>{
    setNav(!nav)
  }
    return (
        <div name="navbar" className='fixed w-full h-[80px] mb-4 bg-[#0a192f] flex justify-between items-center pr-4 pl-0 text-gray-300'>
          <div className=''>
            <img src={logoe} alt="logo" className="w-[70px] h-[70px]" />
          </div>
          
            <ul className='hidden md:flex'>
                <li>
                <Link to='home' smooth={true} duration={500}>
                Home
               </Link>
                  </li>
                <li >
                <Link to='about' smooth={true} duration={500}>
                About
               </Link>
                 </li>
                <li>
                <Link to='skills' smooth={true} duration={500}>
                Skills
               </Link>
                </li>
                <li>
                <Link to='work' smooth={true} duration={500}>
                Work
               </Link>
                  </li>
                <li>
                <Link to='contact' smooth={true} duration={500}>
                Contact
               </Link>
                  </li>
            </ul>
        


<div className='md:hidden z-10' onClick={clickHandler}>
    {!nav ? <FaBars size={30} /> : <FaTimes />}
</div>
         
            <ul className={!nav ? 'hidden' : 'w-full absolute h-screen left-0 top-0 bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-2xl'>
                <Link onClick={clickHandler} to='home' smooth={true} duration={500}>
                Home
               </Link>
                  </li>
                <li className='py-6 text-2xl' >
                <Link onClick={clickHandler} to='about' smooth={true} duration={500}>
                About
               </Link>
                 </li>
                <li className='py-6 text-2xl'>
                <Link onClick={clickHandler} to='skills' smooth={true} duration={500}>
                Skills
               </Link>
                </li>
                <li className='py-6 text-2xl'>
                <Link onClick={clickHandler} to='work' smooth={true} duration={500}>
                Work
               </Link>
                  </li>
                <li className='py-6 text-2xl'>
                <Link onClick={clickHandler} to='contact' smooth={true} duration={500}>
                Contact
               </Link>
                  </li>
            
            </ul>
   
   <div className='hidden lg:flex top-[35%] left-0 flex-col fixed'>
    <ul>
      <li className='flex justify-between items-center w-[160px] h-[60px] bg-blue-400 text-gray-200 ml-[-100px] hover:ml-[-10px] duration-300'>
        <a href="https://www.linkedin.com/in/elham-soltani-b093b8248/"  target='blank' className='flex justify-between items-center w-full text-gray-300'>
          LinkedIn <FaLinkedin size={30}/>
        </a>
      </li>
      <li className='flex justify-between items-center w-[160px] h-[60px] bg-[#333] text-gray-200 ml-[-100px] hover:ml-[-10px] duration-300'>
        <a href="https://github.com/elham3oltani" target='blank' className='flex justify-between items-center w-full text-gray-300'>
        Github <FaGithub size={30}/>
        </a>
      </li>
      <li className='flex justify-between items-center w-[160px] h-[60px] bg-[#6fc2ba] text-gray-200 ml-[-100px] hover:ml-[-10px] duration-300'>
        <a href="elham.sn3280@gmail.com" target='blank' className='flex justify-between items-center w-full text-gray-300'>
          Email <HiOutlineMail size={30}/>
        </a>
      </li>
      <li className='flex justify-between items-center w-[160px] h-[60px] bg-[#565f69] text-gray-200 ml-[-100px] hover:ml-[-10px] duration-300'>
        <a href="#" target='blank' className='flex justify-between items-center w-full text-gray-300'>
          Resume <BsFillPersonLinesFill size={30}/>
        </a>
      </li>
    </ul>
   </div>
        </div>
    );
};

export default Navbar;