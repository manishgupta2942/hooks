import React from 'react'
import { useContext } from 'react'
import { Appcontex } from '../contex/Appcontex'

const Header = () => {
  const phone = useContext(Appcontex)
  return (
    <div>
      <h1>Hello this side header</h1>
      <h2>My phone no is {phone}</h2>
      
    </div>
  )
}

export default Header

