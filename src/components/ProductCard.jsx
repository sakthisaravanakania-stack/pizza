import React from 'react'

const ProductCard = ({product,  onAddToCart}) => {
  return (
          <div className='product'>
          <div className='product-image'>
              <img src={product.image} alt={product.image} />
          </div>

          <div className='product-name'>
              <h1>{ product.name}</h1>
          </div>

          <div className='product-content'>
              <p>{product.crust }</p>
              </div>


          <div className='product-price'>
              <p>Rs.{Number(product.price).toLocaleString("en-IN")}</p>
          </div>


          <div className='product-rating'>
              <h6>Rating: {product.rating}</h6>
          </div>

          
          <div className='product-btn'>
              <button onClick={()=> onAddToCart(product)}>Order Now</button>
            </div>
        </div>
  )
}

export default ProductCard
