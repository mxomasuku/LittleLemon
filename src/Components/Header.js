import React from 'react'

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
<li>Home</li> 
<li>About</li> 
<li>Menu</li> 
<li>Reservation</li> 
<li>Order Online</li> 
<li>Login</li>
</ul>
      </nav>
    </header>
    </div>
  )
}

export default Header