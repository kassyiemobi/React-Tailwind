import React from 'react';
import laptop from '../assets/laptop.jpg'

function Analytics() {
    return (  
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className="w-[500px] mx-auto my-4"src={laptop} alt="" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] text-xl font-bold' >DATA ANALYTICS DASHBOARD</p>
                    <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Manage Data Analytics Centrally</h1>
                    <p>
                        Lorem Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. 
                    </p>
                 <button className='bg-black text-[#00df9a]  rounded w-[200px] font-meduim my-6 py-3 mx-auto md:mx-0'>Get Started</button>

                </div>


            </div>

        </div>
    );
}

export default Analytics;