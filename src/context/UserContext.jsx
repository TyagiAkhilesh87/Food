import React, { createContext, useState } from 'react'
import { food_items } from '../food';

export const dataContext = createContext();

{/* used childern because main ke ander usercontext add kiya hain 
aur userContext By Default Childern Prop Pass karta hain ushi children ko dikhana rehta hain isliy childern keyword use kr rhe hain */}
function UserContext({children}) {
    let [input,setInput] = useState("");
    // set input and input used for taking input from userside
    let [cate, setCate] = useState(food_items)//here seting for category 
    let data = {
        input,
        setInput,
        cate,
        setCate
    }
  return (
    <div>        
        <dataContext.Provider value={data}>
        {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext
