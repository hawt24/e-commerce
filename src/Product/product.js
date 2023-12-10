import React from 'react'
import {AiFillStar} from "react-icons/ai"
import {BsFillBagCheckFill} from "react-icons/bs"
import "./product.css"

const product = () => {
  return (
    <section className='card-container'>
      <section className='card'>
        <img
        className='card-img '
        src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg'
        alt='shoe'
        />
        <div className='card-details'>
          <h3 className='card-title'>Shoe</h3>
        </div>
        <section className='card-reviews'>
          <AiFillStar className='rating-star'/> <AiFillStar className="rating-star"/> <AiFillStar className='rating-star'/> <AiFillStar className='rating-star'/>
          <span className='total-reviews'>4</span>
        </section>
        <section>
          <div className='card-price'>
            <del>$300</del>200
          </div>
          <div className='bag'>
          <BsFillBagCheckFill/>
          </div>
        </section>
      </section>
    </section>
  )
}

export default product
