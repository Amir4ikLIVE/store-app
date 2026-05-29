import React from 'react'

const formInput = ({label, type, defaultValue, size}) => {
    return (
        <div className="form-control">
            <label className="label flex">
                {label}
            </label>
            <input
                type={type}
                defaultValue={defaultValue}
                className={`input ${size}`}
                />
        </div>
    )
}

export default formInput;