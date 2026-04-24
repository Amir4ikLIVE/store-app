import React from 'react'

const formInput = ({label, type, defaultValue}) => {
    return (
        <div className="form-control">
            <label className="label flex">
                {label}
            </label>
            <input
                type={type}
                defaultValue={defaultValue}
                className='input mt-2' />
        </div>
    )
}

export default formInput;