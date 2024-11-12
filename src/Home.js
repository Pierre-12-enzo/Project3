import React from 'react'
import { useNavigate } from 'react-router'


function Home(){
    let navigate = useNavigate();
    function handleLogin() {
        //
       
        navigate("/login", { replace: false });
    }
    return(
        <>
        <button className='btn btn-success' onClick={handleLogin()}>Go to Login</button>
        </>
    )
}

export default Home