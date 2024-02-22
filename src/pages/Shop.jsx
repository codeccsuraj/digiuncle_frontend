import React from 'react'
import { products } from '../backend/ProductData'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import ReactStars from "react-rating-stars-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaListUl, FaFilter } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import { Pagination } from '../components';
import UseLocalStorage from '../components/pagination/UseLocalStorage';



const Shop = () => {
    const [currentPage, setCurrentPage] = UseLocalStorage({key : 'currentPage', initialValue : 1})
    const productPerPage = 12;
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    const {addItem} = useCart();

     // Calculate the index of the first and last products to be displayed
     const indexOfLastProduct = currentPage * productPerPage;
     const indexOfFirstProduct = indexOfLastProduct - productPerPage;

     // Get the current products to be displayed based on pagination
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calculate total number of pages
    const totalPages = Math.ceil(products.length / productPerPage);

    // Calculate range of products being shown
    const showingFrom = indexOfFirstProduct + 1;
    // const showingTo = Math.min(indexOfLastProduct, products.length);
  return (
    <>
        <div className="container-fluid bg-teal-400 py-2">
            <div className="container-sm">
                <h1 className='text-2xl font-bold'>Shop</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item font-semibold"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Shop</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div className="container-fluid">
            <div className="container-sm">
                <div className="row">
                    <div className="col-lg">
                        <div className="col-lg flex justify-between py-3">
                            <div className="col-lg-3">
                                <button className='btn btn-outline-dark flex items-center gap-3'><FaFilter /> filter</button>
                            </div>
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
                        <div className='row py-3'>
                            <div className="col-lg-12">
                                <h2 className='fs-3 fw-bold'>All Products</h2>
                            </div>
                            <div className='col-lg-12 flex gap-2 items-end'>
                                <h4 className='fs-5'>Showing Results</h4>
                                <span className='font-semibold text-[13px] text-secondary'>({showingFrom} - {totalPages} (product of {products.length} products))</span>
                            </div>
                        </div>
                        <div className="row py-4">
                            {currentProducts.map((product) => (
                                    <div key={product.id} className='col-lg-3 col-sm-12 mb-3'>
                                            <div className='row'>
                                                <div className='col-lg-12 col-4 flex justify-center'>
                                                    <Link to={`product/${product.category}/${product.id}`}>
                                                        <img src={product.image_1} alt="" className='img-fluid size-44' />
                                                    </Link>
                                                </div>
                                                <div className="col-lg-12 col flex flex-col gap-1">
                                                <Link to={`/product/${product.category}/${product.id}`} className='fs-6 fw-bold'>{product.title.slice(0, 15)}...</Link>
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
                        <Pagination
                            productsPerPage={productPerPage}
                            totalProducts={products.length}
                            currentPage={currentPage}
                            handlePageChange={handlePageChange}
                            key="pagination"
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Shop