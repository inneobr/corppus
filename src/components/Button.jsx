import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Button = (props) => {
  return (
    <div >
      <motion.button variants={fadeIn('up', 1.5)} initial='hidden' whileInView={'show'} className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group">
        <span className="w-32 h-32 rotat-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]">
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 trasnlate-x-56 -translate-y-24 bg-accent opacity-100 group-hover:-translate-x-8"></span>
        </span>
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out">
          {props.title}
        </span>
        <span className="absolute inset-0 border-2 border-white rounded-full"></span>
      </motion.button>
    </div>
  );
};

export default Button;  