import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import SingleCartProduct from '../components/SingleCartProduct';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Cart = () => {
    return (
        <>
            <Meta title={"Your Shopiing Cart - ShopLocal"} />
            <BreadCrumb title={"Your Shopiing Cart - ShopLocal"} />
            <Container class1="cart-wrapper gray-bg py-5">
                <div className="row">
                    <div className="col-12 ">
                        <div className="cart-header pb-3 text-muted gap-10 border-bottom">
                            <div className="row">
                                <div className="col-3 col-lg-1">
                                    Image
                                </div>
                                <div className="col-9 col-lg-11">
                                    <div className="row">
                                        <div className="col-8 col-lg-6">
                                            Product
                                        </div>
                                        <div className="col-4 col-lg-2 d-flex justify-content-end align-items-center">
                                            Price
                                        </div>
                                        <div className="col-lg-2 d-none d-lg-flex justify-content-end">
                                            Quantity
                                        </div>
                                        <div className="col-lg-2 d-none d-lg-flex justify-content-end align-items-center">
                                            Total
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart-data-wrapper text-muted">
                            <div className="cart-data pb-3">
                                <SingleCartProduct />
                                <SingleCartProduct />
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="continue-shopping-btn-cart">
                            <button type="submit" className="btn continue-shopping-btn rounded-pill">Continue Shopping</button>
                        </div>
                    </div>
                    <div className="cart-bottom-area mt-4">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label className='py-2 fs-xsm text-muted' for="exampleFormControlTextarea1">Order special instructions</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="cart-total-box d-flex flex-column align-items-center align-items-md-end justify-content-end py-4">
                                    <h5 className="text-muted">Subtotal: $100.00</h5>
                                    <div className='text-muted'>Taxes and shipping calculated at checkout</div>
                                    <Link to="/checkout" className="checkout-btn-cart mt-4">
                                        <button type="submit" className="btn checkout-btn rounded-pill">Check Out</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Cart