import React from 'react'
import { Link } from 'react-router-dom'
import flogo from "../assets/image/logo.png"

function Header() {
  return (
    <>
    <header className="py ai sticky">
  <div className="con grid gtc3">
    <img src={flogo} alt="Company Logo" />
    <ul className="flex gap jc gap40">
      <li><Link to="./">Home</Link></li>
      <li><Link to="./Destination">Destination</Link></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Pages</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <div className="flex gap20 ai">
      <p>Region</p>
      <button>Login</button>
    </div>
  </div>
</header>
    </>
  )
}

export default Header