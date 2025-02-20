import React from 'react'
import HeroSection from '../components/HeroSection'
import BrandingSection from '../components/LandingSections/BrandingSection'
import SolutionSection from '../components/LandingSections/SolutionSection'
import SuccessStoriesSection from '../components/LandingSections/SuccessStoriesSection'
import CTASection from '../components/LandingSections/CATSection'
import VideoSection from '../components/LandingSections/VideoSection'
import StatsBar from '../components/LandingSections/StatsBar'
import Carousel from '../components/LandingSections/Carousel'

const LandingPage = () => {
  return (
    <div>
      <HeroSection/>
      <Carousel/>
      <VideoSection />
      <StatsBar/>
      <BrandingSection />
      <SolutionSection />
      <SuccessStoriesSection />
      <CTASection />
    </div>
  )
}

export default LandingPage
