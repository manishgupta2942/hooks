import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import P1 from './component/P1' 


function App() {
  const [count, setCount] = useState(0)
  const[value,setvalue]= useState(0);
  
  

  return (
    <>
    <P1 count={count}/>

    <input type='text'   onChange={(e)=>{setCount(e.target.value)}}/>
 
  <h2>increment value {value}</h2>
  <button onClick={()=>setvalue(value=>value+1)}></button>
  </>
  )
}

export default App
