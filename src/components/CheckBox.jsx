import React, { useId } from 'react'

const CheckBox = ({className="gap-4",label="",onChange=()=>{},checked}) => {

    const id = useId();

    return (
        <div
            className={`flex items-center ${className}`}
        >
            <input
                id={id}
                checked={checked}
                onChange={onChange}
                type="checkbox"
                className='cursor-pointer h-[18px] w-[18px] border-2 border-gray-300 rounded-sm accent-primary-900 text-white'
            />
            <label
                className='text-primary-500 text-[15px] font-medium hover:cursor-pointer'
                htmlFor={id}
            >
                {label}
            </label>
        </div>
    )
}

export default CheckBox
