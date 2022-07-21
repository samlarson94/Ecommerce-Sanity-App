import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './';
import { useStateContext } from '../context/stateContext';

import { urlFor } from '../lib/client'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Speaker City</Link>
      </p>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-itm-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar