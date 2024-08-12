import React from 'react'
import { useState , useEffect } from 'react';

const Localstoragehook = ({key,intialvalue}) => {
  const [name, setName] = useState(localStorage.getItem('key') ? localStorage.getItem('key') : 'intialvalue');

  useEffect(() => {
    localStorage.setItem('key', name);
  }, [name,key]);
  return (
   [name,setName]
  )
}

export default Localstoragehook
