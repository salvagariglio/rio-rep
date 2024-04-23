import React from 'react'
import { FaPhone } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import { IoLocationOutline } from "react-icons/io5"
import {Link} from 'react-router-dom'

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
                    <div className='  flex items-center justify-center w-1/2 pt-8 px-8 '>
                        <form action='https://getform.io/f/pamqklda' method='POST' encType='multipart/forms-data'>
                            <ul className=' items-center justify-center grid md:grid-cols-2 gap-4 w-full py-2'>
                                <li className='flex flex-col'>
                                    <input className=' flex p-2 bg-gray-300 border rounded-md border-black placeholder:text-black' type='text' placeholder='Nombre*' required/>
                                </li>
                                <li className='flex flex-col'>
                                    <input className=' flex p-2 bg-gray-300 border rounded-md border-black placeholder:text-black' type='text' placeholder='Teléfono*' required/>
                                </li>
                                <li className='flex flex-col'>
                                    <input className=' flex p-2 bg-gray-300 border rounded-md border-black placeholder:text-black' type='email' placeholder='Email*' required/>
                                </li>
                                <li className='flex flex-col'>
                                    <input className=' flex p-2 bg-gray-300 border rounded-md border-black placeholder:text-black' type='text' placeholder='Asunto*' required/>
                                </li>
                                <li className='flex flex-col'>
                                    <textarea className=' flex p-2 bg-gray-300 border rounded-md border-black placeholder:text-black' rows='10' placeholder='Mensaje*' required></textarea>
                                </li>
                                <li className=''>
                                    <button className=' flex  py-2 px-8 bg-red-800 rounded-md text-gray-100'>
                                        Enviar Mensaje
                                    </button>
                                </li>
                            </ul>
                        </form>
                    </div>
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
                </div>
            </div>
            <div>
                <p>Map</p>
            </div>
        </div>
    )
}

export default Contact
