import React, { useRef } from 'react'

const Useref2 = () => {
  const  inputele= useRef("")
  const buttonclicked= function (){
    console.log( inputele.current);
    inputele.current.value="pink"
  }
  return (
    <>
      <input type="text"  ref = {inputele} />
      <button onClick={buttonclicked}>button</button>
      
    </>
  )
}

export default Useref2
