import React from 'react'

const SelectInput = ({ value = "", options = [], onSelect = () => { } }) => {
    return (
        <select
            value={value}
            onSelect={onSelect}
            className='outline-none hover:cursor-pointer text-primary-500'
            required
        >
            {
                options.map(option => (
                    <option
                        value={option?.value}
                        key={option?.value}
                        className='bg-primary-100 text-primary-500'
                    >
                        {option?.label}
                    </option>
                ))
            }
        </select>
    )
}

export default SelectInput;