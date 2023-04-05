import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from '../../layouts'

const CheckoutPage = () => {
  return (
    <Container>
      <h1 className='ui-title-1 mb-4'>Checkout</h1>
      <div className='flex mt-4'>
        <Link className='ui-button isLink' to='/'>
          Back to home
        </Link>
        <Link className='ui-button isPrimary'>Refresh to cart</Link>
      </div>
    </Container>
  )
}

export default CheckoutPage
