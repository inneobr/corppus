'use client';
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Button from "./Button";

const spothero = [
  'MUSCULAÇÃO', 3000,
  'CROSS TRAINING', 3000,
  'LUTAS', 3000,
  'PILATES', 3000
]

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Hero = () => { 
return (
  <section className="h-screen" id="home">
     <div className="container mx-auto h-full flex justify-center items-center xl:justify-start">
      <div className="h-full w-[800px] flex flex-col gap-y-5 justify-center items-center xl:items-start z-20 mt-[130px]">
        <div 
            className="hidden xl:flex absolute left-[15%] top-0 before:w-[600px] before:h-[200px] before:absolute before:left-0 before::top-10 before:z-10 mt-[200px] animate-pulse duration-75">
            <Image src={'/assets/peso.png'} 
              width={450} 
              height={120} 
              quality={30}
              priority
              alt=""/>  
          </div>  

          <h2 className="text-4xl xl:mt-[180px] ml-0 xl:ml-[100px] font-semibold text-tertiary animate-pulse duration-75 delay-5">UMA VIDA + <br/><span className="text-hero">SAÚDAVEL</span></h2>

          <TypeAnimation 
                sequence={spothero} 
                wrapper='div' 
                speed={10}
                deletionSpeed={10}
                repeat={Infinity}
                cursor={false} className='w-[430px] h-[80px] mt-8 text-center justify-center text-spot text-4xl font-semibold'/>

          <motion.p variants={fadeIn('up', 1)} initial='hidden' whileInView={'show'} className="text-2xl text-spot xl:text-right z-20">O que não te desafia, não te transforma!</motion.p> 

          <div className='w-[50%] xl:2/4 mt-5 flex flex-row justify-center'>
            <Button title="Professores"/>  
          </div>
          

      </div>      
      <div className="hidden xl:flex absolute right-0 top-0 before:w-[50%] before:h-[] before:absolute before:right-0    before::top-0 before:bg-singerOverlay before:z-10 mt-[155px]">
          <Image src={'/assets/hero-fisico.webp'} 
            width={617} 
            height={900} 
            quality={100}
            priority
            alt=""/>
      </div>
    </div>
  </section>

)
}
export default Hero  