import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import products from 'seeders/Products'
import { Container } from '../../../layouts'
import classNames from 'classnames'

const ProductItemPage = () => {
  const [item, setItem] = useState(true)
//status
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  //alias
  const { itemAlias } = useParams()
  //redirect
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

  const handleAddCard = () => {
    //....logic
    setLoading(true)
    setTimeout(() => {
      setSuccess(true)
      setLoading(false)
    }, 1000);
  }


    const buttonClasses = classNames('ui-button isPrimary', {
      isLoading: loading,
    })

  const renderContent = item && (
    <div className='flex flex-col items-center'>
      <img src={item.img} alt={item.title} style={{ maxWidth: '420px' }} />
      <h1 className='ui-title-1 mb-4'>{item.title}</h1>
      <span>{item.price}</span>
      {/* controls */}
      {success && <p className='ui-text isSuccess mt-4'>Success! Product added to the cart!</p>}
      <div className='flex mt-2'>
        <Link className='ui-button isLink' to='/'>
          Add to home
        </Link>
        <Link className={buttonClasses} onClick={handleAddCard}>{loading ? 'loading...' : 'add to cart'}</Link>
      </div>
    </div>
  )

  return <Container>{renderContent}</Container>
  }

export default ProductItemPage
