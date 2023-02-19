import React from 'react'
import Hero from '../Components/SubItems/Hero'
import About from '../Components/SubItems/About'
import Testimonials from '../Components/SubItems/Testimonials'
import Specials from '../Components/SubItems/Specials'

const Home = () => {
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
export default Home