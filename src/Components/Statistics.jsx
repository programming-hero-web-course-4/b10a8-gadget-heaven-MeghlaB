import React from 'react'
import Banner from './Banner'
import DetailsHEro from '../Pages/DetailsHEro'
import { useLoaderData } from 'react-router-dom'
export default function Statistics() {
  const data = useLoaderData()
  console.log(data)
  return (
    <div className='mi-h-[calc(100vh-228px) py-5]'>

      <Banner></Banner>
      <DetailsHEro data={data}></DetailsHEro>
    </div>
  )
}
