import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import AOS from "aos"

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <Box>
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  )
}

export default App
