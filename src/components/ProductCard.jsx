import React from "react"

const ProductCard = ({ item }) => {
    return (
        <div className=' border-[2px] border-red-800 rounded-2xl   group relative'>
            <a href='https://www.mercadolibre.com.ar/'>
                <div className='w-full h-96 cursor-pointer overflow-hidden'>
                    <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src={item.image} alt='productImg' />
                </div>
                <div className='w-full border-t-[1px] px-6 py-4'>
                    <div className='flex justify-between items-center pb-2'>
                        <p className=' font-titleFont text-base font-bold'>
                            {item.title}
                        </p>
                    </div>
                    <div className=" items-center bg-red-400 rounded-md w-fit">
                        <p className="text-red-900 px-3 ">
                            {item.category}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProductCard
