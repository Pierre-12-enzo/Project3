import React from 'react'
import { useState } from 'react'

const ShowHide = () => {
    const [obj, setObj] = useState({tpy:"password", btntext:"Hide"})

    const change = () => {
        if (obj.tpy === "password") {
          setObj({...obj,typ:"password" , btntext:"show"})
    } else {
        
    }
  return (
    <div>ShowHide</div>
  )
}
}

export default ShowHide