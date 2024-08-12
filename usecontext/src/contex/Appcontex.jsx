
import React, {createContext} from 'react'
export const Appcontex= createContext();

const ContexProvider =(props) =>{
  const phone = 7235090327
  return (
    <Appcontex.Provider  value={phone}>
    {props.children}
    </Appcontex.Provider>

  )

}

export default ContexProvider

