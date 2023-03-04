import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className='hero' >
        <div className='hero_text_box'>
            <h1 className='hero_title'>Little Lemon</h1>
            <h2 className='hero_h2'>Chicago</h2>
            <p className='heroParagraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tellusnec arcu faucibus viverra. I
            </p>
            <Link to="/reservation"><button role="article" className='btn_primary hero-btn'>Reserve a table</button> </Link>
        </div>
        <div>
        </div>
        <div>
            <img src="../Fundamentals/restauranfood.jpg" alt='' width={200} height={200} className="heroImage" />
        </div>

    </div>
  )
}

export default Hero