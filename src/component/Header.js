import React from 'react'
import "./css/Header.css"
import Logo from "./image/instagram.png"

function Header() {
  return (
    <div className='head'>
      <header>
        <img className='headerComponent' src={Logo} alt='instagram logo'></img>
        <form className='headerComponent search '>
          <input type="text" placeholder="&#xf002; search" />
        </form>
        <div className='icons headerComponent'>
          <ul >
            <li><a href='/'><i className="fa-solid fa-house"></i></a></li>
            <li><a href='/'><i className="fa-solid fa-plus"></i></a></li>
            <li><a href='/'><i className="fa-regular fa-compass"></i></a></li>
            <li><a href='/'><i className="fa-regular fa-heart"></i></a></li>
            <li><a href='/'><i className="fa-solid fa-circle-user"></i></a></li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header