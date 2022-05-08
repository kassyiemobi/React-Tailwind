import React from 'react';
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

 function Cards() {
     return ( 
         <div className='w-full py-[10rem] px-4 bg-white'>
             <div className='max-w-[1240] mx-auto grid md:grid-cols-3 gap-8'>
                 <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '> 
                     <img className='w-20 mx-auto mt-[-3em] bg-white ' src={single} alt='' />
                     <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                     <p className='text-center text-4xl font-bold'> $149</p>
                     <div className='text-center font-medium'>
                         <p className='py-2 border-b mx-8 mt-8'>5OOGB Storage</p>
                         <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                         <p className='py-2 border-b mx-8 mt-8'>Send Up to 2 GB</p>
                     </div>
                     <button  className= 'bg-[#00df9a] rounded-md font-meduim w-[200px] my-6 py-3 mx-auto'>Start Trial</button>
                 </div> 
                 <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>  
                     <img className='w-20 mx-auto mt-[-3em] bg-white' src={double} alt='' />
                     <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                     <p className='text-center text-4xl font-bold'> $149</p>
                     <div className='text-center font-medium'>
                         <p className='py-2 border-b mx-8 mt-8'>5OOGB Storage</p>
                         <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                         <p className='py-2 border-b mx-8 mt-8'>Send Up to 2 GB</p>
                     </div>
                     <button  className= 'text-[#00df9a] bg-black rounded-md font-meduim w-[200px] my-6 py-3 mx-auto'>Start Trial</button>
                 </div> 
                 <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'> 
                     <img className='w-20 mx-auto mt-[-3em] bg-white' src={triple} alt='' />
                     <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                     <p className='text-center text-4xl font-bold'> $149</p>
                     <div className='text-center font-medium'>
                         <p className='py-2 border-b mx-8 mt-8'>5OOGB Storage</p>
                         <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                         <p className='py-2 border-b mx-8 mt-8'>Send Up to 2 GB</p>
                     </div>
                     <button  className= 'bg-[#00df9a] rounded-md font-meduim w-[200px] my-6 py-3 mx-auto'>Start Trial</button>
                 </div>


             </div>

         </div>
      );
 }
 
 export default Cards;