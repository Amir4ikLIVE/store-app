import React from 'react'

const formInput = ({label, type, defaultValue}) => {
    return (
        <div className="form-control">
            <label className="label flex">
                Username
            </label>
            <input
                type={type}
                defaultValue={defaultValue}
                className='text' />
        </div>
    )
}

export default formInput;