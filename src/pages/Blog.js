import React from 'react'
import Blogpost from '../components/Blogpost'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import Meta from '../components/Meta'

const Blog = () => {
    return (
        <>
            <Meta title={"Blogs"} />
            <BreadCrumb title={"Blogs"} />
            <Container class1="blogs-wrapper gray-bg py-4">
                <div className="row">
                    <div className="col-lg-3 d-none d-lg-block">
                        <div className="filter-card br-shadow mb-4 p-3 bg-white">
                            <h3 className="filter-title fs-6">Find By Categories</h3>
                            <div className='pt-2'>
                                <ul className='ps-0 fs-xsm text-muted mb-0'>
                                    <li className='py-1'>Watch</li>
                                    <li className='py-1'>TV</li>
                                    <li className='py-1'>Camera</li>
                                    <li className='py-1'>Laptop</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9">
                        <div className="row">
                            <Blogpost />
                            <Blogpost />
                            <Blogpost />
                            <Blogpost />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Blog