import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Useref2 from './component/Useref2.jsx'

function App() {
  const [count, setCount] = useState(0)
  // const [rcount,rsetValue]= useState(0)
  const rcount=useRef(0);
  //problem is this , if we dont not set any depdencies than useeffect will infintely update by rcount so for making un mutable variable we use useref
  // useEffect(()=>{rsetValue(rcount=>rcount+1)},[count])
  useEffect(()=>{rcount.current= rcount.current+1})

  return (
    <>
   
    <button onClick={()=>setCount(count=>count-1)}>-1</button>
    <h2>{count}</h2>

    <button onClick={()=>setCount(count=>count+1)}>+1</button>
    <h2>No of times site rerender : {rcount.current}</h2>
    <Useref2/>
    </>
  
   
  )
}

export default App
