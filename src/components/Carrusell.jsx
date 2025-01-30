import { useState } from 'react'
import Carrusell1 from '../assets/carrusell1.png'
import Carrusell2 from '../assets/carrusell2.png'
import Carrusell3 from '../assets/carrusell3.png'
import Carrusell4 from '../assets/carrusell4.jpg'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'


const Carrusell = () => {
    const slides = [
        { image: Carrusell1 },
        { image: Carrusell2 },
        { image: Carrusell3 },
        { image: Carrusell4 }
    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className=' max-w-[1400px] sm:h-[600px] h-[400px] md:h-[700px] w-full m-auto py-16 px-8 relative group '>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
                className=' w-full h-full bg-center bg-cover object-cover duration-500'>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5  text-2x1 rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2x1 rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className=' flex top-4 justify-center py-2 gap-5'>
                {slides.map((slides, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className=' text-2x1 cursor-pointer'>
                        <RxDotFilled size={25} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carrusell