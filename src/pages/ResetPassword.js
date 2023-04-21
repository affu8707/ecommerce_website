import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import Meta from '../components/Meta'

const ResetPassword = () => {
    return (
        <>
            <Meta title={"Reset Password"} />
            <BreadCrumb title={"Reset Password"} />
            <Container class1="reset-wrapper py-2 py-md-5 gray-bg">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-6 col-xl-5 p-4">
                        <div className="reset-card bg-white p-5 br-shadow">
                            <h5 className='text-muted mb-4 text-center'>Confirm Changing Password</h5>
                            <form action="#">
                                <CustomInput type="password" placeholder="Password" id="resetFloatingPass1" />
                                <CustomInput type="password" placeholder="Confirm Password" id="resetFloatingPass2" />

                                <div className="text-danger py-3">
                                    Passwords are not same.
                                </div>
                                <div className="reset-form-buttons d-flex justify-content-center py-3 gap-30">
                                    <button type="submit" className="btn resetButton py-3 py-md-3 px-5 px-md-5 rounded-pill">Change Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ResetPassword