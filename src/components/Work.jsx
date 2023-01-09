import React from 'react';
import foodApp from '../assets/foodApp.jpeg'
import store from '../assets/store.jpeg'
import weather from '../assets/weather.jpeg'
import books from '../assets/books.jpeg'
import arzDigital from '../assets/arzDigital.jpeg'
import foods from '../assets/foods.jpeg'


const Work = () => {
    return (
        <div name="work" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='h-full w-full mx-auto flex flex-col justify-center items-center p-4 max-w-[1000px]'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-pink-600 inline text-gray-300 border-b-4'>Work</p>
                <p className='py-6'>check out some of my recent work</p>
           
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                <div style={{backgroundImage:`url(${foodApp})`}} className='shadow-lg w-[300px] object-cover shadow-[#040c16] group container rounded-md content-div mx-auto flex items-center justify-center'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl font-bold tracking-wider text-white'>
                            React JS Application
                        </span>
                  <div className='pt-8 text-center'>
                  <a href='#'>
                            <button className='text-center rounded-lg py-3 m-2 px-4 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='#'>
                            <button className='text-center rounded-lg py-3 m-2 px-4 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                  </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${foods})`}} className='w-full shadow-lg shadow-[#040c16] group container rounded-md content-div mx-auto flex items-center justify-center'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl font-bold tracking-wider text-white'>
                            React JS Application
                        </span>
                  <div className='pt-8 text-center'>
                  <a href='#'>
                            <button className='text-center rounded-lg py-3 m-2 px-4 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='#'>
                            <button className='text-center rounded-lg py-3 m-2 px-4 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                  </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${store})`}} className='shadow-lg shadow-[#040c16] group container rounded-md content-div mx-auto flex items-center justify-center'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl font-bold tracking-wider text-white'>
                            React JS Application
                        </span>
                  <div className='pt-8 text-center'>
                  <a href='#'>
                            <button className='text-center rounded-lg py-3 m-2 px-4 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='#'>
                            <button className='text-center rounded-lg py-3 m-2 px-4 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                  </div>
                    </div>
                </div>
                

                <div style={{backgroundImage:`url(${books})`}} className='w-full shadow-lg shadow-[#040c16] group container rounded-md content-div mx-auto flex items-center justify-center'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl font-bold tracking-wider text-white'>
                            React JS Application
                        </span>
                  <div className='pt-8 text-center'>
                  <a href='#'>
                            <button className='text-center rounded-lg py-3 m-2 px-4 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='#'>
                            <button className='text-center rounded-lg py-3 m-2 px-4 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                  </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${weather})`}} className='shadow-lg shadow-[#040c16] group container rounded-md content-div mx-auto flex items-center justify-center'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl font-bold tracking-wider text-white'>
                            React JS Application
                        </span>
                  <div className='pt-8 text-center'>
                  <a href='#'>
                            <button className='text-center rounded-lg py-3 m-2 px-4 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='#'>
                            <button className='text-center rounded-lg py-3 m-2 px-4 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                  </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${arzDigital})`}} className='mb-20 w-full shadow-lg shadow-[#040c16] group container rounded-md content-div mx-auto flex items-center justify-center'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl font-bold tracking-wider text-white'>
                            React JS Application
                        </span>
                  <div className='pt-8 text-center'>
                  <a href='#'>
                            <button className='text-center rounded-lg py-3 m-2 px-4 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='#'>
                            <button className='text-center rounded-lg py-3 m-2 px-4 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                  </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Work;