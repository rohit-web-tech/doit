import React from 'react'

const ContentWrapper = ({children}) => {
    return (
        <div
            className='w-full px-2 relative'
        >
            <div
                className='max-w-7xl w-full mx-auto relative flex grow items-start gap-4'
            >
                {children}
            </div>
        </div>
    )
}

export default ContentWrapper
