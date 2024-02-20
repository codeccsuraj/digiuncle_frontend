import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { useCart } from 'react-use-cart';


const ProductCard = ({data}) => {
    const {
        addItem,
      } = useCart();
    const settings = {
        dots : true,
        Infinite : true,
        speed : 500,
        slidesToShow : 4,
        slidesToScroll : 1,
    }
  return (
    <>
        <div>
            <div className='mx-8'>
                <Slider {...settings} className='w-[100%] py-4'>
                    {data.map((product) => (
                        <div key={product.id} className='py-4'>
                            <div className='py-3 rounded-lg mx-3 px-3 bg-slate-50'>
                                <div>
                                    <div className='flex justify-center'>
                                        <Link>
                                            <img src={product.image_1} alt="" className='size-44' />
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <Link to={`product/${product.category}/${product.id}`} className=''><h4 className='font-medium'>{product.title.slice(0, 20)} ...</h4></Link>
                                    <p className='text-[14px] text-gray-700 font-semibold'>{product.description.slice(0,55)} ...</p>
                                </div>
                                <div className='flex items-end justify-between'>
                                    <div>
                                        <ReactStars
                                            count={product.rating} 
                                            size={24}
                                            activeColor="#5c5470"
                                            isHalf={true}
                                            value={product.rating}
                                            edit={false}
                                        />
                                        {product.discounted ? (
                                            <p className='flex flex-col'>
                                                <span className='font-bold text-green-600'>&#8377; {product.discounted}</span>
                                                <del className='text-[12px] font-semibol'>&#8377; {product.price}</del>
                                            </p>
                                        ) : (
                                            <p className='font-bold text-green-600'>&#8377; {product.price}</p>
                                        )}
                                    </div>
                                    <div className='flex items-center'>
                                        <button onClick={() => addItem(product)} className='w-full py-2 px-3 mt-3 text-light bg-orange-500 text-[16px]'>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </>
  )
}

export default ProductCard