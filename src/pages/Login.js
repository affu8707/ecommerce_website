import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const Login = () => {
    return (
        <>
            <Meta title={"Login"} />
            <BreadCrumb title={"Login"} />
            <Container class1="login-wrapper py-2 py-md-5 gray-bg">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-6 col-xl-5 p-4">
                        <div className="login-card bg-white p-5 br-shadow">
                            <h5 className='text-muted mb-4 text-center'>Login</h5>
                            <form action="#">
                                <CustomInput type="email" placeholder="Email Address" id="loginFloatingEmail" />
                                <CustomInput type="password" placeholder="Password" id="loginFloatingPass" />
                                <Link to="/forgot-password" className='py-3'><span className="fs-sm text-dark">Forgot your password?</span></Link>
                                <div className="login-form-buttons d-flex justify-content-center py-3 gap-30">
                                    <button type="submit" className="btn loginButton py-3 py-md-3 px-5 px-md-5 rounded-pill">Login</button>
                                    <Link to="/signup"><button type="submit" className="btn signupButton py-3 py-md-3 px-5 px-md-5 rounded-pill">Sign Up</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Login