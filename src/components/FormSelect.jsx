import React from 'react'

const FormSelect = ({ label, name, list, size }) => {
    return (
        <div className='form-control'>
            <label htmlFor={name} className='label'>
                {label}
            </label>
            <select
                className={`select ${size}`}
                name={name}
                id={name}
            >
                {
                    list.map((item) => <option key={item} value={item}>
                        {item}
                    </option>)
                }
            </select>
        </div>
    )
}

export default FormSelect;