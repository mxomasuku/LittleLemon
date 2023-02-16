import React from 'react'
import Hero from './SubItems/Hero'
import About from './SubItems/About'
import Testimonials from './SubItems/Testimonials'
import Specials from './SubItems/Specials'

const Main = () => {
  return (
    <div>
        <section>
            <Hero/>
        </section>
        <section>
            <Specials/>
        </section>
        <section>
            <Testimonials/>
        </section>
        <section>
            <About/>
        </section>
    </div>
  )
}

export default Main