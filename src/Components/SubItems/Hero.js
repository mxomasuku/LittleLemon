import React from 'react'


const Hero = () => {
  return (
    <div className='hero'>
        <div>
            <h1>Little Lemon</h1>
            <h2 className='hero_h2'>Chicago</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tellusnec arcu faucibus viverra. I
            </p>
            <button role="article" className='btn_primary'>Reserve a table</button>
        </div>
        <div>
        </div>
        <div>
            <img src="../Fundamentals/restauranfood.jpg" alt='' width={200} height={200} />
        </div>

    </div>
  )
}

export default Hero