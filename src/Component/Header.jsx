import React from 'react'
import { Link } from 'react-router-dom'
import flogo from "../assets/image/logo.png"

function Header() {
  return (
    <>
    <header className="py ai sticky">
  <div className="con grid gtc3 pin">
    <img src={flogo}  alt="Company Logo" />
    <ul className="flex gap jc gap40">
      <li className='hover:text-white'><Link to="./">Home</Link></li>
      <li className='hover:text-white'><Link to="./Destination">Destination</Link></li>
      <li className='hover:text-white'><Link to="./">Blog</Link></li>
      <li className='hover:text-white'><Link to="./">Pages</Link></li>
      <li className='hover:text-white'><Link to="./">Contact</Link></li>
    </ul>
    <div className="flex gap20 ai pin1">
      <p>Region</p>
      <button>Login</button>
    </div>
    <div className='menu'>
      <i class="fa-solid fa-bars-staggered"></i>
    </div>
  </div>
</header>
    </>
  )
}

export default Header