import React from 'react'
import crossImg from "../images/cross.svg"
import watchImg from "../images/watch.jpg"

const SingleCompare = () => {
    return (
        <div className="col-6 col-md-3 col-xl-2 mb-4">
            <div className="comapre-card-full">
                <div className="compare-card-top position-relative p-3bg-white rounded mb-3">
                    <img src={crossImg} alt="" className="img-fluid position-absolute compare-cross" />
                    <div className="compare-card-img bg-white">
                        <img src={watchImg} className='img-fluid rounded' alt="" />
                    </div>
                </div>
                <div className="compare-card-bottom p-3 bg-white rounded">
                    <div className="compare-card-details">
                        <h5 className="product-title fs-sm mb-1">Kids headphones bulk 10 pack multi colored for students</h5>
                        <div className="price">
                            <span className="fs-sm text-danger compare-left-title">$250.00</span>
                        </div>
                        <div className="brand">
                            <span className="fs-sm compare-left-title">Brand :</span>
                            <span className="fs-xsm text-muted">Havells</span>
                        </div>
                        <div className="type">
                            <span className="fs-sm compare-left-title">Type :</span>
                            <span className="fs-xsm text-muted">Watch Accessories</span>
                        </div>
                        <div className="sku">
                            <span className="fs-sm compare-left-title">SKU :</span>
                            <span className="fs-xsm text-muted">SKU026</span>
                        </div>
                        <div className="availability">
                            <span className="fs-sm compare-left-title">Availability :</span>
                            <span className="fs-xsm text-muted">In Stock</span>
                        </div>
                        <div className="colors">
                            <span className="fs-sm compare-left-title">Color :</span>
                            <ul className="colors ps-0 d-flex flex-wrap gap-10 mb-0">
                                <li></li>
                            </ul>
                        </div>
                        <div className="size">
                            <span className="fs-sm compare-left-title">Size :</span>
                            <span className="fs-xsm text-muted">M</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleCompare