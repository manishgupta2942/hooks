import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import A1 from './component/A1'
import { useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)
 const fun=  useCallback(  ()=>{
    return 1;

  }
  ,[count]
  )
// const fun= ()=>{};


  return (
    <>
     <h1>cout is : {count}</h1>
     <button onClick={()=>setCount(count=>count+1)}>increment</button>
     <button  onClick={()=>setCount(count=>count-1)}>decrement</button>
     <A1 fun= {fun}/>
    </>
  )
}

export default App
