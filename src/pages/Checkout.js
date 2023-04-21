import React from 'react'
import { BsArrowLeft } from "react-icons/bs"
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import watchImg from "../images/watch.jpg"

const Checkout = () => {
    return (
        <>
            <Container class1="checkout-wrapper py-5">
                <h3 className="checkout-title fw-light">Checkout</h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb fs-xsm">
                        <li className="breadcrumb-item"><Link className='text-dark' to="/cart">Cart</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Information</li>
                        <li className="breadcrumb-item" aria-current="page">Shipping</li>
                        <li className="breadcrumb-item" aria-current="page">Payment</li>
                    </ol>
                </nav>
                <div className="row flex-column-reverse flex-lg-row mt-5">
                    <div className="col-12 col-lg-7">
                        <div className="checkout-left-data pe-lg-5">
                            <div className="checkout-form">
                                <h5 className="fw-light mb-3">Shipping Information</h5>
                                <form action="" className='d-flex gap-15 flex-wrap justify-content-between'>
                                    <div className='form-floating w-100'>
                                        <select id="selectCountry" className="form-select fs-sm fw-light" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                        </select>
                                        <label htmlFor="selectCountry">Saved Addresses</label>
                                    </div>
                                    <div className='form-floating w-100'>
                                        <select id="selectCountry" className="form-select fw-light" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                        </select>
                                        <label htmlFor="selectCountry">Country/Region</label>
                                    </div>
                                    <div className="form-floating flex-grow-1">
                                        <input type="text" className="form-control fs-sm text-muted" id="floatingInput" placeholder="Last Name" />
                                        <label htmlFor="floatingInput fw-light fs-sm text-muted">First Name</label>
                                    </div>
                                    <div className="form-floating flex-grow-1">
                                        <input type="text" className="form-control fs-sm text-muted" id="floatingInput" placeholder="Last Name" />
                                        <label htmlFor="floatingInput fw-light fs-sm text-muted">Last Name</label>
                                    </div>
                                    <div className="form-floating w-100">
                                        <input type="text" className="form-control fs-sm text-muted" id="floatingInput" placeholder="address" />
                                        <label htmlFor="floatingInput fw-light fs-sm text-muted">Address</label>
                                    </div>
                                    <div className="form-floating w-100">
                                        <input type="text" className="form-control fs-sm text-muted" id="floatingInput" placeholder="apartment" />
                                        <label htmlFor="floatingInput fw-light fs-sm text-muted">Apartment</label>
                                    </div>
                                    <div className="form-floating flex-grow-1">
                                        <input type="text" className="form-control fs-sm text-muted" id="floatingInput" placeholder="apartment" />
                                        <label htmlFor="floatingInput fw-light fs-sm text-muted">City</label>
                                    </div>
                                    <div className='form-floating flex-grow-1'>
                                        <select id="selectCountry" className="form-select fw-light" aria-label="Default select example">
                                            <option selected>California</option>
                                        </select>
                                        <label htmlFor="selectCountry">State</label>
                                    </div>
                                    <div className="form-floating flex-grow-1">
                                        <input type="text" className="form-control fs-sm text-muted" id="floatingInput" placeholder="apartment" />
                                        <label htmlFor="floatingInput fw-light fs-sm text-muted">Zip Code</label>
                                    </div>
                                    <div className="w-100 py-3">
                                        <div className="checkout-btns d-flex gap-15 justify-content-between align-items-center">
                                            <Link className='text-muted'><BsArrowLeft className='me-2 ps-0' />Return to Cart</Link>
                                            <button className='btn btn-danger px-5 py-3'>Continue to Shipping</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="checklist-right-data px-lg-5">
                            <div className="checkout-right-products pb-4 border-bottom">
                                <div className="single-cart-product d-flex align-items-center mb-3">
                                    <div className="single-cart-image w-25 position-relative">
                                        <span className="badge position-absolute">1</span>
                                        <img className='img-fluid' src={watchImg} alt="" />
                                    </div>
                                    <div className="single-cart-product-details ps-4 w-50">
                                        <h6 className="single-cart-product-title fw-normal fs-sm">APPLE Watch Series 2 – 42 mm Stainless Steel Case</h6>
                                        <span className='fs-xsm text-muted'>M / #E33935</span>
                                    </div>
                                    <div className="single-cart-product-price w-25 d-flex justify-content-end">
                                        <h6 className='fw-normal'>$100.00</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="checkout-right-cost-section py-4 border-bottom">
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <p className="mb-0 fs-sm">Subtotal</p>
                                    <p className="mb-0 fs-sm">$100.00</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <p className="mb-0 fs-sm">Shipping</p>
                                    <p className="mb-0 fs-xsm text-muted">Calculated at next step</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <p className="mb-0 fs-sm">Estimated Taxes</p>
                                    <p className="mb-0 fs-sm">$18.00</p>
                                </div>
                            </div>
                            <div className="checkout-right-total d-flex align-items-center justify-content-between py-4">
                                <div className="fs-md">Total</div>
                                <div className="fs-lg">$100.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Checkout