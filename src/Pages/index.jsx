// import { Contact, Home } from 'lucide-react'
import React from 'react'
import Home from './Home/Home'
import Contact from './Contact/Contact.jsx'
import About from './About/About'
import Products from './Products/Products'
import Service from './Service/Service'
import StudentSection from './StudentSection/StudentSection.jsx'
export const index = () => {
  return (
    <>
    <Home />
    <Contact />
    <About />
    <Products />
    <Service />
    <StudentSection />
    </>
  )
}
