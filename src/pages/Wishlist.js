import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import WishlistProduct from '../components/WishlistProduct'
import Container from '../components/Container';

const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title={"Wishlist"} />
            <Container class1="compare-product-wrapper gray-bg p-4">
                <div className="row">
                    <WishlistProduct />
                    <WishlistProduct />
                </div>
            </Container>
        </>
    )
}

export default Wishlist