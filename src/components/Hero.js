import React from 'react';
import Typed from 'react-typed'

function Hero() {
    return ( 
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl md:py-6 sm:text-6xl text-4xl font-bold'>Grow with data.</h1>
            <div className= 'flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl py-2'>Fast, flexible financing for</p>
                    <Typed className='md:text-5xl sm:text-4xl text-xl text-gray-500 pl-2' strings={[ 'BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={ 140} loop/>
                </div>
                 <p className='text-gray-500 font-bold md:text-2xl text-xl'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms</p>
            <button className='bg-[#00df9a] rounded w-[200px] font-meduim my-6 py-3 mx-auto'>Get Started</button>
            </div>
           
        </div>
     );
}

export default Hero;