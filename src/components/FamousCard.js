import React from 'react'

const FamousCard = ({ color }) => {
    return (
        <div className="col">
            <div className={`famous-product-card br-shadow position-relative ${color}`}>
                <img className={`img-fluid rounded pt-5`} src={`../images/${color === "dark" ? "famous-banner-1.webp" : "famous-banner-2.webp"}`} alt="" />
                <div className={`famous-content position-absolute ${color}`}>
                    <p className="fs-xsm text-uppercase fw-light famous-type mb-0">Big Screen</p>
                    <div className="fs-md famous-title py-3">Smart Watch Series 7</div>
                    <p className="fs-sm famous-des fw-light">From $399or $16.62/mo. for 24 mo.*</p>
                </div>
            </div>
        </div >
    )
}

export default FamousCard