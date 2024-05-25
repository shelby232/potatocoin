import React, { useState } from 'react'
import coin from '../assets/2.png'

const Main = () => {
  const [count , setCount ] = useState(0)
  const [isJumping, setIsJumping] = useState(false);

  const handleJump = () => {
   
    setIsJumping(true);
  
    setCount(count + 1);
  
    setTimeout(() => {
      setIsJumping(false);
    }, 500); 
  };
  return (
    <div className=' relative'>
      <div className=' flex flex-col mx-auto m-auto h-auto bg-transparent mt-10 '>
        <div className='justify-center text-center text-3xl font-bold text-white bg-slate-300 block mx-auto rounded-md w-[130px] mt-20'>{count}</div>
        <img onClick={handleJump}
src={coin} alt="" className='mx-auto mt-40 0 w-[260px] h-[260px] bg-transparent' />
        
      </div>
    </div>
  )
}

export default Main