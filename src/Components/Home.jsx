import React from 'react'
import Navbar from './Navbar'
import AppNavbar from './AppNavbar'
// import UserModal from './UserModal'
// import Signup from './Signup'
// import Login from './Login'

import Hero from './Home/Hero'
import Events from './Home/Events'
import Services from './Home/Services'
import Plans from './Home/Plans'
import Enquary from './Home/Enquary'

const Home = () => {
  return (
    <div>
        <Hero />
        <Events />
        <Services />
        <Enquary />
        <Plans />
    </div>
  )
}

export default Home