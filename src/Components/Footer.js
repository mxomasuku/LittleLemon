import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <img src="../Fundamentals/restauranfood.jpg" alt='' width={200} height={300} />
      <div>
        <h3>Doormat Navigation</h3>
        <br/>
        Home
        <br/>
About
<br/>
Reservations
<br/>
Order Online
<br/>
Login
      </div>
      <div>
        <h3>Contact</h3>
        <br/>
        Address
        <br/>
Phone Number
<br/>
Email
</div>
<div>
<h3>Social Media</h3>
  <ul>
  <li>Facebook</li>
  <li>Twitter</li>
  <li>Instagram</li>
  </ul>
</div>

    </div>
  )
}

export default Footer