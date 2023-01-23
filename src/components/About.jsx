import React from 'react';

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col  justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] grid grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>about</p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p className=''>
                            helllo i am elham soltani,
                            nice to meet you to,
                            Please take a look around.
                        </p>
                    </div>
                    <div>
                        <p>
                        I am the front end developer of Kerman. In my opinion, designing a website is creating a work of art with love and passion. My goal is to design a website that is simple, meaningful and practical to meet all the needs of people. When I'm not designing, I'm taking pictures, listening to music, and making cakes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;