import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const SignUp = () => {
    return (
        <>
            <Meta title={"Create Account"} />
            <BreadCrumb title={"Create Account"} />
            <Container class1="signup-wrapper py-2 py-md-5 gray-bg">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-6 col-xl-5 p-4">
                        <div className="signup-card bg-white p-5 br-shadow">
                            <h5 className='text-muted mb-4 text-center'>Create Account</h5>
                            <form action="#">
                                <CustomInput type="text" placeholder="First Name" id="signupFloatingFName" />
                                <CustomInput type="text" placeholder="Last Name" id="signupFloatingLName" />
                                <CustomInput type="email" placeholder="Email Address" id="signupFloatingEmail" />
                                <CustomInput type="password" placeholder="Password" id="signupFloatingPass" />
                                <div className="signup-form-buttons d-flex justify-content-center py-3 mt-4">
                                    <button type="submit" className="btn signupButton py-3 py-md-3 px-5 px-md-5 rounded-pill">signup</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SignUp