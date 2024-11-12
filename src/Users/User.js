import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  return (
   <>
   <nav>
    <Link to="/profile">Profile</Link>
    <Link to="/account">Account</Link>
   </nav>
   </>
  )
}

export default User