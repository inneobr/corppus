'use client';
import { motion } from 'framer-motion';
import Image from "next/image";
import { fadeIn } from '../../variants';

const Contato = () => { 
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between md:mx-32 mx-5" id="contato">
      <div>
        <motion.h1 variants={fadeIn('up', 1)} initial='hidden' whileInView={'show'} className="text-4xl mb-8">Contato</motion.h1>
        <motion.div variants={fadeIn('down', 1)} initial='hidden' whileInView={'show'} className='flex flex-col gap-2'>
          <p className="text-spot">+5546988258084<span></span></p>
          <p className="text-spot">atendimento@corppus.com<span></span></p>
          <p className="text-spot">Rua Armindo Saldanha, 343 - Cascatinha<span></span></p>
          <p className="text-spot mt-5 font-semibold text-2xl">segunda a sexta-feira, das 8h às 18h, podendo ser alterado</p>
        </motion.div>
      </div>
      <motion.div className="rounded-full" variants={fadeIn('left', 1)} initial='hidden' whileInView={'show'}>
        <Image src={'/assets/fale-conosco-3.jpg'} 
          className="rounded-[10px] border-[5px] shadow-2xl"
          width={617} 
          height={900} 
          quality={100}
          priority
          alt=""/>
      </motion.div>
    </section>
  )
}
export default Contato  