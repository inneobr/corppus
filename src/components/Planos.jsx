'use client';

import PlanosCard from "./PlanosCard";

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Planos = () => { 
  return (
    <section className="min-h-screen flex flex-col justify-center items-center md:px-32 px-5" id="planos">  
      <motion.h1 variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'} className="text-4xl font-semibold text-center mb-[50px]">Adesão à academia</motion.h1>
      <div className="flex flex-col md:flex-row justify-center xl:mr-10 gap-8">
        <PlanosCard title="Plano Basico" preco="130.000,00"/>        
        <PlanosCard title="Plano Treino" preco="450.000,00"/>
        <PlanosCard title="Plano Cross" preco="1.300.000,00"/>
        <PlanosCard title="Plano Monstro" preco="130.000,00"/>
        <PlanosCard title="Plano Huck" preco="450.000,00"/>
      </div>
    </section>
  )
}
export default Planos  