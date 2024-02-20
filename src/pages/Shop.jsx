import React from 'react'
import { products } from '../backend/ProductData'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import ReactStars from "react-rating-stars-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaListUl } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";



const Shop = () => {
    const {addItem} = useCart();
  return (
    <>
        <div className="container-fluid bg-teal-400">
            <div className="container-sm">
                <h1 className='text-2xl font-bold py-3'>Shop</h1>
            </div>
        </div>
        <div className="container-fluid">
            <div className="container-sm">
                <div className="row">
                    <div className="col-lg-3 border-top">
                       <div className='col-lg'>
                        <div className='border-top border-bottom border-secondary my-3 max-h-[50vh] overflow-scroll overflow-x-hidden no-scrollbar'>
                            <form action="">
                                <h4 className='h4 mb-2'>Brands</h4>
                                <p className='hr'></p>
                                {products.map((i) => (
                                    <div className="form-group mb-3 flex gap-2 px-2">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label h6" for="flexCheckDefault">
                                            {i.brand}
                                        </label>
                                    </div>
                                ))}
                            </form>
                        </div>
                       </div>
                       <div className="col-lg">
                        <div className='py-2'>
                            <h3 className='h4 font-bold'>Price Range</h3>
                            <input type="range" className='w-100' />
                        </div>
                        <div className='flex items-center gap-2 justify-between'>
                            <div>
                                <label htmlFor="max" className='text-center w-100'>Max</label>
                                <input type="text" className='form-control w-100' />
                            </div>
                            <div>
                                <label htmlFor="max" className='text-center w-100'>Min</label>
                                <input type="text" className='form-control w-100' />
                            </div>                        
                        </div>
                       </div>
                    </div>
                    <div className="col-lg">
                        <div className="col-lg flex justify-end py-3">
                            <div className="co-lg-3 flex items-center gap-3">
                                <select name="" id="" className='form-select'>
                                    <option value="latest" selected>Latest</option>
                                    <option value="latest" selected>Popular</option>
                                    <option value="latest" selected>Recently Added</option>
                                    <option value="latest" selected>Top Offers</option>
                                </select>
                                <div className="flex items-center">
                                    <button className='btn'><FaListUl /></button>
                                    <button className='btn'><IoGridOutline /></button>
                                </div>
                            </div>
                        </div>
                        <div className="row py-4">
                            {products.map((product) => (
                                    <div key={product.id} className='col-lg-4 col-sm-12 mb-3'>
                                            <div className='row'>
                                                <div className='col-lg-12 col-4 flex justify-center'>
                                                    <Link to={`product/${product.category}/${product.id}`}>
                                                        <img src={product.image_1} alt="" className='img-fluid' />
                                                    </Link>
                                                </div>
                                                <div className="col-lg-12 col flex flex-col gap-1">
                                                    <Link to={`http://localhost:3000/product/${product.category}/${product.id}`} className='fs-6 fw-bold'>{product.title.slice(0, 15)}...</Link>
                                                    <p>{product.description.slice(0,50)}..</p>
                                                    <ReactStars
                                                        count={product.rating} 
                                                        size={24}
                                                        activeColor="#5c5470"
                                                        isHalf={true}
                                                        value={product.rating}
                                                        edit={false}
                                                    />
                                                    <div className="row items-end">
                                                        <div className="col-lg">
                                                            {product.discounted ? (
                                                                <>
                                                                    <div className='flex gap-2 lg:block'>
                                                                        <p className='h5 text-success'>{product.discounted}</p>
                                                                        <del className='h6 text-secondary'>{product.price}</del>
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <p className='h5 text-success'>{product.price}</p>
                                                            )}
                                                        </div>
                                                        <div className="col-lg">
                                                            <button onClick={() => addItem(product)} className='btn btn-warning rounded-none'>Add to Cart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Shop