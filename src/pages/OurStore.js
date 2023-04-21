import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductUtilities/ProductCard';
import { isMobile } from 'react-device-detect';
import watch from "../images/watch.jpg"
import gr1 from "../images/gr.svg"
import gr2 from "../images/gr2.svg"
import gr3 from "../images/gr3.svg"
import gr4 from "../images/gr4.svg"
import Container from '../components/Container';

const OurStore = () => {
    const [grid, setGrid] = useState(isMobile ? 12 : 3)
    return (
        <>
            <Meta title={"Our Products"} />
            <BreadCrumb title={"Our Products"} />
            <Container class1="store-wrapper home-wrapper-2 py-4 gray-bg">
                <div className="row">
                    <div className="d-none d-lg-block col-lg-3">
                        <div className="filter-card br-shadow mb-4 p-3 bg-white">
                            <h3 className="filter-title fs-6">Shop By Categories</h3>
                            <div className='pt-2'>
                                <ul className='ps-0 fs-xsm text-muted mb-0'>
                                    <li className='py-1'>Watch</li>
                                    <li className='py-1'>TV</li>
                                    <li className='py-1'>Camera</li>
                                    <li className='py-1'>Laptop</li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-card br-shadow mb-4 p-3 pb-4 bg-white">
                            <h3 className="filter-title fs-6">Filter By</h3>
                            <div className="availability py-3">
                                <p className="sub-title mb-2">Availability</p>

                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="" />
                                        <label className="form-check-label text-muted fs-xsm" htmlFor="">
                                            In Stock (21)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="" />
                                        <label className="form-check-label text-muted fs-xsm" htmlFor="">
                                            Out of Stock (3)
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="price pb-4">
                                <p className="sub-title mb-2">Price</p>

                                <div className='d-flex align-items-center gap-10'>
                                    <span>$</span>
                                    <div className="form-floating">
                                        <input type="number" className="form-control" id="floatingFrom" placeholder="$5" />
                                        <label htmlFor="floatingFrom">From</label>
                                    </div>
                                    <span>$</span>

                                    <div className="form-floating">
                                        <input type="number" className="form-control" id="floatingTo" placeholder="$50" />
                                        <label htmlFor="floatingTo">To</label>
                                    </div>
                                </div>
                            </div>
                            <div className="colors-wrapper pb-4">
                                <p className="sub-title mb-2">Colors</p>

                                <div>
                                    <ul className="colors ps-0 d-flex flex-wrap gap-10 mb-0">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="size">
                                <p className="sub-title mb-2">Size</p>

                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="" />
                                        <label className="form-check-label text-muted fs-xsm" htmlFor="">
                                            S (10)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="" />
                                        <label className="form-check-label text-muted fs-xsm" htmlFor="">
                                            M (13)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="" />
                                        <label className="form-check-label text-muted fs-xsm" htmlFor="">
                                            L (10)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="" />
                                        <label className="form-check-label text-muted fs-xsm" htmlFor="">
                                            XL (10)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="" />
                                        <label className="form-check-label text-muted fs-xsm" htmlFor="">
                                            XXL (10)
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card br-shadow mb-4 p-3 bg-white">
                            <h3 className="filter-title fs-6 mb-3">Product Tag</h3>
                            <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                <span className="badge fw-normal text-secondary rounded-3 px-3 py-2 fs-xsm">
                                    Headphone
                                </span>
                                <span className="badge fw-normal text-secondary rounded-3 px-3 py-2 fs-xsm">
                                    Laptop
                                </span>
                                <span className="badge fw-normal text-secondary rounded-3 px-3 py-2 fs-xsm">
                                    Mobile
                                </span>
                                <span className="badge fw-normal text-secondary rounded-3 px-3 py-2 fs-xsm">
                                    Oppo
                                </span>
                                <span className="badge fw-normal text-secondary rounded-3 px-3 py-2 fs-xsm">
                                    Vivo
                                </span>
                                <span className="badge fw-normal text-secondary rounded-3 px-3 py-2 fs-xsm">
                                    Speaker
                                </span>
                                <span className="badge fw-normal text-secondary rounded-3 px-3 py-2 fs-xsm">
                                    Tablet
                                </span>
                                <span className="badge fw-normal text-secondary rounded-3 px-3 py-2 fs-xsm">
                                    Wire
                                </span>
                            </div>
                        </div>
                        <div className="filter-card br-shadow mb-4 p-3 bg-white">
                            <h3 className="filter-title fs-6">Random Products</h3>
                            <div className="random-products-wrapper">
                                <div className="random-product py-3">
                                    <div className="row">
                                        <div className="col-4">
                                            <img src={watch} className='img-fluid' alt="" />
                                        </div>
                                        <div className="col-8">
                                            <h5 className="product-title fs-sm">Kids headphones bulk 10 pack multi colored for students</h5>
                                            <ReactStars
                                                count={5}
                                                size={15}
                                                activeColor={"#ffc30b"}
                                                edit={false}
                                                value={3}
                                            />
                                            <p className="price fs-6 fw-normal pt-2 mb-0">$100.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="random-product py-3">
                                    <div className="row">
                                        <div className="col-4">
                                            <img src={watch} className='img-fluid' alt="" />
                                        </div>
                                        <div className="col-8">
                                            <h5 className="product-title fs-sm">Kids headphones bulk 10 pack multi colored for students</h5>
                                            <ReactStars
                                                count={5}
                                                size={15}
                                                activeColor={"#ffc30b"}
                                                edit={false}
                                                value={3}
                                            />
                                            <p className="price fs-6 fw-normal pt-2 mb-0">$100.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="random-product py-3">
                                    <div className="row">
                                        <div className="col-4">
                                            <img src={watch} className='img-fluid' alt="" />
                                        </div>
                                        <div className="col-8">
                                            <h5 className="product-title fs-sm">Kids headphones bulk 10 pack multi colored for students</h5>
                                            <ReactStars
                                                count={5}
                                                size={15}
                                                activeColor={"#ffc30b"}
                                                edit={false}
                                                value={3}
                                            />
                                            <p className="price fs-6 fw-normal pt-2 mb-0">$100.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9">
                        <div className="filter-sort-grid bg-white px-3 py-2 br-shadow mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className='d-none d-lg-block'>
                                    <div className="sort d-flex align-items-center gap-10">
                                        <label htmlFor="sortBy" className='w-100'>Sort By:</label>
                                        <select className='form-control form-select' defaultValue={'best-selling'} name="" id="sortBy">
                                            <option value="manual">Featured</option>
                                            <option value="best-selling">Best selling</option>
                                            <option value="title-ascending">Alphabetically, A-Z</option>
                                            <option value="title-descending">Alphabetically, Z-A</option>
                                            <option value="price-ascending">Price, low to high</option>
                                            <option value="price-descending">Price, high to low</option>
                                            <option value="created-ascending">Date, old to new</option>
                                            <option value="created-descending">Date, new to old</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="view d-flex align-items-center gap-10">
                                    <p className="mb-0 total-products fs-xsm text-secondary">21 products</p>
                                    <div className="grid-imgs d-flex gap-1">
                                        <div onClick={() => setGrid(3)} className="single-grid-img d-flex align-items-center justify-content-center p-2">
                                            <img src={gr4} className='img-fluid' alt="" />
                                        </div>
                                        <div onClick={() => setGrid(4)} className="single-grid-img d-flex align-items-center justify-content-center p-2">
                                            <img src={gr3} className='img-fluid' alt="" />
                                        </div>
                                        <div onClick={() => setGrid(6)} className="single-grid-img d-flex align-items-center justify-content-center p-2">
                                            <img src={gr2} className='img-fluid' alt="" />
                                        </div>
                                        <div onClick={() => setGrid(12)} className="single-grid-img d-flex align-items-center justify-content-center p-2">
                                            <img src={gr1} className='img-fluid' alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="products-list pb-5">
                            <div className="row g-3">
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </ Container>
        </>
    )
}

export default OurStore