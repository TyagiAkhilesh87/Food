import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  // here i am wrapping StirctAction with UserContext se map kardiye
  // kyuki link connect karni hain bina interfare kiye other element ko or page ko.
  //userContext ke and children likhna padega tab display hoga content 
  <UserContext>
    <App />
  </UserContext>,
)
