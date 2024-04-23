import React from 'react'
import ProductCard from '../components/ProductCard'
import products from '../data.json'
import {Link} from 'react-router-dom'


const Products = () => {
    return (
        <div className=' w-full justify-center items-center'>
            <div className=' bg-gray-300 items-center justify-center p-10'>
                <div className='flex items-center justify-center m-3 font-extrabold'>
                    <Link to='/productos' className=''>Productos</Link>
                </div>
                <div className='flex gap-6 items-center justify-center m-3'>
                        <Link to='/' className='font-extralight'> Inicio </Link>
                        <p className=' font-bold'> / </p>
                        <Link to='/productos' className=' font-medium'> Productos </Link>
                </div>
            </div>
            <div className=' max-w-screen-xl mx-auto grid grid-cols-3 gap-10 px-3 py-20'>
                {
                    products.map( product => {
                        return (
                            <ProductCard key={product._id} item={product} />
                        )}
                    )
                }
            </div>
        </div>
    )
}

export default Products


