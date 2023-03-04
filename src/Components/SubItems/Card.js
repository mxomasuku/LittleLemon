import React from 'react'

const Card = () => {
  return (
    <div className='specialsCard'>
     <div className='specials_card_image'>
            <img src="../Fundamentals/greek_salad.jpg" alt=''height={200}/>
        </div>
        <div className='specials_card_pricing'>
            <h3 className='specials_card_dish_title'>Greek Salad</h3>
            <h3 className='specials_card_price_title'>$12.99</h3>
        </div>
        <p className='specials_card_ptag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tellusnec arcu faucibus viverra. I</p>
        <div>
          <span className='specials_card_delivery'>Order a delivery</span>
        <img src="../Fundamentals/Recent.svg"/>
        </div>
    </div>
  )
}

export default Card