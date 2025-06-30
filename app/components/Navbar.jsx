import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'

const Navbar = () => {

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(0)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(100%)';
    }

  return (
    <>
    <div className='fixed top-0 left-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>
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
            <button className='p-2' aria-label="Toggle dark mode">
                <Image src={assets.moon_icon} alt='Toggle dark mode' className='w-6'/>
            </button>
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full font-Ovo hover:bg-gray-50 transition-colors'>
                Contact 
                <Image src={assets.arrow_icon} alt="" className='w-3'/>
            </a>
            
            {/* Mobile menu button - for future mobile navigation */}
            <button className='block md:hidden ml-3' onClick={openMenu} aria-label="Toggle mobile menu">
                <Image src={assets.menu_black} alt='Toggle mobile menu' className='w-6'/>
            </button>
        </div>
        {/* Mobile menu - slides in from the right */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 translate-x-full'>
            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={assets.close_black} alt='Close mobile menu' className='w-5 cursor-pointer' />
            </div>

            <li><a className='font-Ovo hover:text-purple-600 transition-colors' onClick={closeMenu} href="#top">Home</a></li>
            <li><a className='font-Ovo hover:text-purple-600 transition-colors' onClick={closeMenu} href="#about">About Me</a></li>
            <li><a className='font-Ovo hover:text-purple-600 transition-colors' onClick={closeMenu} href="#services">Services</a></li>
            <li><a className='font-Ovo hover:text-purple-600 transition-colors' onClick={closeMenu} href="#work">My Work</a></li>
            <li><a className='font-Ovo hover:text-purple-600 transition-colors' onClick={closeMenu} href="#contact">Contact Me</a></li>
        </ul>
        

    </nav>
    </>
  )
}

export default Navbar