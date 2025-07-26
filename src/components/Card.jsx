import React from 'react'
import { LuLeafyGreen } from 'react-icons/lu'
import { GiChicken } from 'react-icons/gi'
function Card({name,image,id,price,type}) {
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 m-1 rounded-xl flex flex-col gap-4 shadow-lg hover:border-2 border-green-300'> 

      <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
      {/* div for image */}
        <img src={image} alt="loading.." className='object-cover' />
      </div>

      {/* name */}
      <div className='text-2xl font-semibold'>
            {name}
      </div>
      
      {/* price */}
      <div className='w-full flex justify-between items-center'>
        
            <div className='text-lg font-semibold text-green-500'>Rs {price}</div>
        
            <div className='flex justify-center items-center gap-2 text-green-500 text-lg font-semibold'>
                {/* here adding condition to display veg and non-veg icon */}
                {type==="veg"?<LuLeafyGreen/>:<GiChicken/>}
                 <span>{type}</span>
            </div> 
      </div>
      {/* add to cart Button  */}
      <div>
        <button className='w-full p-3 bg-green-500 rounded-lg text-white hover:bg-green-400 transition-all cursor-pointer'>Add to cart</button>
      </div>
    </div>
  )
}

export default Card
