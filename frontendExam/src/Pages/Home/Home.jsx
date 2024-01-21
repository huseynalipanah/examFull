import React from 'react'
import Header from '../../Components/Header/Header'
import Watches from '../../Components/Watches/Watches'
import { Helmet } from 'react-helmet-async'
import Splendid from '../../Components/Splendid/Splendid'
import SeeYourself from '../../Components/SeeYourself/SeeYourself'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <Splendid />
      <SeeYourself />
      <Watches />

    </div>
  )
}

export default Home