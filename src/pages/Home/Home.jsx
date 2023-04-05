import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
//карусель
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
//store
import { TestContext } from 'Store'
// components
import { Container } from '../../layouts'
//data
import products from './../../seeders/Products'

const HomePage = () => {
  const test = useContext(TestContext)
  return (
    <Container>
      {test}
      <div className='flex flex-wrap mt-4'>
        <Carousel
          showArrows
          // autoPlay
          // emulateTouch
          infiniteLoop
          showThumbs={false}
        >
          {products.map((item) => (
            <div className='flex items-center justify-center' key={item.id}>
              <img
                src={item.img}
                alt={item.title}
                style={{ maxWidth: '320px' }}
              />
              <div className='flex flex-col items-start'>
                <span className='ui-title-3 mb-2'>{item.title}</span>
                <span className='mb-4'>{item.price}</span>
                <Link to={`/products/${item.alias}`}>
                  <div className='ui-button isPrimary'>See more</div>
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  )
}

export default HomePage
