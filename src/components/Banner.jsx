import React from 'react'

const Banner = () => {
  return (
      <>
          <div className='banner'>
          <h1> PIZZA MAKES EVERYTHING BETTER <i className="fa-solid fa-cheese"></i></h1>
          <h4>Fresh Ingredients <i className="fa-solid fa-leaf"></i>| Delicious Taste <i className="fa-solid fa-face-smile"></i> | Made for Pizza Lovers <i className="fa-solid fa-heart"></i></h4>
      </div>
      
          <div className='banner-content'>
              <p><i className="fa-solid fa-truck"></i> Free Delivery <br />
                  <h6>On orders above Rs.299</h6>
              </p>

              <p><i className="fa-solid fa-utensils"></i> Fresh Ingredients <br />
                  <h6>100% Quality</h6>
              </p>

              <p>
                <i className="fa-solid fa-star"></i> Best Taste <br />
                  <h6>Loved by Thousands</h6>
              </p>


      </div>
      </>
  )
}

export default Banner
