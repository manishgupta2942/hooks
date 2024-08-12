import React, { useEffect, useState } from 'react';
import './App.css'
let cnt =0;

function Counter() {
 
  const fun = function(){
   
  
    

    // setCount(count+1);
    // setCount(count+1);//yha same count baar baar update ho rha that why create the problem
    //  setCount((count)=>{return count+1});
    // console.log(count);
    //setCount(count+1);


    
     setCount(count=> count+1);
   
    //imp object ko update hmesha callback krke krte hai 
  }


 

 
  const [count, setCount] = useState(0);
  useEffect(()=>{ 
    console.log(`no of times useEffect executed: ${count}`);
    //there is issue in restrictmode 

    setTimeout(()=>{
      setCount((manish)=>{return manish+1})
    },10000)
  },[count])


 

  return (
    <div>
      <p>You clicked {count} times</p>
     
      <button onClick={fun}>Click me</button>
    
        
      
    </div>
  );
}

export default Counter;

