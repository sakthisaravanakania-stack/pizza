import React from 'react'
import ProductCard from './ProductCard';

const ProductList = ({ products, onAddToCart}) => {
  return (
      <>
          <div className='product'>
              <h2>Our Popular Pizzas <i className="fa-solid fa-pizza-slice"></i><i className="fa-solid fa-box-open"></i></h2>
              <h5>More Than Food it's a Feeling <i className="fa-solid fa-bowl-food"></i></h5>
          </div>

          <div className='product-cart'>
              {
                  products.map((product) => (
                      < ProductCard
                          key={product.id}
                          product={product}
                          onAddToCart={onAddToCart}
                      />
                  ))
              }
          </div>
      </>
  )
}

export default ProductList
