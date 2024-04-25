import React from 'react'

const ContactForm = () => {
    return (
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
    )
}

export default ContactForm
