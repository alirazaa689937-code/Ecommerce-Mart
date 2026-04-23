import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, HeartIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const ProductCard = ({ product, addToCart }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-500"
            style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
          />
        </Link>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-2 right-2 p-2 bg-white/80 rounded-full backdrop-blur-sm"
        >
          <HeartIcon
            className={`h-5 w-5 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`}
          />
        </button>
        {product.discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{product.discount}%
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <Link to={`/products/${product.id}`} className="group">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
              {product.name}
            </h3>
          </Link>
          <div className="flex items-center">
            <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-1">{product.category}</p>

        <div className="mt-3 flex items-center justify-between">
          <div>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through mr-2">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-lg font-bold text-purple-600">
              ${product.price}
            </span>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="bg-purple-100 hover:bg-purple-600 hover:text-white text-purple-600 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;