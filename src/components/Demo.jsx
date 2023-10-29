import Image from "next/image";

const Demo = () => {
  return (
    <div className="fixed w-full absolute -right-[20px] -top-[20px] w-[180px] h-[180xp] z-99">
      <Image 
        src={'/assets/demo.png'} 
        width={260}
        height={260}
        className='w-full h-full'
        alt=''/>
    </div>
  )
};

export default Demo;