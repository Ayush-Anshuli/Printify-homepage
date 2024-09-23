import React from 'react'
import { Container } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Profits from '../components/Profits';
import Design from '../components/Design';
import Connect from '../components/Connect';
import Feedback from '../components/Feedback';
import Payment from '../components/Payment';
import Footer from '../components/Footer';
const HomePage = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Profits/>
      <Design/>
      <Connect/>
      <Feedback/>
      <Payment/>
      <Footer/>
    </>
  )
}

export default HomePage