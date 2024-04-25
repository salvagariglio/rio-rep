import React from 'react'
import { FaPhone } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import { IoLocationOutline } from "react-icons/io5"

const ContactInfo = () => {
    return (
        <div className='  hidden md:block  m-auto w-1/2 border-2 border-black px-8 py-8'>
            <div className=''>
                <p className=''> Direccion</p>
            </div>
            <div className='flex py-4 gap-4'>
                < IoLocationOutline size={25} />
                <p className=''>Blvd. Ameghino 1350, X5800 Río Cuarto, Córdoba</p>
            </div>
            <div className='flex py-4 gap-4'>
                <FaPhone size={15} />
                <p className=''>+54 9 358 401 1515</p>
            </div>
            <div className='flex py-4 gap-4'>
                <MdEmail />
                <p className=''>riorepsas@gmail.com</p>
            </div>        
            <div>
                <p className=''> Venta de repuestos, autopartes y accesorios para Chevrolet y Toyota. </p>
            </div>
        </div>
    )
}

export default ContactInfo
