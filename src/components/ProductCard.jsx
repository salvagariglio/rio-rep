import React from 'react'

const ProductCard = ({item}) => {
    return (
        <div className='group relative'>
            <div className='w-full h-96 cursor-pointer overflow-hidden'>
                <a href='' className=''>
                    <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src={item.image} alt='productImg' />
                </a>
            </div>
            <div className='w-full border-[1px] px-2 py-4'>
                <div className='flex justify-between items-center'>
                    <p className='font-titleFont text-base font-bold'>
                        {item.title}
                    </p>
                </div>
                <div>
                        <p>
                            {item.category}
                        </p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
