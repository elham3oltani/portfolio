import React from 'react';

const Contact = () => {
    return (
        <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/cd527334-74f2-48ea-b793-d813a80ea849" className='flex flex-col w-full max-w-[600px]'>
                <div className='pb-8'>
                    <p className='font-bold text-4xl inline border-b-4 text-gray-100 border-pink-600'>Contact</p>
                    <p className='text-gray-300 py-4'>//submit the form below or shon an email - elham.sn3280@gmail.com</p>
                </div>
                <input type="text" name="name" placeholder='name' className='bg-[#ccd6f6] p-2' />
                <input type="text" className='my-4 bg-[#ccd6f6] p-2' name="email" placeholder='email' />
                <textarea name="" rows="10" className='bg-[#ccd6f6] p-2'></textarea>
                <button className='border-2 text-white hover:bg-pink-600 px-4 py-3 my-8 flex items-center mx-auto hover:border-pink-600'>Let's collaborate</button>
            </form>
        </div>
    );
};

export default Contact;