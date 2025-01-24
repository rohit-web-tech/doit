import { SlashIcon } from 'lucide-react';
import React from 'react'

const IconWrapper = ({ Icon={SlashIcon}, className = "h-6 w-6", onClick=()=>{} }) => {
    return (
        <div
            onClick={onClick}
            className='p-1 hover:bg-primary-50 hover:cursor-pointer rounded-full'
        >
            <Icon
                className={`text-primary-500 ${className}`}
            />
        </div>
    )
}

export default IconWrapper ;
