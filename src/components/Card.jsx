import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

function Card({data}) {
  return (
    <div className='flex flex-col md:relative'>
      <div className='absolute top-[-7rem] z-[10] mx-auto'>
        <img 
        className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
        src={data.image}/>
        <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute
         top-[0px] z-[-10] '></div>
      </div>
      <div className='text-center mt-7'>
        <p className='tracking-wider font-bold text-2xl capitalize text-[#212121]'>{data.name}</p>
        <p className='text-violet-300 uppercase text-sm'>{data.job}</p>
      </div>

      <div className='text-violet-400 mx-auto mt-5'>
        <FaQuoteLeft/>
      </div>

      <div className='text-center mt-4 text-slate-500'>
        {data.text}
      </div>

      <div  className='text-violet-400 mx-auto mt-5'>
        <FaQuoteRight/>
      </div>
    </div>

  )
}

export default Card