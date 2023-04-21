import React from 'react'

const CustomInput = ({ type, id, placeholder, classname }) => {
    return (
        <div className="form-floating mb-3">
            <input type={type} className={`form-control ${classname}`} id={id} placeholder={placeholder} />
            <label className='text-muted' htmlFor={id}>{placeholder}</label>
        </div>
    )
}

export default CustomInput