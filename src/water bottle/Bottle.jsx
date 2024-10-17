import React from 'react'

const Bottle = ({bottle, handleAddToCart}) => {
    const {name, price, img} = bottle
  return (
    <div>
        <div className="card bg-base-100 w-60 md:w-80 shadow-xl">
  <figure>
    <img
      className='w-full h-48 md:h-60'
      src={img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">{price}/-</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="button" onClick={()=>handleAddToCart(bottle)}>Add to cart</button>
      <button className="button">Details</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Bottle