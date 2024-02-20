import React from 'react'
import { Banner, ProductCard } from '../components'
import { products } from '../backend/ProductData'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Banner />
      <div className='mx-10 py-4'>
        <div className='flex items-center justify-between'>        
          <h2 className='text-4xl font-bold'>Shop with trending deals..</h2>
          <Link to='/shop' className='text-md font-bold text-blue-700'>See all...</Link>
        </div>
        <ProductCard data={products} />
      </div>
    </>
  )
}

export default Home