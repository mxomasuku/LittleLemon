import React from 'react'
import TestimonialsCard from './TestimonialsCard'

const Testimonials = () => {
  return (
    <div className='testimonials'>
<h2 className='testimonials_title'>Testimonials</h2>

<div className='testimonials_card_dock'>
<TestimonialsCard/>
<TestimonialsCard/>
<TestimonialsCard/>
<TestimonialsCard/>
</div>


    </div>
  )
}

export default Testimonials