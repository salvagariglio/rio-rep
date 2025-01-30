import ProductCard from '../components/ProductCard'
import products from '../data.json'
import { Link } from 'react-router-dom'

const Products = () => {
    return (
        <div className="w-full flex flex-col items-center">
            {/* Header Section */}
            <div className="bg-gradient-to-b from-gray-400 to-white w-full p-10 text-center">
                <p className="text-3xl font-extrabold my-6">Nuestros productos disponibles</p>
                <div className="flex gap-3 items-center justify-center">
                    <Link to="/" className="font-medium">Inicio</Link>
                    <p className="font-bold text-blue-800">/</p>
                    <Link to="/productos" className="font-bold text-blue-800">Productos</Link>
                </div>
            </div>

            {/* Products Grid */}
            <div className="w-full max-w-screen-xl mx-auto px-4 py-10">
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map(product => (
                        <ProductCard key={product._id} item={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
