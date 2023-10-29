'use client';

import Image from "next/image";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const ProfessoresCard = (props) => { 
  return (
    <motion.div variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} className="flex flex-col items-center gap-3 w-full xl:w-1/4 bg-[#222] rounded-xl">
      <motion.div variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} className="flex justify-center p-5">
        <Image src={`/assets/equipe/${props.img}`}
        className="saturate-0 rounded-lg grayscale hover:grayscale-0 hover:saturate-100"
        width={256} 
        height={500} 
        quality={30}
        priority
        alt=""/>
      </motion.div>
      <div>
        <h1 className="text-x1 font-semibold py-2 text-center">{props.title}</h1>
        <div className="flex items-center py-4 gap-4">
          <BsInstagram size={25} className="hover:text-[#e53961] cursor-pointer"/>
          <BsFacebook size={25} className="hover:text-[#e53961] cursor-pointer"/>
          <BsWhatsapp size={25} className="hover:text-[#e53961] cursor-pointer"/>
          <RiTwitterXFill size={25} className="hover:text-[#e53961] cursor-pointer"/>
        </div>
      </div>
    </motion.div>
  )
}
export default ProfessoresCard    