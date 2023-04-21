import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import Meta from '../components/Meta'
import SingleCompare from '../components/SingleCompare'

const CompareProducts = () => {
    return (
        <>
            <Meta title={"Compare Products"} />
            <BreadCrumb title={"Compare Products"} />
            <Container class1="compare-product-wrapper gray-bg p-4">
                <div className="row">
                    <SingleCompare />
                    <SingleCompare />
                </div>
            </Container>
        </>
    )
}

export default CompareProducts