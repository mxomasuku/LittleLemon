import React from 'react'

const Card = () => {
  return (
    <div>
     <div>
            <img src="../Fundamentals/greek_salad.jpg" alt='' width={200} height={200}/>
        </div>
        <div>
            <h3>Greek Salad</h3>
            <h3>$12.99</h3>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tellusnec arcu faucibus viverra. I</p>
        <div>
          <span>Order a delivery</span>
        <img src="../Fundamentals/Recent.svg"/>
        </div>
    </div>
  )
}

export default Card