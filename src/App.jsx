import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  alert("Welcome.........");


  function english(){
    console.log("hii....")
  }

  const details=()=>{
    console.log("Namastha");
  }
  
 
  return ( 
    <>

    <h1>WELCOME</h1>
    <div className='b1'><button  onClick={english}>English</button> </div>
    <div className='b2'><button  onClick={()=>console.log("Vanakam")}>Tamil</button> </div>
    <div className='b3'><button  onClick={details}>Hindi</button></div>
    </>
  )
}
export default App
