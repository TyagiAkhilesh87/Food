import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';



function navbar() {
  let {input,setInput,cate,setCate} = useContext(dataContext)
  useEffect(()=>{
    let newlistfiltered = food_items.filter((items)=>items.food_name.toLowerCase().includes(input.toLowerCase()))
    setCate(newlistfiltered)
  },[input])
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-8 md:px-8'>
      <div className='w-[60px] h-[50px] bg-white flex justify-center items-center rounded-md shadow-lg'>
        {/* mdfastfood is the icon which is imported form react-icons  */}
        <MdFastfood className='w-[30px] h-[30px] text-green-500'/> 
      </div>
      
      {/* now making searach box in form tag  */}
        <form action="" onSubmit={(e)=>e.preventDefault()} className='w-[50%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-xl shadow-xl md:w-[70%]'>
            {/* adding icon of search IoSearch */}
            <IoSearch className='text-green-500 w-[20px] h-[20px]'/>
            <input type="text" placeholder='Search Items...' onChange={(e)=>setInput(e.target.value)} value={input} className='w-[100%] outline-none text-[16px] md:text-[20px]'/>
        </form>

        {/* adding Shopping Bag Icon  */}
        <div className='w-[60px] h-[50px] bg-white flex justify-center items-center rounded-md shadow-xl relative'>
            {/* adding span tag to display cart item count initial its set to 0  */}
            <span className='absolute top-0 right-2 text-green-500 font-bold'> 0</span> 
            {/* mdfastfood is the icon which is imported form react-icons  */}
            <LuShoppingBag className='w-[30px] h-[30px] text-green-500'/> 
        </div>
    </div>
  )
}

export default navbar
