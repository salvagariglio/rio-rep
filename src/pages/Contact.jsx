import { Link } from 'react-router-dom'
import Map from '../components/Map.jsx'
import ContactForm from '../components/ContactForm.jsx'
import ContactInfo from '../components/ContactInfo.jsx'

const Contact = () => {

    return (
        <div className=''>
            <div className=' bg-gradient-to-b from-gray-400 to-white items-center justify-center p-10'>
                <div className='flex items-center justify-center my-10 font-extrabold'>
                    <Link to='/contacto' className='text-3xl'>Contacto</Link>
                </div>
                <div className='flex gap-6 items-center justify-center m-3'>
                    <Link to='/' className='font-medium'> Inicio </Link>
                    <p className=' font-bold text-blue-800'> / </p>
                    <Link to='/contacto' className=' font-bold text-blue-800'> Contacto </Link>
                </div>
            </div>
            <div className='  items-center justify-center p-10'>
                <div className='flex items-center justify-center py-8 '>
                    <h2 className=''> Envianos tu mensaje</h2>
                </div>
                <div className='flex items-center justify-center'>
                    <ContactForm />
                    <ContactInfo />
                </div>
            </div>
            <div className='my-10'>
                <Map />

            </div>
        </div>
    )
}

export default Contact
