import React from 'react';
import { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Policies from '../components/Policies';
import PoliciesBanner from '../components/PoliciesBanner';
import Footer from '../components/Footer';
import { catalogData } from '../testData/catalogData';
import { cartItemsData } from '../testData/cartItemsData';

export default function PoliciesPage() {
  const [cartItems, setCartItems] = useState(cartItemsData);
  return (
    <div className='bg-slate-50'>
      <NavigationBar cartItemCount={cartItems.length} />
      <PoliciesBanner />
      <Policies catalogData={catalogData} cartItems={cartItems} setCartItems={setCartItems} />
      <Footer />
    </div>
  )
}
