import React from 'react'

const page = () => {
  return (
    <section>
        <h1 className='text-center mt-10 text-4xl font-bold'>2023 LAUNCH</h1>
        <div className='m-7 bg-white p-6 w-[350px] md:w-[600px] lg:w-[700px] xl:w-[900px] mx-auto'>
        <ul className='flex justify-between mb-2'>
          <li className='w-[5%]'>
            <img  src="./close.svg" alt="" />
          </li>
          <li className='w-[30%]'>
            <img  src="./logo.png" alt="" />
          </li>
          <li className='w-[5%]'>
            <img  src="./close.svg" alt="" />
          </li>
        </ul>
        <ul className='flex gap-3 text-xs md:text-sm justify-center mb-4 font-semibold'>
          <li>
            <h1>Arab Academy Motors</h1>
          </li>
          <li>
            <h1>16 Oct. 2023</h1>
          </li>
        </ul>
        <img className='mx-auto md:w-[80%]' src="./blog-hero.png" alt="" />
        <blockquote className='mt-5 leading-6 text-left font-semibold'>
        <p className='mb-6'>
        Following the triumph of M021, the AAM19 2019 model stands as the culmination of years of relentless research and development by our dedicated team.
        </p>
        <p className='mb-6'>
         Embracing the M021 platform, it proudly showcased the iconic McLaren Papaya livery, paying tribute to Bruce McLaren's 50th anniversary in 2020.
         </p>
         <p className='mb-6'>
          With the aim of making a resounding comeback and securing victory in our debut year, the AAM19 boasted an upgraded cooling and aerodynamics system, allowing it to unleash its full potential in Australia. This remarkable achievement marked our team's historic win in its category and a triumphant victory in our very first dynamic event.
        </p>
        </blockquote>
        <ul className='flex gap-10 border-black border-t-2 align-middle content-center'>
            <li className='mt-2 ml-2'>
                <img src="./ico-3.png" alt="" />
            </li>
            <li className='mt-2'>
                <img src="./ico-2.png" alt="" />
            </li>
            <li className='mt-2'>
                <img src="./ico-1.png" alt="" />
            </li>
        </ul>
        </div>
    </section>
  )
}

export default page