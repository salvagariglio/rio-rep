import React from 'react'
import Logo from '../assets/logo.png'
import { FaPhone, FaFacebookSquare, FaInstagram } from "react-icons/fa"


const Footer = () => {
    return (
        <footer className='text-white gap-3 bg-gradient-to-r from-red-900 to-blue-900 bottom-0 w-full h-auto py-6 flex flex-col md:flex-row items-center justify-between px-6 '>

            <div className='  w-2/6 h-auto flex items-center justify-center'>
                <a href='../pages/Home.jsx'>
                    <img className=' w-5/6' src={Logo} alt='Logo' />
                </a>
            </div>
            <div className='grid grid-rows-2 items-center justify-center gap-3'>
                <div className='flex gap-3 items-center justify-center '>
                    <p className=''> Contactanos </p>
                    <a href='https://www.instagram.com/riorepsas/' className=''>
                        <FaInstagram size={20} />
                    </a>
                    <a href='https://www.facebook.com/riorepsas' className=''>
                        <FaFacebookSquare size={20} />
                    </a>
                </div>
                <div className=' flex gap-3 items-center justify-center '>
                    <FaPhone size={15} />
                    <p> +54 9 358 401 1515 </p>
                </div>
            </div>
            <div className='flex items-center justify-center md:justify-start mt-4 md:mt-0'>
                <a href='https://maps.app.goo.gl/TDX67w9vpC36wzPs7' className=' font-light hover:font-medium flex'>
                    Blvd. Ameghino 1350, X5800 Río Cuarto, Córdoba
                </a>
            </div>

        </footer>
    )
}

export default Footer
