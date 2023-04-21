import React from 'react'
import watchImg from "../images/watch.jpg"
import { BsTrash } from "react-icons/bs"

const SingleCartProduct = () => {
    return (
        <>
            <div className="single-cart-product border-bottom py-3">
                <div className="row">
                    <div className="col-3 col-lg-1">
                        <img src={watchImg} alt="" className="img-fluid" />
                    </div>
                    <div className="col-9 col-lg-11">
                        <div className="row">
                            <div className="col-8 col-lg-6">
                                <div className="cart-product-data">
                                    <p className='cart-data-product-title text-dark'>APPLE Watch Series 2 – 42 mm Stainless Steel Case</p>
                                    <p className='cart-data-product-size'>Size: M</p>
                                    <p className='cart-data-product-color'>Color: Red</p>
                                </div>
                            </div>
                            <div className="col-4 col-lg-2 d-flex justify-content-end align-items-center">
                                <h6 className='cart-data-product-price text-dark mb-0'>$100.00</h6>
                            </div>
                            <div className="d-done d-lg-flex col-lg-2 justify-content-end">
                                <div className="cart-data-quantity-wrapper d-flex gap-3 py-2 align-items-center justify-content-between">
                                    <div className='d-flex align-items-center gap-10'>
                                        <span className='d-lg-none'>Quantity: </span>
                                        <input
                                            type="number"
                                            className='form-control'
                                            min={1}
                                            max={10}
                                            style={{ width: "65px" }}
                                            placeholder="1"
                                        />
                                    </div>
                                    <div className="card-data-remove">
                                        <BsTrash className='card-data-remove-btn' />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 col-lg-2 d-none d-lg-flex justify-content-end align-items-center">
                                <h6 className='cart-data-product-price text-dark mb-0'>$100.00</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCartProduct