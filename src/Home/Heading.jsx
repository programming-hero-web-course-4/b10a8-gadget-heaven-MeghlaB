import React from 'react'

export default function Heading({title}) {
  return (
    <div className='text-center -mt-24  my-3 space-y-5'>
      <h1 className='text-xl lg:text-5xl font-bold'>{title}</h1>
    </div>
  )
}
