
import React from 'react'

const Card = ({ cartItems, onIncrease, onDecrease, onRemove, onClose }) => {
  
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity, 0
  )

  const totalProduct = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0
  )



  return (
    <>
      <div className='card'>
      <h3>Conform Your Order<i class="fa-solid fa-check"></i><i class="fa-solid fa-face-grin-hearts"></i></h3>
        <button className='close-btn' onClick={onClose}>Close</button>
        

        {cartItems.length === 0 ? (
          <h2>Oops! Your Cart is Empty<i class="fa-solid fa-pizza-slice"></i><i class="fa-solid fa-face-frown"></i></h2>
        ) : (
            <>
              {cartItems.map((item) =>
                <div className='card-cart' key={item.id}>

                  <div className='card-image'>
                    <img src={item.image} alt= {item.image}/>
                  </div>

                  <div className='content'>
                  <div className='cart-name'>
                    <h5>{ item.name}</h5>
                  </div>

                  <div className='cart-price'>
                    <h4>Rs.{Number(item.price).toLocaleString("en-IN")}</h4>
                  </div>

                    <div className='cart-content'>
                    <button onClick={() =>onDecrease(item.id)}>-</button>
                    <button onClick={() => onIncrease(item.id)}>+</button>
                   
                  </div>

                  <div className='total-items'>
                    <p>Total Items:{totalItems }</p>
                 </div>

                  <div className='total-price'>
                    <h2>Total Amount:{ totalProduct}</h2>
                  </div>

                  <div className='remove-btn'>
                    <button className='remove-btn' onClick={()=> onRemove(item.id)}>Remove</button>
                    </div>
                    
                    <div className='final'>
                      <p>It Looks Delicious and Appetizing <i class="fa-solid fa-pizza-slice"></i><i class="fa-solid fa-face-drooling"></i></p>
                    </div>

                </div>
                </div>
              )
              }
            </>
          )
        }
    </div>

    </>
  )
}

export default Card