import React from 'react'

const page = () => {
  return (
    <div>
        
         <div className='relative'>
            
            <img src="./hero-sponsors.png" className='w-[100%] brightness-50 opacity-90 ' alt="" />
            <h1 className='  absolute top-[50%] left-[43%] text-2xl md:text-4xl lg:text-6xl text-white' >SPONSORS</h1>
        </div>
        <div className='mb-10'>
            <ul className='flex px-20 mt-20 flex-wrap gap-24 justify-center'>

                <li className='bg-gray-100 w-[400px] h-[250px] md:h-[350px] p-10 md:p-5 lg:p-0 shadow-2xl'>
                    <img className='w-[300px] m-auto' src="./icon-1.png" alt="" />
                </li>
                <li className='bg-gray-100 w-[400px] h-[250px] md:h-[350px] p-10  md:p-1 lg:p-0  shadow-2xl'>
                    <img className='w-[300px] m-auto ' src="./icon-2.png" alt="" />
                </li>
                <li className='bg-gray-100 w-[400px] h-[250px] md:h-[350px] p-10 md:p-5 lg:p-0  shadow-2xl'>
                    <img className='w-[300px] m-auto ' src="./icon-3.png" alt="" />
                </li>
                <li className='bg-gray-100 w-[400px] h-[250px] md:h-[350px] p-10 md:p-5 lg:p-0  shadow-2xl'>
                    <img className='w-[300px]  m-auto' src="./icon-4.png" alt="" />
                </li>
                <li className='bg-gray-100 w-[400px] h-[250px] md:h-[350px] p-10 md:p-5 lg:p-0  shadow-2xl'>
                    <img className='w-[300px] mx-auto my-[30%] ' src="./icon-5.png" alt="" />
                </li>
                <li className='bg-gray-100 w-[400px] h-[250px] md:h-[350px] p-10 md:p-5 lg:p-0  shadow-2xl'>
                    <img className='w-[300px] mx-auto my-[30%]' src="./icon-6.png" alt="" />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default page