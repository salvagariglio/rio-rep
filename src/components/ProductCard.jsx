import React from 'react'


const ProductCard = ({item}) => {
    return (
        <div className=' border-[1px]   group relative'>
            <a href='https://www.mercadolibre.com.ar/'>
                <div className='w-full h-96 cursor-pointer overflow-hidden'>
                    <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src={item.image} alt='productImg' />
                </div>
                <div className='w-full border-t-[1px] px-2 py-4'>
                    <div className='flex justify-between items-center'>
                        <p className=' flexfont-titleFont text-base font-bold'>
                            {item.title}
                        </p>
                    </div>
                    <div>
                            <p>
                                {item.category}
                            </p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProductCard
