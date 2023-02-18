import React from 'react'
import Card from './Card'


const Specials = () => {
  return (
    <div>
      <div className='specials_titles'>
        <h2>This week's specials</h2>
        <button role="View Specials" className='btn_primary'>Online Menu</button>
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