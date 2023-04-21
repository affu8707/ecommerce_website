import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { HiOutlineArrowLeft } from "react-icons/hi"
import blog1 from "../images/blog-1.jpg"
import Container from '../components/Container'

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog Name"} />
            <BreadCrumb title={"Dynamic Blog Name"} />
            <Container class1="single-blog-wrapper">
                <div className="row gray-bg d-flex justify-content-center">
                    <div className="col-12 col-lg-10 p-5">
                        <div className="single-blog-card">
                            <Link to="/blogs" className='text-muted fs-xsm'>
                                <HiOutlineArrowLeft /> Go back to Blogs
                            </Link>
                            <h3 className='single-blog-title mb-4 mt-3'>A Beautiful Sunday Morning Renaissance</h3>

                            <div className='single-blog-img-div'>
                                <img className='single-blog-img img-fluid w-100' src={blog1} alt="blog" />
                            </div>
                            <div className="single-blog-content p-5 bg-white">
                                <p>You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury – it’s not something people need, but it’s what they want. It really pulls at their heart. I have a fantastic relationship with money.Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum pretium commodo inceptos cum condimentum placerat diam venenatis blandit hac eget dis lacus a parturient a accumsan nisl ante vestibulum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SingleBlog