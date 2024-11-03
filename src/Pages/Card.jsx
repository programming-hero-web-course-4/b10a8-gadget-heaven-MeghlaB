import React from 'react'

export default function Card({card}) {
    const {product_image,product_title,price}= card
    // console.log(card)
  return (
    <div className="card bg-base-100 w-72 shadow-xl">
        <figure className="px-10 pt-10">
            <img
            src={product_image}
            alt={name}
            className="rounded-xl h-28 " />
        </figure>
        <div className="card-body ">
            <h2 className="card-title">{product_title}</h2>
            <p className='text-gray-500'>Price: {price}</p>
            <div className="card-actions">
            <button className="btn btn-outline btn-primary rounded-full">View Details</button>
            </div>
        </div>
    </div>
)
}
