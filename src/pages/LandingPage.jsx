import React from 'react'
import HeroSection from '../components/HeroSection'
import BrandingSection from '../components/LandingSections/BrandingSection'
import TestimonialCarousel from '../components/LandingSections/TestimonialCarousel'

const LandingPage = () => {
  return (
    <div>
      {/* <HeroSection/> */}
      <BrandingSection/>
      <TestimonialCarousel/>
    </div>
  )
}

export default LandingPage
