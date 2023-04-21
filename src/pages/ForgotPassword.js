import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';


const ForgotPassword = () => {
    return (
        <>
            <Meta title={"Forgot Password"} />
            <BreadCrumb title={"Forgot Password"} />
            <Container class1="forgot-wrapper py-2 py-md-5 gray-bg">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-6 col-xl-5 p-4">
                        <div className="forgot-card bg-white p-5 br-shadow">
                            <h5 className='text-muted mb-4 text-center'>Reset Your Password</h5>
                            <div className='text-muted text-center mb-4 '>We will send you an email to reset your password</div>
                            <form action="#">
                                <CustomInput type="email" placeholder="Email Address" id="forgotFloatingEmail" />

                                <div className="text-danger py-3">
                                    No account found with that email.
                                </div>

                                <div className="forgot-form-buttons d-flex justify-content-center py-3 gap-30">
                                    <Link to="/reset-password">
                                        <button type="submit" className="btn forgotButton py-3 py-md-3 px-5 px-md-5 rounded-pill">Submit</button>
                                    </Link>
                                    <button type="button" className="btn cancelButton py-3 py-md-3 px-5 px-md-5 rounded-pill">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ForgotPassword