import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let name = "Karthik Jayaram S K"

  const infoDetails={ 
    name: "Karthik Jayaram S K",
    age: 18,
    Roll :43,
    dept: "M.tech CSE"
  }
  alert(`my name is ${infoDetails.name}`)
  console.log("My name is"+{name})
  return ( 
    <>
    
      <h1 style={{textAlign:"center"}}>My Department is {infoDetails.dept}</h1> 
      <p className='style'>Name: {infoDetails.name}<br/> 
        Age: {infoDetails.age}<br/>
        Roll:{infoDetails.Roll}<br/>
        Department: {infoDetails.dept}<br/>
      </p>
    </>
  )
}
export default App
