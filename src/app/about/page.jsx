import React from 'react'

const page = () => {
  return (
    <section className='leading-loose'>
           <div className='relative'>
            
            <img src="./about-hero.png" className='w-[100%] brightness-50 opacity-90 ' alt="" />
            <h1 className='  absolute top-[45%]  left-[25%] sm:left-[35%] text-xl md:text-3xl lg:text-5xl  text-white' >FORMULA STUDENT</h1>
        </div>
        <div className='m-10 font-semibold'>
        <img src="./about-second.png" className='p-6 hidden lg:block lg:float-right ' alt="" />
        <h1 className='text-lg lg:text-4xl'>What is Formula<br></br> student?</h1>
        <p className='text-left lg:ml-10 mb-5 mt-9'>Formula Student is an engineering design competition. Starting as a small event with eleven teams in 1979, it is now the worlds biggest product development competition for students. Formula Student has rapidly grown and there are now about 800 teams competing in over fourteen international competitions sanctioned by the organization FSAE all around the world.</p>
        <p className='text-left lg:ml-10 my-5'> Our intention is to attend at least two international competitions every year.</p>
        <p className='text-left lg:ml-10 my-5'>The competition is divided into static and dynamic events, totally adding up to a total score of 850 points for the Europe competitions and 1000 points for the competition in The United Kingdom. The events are further explained in the following sections.</p>
        <img src="./about-second.png" className='p-6 md:hidden ' alt="" />
        <h1 className='text-lg lg:text-4xl'>The Competition</h1>
        <p className='text-center mb-5 mt-9'>The competition is divided into static and dynamic events, totally adding up to a total score of 850 points for the Europe competitions and 1000 points for the competition in The United Kingdom. The events are further explained in the following sections.</p>
        </div>
    <ul className='flex gap-10 mb-5 flex-wrap '>
        <li className='w-[351px] h-[470px] mx-auto p-10 bg-white shadow-lg rounded-md text-center'>
            <img className='mx-auto' src="about-list-1.png" alt="" />
            <h1 className='font-semibold my-4'>BUSINESS PRESENTATION</h1>
            <p  className='font-medium'>The business presentation is set to demonstrate a business case to potential investors, that is created to show how to sell a racing vehicle. Key features and advantages of the vehicle, the design process, production possibilities and business offers must be mentioned.</p>
        </li>
        <li className='w-[351px] h-[470px] mx-auto p-10 bg-white shadow-lg rounded-md text-center'>
            <img className='mx-auto' src="about-list-1.png" alt="" />
            <h1 className='font-semibold my-4'>ENGINEERING DESIGN</h1>
            <p  className='font-medium'>The business presentation is set to demonstrate a business case to potential investors, that is created to show how to sell a racing vehicle. Key features and advantages of the vehicle, the design process, production possibilities and business offers must be mentioned.</p>
        </li>
        <li className='w-[351px] h-[470px] mx-auto p-10 bg-white shadow-lg rounded-md text-center'>
            <img className='mx-auto' src="about-list-1.png" alt="" />
            <h1 className='font-semibold my-4'>BUSINESS PRESENTATION</h1>
            <p  className='font-medium'>The business presentation is set to demonstrate a business case to potential investors, that is created to show how to sell a racing vehicle. Key features and advantages of the vehicle, the design process, production possibilities and business offers must be mentioned.</p>
        </li>
        <li className='w-[351px] h-[470px] mx-auto p-10 bg-white shadow-lg rounded-md text-center'>
            <img className='mx-auto' src="about-list-1.png" alt="" />
            <h1 className='font-semibold my-4'>BUSINESS PRESENTATION</h1>
            <p  className='font-medium'>The business presentation is set to demonstrate a business case to potential investors, that is created to show how to sell a racing vehicle. Key features and advantages of the vehicle, the design process, production possibilities and business offers must be mentioned.</p>
        </li>
    </ul>
    </section>
  )
}

export default page