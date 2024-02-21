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
        dots : false,
        Infinite : true,
        speed : 500,
        slidesToShow : 4,
        slidesToScroll : 1,
        responsive : [
            {
                breakpoint : 1024,
                settings : {
                    slidesToShow : 3,
                },
            },
            {
                breakpoint : 768,
                settings : {
                    slidesToShow : 1,
                },
            },
        ]
    }
  return (
    <>
        <div className='container-fluid' >
            <div className='container-sm'>
                <Slider {...settings} className='container-sm py-4'>
                    {data.map((product) => (
                        <div key={product.id} className='col-lg-4'>
                            <div className='row px-3'>
                                <div className='col-lg-12'>
                                    <div className='flex justify-center'>
                                        <Link>
                                            <img src={product.image_1} alt="" className='img-fluid lg:size-44' />
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <Link to={`product/${product.category}/${product.id}`} className=''><h4 className='font-medium text-[14px]'>{product.title.slice(0, 20)} ...</h4></Link>
                                    <p className='text-[10px] lg:text-[12px] text-gray-700 font-semibold'>{product.description.slice(0,55)} ...</p>

                                    <div className='lg:flex items-end justify-between'>
                                    <div>
                                        <ReactStars
                                            count={product.rating} 
                                            activeColor="#5c5470"
                                            isHalf={true}
                                            value={product.rating}
                                            edit={false}
                                            classNames="text-[10px]"
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
                                        <button onClick={() => addItem(product)} className='btn btn-warning h6 text-[12px]'>Add to cart</button>
                                    </div>
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