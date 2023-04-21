import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiFillHome, AiFillPhone, AiTwotoneMail, AiFillInfoCircle } from "react-icons/ai"
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'


const Contact = () => {
    return (
        <>
            <Meta title={"Contact"} />
            <BreadCrumb title={"Contact"} />
            <Container class1="contact-wrapper gray-bg py-4">
                <div className="row">
                    <div className="col-12">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14688.290772161925!2d91.399604!3d23.021103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375368498f61eee3%3A0xa43932e620180136!2sAbu%20Hasan%20Rumi!5e0!3m2!1sen!2sbd!4v1677926059034!5m2!1sen!2sbd" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-12">
                        <div className="contact-details-wrapper my-4 bg-white br-shadow">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="contact-form-section p-5">
                                        <h3 className="contact-title mb-4">Contact</h3>
                                        <form action="">
                                            <CustomInput type="text" placeholder="Name" id="floatingName" />
                                            <CustomInput type="email" placeholder="Email *" id="floatingEmail" />
                                            <CustomInput type="tel" placeholder="Phone Number" id="floatingPhone" />
                                            <div className="form-floating mb-3">
                                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "150px" }}></textarea>
                                                <label className='text-muted' htmlFor="floatingTextarea2">Comments</label>
                                            </div>
                                            <button type="button" className="btn darkButton py-2 py-sm-2 px-3 px-sm-4 rounded-pill">Send</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-details-section p-5">
                                        <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                                        <div className="getInTouchDetails">
                                            <p className="text-muted"><AiFillHome className='me-3' />33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105</p>
                                            <p className="text-muted"><AiFillPhone className='me-3' />(888) 4344 6000</p>
                                            <p className="text-muted"><AiTwotoneMail className='me-3' />demo@company.com</p>
                                            <p className="text-muted"><AiFillInfoCircle className='me-3' />Monday – Friday 10 AM – 8 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Contact