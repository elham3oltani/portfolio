import React from 'react';
import logoCss from '../assets/css.png'
import logoGithub from '../assets/github.png'
import logoHtml from '../assets/html.png'
import logoJs from '../assets/javascript.png'
import figmalogo from '../assets/figmas.png'
import logoReact from '../assets/react.png'
import logoPhotoshop from '../assets/phtoshop.png'
import tailwind from '../assets/tailwind.png'
const Skills = () => {
    return (
        <div name="skills" className='w-full h-full text-gray-300 bg-[#0a192f]'>
            <div className='flex flex-col h-full '>
               <div className='my-[9%] mx-[20%]'>
               <p className='inline border-b-2 border-pink-600 font-bold text-4xl'>
                    Skills
                </p>
                <p className='my-2'>
                        //these are technologyst ihave work with
                </p>
                
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 text-center my-9'>
                    <div className='shadow-m shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={logoHtml}/>
                        <p className='my-4'>HTML</p>
                   </div>
                  
                   <div className='shadow-m shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={logoCss}/>
                        <p className='my-4'>CSS</p>
                   </div>

                   <div className='shadow-m shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tailwind}/>
                        <p className='my-4'>TailWind Css</p>
                   </div>

                   <div className='shadow-m shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={logoJs}/>
                        <p className='my-4'>Javascript</p>
                   </div>

                   <div className='shadow-m shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={figmalogo}/>
                        <p className='my-4'>Figma</p>
                   </div>

                   <div className='shadow-m shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={logoPhotoshop}/>
                        <p className='my-4'>Photoshop</p>
                   </div>

                   <div className='shadow-m shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={logoReact}/>
                        <p className='my-4'>React</p>
                   </div>

                   <div className='shadow-m shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={logoGithub}/>
                        <p className='my-4'>Github</p>
                   </div>
                </div>

               </div>
            </div>
        </div>
    );
};

export default Skills;