import React from 'react'

const Header = ({ cartCount, onCartClick}) => {
  return (
      <>
          <div className='nav-bar'>
          <h3><i className="fa-solid fa-pizza-slice"></i>PizzaHub</h3>
          <h5>Home</h5>
          <h5>Menu</h5>
          <h5>About</h5>
          <h5>Offers</h5>
          <h5>Contact</h5>
          <button onClick={onCartClick}><i className="fa-solid fa-cart-shopping"></i> Cart:{cartCount}</button>
      </div>
      </>
      

  )
}

export default Header
