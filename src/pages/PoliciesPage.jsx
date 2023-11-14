import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Policies from '../components/Policies';
import PoliciesBanner from '../components/PoliciesBanner';
import Footer from '../components/Footer';

export default function
  () {
  return (
    <div className='bg-slate-50'>
      <NavigationBar />
      <PoliciesBanner />
      <Policies />
      <Footer />
    </div>
  )
}
