import React from 'react'
import './Home.css'
import { HeaderHome, Banner, Courses, AboutUs } from '../../Components'




const Home = () => {

  return (
    <div className='home-container'>
      <HeaderHome/>
      <Banner/>
      <Courses id = "courses"/>
      <AboutUs id = "aboutus"/>
    </div>
  )
}

export default Home
