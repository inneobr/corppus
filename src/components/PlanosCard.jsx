import { AiFillCheckCircle } from 'react-icons/ai';
import { FaMoneyBill1Wave } from 'react-icons/fa6';

const PlanosCard = (props) => { 
  return (
    <div className='flex flex-col bg-[#222] w-full xl:w-1/3 p-5 rounded-lg'>
      <h2 className='font-semibold text-center text-4xl mb-5 w-[250px] text-quaternary'>{props.title}</h2>
      <div className='flex flex-row justify-center items-center'>
        <span className='inline-block'>
          <FaMoneyBill1Wave size={22} className='mb-5 mr-5 '/>
        </span>
        <h3 className='font-semibold text-xl inline-block mb-5'>{props.preco}</h3>
      </div>

      <div className='flex flex-row justify-start items-center text-spot'>
        <span className='flex flex-col gap-1 inline-block mr-5'>
         <AiFillCheckCircle size={22}/>
        </span>
        <p>Preço promocional</p>
      </div>

      <div className='flex flex-row justify-start items-center text-spot'>
        <span className='inline-block mr-5'>
         <AiFillCheckCircle size={22}/>
        </span>
        <p>Personal Free</p>
      </div>
      <div className='flex flex-row justify-center mt-4'>
        <buttom >Quero esse</buttom>
      </div>
    </div>
  )
}
export default PlanosCard  