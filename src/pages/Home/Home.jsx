import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from '../../layouts'

import products from './../../seeders/Products'

const HomePage = () => {
  return (
    <Container>
      <div className='flex flex-wrap mt-4'>
        {products.map((item) => (
          <div
            className='ui-card isAnimated mr-4 mb-4'
            key={item.id}
            style={{ maxWidth: '420px' }}
          >
            <div className='ui-card-body'>
              <img
                src={item.img}
                alt={item.title}
                style={{ maxWidth: '320px' }}
              />
              <div className='flex flex-col items-center'>
                <span className='ui-title-3 mb-2'>{item.title}</span>
                <span className='mb-4'>{item.price}</span>
                <Link to={`/products/${item.alias}`}>
                  <div className='ui-button isPrimary'>See more</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default HomePage
