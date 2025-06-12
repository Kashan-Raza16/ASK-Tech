import React from 'react'
import Footer from '../../component/Footer/Footer.jsx'
import Header from '../../component/Header/Header.jsx'
import HeroSection from './HeroSection.jsx'
import HowWrok from './HowWrok.jsx'
import ThinkMakeSolve from './ThinkMakeSolve.jsx'
import Card from './Card.jsx'

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ThinkMakeSolve />
      <Card />
      <HowWrok />
      <Footer />
    </>
  )
}

export default Home
