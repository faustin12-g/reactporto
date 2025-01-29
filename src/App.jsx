import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portofolio from './components/portofolio/Portofolio'
import Testemonial from './components/testemonials/Testemonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
    <Header />
    <Nav />
    <About/>
    <Experience/>
    <Services />
    <Portofolio />
    <Testemonial/>
    <Contact />
    <Footer/>
    

    </>
  )
}

export default App
