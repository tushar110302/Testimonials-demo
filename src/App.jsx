import { useState } from 'react'
import data from "./data"
import Card from './components/Card'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

function App() {
  const [index, setIndex] = useState(0)

  function leftHandler(){
    if(index === 0){
      setIndex(data.length - 1)
    }
    else{
      setIndex(index-1)
    }
  }
  function rightHandler(){
    if(index === data.length - 1){
      setIndex(0)
    }
    else{
      setIndex(index+1)
    }
  }

  function randomHandler(){
    let idx = Math.floor(Math.random()*data.length )
    setIndex(idx)
  }

  return (
    <div className='bg-[#242424] w-full h-screen text-white flex justify-center items-center flex-col'>
      <div>
        <h1 className='text-[3.2em] font-bold'>Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
      </div>
      <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>

        <Card data={data[index]} />

        <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
          <button onClick={leftHandler} className='cursor-pointer hover:text-violet-500 '><FiChevronLeft/></button>
          <button onClick={rightHandler} className='cursor-pointer hover:text-violet-500 '><FiChevronRight/></button>
        </div>

        <div className='mt-6'>
          <button
          onClick={randomHandler}
          className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
              Surprise Me
          </button>
        </div>

      </div>
    </div>
  )
}

export default App
