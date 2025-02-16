import React from 'react'
import Navabar from '../components/Navbar'
import Hero from '../components/Hero'

const LandingPage = () => {
  return (
<div className="h-[130vh] w-screen bg-gradient-to-b from-purple-700 to-transparent pt-10">
  <Navabar />
  <Hero/>
</div>
  )
}

export default LandingPage