import React from 'react'
import { FaArrowUp } from "react-icons/fa6"

const ButtonTop = () => {
    return (
        <div className='fixed bottom-4 right-4 z-50 text-gray-100'>
            <button className='rounded-full bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 '>
                <FaArrowUp size={20} />
            </button>
        </div>
    )
}

export default ButtonTop
