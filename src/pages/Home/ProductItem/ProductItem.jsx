import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import products from 'seeders/Products'
import { Container } from '../../../layouts'

const ProductItemPage = () => {
  const [item, setItem] = useState(true)
  const { itemAlias } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const nextItem = products.find((el) => el.alias === itemAlias)
    setItem(nextItem)
    if (nextItem) {
      setItem(nextItem)
    } else {
      navigate('/')
    }
  }, [])
  const renderContent = item && (
    <div className='flex flex-col items-center'>
      <img src={item.img} alt={item.title} style={{ maxWidth: '420px' }} />
      <h1 className='ui-title-1 mb-4'>{item.title}</h1>
      <span>{item.price}</span>
      {/* controls */}
      <div className='flex mt-4'>
        <Link className='ui-button isLink' to='/'>
          Add to home
        </Link>
        <Link className='ui-button isPrimary'>Add to cart</Link>
      </div>
    </div>
  )

  return <Container>{renderContent}</Container>
  }

export default ProductItemPage
