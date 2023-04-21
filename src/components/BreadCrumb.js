import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = ({ title }) => {
    return (
        <div className="breadcrumb mb-0 py-4">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <p className="text-center fs-xsm mb-0 text-uppercase">
                            <Link className='text-dark' to="/">Home &nbsp;</Link> / &nbsp; {title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb