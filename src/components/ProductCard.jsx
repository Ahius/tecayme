import { Link } from 'react-router-dom';

export default function ProductCard({ product, className = '' }) {
  return (
    <div className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 ${className}`}>
      {/* Product Image with Badge */}
      <div className="relative overflow-hidden">
        <Link to={`/products/${product.id}`} className="block">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-60 object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>
        {product.category === 'Siêu cay' && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            Premium
          </span>
        )}
      </div>
      
      {/* Product Info */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/products/${product.id}`} className="hover:text-[#c0392b] transition">
            <h3 className="font-bold text-lg line-clamp-2 text-red-800">{product.name}</h3>
          </Link>
        </div>
        
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="font-bold text-[#c0392b] text-lg">
            {product.price.toLocaleString('vi-VN')}đ
          </span>
          {/* <button className="bg-[#c0392b] hover:bg-[#c0392b] text-white p-2 rounded-lg transition duration-300 group-hover:scale-110">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  );
}