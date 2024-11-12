import React from 'react'
import { Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/">Brand</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact">Contact</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Api">Api</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/ref">Reference</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link btn btn-primary" to="/login">Login</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link btn btn-primary" to="/onSubmit">OnSubmit</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Navbar