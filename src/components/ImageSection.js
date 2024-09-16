import React from 'react'

function ImageSection() {
  return (
    <div className="mt-5 h-[90vh] container flex justify-center items-center">
    <div className='img-section w-[52%] ml-[15%] relative'>
     <img  className='rounded-3xl w-[65%]' src="https://jobbox.archielite.com/storage/pages/img1.png" alt="employees" />
     <img  className='rounded-3xl absolute mt-[-73%] ml-[-35%] h-[90%]' src="https://jobbox.archielite.com/storage/pages/img-chart.png" alt="employees" />

     <img  className='rounded-3xl absolute  mt-[-26%] ml-[37%] h-[100%]' src="	https://jobbox.archielite.com/storage/pages/controlcard.png" alt="employees" />


     </div>  
    <div className='desc-section w-[48%] inline-block'>
    <div className="heading">
               <span className='text-3xl inline-block font-bold text-[#777f87]'>Millions Of Jobs.</span> 
          <span className='text-5xl inline-block font-bold text-[#05264e]'> Find The One That’s Right For You</span>
           </div>
           <div className='desc mt-3 w-25 flex flex-col justify-start'>
               <p className='text-[#4f5e64] font-extralight'>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there.</p>
               <div className='flex items-center gap-x-8 mt-4'>
               <button className='bg-[#3C65F4] text-white rounded-md w-[30%] px-3 py-2 text-sm font-medium'>Search jobs</button>
               <a className='text-[#4f5e64] cursor-pointer font-extralight underline decoration-1'>Learn more</a>
               </div>

           </div>


     </div>  

   </div> 
  )
}

export default ImageSection