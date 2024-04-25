import React from 'react'
import {Link} from 'react-router-dom'
import Map from '../components/Map.jsx'
import ContactForm from '../components/ContactForm.jsx'
import ContactInfo from '../components/ContactInfo.jsx'

const Contact = () => {
    return (
        <div  className=''>
            <div className=' bg-gray-300 items-center justify-center p-10'>
                <div className='flex items-center justify-center m-3 font-extrabold'>
                    <Link to='/contacto' className=''>Contacto</Link>
                </div>
                <div className='flex gap-6 items-center justify-center m-3'>
                        <Link to='/' className='font-extralight'> Inicio </Link>
                        <p className=' font-bold'> / </p>
                        <Link to='/contacto' className=' font-medium'> Contacto </Link>
                </div>
            </div>
            <div className='  items-center justify-center p-10'>
                <div className='flex items-center justify-center py-8 '>
                    <h2 className=''> Contactate con nosotros</h2>
                </div>
                <div className='flex items-center justify-center'>
                    <ContactForm />
                    <ContactInfo />
                </div>
            </div>
            <Map />
        </div>
    )
}

export default Contact
