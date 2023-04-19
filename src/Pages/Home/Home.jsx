import React from 'react'
import './style.scss'
import Banner from './Banner/Banner'
import Header from '../../compontent/Header/Header'
import Footer from '../../compontent/Footer/Footer'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Home