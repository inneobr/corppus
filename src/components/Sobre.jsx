'use client';
import { motion } from 'framer-motion';
import Image from "next/image";
import { fadeIn } from '../../variants';

const Sobre = () => { 
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between md:mx-32 mx-5" id="sobre">
      <div>
        <motion.h1 variants={fadeIn('down', 1)} initial='hidden' whileInView={'show'} className="text-5xl font-semibolt xl:text-start mt-14 xl:mt-0">Sobre</motion.h1>
     
        <div className="mb-8 xl:w-3/4 space-y-5 mt-4">
          <motion.p variants={fadeIn('up', 1)} initial='hidden' whileInView={'show'} className="xl:w-[800px] text-justify">
          Missão da Academia: Na Corppus Academia, nosso compromisso é proporcionar a nossos membros uma experiência excepcional de condicionamento físico, promovendo a saúde, bem-estar e um estilo de vida ativo. Através de instalações modernas, instrutores qualificados e uma abordagem personalizada, estamos comprometidos em ajudar nossos membros a atingir seus objetivos de fitness de maneira eficaz e motivadora. 
          </motion.p>

          <motion.p variants={fadeIn('up', 1.5)} initial='hidden' whileInView={'show'} className="xl:w-[800px] text-justify">
          Descrição da Academia: A Corppus Academia é um espaço dedicado à promoção da saúde e do condicionamento físico. Nossas instalações são projetadas para oferecer uma variedade de opções de treinamento, desde musculação e cardio até aulas de grupo dinâmicas. Com uma atmosfera acolhedora e uma equipe de instrutores altamente qualificados, nosso objetivo é proporcionar a todos os membros uma experiência de treinamento excepcional.
          </motion.p>
        </div>
      </div>
      <motion.div className="rounded-full" variants={fadeIn('left', 1)} initial='hidden' whileInView={'show'}>
      <Image src={'/assets/foto-1.png'} 
        className='rounded-[10px] border-[5px] shadow-2xl'
        width={620} 
        height={620} 
        quality={100}
        priority
        alt=""/>
      </motion.div>
    </section>
    )
  }
  export default Sobre  