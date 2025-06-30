import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <a href="#top" aria-label="Go to top of page">
            <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt="Portfolio Logo"/>
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
            <li><a className='font-Ovo hover:text-purple-600 transition-colors' href="#top">Home</a></li>
            <li><a className='font-Ovo hover:text-purple-600 transition-colors' href="#about">About Me</a></li>
            <li><a className='font-Ovo hover:text-purple-600 transition-colors' href="#services">Services</a></li>
            <li><a className='font-Ovo hover:text-purple-600 transition-colors' href="#work">My Work</a></li>
            <li><a className='font-Ovo hover:text-purple-600 transition-colors' href="#contact">Contact Me</a></li>
        </ul>
        
        <div className='flex items-center gap-4'>
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full font-Ovo hover:bg-gray-50 transition-colors'>
                Contact 
                <Image src={assets.arrow_icon} alt="" className='w-3'/>
            </a>
            
            {/* Mobile menu button - for future mobile navigation */}
            <button className='md:hidden p-2' aria-label="Toggle mobile menu">
                <div className='w-6 h-0.5 bg-gray-600 mb-1'></div>
                <div className='w-6 h-0.5 bg-gray-600 mb-1'></div>
                <div className='w-6 h-0.5 bg-gray-600'></div>
            </button>
        </div>
    </nav>
  )
}

export default Navbar