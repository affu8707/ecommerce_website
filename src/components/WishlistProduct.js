import React from 'react'
import crossImg from "../images/cross.svg"
import watchImg from "../images/watch.jpg"

const WishlistProduct = () => {
    return (
        <div className="col-6 col-md-3 col-xl-2 mb-4">
            <div className="comapre-card-full">
                <div className="wishlist-card-top position-relative p-3bg-white rounded mb-3">
                    <img src={crossImg} alt="" className="img-fluid position-absolute wishlist-cross" />
                    <div className="wishlist-card-img bg-white">
                        <img src={watchImg} className='img-fluid rounded' alt="" />
                    </div>
                </div>
                <div className="wishlist-card-bottom p-3 bg-white rounded">
                    <div className="wishlist-card-details">
                        <h5 className="product-title fs-sm mb-3">Kids headphones bulk 10 pack multi colored for students</h5>
                        <div className="price">
                            <span className="fs-sm text-danger wishlist-left-title">$250.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishlistProduct