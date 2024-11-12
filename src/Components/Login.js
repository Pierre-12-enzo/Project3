import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   <>
   <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <h2 class="text-center my-4">Login</h2>
                <form className='form'>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter your password" />
                    </div>
                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                </form>
                <p class="text-center mt-3">
                    Don't have an account? <Link to="#">Sign up</Link>
                </p>
            </div>
        </div>
    </div>
   </>
  )
}

export default Login