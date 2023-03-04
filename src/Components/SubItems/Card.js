import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle } from '@fortawesome/free-solid-svg-icons'

const Card = () => {
  return (
    <div className='specialsCard'>
     <div className='specials_card_image_box'>
            <img src="../Fundamentals/greek_salad.jpg" className='specials_card_image' alt=''height={200}/>
        </div>
        <div className='specials_card_pricing'>
            <h3 className='specials_card_dish_title'>Greek Salad</h3>
            <h3 className='specials_card_price_title'>$12.99</h3>
        </div>
        <p className='specials_card_ptag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tellusnec arcu faucibus viverra. I</p>
        <div className='specials_card_delivery_box'>
          <span className='specials_card_delivery'>Order a delivery</span>
          <FontAwesomeIcon icon={faBicycle} />
         


        </div>
    </div>
  )
}

export default Card