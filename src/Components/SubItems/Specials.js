import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'


const Specials = () => {
  return (
    <div className="specials">
      <div className='specials_titles'>
        <h1 className='specials_heading'>This week specials</h1>
        <Link to="/orderonline"><button role="View Specials" className='btn_primary orderonline'>Online Menu</button></Link>
        </div>
        <div className='specials_cards_dock'>
        <Card/>
        <Card/>
        <Card/>
        </div>
    </div>
  )
}

export default Specials