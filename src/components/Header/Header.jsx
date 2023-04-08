import React, { useContext } from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import { app } from '_config'

import './Header.scss'

import { Container } from 'layouts'

///store
import { ProductsContext } from 'Store'

// icons:
import { ReactComponent as LogoIcon } from 'assets/img/logo.svg'
import { ReactComponent as BagIcon } from 'assets/img/bag.svg'

const Header = ({ isLogo, isFixed, className, ...attrs }) => {
  const classes = classNames('Header', className, {
    isFixed,
  })
  const [products, setProducts] = useContext(ProductsContext)

  const menuLinks = [
    {
      title: 'Home',
      alias: '/',
    },
    {
      title: 'About',
      alias: '/about',
    },
    {
      title: (
        <span>
          <span className='w3-small w3-badge w3-indigo'>
            {products.length ? products.length : ''}
          </span>{' '}
          <BagIcon />
        </span>
      ),
      alias: '/checkout',
    },
  ]
  const menuItem = menuLinks.map((item) => (
    <li key={item.alias}>
      <NavLink to={item.alias}>
        <div className='ui-button isLink'>{item.title}</div>
      </NavLink>
    </li>
  ))

  const menuList = <ul className='HeaderList'>{menuItem}</ul>

  return (
    <header className={classes} {...attrs}>
      <Container>
        <div className='flex justify-between py-2 mb-4'>
          <div className='Logo'>
            {isLogo && <LogoIcon />}
            <span>{app.name}</span>
          </div>
          {menuList}
        </div>
      </Container>
    </header>
  )
}

Header.propTypes = {
  isLogo: propTypes.bool,
  isFixed: propTypes.bool,
  className: propTypes.string,
}

Header.defaultProps = {
  isLogo: false,
  isFixed: false,
  className: '',
}

export default Header
