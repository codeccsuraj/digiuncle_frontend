import React from 'react'
import { useCart } from 'react-use-cart';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
  return isEmpty ? (
    <>
      <Link to="/" className='text-primary'>no items to be display please add item</Link>
    </>
    ) : (
    <>
      <div className='container-fluid'>
        <div>
          <div className="container-sm">
            <div className="row items-center">
              <div className="col-lg-8 my-3">
                <div className='row'>
                  <div className="col px-3 bg-secondary-subtle py-2">
                    <h4 className='h5'>Total {totalUniqueItems} items</h4>
                  </div>
                </div>
                {items.map((cart) => (
                  <div className="row py-3 mb-3 border-slate-300 border-2">
                    <div className="col-2">
                      <img src={cart.image_1} alt="" className='img-lg-fluid' />
                    </div>
                    <div className="col-8">
                      <h5 className='h5'>{cart.title.slice(0, 23)}...</h5>
                      <div className='flex items-center gap-4 mb-3'>
                        <p className='flex items-center gap-2'>
                          <span className='font-bold'>Color: </span>
                          <span>{cart.color}</span>
                        </p>
                        <p className='flex items-center gap-2'>
                          <span className='font-bold'>Size: </span>
                          <span>{cart.size}</span>
                        </p>
                      </div>
                      <div className='flex items-center gap-6 mb-3'>
                        {cart.discounted ? (
                          <p className='font-bold text-green-600'>&#8377; {cart.discounted}</p>
                        ): (
                          <p className='font-bold text-green-600'>&#8377; {cart.price}</p>
                        )}
                        <div className="flex items-center">
                          <button onClick={() => updateItemQuantity(cart.id, cart.quantity - 1)} className='btn btn-warning py-2 px-2 rounded-none'>
                            {cart.quantity > 1 ? (
                              <FaMinus />
                            ) : (
                              <RiDeleteBin5Fill />
                            )}
                          </button>
                          <input type="text" className='w-7 outline-none border-none bg-slate-100 text-center' value={cart.quantity} name="" id="" readOnly />
                          <button onClick={() => updateItemQuantity(cart.id, cart.quantity + 1)} className='btn btn-warning py-2 px-2 rounded-none'><FaPlus /></button>
                        </div>
                      </div>
                      <Link onClick={() => removeItem(cart.id)} className="text-danger fw-bold h5">Remove item</Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart