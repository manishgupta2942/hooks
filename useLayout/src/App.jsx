import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log("Useeffect render hua")
  },[])
  useLayoutEffect(()=>{
    console.log("useLayout render hua");
  })
  console.log("Apprender hua")

  return (
    <>
     <h1>hello React</h1>
    {  Array(40000).fill(' ').map((item,index)=>(<li key={index}>{Math.pow(Math.random(),10)}</li>))}
    </>
  )
}

export default App
