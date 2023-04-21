import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import wish from "../../images/wish.svg"
import view from "../../images/view.svg"
import addCart from "../../images/add-cart.svg"
//import watch from "../../images/watch.jpg"
import watch2 from "../../images/watch-2.jpg"
import prodCompare from "../../images/prodcompare.svg"
import iron from "../../images/LG-7010-RRAZ-R.jpg";
import tv from "../../images/Blinken TV  65 inch (1).jpg";

const ProductCard = ({ grid }) => {

    const location = useLocation()
    return (
        <div className={`${location.pathname == "/products" ? `col-${grid} col-md-${grid} col-lg-${grid}` : "col-6 col-md-4 col-lg-3 col-xl-2"}`}>
            <Link to="/products/:id" className="product-card bg-white br-shadow position-relative w-100">
                <div className="product-img d-flex align-items-center justify-content-center position-relative">
                    <img className='img-fluid rounded' src={iron} alt="" />
                    <img className='img-fluid rounded' src={tv} alt="" />
                    <img className='img-fluid rounded' src={iron} alt="" />
                    {/* <img className='img-fluid rounded' src={watch2} alt="" /> */}
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'>
                            <img src={wish} alt="" />
                        </button>
                    </div>
                    <div className="action-bar position-absolute ">
                        <div className="d-flex flex-column gap-10">
                            <button className='border-0 bg-transparent'>
                                <img src={prodCompare} alt="" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt="" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={addCart} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="product-details text-dark px-3 pb-2 bg-white">
                    <p className="brand fs-xsm">Havels</p>
                    <h5 className="product-title fs-sm">Kids headphones bulk 10 pack multi colored for students</h5>
                    <ReactStars
                        count={5}
                        size={15}
                        activeColor={"#ffc30b"}
                        edit={false}
                        value={3}
                    />
                    <p className={`product-description fs-xsm text-muted mb-0 pt-2 ${grid === 12 ? "d-block" : "d-none"}`}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti imilique...</p>
                    <p className="price fs-5 pt-3">₹10000</p>
                </div>

            </Link>
        </div>
    )
}



export default ProductCard