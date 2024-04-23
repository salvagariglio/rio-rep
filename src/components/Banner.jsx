import React from 'react'
import Background from '../assets/background.jpg'

const Banner = () => {
    return (
        <div className=' w-full h-auto '>
            <img src={Background} alt='Fondo' className=' w-full h-auto object-cover'/>
        </div>
    )
}

export default Banner
