'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import Demo from './Demo';
import Navbar from './Navbar';

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(()=> {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  },[]);

  return (
    <header className={`fixed w-full z-50 transition-all ${active ? 'bg-[#FAEDD3] py-6 text-black' : 'bg-transparent py-8'}`}>
      <Demo />
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
        <Link to="home" spy={true} smooth={true} duration={500} 
          className='relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0 hidden xl:flex '>
            <Image src={'/assets/logo.png'} 
              width={145} 
              height={75} 
              quality={100}
              priority
              alt=""/> 
        </Link>

        <Navbar containerStyles='hidden xl:flex items-center gap-x-8'/>       
      </div>
    </header>
  )
}
export default Header  