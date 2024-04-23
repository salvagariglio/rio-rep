import React from 'react'
import { FaWhatsapp} from "react-icons/fa";

const ButtonWsp = () => {
    return (
        <div className='fixed bottom-4 right-4 z-50 '>
            <button className='text-white bg-green-500 object-contain rounded-full p-1'>
                <a className=''
                    href='https://api.whatsapp.com/send?phone=5493584011515&text=Hola%20equipo%20de%20RioRep!%F0%9F%91%A8%F0%9F%8F%BB%E2%80%8D%F0%9F%94%A7%F0%9F%9A%99%20Mi%20nombre%20es...'>
                    <FaWhatsapp size={40}/>
                </a>
            </button>
        </div>
    )
}

export default ButtonWsp
