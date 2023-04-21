import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductUtilities/ProductCard'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'
import { TbGitCompare } from "react-icons/tb"
import { AiOutlineHeart, AiOutlineLink } from "react-icons/ai"
import { FiTruck } from "react-icons/fi"
import { FaFlask } from "react-icons/fa"
import Container from '../components/Container'
import tv from "../images/Blinken TV  65 inch (1).jpg";
import tv1 from "../images/Blinken TV 43 inch (1) (1).jpg";
import tv2 from "../images/24 inch.jpg";

const SingleProduct = () => {
    const [orderedThisProduct, setOrderedThisProduct] = useState(true)
    return (
        <>
            <Meta title={"Product Name - Trap The Deal"} />
            <BreadCrumb title={"Product Name - Trap The Deal"} />
            <Container class1="single-product-wrapper gray-bg">
                <div className="main-product-wrapper pt-4 pb-5">
                    <div className="container-fluid">
                        <div className="row bg-white br-shadow">
                            <div className="col-12 col-md-6 p-4">
                                <div className="main-product-images">
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <div className="main-product-main-image-wrapper">
                                                <InnerImageZoom
                                                    className='main-product-main-image img-fluid'
                                                    src={tv2}
                                                    zoomType="hover"
                                                    zoomPreload={true}
                                                    fullscreenOnMobile={true}
                                                    zoomScale={2}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <InnerImageZoom
                                                className='main-product-main-image img-fluid'
                                                src={tv1}
                                                zoomType="hover"
                                                zoomPreload={true}
                                                fullscreenOnMobile={true}
                                                zoomScale={2}
                                            />
                                        </div>
                                        <div className="col-6 mb-3">
                                            <InnerImageZoom
                                                className='main-product-main-image img-fluid'
                                                src={tv}
                                                zoomType="hover"
                                                zoomPreload={true}
                                                fullscreenOnMobile={true}
                                                zoomScale={2}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 p-4">
                                <div className="main-product-details">
                                    <div className="pb-2 border-bottom">
                                        <h5>Blinken 65 Inch Ultra Series 4K HD Smart Android LED TV </h5>
                                    </div>
                                    <div className="py-3 border-bottom">
                                        <h5 className="price mb-3 d-flex align-items-center gap-3">
                                            <div className="red-price text-danger fw-bold ">₹300</div>
                                            <strike className="fs-xsm text-muted">₹500</strike>
                                        </h5>
                                        <div className='d-flex align-items-center gap-2'>
                                            <ReactStars
                                                count={5}
                                                size={15}
                                                activeColor={"#ffc30b"}
                                                edit={false}
                                                value={5}
                                            />
                                            <span className="text-muted fs-xsm">Based on 1 review</span>
                                        </div>
                                        {orderedThisProduct && (
                                            <a href="#review" className='text-muted mt-3'>Write a review</a>
                                        )}
                                    </div>
                                    <div className='py-3'>
                                        <div className="discount-till d-flex align-items-center gap-10">
                                            <p className="mb-0 fs-xsm">
                                                <b>5 </b>days
                                            </p>
                                            <div className="d-flex gap-2 align-items-center justify-content-center">
                                                <div className="badge countdown-badge p-2">20</div>:
                                                <div className="badge countdown-badge p-2">20</div>:
                                                <div className="badge countdown-badge p-2">20</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-product-features d-flex gap-2 py-2">
                                        <div className="main-product-feature-heading">
                                            <span className="type">Type:</span>
                                        </div>
                                        <div className="main-product-feature-text text-muted">
                                            <span className="type-text">Watch Accessories</span>
                                        </div>
                                    </div>
                                    <div className="main-product-features d-flex gap-2 py-2">
                                        <div className="main-product-feature-heading">
                                            <span className="brand">Brand:</span>
                                        </div>
                                        <div className="main-product-feature-text text-muted">
                                            <span className="brand-text">Havells</span>
                                        </div>
                                    </div>
                                    <div className="main-product-features d-flex align-items-top gap-2 py-2">
                                        <div className="main-product-feature-heading">
                                            <span className="categories">Categories:</span>
                                        </div>
                                        <div className="main-product-feature-text text-muted">
                                            <ul className="categories-text fs-xsm">
                                                <li>accessories</li>
                                                <li>mini speakser</li>
                                                <li>smart watches</li>
                                                <li>television</li>
                                                <li>light</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="main-product-features d-flex align-items-top gap-2 py-2">
                                        <div className="main-product-feature-heading">
                                            <span className="tags">Tags:</span>
                                        </div>
                                        <div className="main-product-feature-text text-muted">
                                            <ul className="tags-text fs-xsm">
                                                <li>headphones</li>
                                                <li>oppo</li>
                                                <li>speaker</li>
                                                <li>accessories</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="main-product-features d-flex gap-2 py-2">
                                        <div className="main-product-feature-heading">
                                            <span className="sku">SKU:</span>
                                        </div>
                                        <div className="main-product-feature-text text-muted">
                                            <span className="sku-text">SKU0223</span>
                                        </div>
                                    </div>
                                    <div className="main-product-features d-flex gap-2 py-2">
                                        <div className="main-product-feature-heading">
                                            <span className="availability">Availability:</span>
                                        </div>
                                        <div className="main-product-feature-text text-muted">
                                            <span className="availability-text">222 in stock</span>
                                        </div>
                                    </div>
                                    <div className="main-product-features py-2">
                                        <div className="main-product-feature-heading">
                                            <span className="availability">Size:</span>
                                        </div>
                                        <div className="main-product-feature-text d-flex gap-10 mt-2 text-muted">
                                            <div className="size-badge">S</div>
                                            <div className="size-badge">M</div>
                                            <div className="size-badge">L</div>
                                            <div className="size-badge">XL</div>
                                            <div className="size-badge">XXL</div>
                                        </div>
                                    </div>
                                    <div className="main-product-features py-2">
                                        <div className="main-product-feature-heading">
                                            <span className="colors">Colors:</span>
                                        </div>
                                        <div className="main-product-feature-text d-flex gap-10 mt-2 text-muted">
                                            <div className="main-product-features py-2">
                                                <ul className="colors ps-0 d-flex flex-wrap gap-2 mb-0">
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-product-features d-flex gap-2 py-2 align-items-center">
                                        <div className="main-product-feature-heading">
                                            <span className="quantity">Quantity:</span>
                                        </div>
                                        <div className="main-product-feature-text text-muted">
                                            <input
                                                type="number"
                                                className='form-control'
                                                min={1}
                                                max={10}
                                                style={{ width: "80px" }}
                                                placeholder="1"
                                            />
                                        </div>
                                    </div>
                                    <div className="main-product-buttons d-flex gap-3 py-3">
                                        <button type="submit" className="btn addToCartBtn  rounded-pill">Add to Cart</button>
                                        <button type="submit" className="btn buyNowBtn rounded-pill">Buy Now</button>
                                    </div>
                                    <div className="addToBtns d-flex gap-4 py-3">
                                        <Link className='text-dark fs-sm'><AiOutlineHeart className='me-2' />Add to wishlist</Link>
                                        <Link className='text-dark fs-sm'><TbGitCompare className='me-2' />Add to compare</Link>
                                        <div role="button" onClick={() => {
                                            navigator.clipboard.writeText('Copy this text to clipboard')
                                        }}><AiOutlineLink className='me-2' />Share</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description-wrapper pb-5">
                    <div className="section-title fs-lg mb-4">Descriptions</div>
                    <div className="row g-3">
                        <div className="col-12">
                            <div className="bg-white p-4 br-shadow">
                                <div className="privacy-policy-texts">
                                    <span className='text-muted fs-xsm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eius asperiores est eveniet distinctio! Dignissimos corrupti, perspiciatis voluptatibus iste voluptas assumenda, quos amet doloremque in aperiam tempore odio earum facere soluta. At dolore deserunt, vero aperiam explicabo cupiditate temporibus quaerat ratione ipsam ad! Incidunt at voluptates quis reprehenderit, impedit nulla deserunt eaque cumque cum? Ad qui, inventore ut quo reprehenderit facilis odit corporis suscipit ratione sed sequi quos eligendi rerum, velit delectus at, consectetur vero asperiores eius mollitia ullam? Officiis cumque, quibusdam aspernatur illo sint ipsum praesentium et voluptas vitae labore rerum quo ipsam! Magni sapiente, natus fuga perferendis provident, excepturi et numquam delectus quia doloribus nihil autem aut corrupti. Blanditiis incidunt ipsa odit magni ex molestias magnam, animi quae fugiat, quisquam repellat atque officiis amet? Beatae nobis nostrum eligendi fugiat possimus minima modi mollitia alias quod pariatur? Aliquam molestias omnis ipsam nulla, repellat officia, veritatis nostrum unde assumenda animi tempora qui quam doloribus, mollitia officiis est! Fuga repudiandae iure explicabo, porro accusamus laboriosam id neque omnis tempora ratione consequatur commodi saepe aut ex. Modi illo a molestias commodi dolores corrupti cum. Facere placeat sunt deleniti esse culpa saepe doloribus dolorem aperiam ducimus eligendi eos, dolorum maxime vitae expedita! Saepe.</span>
                                </div>
                                <div className="main-product-details-accordion mt-4">
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingOne">
                                                <button class="accordion-button fs-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <FiTruck className='me-2' /> Shipping & Returns
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    Free shipping and returns available on all orders! We ship all US domestic orders within 5-10 business days!
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingTwo">
                                                <button class="accordion-button collapsed fs-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <FaFlask className="me-2" /> Materials
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    Running Shoes cushions your stride with soft foam to keep you running in comfort. Lightweight knit material wraps your foot in breathable support, while a minimalist design fits in just about anywhere your day takes you.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingThree">
                                                <button class="accordion-button collapsed fs-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <AiOutlineHeart className='me-2' /> Care Instructions
                                                </button>
                                            </h2>
                                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="product-suggestion-wrapper pb-5">
                    <div className="section-title fs-lg mb-4">Reviews</div>
                    <div id="review" className="row">
                        <div className="col-12">
                            <div className="review-section bg-white br-shadow p-4">
                                <div className="review-inner-wrapper">
                                    <h5 className='mb-3 fw-normal'>Customer Reviews</h5>
                                    <div className="average-review d-flex justify-content-between align-items-end">
                                        <div className='d-flex align-items-center gap-2'>
                                            <ReactStars
                                                count={5}
                                                size={15}
                                                activeColor={"#ffc30b"}
                                                edit={false}
                                                value={5}
                                            />
                                            <span className="text-muted fs-xsm">Based on 1 review</span>
                                        </div>
                                        {orderedThisProduct && (
                                            <a href="#review" className='text-muted'>Write a review</a>
                                        )}
                                    </div>
                                </div>
                                <div className="review-form mt-4">
                                    <h6 className="text-muted fw-normal mb-3">Write A Review</h6>
                                    <form action="">
                                        <div className="review-stars d-flex gap-10 mb-3">
                                            <span className='text-muted'>Rating:</span>
                                            <ReactStars
                                                count={5}
                                                size={15}
                                                activeColor={"#ffc30b"}
                                                edit={true}
                                                value={5}
                                            />
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingTitle" placeholder="Title" />
                                            <label className='text-muted' htmlFor="floatingTitle">Give your review a title</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "150px" }}></textarea>
                                            <label className='text-muted' htmlFor="floatingTextarea2">Comments</label>
                                        </div>
                                        <button type="button" className="btn darkButton py-2 py-sm-2 px-3 px-sm-4 rounded-pill">Submit Review</button>
                                    </form>
                                </div>
                                <div className="show-reviews mt-4">
                                    <div className="single-review">
                                        <ReactStars
                                            count={5}
                                            size={15}
                                            activeColor={"#ffc30b"}
                                            edit={false}
                                            value={5}
                                        />
                                        <h6 className="single-review-title mt-2">Fast Shipping</h6>
                                        <div className="review-owner-details">
                                            <i><span className="review-owner-name"><b>momo</b></span> on <span className="review-submit-date"><b>Jun 20, 2022</b></span></i>
                                            <div className="review-description py-2">
                                                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorum nam quidem delectus doloribus molestiae eaque pariatur cum necessitatibus error placeat consequatur magnam sint quos natus, dolores libero dignissimos commodi quisquam qui expedita, eum excepturi debitis non? Rerum, ex. Sunt mollitia possimus praesentium dolore velit esse rerum ipsam fugiat beatae.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-suggestion-wrapper pb-5">
                    <div className="section-title fs-lg mb-4">You May Also Like</div>
                    <div className="row g-3">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </Container>

        </>
    )
}

export default SingleProduct