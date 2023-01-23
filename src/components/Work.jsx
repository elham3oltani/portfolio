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
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-pink-600 inline text-gray-300 border-b-4'>Work</p>
           
            </div>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-4 text-center py-8'>
                <div style={{backgroundImage:`url(${foodApp})`}} className='shadow-md object-cover  shadow-[#040c16] group container rounded-md content-div mx-auto flex items-center justify-center'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-md font-bold text-white'>
                            React JS Application
                        </span>
                  <div className='pt-8 text-center'>
                  <a href='https://food-app-eight-amber.vercel.app/home' target="_blank">
                            <button className='text-center rounded-lg py-2.5 m-2 px-4 bg-white text-gray-700 font-bold text-sm'>Demo</button>
                        </a>
                        <a href='https://github.com/elham3oltani/food-app' target='_blank'>
                            <button className='text-center rounded-lg py-2.5 m-2 px-4 bg-white text-gray-700 font-bold text-sm'>Code</button>
                        </a>
                  </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${foods})`}} className=' shadow-lg object-cover shadow-[#040c16] group container rounded-md content-div mx-auto flex items-center justify-center'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-md  font-bold text-white'>
                            React JS Application
                        </span>
                  <div className='pt-8 text-center'>
                  <a href='https://food-app-eight-amber.vercel.app/home' target='_blank'>
                            <button className='text-center rounded-lg py-2.5 m-2 px-4 bg-white text-gray-700 font-bold text-sm'>Demo</button>
                        </a>
                        <a href='https://github.com/elham3oltani/food-app' target='_blank'>
                            <button className='text-center rounded-lg py-2.5 m-2 px-4 bg-white text-gray-700 font-bold text-sm'>Code</button>
                        </a>
                  </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${store})`}} className='shadow-lg shadow-[#040c16] group container rounded-md content-div mx-auto flex items-center justify-center'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-md font-bold tracking-wider text-white'>
                            React JS Application
                        </span>
                  <div className='pt-8 text-center'>
                  <a href='http://shopping-cart-hazel.vercel.app' target='_blank'>
                            <button className='text-center rounded-lg py-2.5 m-2 px-4 bg-white text-gray-700 font-bold text-sm'>Demo</button>
                        </a>
                        <a href='https://github.com/elham3oltani/shopping-cart' target='_blank'>
                            <button className='text-center rounded-lg py-2.5 m-2 px-4 bg-white text-gray-700 font-bold text-sm'>Code</button>
                        </a>
                  </div>
                    </div>
                </div>
                

                <div style={{backgroundImage:`url(${books})`}} className='w-full shadow-lg shadow-[#040c16] group container rounded-md content-div mx-auto flex items-center justify-center'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-md font-bold tracking-wider text-white'>
                            React JS Application
                        </span>
                  <div className='pt-8 text-center'>
                  <a href='https://book-search-htbnh6d4s-elham3oltani.vercel.app' target="_blank">
                            <button className='text-center rounded-lg py-2.5 m-2 px-4 bg-white text-gray-700 font-bold text-sm'>Demo</button>
                        </a>
                        <a href='https://github.com/elham3oltani/books-search' target='_blank'>
                            <button className='text-center rounded-lg py-2.5 m-2 px-4 bg-white text-gray-700 font-bold text-sm'>Code</button>
                        </a>
                  </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${weather})`}} className='shadow-lg shadow-[#040c16] group container rounded-md content-div mx-auto flex items-center justify-center'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-md font-bold tracking-wider text-white'>
                            React JS Application
                        </span>
                  <div className='pt-8 text-center'>
                  <a href='https://weather-app-orcin-pi.vercel.app' target='_blank'>
                            <button className='text-center rounded-lg py-2.5 m-2 px-4 bg-white text-gray-700 font-bold text-sm'>Demo</button>
                        </a>
                        <a href='https://github.com/elham3oltani/weather-app' target='_blank'>
                            <button className='text-center rounded-lg py-2.5 m-2 px-4 bg-white text-gray-700 font-bold text-sm'>Code</button>
                        </a>
                  </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${arzDigital})`}} className='mb-20 w-full shadow-lg shadow-[#040c16] group container rounded-md content-div mx-auto flex items-center justify-center'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-md font-bold tracking-wider text-white'>
                            React JS Application
                        </span>
                  <div className='pt-8 text-center'>
                  <a href='http://arz-digital.vercel.app' target='_blank'>
                            <button className='text-center rounded-lg py-2.5 m-2 px-4 bg-white text-gray-700 font-bold text-sm'>Demo</button>
                        </a>
                        <a href='https://github.com/elham3oltani/arz-digital' target='_blank'>
                            <button className='text-center rounded-lg py-2.5 m-2 px-4 bg-white text-gray-700 font-bold text-sm'>Code</button>
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