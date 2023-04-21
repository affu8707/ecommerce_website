import React from 'react'
import laptopImg from "../images/laptop.jpg"
import { SwiperSlide } from 'swiper/react'
import washing from "../images/LG-7010-RRAZ-R.jpg";

const SingleCategory = () => {
    return (
        <div className="card">
            <div className="single-category d-flex justify-content-between align-items-center">
                <div className="category-details">
                    <div className="category-title fs-sm py-1">Washing Machine</div>
                    <p className="category-quantity mb-0 fs-xsm">1 items</p>
                </div>
                <div className="category-img">
                    <img className='img-fluid' src={washing} alt="" style={{height:"200px"}} />
                </div>
            </div>
        </div>
        // <div className="col-6 col-md-4 col-xl-3 py-3 ps-3 single-card">
        //     <div className="card">
        //         <div className="single-category d-flex justify-content-between align-items-center">
        //             <div className="category-details">
        //                 <div className="category-title fs-sm py-1">Computers</div>
        //                 <p className="category-quantity mb-0 fs-xsm">8 items</p>
        //             </div>
        //             <div className="category-img">
        //                 <img className='img-fluid' src={laptopImg} alt="" />
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default SingleCategory