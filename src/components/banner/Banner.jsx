import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from '../../backend/Slides'
import { Link } from 'react-router-dom';

const Banner = () => {
  let settings ={
    dots : true,
    Infinite : true,
    speed : 500,
    slidesToShow : 1,
    slidesToScroll : 1,
    autoplay : true,
  }  
  return (
    <>
        <div className='w-full overflow-hidden'>
            {
                <Slider {...settings} className='py-4'>
                    {slides.map((slide) => (
                        <div className='mx-8 w-11/12 overflow-hidden'>
                            <Link><img src={slide.image} alt="" className='ms-4 h-[60vh] w-[94%]' /></Link>
                        </div>
                    ))}
                    
                </Slider>
            }
        </div>
    </>
  )
}

export default Banner