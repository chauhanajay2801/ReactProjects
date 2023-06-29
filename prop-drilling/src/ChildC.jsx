import React, { useContext } from 'react'
import { data,data1 } from './App'

function ChildC() {
    const name = useContext(data);
    const age = useContext(data1);
  return (
    <>
    <h1>{name}</h1>
    <h1>{age}</h1>
    </>
  )
}

export default ChildC