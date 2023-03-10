import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className='w-full h-screen bg-[#0a192f] mx-auto'>
          <div className='flex flex-col justify-center max-w-[1000px] mx-auto px-14 h-full'>
          <p className='text-pink-600'>Hi my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>elham soltani</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am Front End Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
              i am front end developer and phtographer،
              <br/>
              Interested in programming and its challenges
                
            </p>
                <div>
                    <Link to='work' smooth={true} className='flex w-fit items-center group text-white border-2 px-6 py-3 my-3 hover:bg-pink-600 hover:border-pink-600 outline-none'>view work
                    <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span>
                    </Link>
                 
                </div>
          </div>
        </div>
    );
};

export default Home;