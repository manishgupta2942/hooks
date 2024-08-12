import React from 'react'
import { useMemo, useState } from 'react'

const P1 = ({count}) => {
  const cubef= function(count){
  
    
    console.log("calculation done");
    return Math.pow(count,3);
    
    
  }
 //const result= useMemo(()=>cubef(count),[count])
const result = cubef(count);
console.log("P1 RENDER HUA");
  return (
    <>
    <h1>cube of the count : {result}</h1>
  
    </>
  )
}

export default P1

