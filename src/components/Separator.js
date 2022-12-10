import React from 'react'

const Separator = ({label = 'YA DA'}) => { //label gönderilmemişse varsayılan olarak or olarak göndericeğiz.
    return (
        <div className='flex items-center'>
            <div className='h-px bg-gray-300 flex-1 my-2.5 mb-3.5' />
            <span className='px-4 test-[13px] text-gray-500 font-semibold'>{label}</span>
            <div className='h-px bg-gray-300 flex-1' />
        </div>
    )
}

export default Separator