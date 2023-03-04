import React from 'react'

const About = () => {
  return (
    <div className='about' >
      <div className='about_text_box'>
      <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tellusnec arcu faucibus viverra. Sed at tellusnec arcu faucibus viverra. ISed at tellusnec arcu faucibus viverra. ISed at tellusnec 
            arcu faucibus viverra. I
            </p>
      </div>
      <div className='about_image_box'>
      <img src="../Fundamentals/restauranfood.jpg" alt='' width={200} height={200} className="about_image_2" />
      <img src="../Fundamentals/restauranfood.jpg" alt='' width={200} height={200} className="about_image_1"/>
      </div>
    </div>
  )
}

export default About