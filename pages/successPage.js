import React, { useState, useEfffect } from 'react';
import Link from 'next/link';
import { BSBagCheckFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

import { useStateContext } from '../context/stateContext';

const successPage = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  return (
    <div>successPage</div>
  )
}

export default successPage