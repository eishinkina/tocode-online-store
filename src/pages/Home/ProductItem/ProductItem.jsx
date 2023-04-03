import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { Container } from '../../../layouts'

const ProductItemPage = () => {
  const {itemAlias} = useParams()
  return (
    <Container>
      <h1 className='ui-title-1 mb-4'>Product Item Page - {itemAlias}</h1>
      <p>
        Go to{' '}
        <Link className='ui-link' to='/'>
          Home page
        </Link>
        ?
      </p>
    </Container>
  )
}

export default ProductItemPage;
