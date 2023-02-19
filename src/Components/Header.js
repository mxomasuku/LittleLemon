import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
         <header>
      <nav className='nav'>
<div className='nav_icons'>
  <img src="../Fundamentals/logo.svg" alt='logo'/>
  <img className="hamburger" src="../Fundamentals/icon _hamburger menu_.svg"/>
</div>

<ul className='nav-items'>
<li>
  <Link to="/">Home</Link>
</li>
<li>
  <Link to="/about">About</Link>
</li>
<li>
  <Link to="/menu">Menu</Link>
</li>
<li>
  <Link to="/reservation">Reservation</Link>
</li>
<li>
  <Link to="/orderonline">Order Online</Link>
</li>
<li>
  <Link to="/Login">Login</Link>
</li>

</ul>
      </nav>
    </header>
    </div>


  )

}



export default Header