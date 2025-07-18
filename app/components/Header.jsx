import React from  'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Header = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-8">
        <div className="mb-6">
            <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
        </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                Hi! I'm Chao Hong
                <Image src={assets.hand_icon} alt='' className='w-6'/>
            </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Fullstack Developer based in New York
        </h1>
        <p className='max-w-2xl mx-auto font-Ovo'>
            I am a full stack developer with a passion for creating dynamic and responsive web applications. I specialize in both front-end and back-end development, ensuring a seamless user experience from start to finish.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact Me <Image src={assets.right_arrow_white} alt='' className='rounded-full w-4'/></a>
            <a href="/Official Resume 2025.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>My Resume <Image src={assets.download_icon} alt='' className='rounded-full w-4'/></a>
        </div>
    </div>
    //lets do this i believe in myself
  );
};

export default Header;
