import React, { useCallback, useContext, useState } from 'react'
import Nav from '../components/navbar'
// import Category from '../Category'
import Categories from '../Category'
import Card from '../components/card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross1 } from 'react-icons/rx'

function home() {

  // let [cate, setCate] = useState(food_items)//here seting for category 

  let {cate,setCate,input} = useContext(dataContext)
  function filter(category) //here filter is name not Predefined funtion like filter
  {
    if(category==="all"){ //keeping in mind sab kuch case sensitve hain lower case mae 
      setCate(food_items)
    }else{
      let newList = food_items.filter((items) =>(items.food_category===category))
      setCate(newList)
      console.log(newList);
    }
  }
  return (
    <div className='bg-slate-200 w-full min-h-screen '>
     <Nav/>
       {/* below div is category block  category.jsx current directory */}
     {!input?<div className='flex flex-wrap justify-center item-center gap-5 w-[100%]'>
          {Categories.map((items) =>{
            return <div key={items.id} onClick={()=>filter(items.name.toLowerCase())} className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-4 p-5 justify-start text-[16px] font-semibold text-grey-600 rounded-lg shadow-xl hover:bg-green-200 transition-all duration-200'>
              {items.icon}
              {items.name}
            </div>            
          })}
        </div>:null}
        

        {/* Card Display here Card.jsx */}
        {/* <Card/>  bottom */}

        <div className='flex flex-wrap gap-4 p-5 justify-center items-center pt-8'>
          {cate.map((item)=>(
          <Card 
          key={item.id}
          name={item.food_name}
          image={item.food_image}
          id={item.id}
          price={item.price}
          type={item.food_type}/>
          ))}
        </div>


        {/* add to Cart wala Box rightSide Wala Box */}
        
        {/* rightSideBar */}
    </div>
  )
}

export default home
