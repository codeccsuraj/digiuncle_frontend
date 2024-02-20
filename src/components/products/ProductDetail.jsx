import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../../backend/ProductData';
import ReactStars from "react-rating-stars-component";
import { useCart } from 'react-use-cart';
import ProductCard from './ProductCard';


const ProductDetail = () => {
    const { id, category } = useParams();
    const selectedProduct = products.find(product => product.id === parseInt(id));
    const filterByCategory = products.filter(product => product.category === category);

    console.log(filterByCategory);
    const {addItem} = useCart();
    if (!selectedProduct) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='container-sm'>
                    <div className='row'>
                        <div className="col-lg py-4">
                            <div className="col flex justify-center">
                                <img src={selectedProduct.image_1} alt="" />
                            </div>
                        </div>
                        <div className="col-lg py-4">
                            <span className='h6 text-secondary'>{selectedProduct.brand.slice(0, 10)}</span>
                            <h4 className='h4'>{selectedProduct.title}</h4>
                            <ReactStars
                                count={selectedProduct.rating} 
                                size={24}
                                activeColor="#5c5470"
                                isHalf={true}
                                value={selectedProduct.rating}
                                edit={false}
                            />
                            <p className='text-secondary'>{selectedProduct.description.slice(0, 400)}</p>
                            <div className='col flex items-center gap-5 py-3'>
                                <span className='font-bold'>Size :</span> 
                                <div className="box flex flex-col items-center">
                                    <span>M</span>
                                    <input type="radio" className='form-check-input border-blue-600' name="flexRadioDefault" id="flexRadioDefault1" />
                                </div>
                                <div className="box flex flex-col items-center">
                                    <span>X</span>
                                    <input type="radio" className='form-check-input border-blue-600' name="flexRadioDefault" id="flexRadioDefault1" />
                                </div>
                                <div className="box flex flex-col items-center">
                                    <span>XXL</span>
                                    <input type="radio" className='form-check-input border-blue-600' name="flexRadioDefault" id="flexRadioDefault1" />
                                </div>
                                <div className="box flex flex-col items-center">
                                    <span>XLX</span>
                                    <input type="radio" className='form-check-input border-blue-600' name="flexRadioDefault" id="flexRadioDefault1" />
                                </div>
                            </div>
                            <div>
                                {selectedProduct.quantity > 4 ? (
                                    <button className='btn bg-success-subtle text-success fw-bold'>In Stock</button>
                                ) : (
                                    <button className='btn bg-danger-subtle text-danger fw-bold'>Out of Stock</button>
                                )}
                            </div>
                            <div className='lg:flex md:flex items-center gap-2 py-3'>
                                <button className='btn btn-warning h5 fw-bold w-100 w-lg-25'>Buy</button>
                                <button onClick={() => addItem(selectedProduct)} className='btn btn-secondary h5 fw-bold w-100 w-lg-25'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container-sm">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className='text-2xl fw-bold'>Product description :</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Exercitationem, delectus odio! Nemo atque voluptate eligendi 
                            error incidunt aliquam repellendus veritatis, soluta 
                            recusandae reiciendis blanditiis amet dicta sint voluptatem.
                            Voluptatum quam ipsa molestiae blanditiis architecto saepe 
                            commodi nostrum iure veritatis debitis impedit, odit vitae 
                            totam quas reprehenderit, dolorum exercitationem. Voluptate, 
                            sunt?</p>
                        </div>
                        <div className="col-lg-4 py-3">
                            <table className='table'>
                                <tr>
                                    <th scope='col'>Material</th>
                                    <td>{selectedProduct.material}</td>
                                </tr>
                                <tr>
                                    <th scope='col'>Brand</th>
                                    <td>{selectedProduct.brand}</td>
                                </tr>
                                <tr>
                                    <th scope='col'>Color</th>
                                    <td>{selectedProduct.color}</td>
                                </tr>
                                <tr>
                                    <th scope='col'>Category</th>
                                    <td>{selectedProduct.category}</td>
                                </tr>
                                <tr>
                                    <th scope='col'>Weight</th>
                                    <td>{selectedProduct.weight}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-10 py-4'>
                <div className='flex items-center justify-between'>        
                    <h2 className='text-4xl font-bold'>Also check the similar products..</h2>
                    <Link className='text-md font-bold text-blue-700'>See all...</Link>
                </div>
                <ProductCard data={filterByCategory} />
            </div>
        </>
    );
};

export default ProductDetail;
