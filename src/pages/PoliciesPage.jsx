import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Policies from '../components/Policies';
import PoliciesBanner from '../components/PoliciesBanner';

export default function 
() {
  return (
    <div className='bg-slate-50'>
        <NavigationBar />
        <PoliciesBanner />
        <Policies />
    </div>
  )
}
