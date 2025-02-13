import Logo from '../assets/logo.png';
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { FaCar } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className=' '>
            <div className="fixed w-2/6 top-0 left-4 z-[99]">
                <Link to="/">
                    <img className="" src={Logo} alt="" />
                </Link>
            </div>
            <AiOutlineMenu onClick={handleNav} className='text-gray-100 bg-blue-900 rounded-lg h-6 p-1 fixed top-4 w-10 right-4 z-[99] md:hidden ' />
            {
                nav ? (
                    <div className='fixed w-full  h-screen bg-gradient-to-r from-red-900 to-blue-900 flex flex-col justify-center items-center z-20 text-gray-100 gap-8'>
                        <hr className=' rounded-full border-2 w-[75%] '></hr>
                        <Link to='/' onClick={handleNav} className=' flex gap-4'>
                            < AiOutlineHome size={20} />
                            <span> Inicio </span>
                        </Link>
                        <hr className='border-2 w-[75%]'></hr>
                        <Link to='/productos' onClick={handleNav} className=' flex gap-4'>
                            < FaCar size={20} />
                            <span> Productos </span>
                        </Link>
                        <hr className='border-2 w-[75%]'></hr>
                        <Link to='/contacto' onClick={handleNav} className=' flex gap-4'>
                            < AiOutlineMail size={20} />
                            <span> Contacto </span>
                        </Link>
                        <hr className='border-2 w-[75%]'></hr>
                    </div>
                )
                    : (
                        " "
                    )
            }
            <header className=" md:block hidden fixed top-0 left-0 w-full z-50 bg-transparent items-center justify-between h-12 px-4">
                <div className="w-2/6 absolute top-0 left-4">
                    <Link to="/">
                        <img className="" src={Logo} alt="" />
                    </Link>
                </div>
                <div className="w-auto absolute top-1/2 right-4 flex items-center">
                    <ul className="w-auto flex items-center justify-center gap-7 p-1 px-4 rounded-sm ">
                        <li className={`${location.pathname === '/' ? "bg-blue-800 text-gray-100" : "bg-transparent"} font-medium rounded-xl px-4 py-1`}>
                            <Link to='/'> Inicio </Link>
                        </li>
                        <li className={`${location.pathname === '/productos' ? "bg-blue-800 text-gray-100" : "bg-transparent"} font-medium rounded-xl px-4 py-1`}>
                            <Link to='/productos'> Productos </Link>
                        </li>
                        <li className={`${location.pathname === '/contacto' ? "bg-blue-800 text-gray-100" : "bg-transparent"} font-medium rounded-xl px-4 py-1`}>
                            <Link to='/contacto'> Contacto </Link>
                        </li>
                    </ul>
                </div>
            </header >
        </div >
    );
};

export default Header;