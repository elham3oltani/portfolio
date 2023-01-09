import React from 'react';

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col col-auto justify-center items-center w-full mx-auto h-full'>
                <div className='max-w-[1000px] grid grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>about</p>
                    </div>
                </div>
                <div className='max-w[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>
                            helllo i am elham solltani i am programmer
                            I am Elham Soltani from Kerman and I am a front end developer who
                             loves programming and the most beautiful part of front end
                        </p>
                    </div>
                    <div>
                        <p>You can also use variant modifiers to target media queries like
                             responsive breakpoints, dark mode,You can also use variant modifiers to target media queries like responsive breakpoints, dark mode,programming is, of course, in my opinion,
Websites should be minimal, user-friendly and attractive
Other hobbies of mine are photography, watching movies and reading books</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;