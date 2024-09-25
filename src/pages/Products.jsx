import ProductCard from '../components/ProductCard'
import products from '../data.json'
import { Link } from 'react-router-dom'


const Products = () => {

    return (
        <div className='  w-full justify-center items-center'>
            <div className=' bg-gradient-to-b from-gray-400 to-white items-center justify-center p-10'>
                <div className='flex items-center justify-center my-12 font-extrabold'>
                    <p className='text-3xl'>Nuestros productos disponibles</p>
                </div>
                <div className='flex gap-6 items-center justify-center m-3'>
                    <Link to='/' className='font-medium'> Inicio </Link>
                    <p className=' font-bold text-blue-800'> / </p>
                    <Link to='/productos' className=' font-bold text-blue-800'> Productos </Link>
                </div>
            </div>
            <div className=' max-w-screen-xl mx-auto grid grid-cols-3 gap-10 px-3 py-20'>
                {
                    products.map(product => {
                        return (
                            <ProductCard key={product._id} item={product} />
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Products


