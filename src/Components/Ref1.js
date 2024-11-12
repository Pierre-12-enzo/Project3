import React from 'react'
import { useRef, useState } from 'react'

export const Ref1 = () => {
    const inpu1 = useRef();
    const inpu2 = useRef();
   const [name, setName] = useState()
   const [age, setAge] = useState()

   const submit = () => {
    setName(inpu1.current.value)
    setAge(inpu2.current.value)
   }
  return (
   <>
    Enter Name <input type="text" ref={inpu1} />
    Enter Age <input type="number" ref={inpu2} />
    <button onClick={submit}>Submit</button>

    <p className='h1'>Your name is: <span className='text-primary'> {name}</span> </p>
    <p className='h1'>Your age is: <span className='text-success'>{age}</span></p> 
   </>
  )
}
