import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { StarIcon, HeartIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';

const ProductDetails = ({ products, addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showToast, setShowToast] = useState(false); // ✅ toast visibility

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setIsLoading(false);
    } else {
      navigate('/products');
    }
  }, [id, products, navigate]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000); // auto-hide toast
  };

  if (isLoading || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-10 px-4 my-7 sm:px-6 lg:px-8 bg-gray-50 relative">
      {/* ✅ Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 right-40 z-50 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-md flex items-center space-x-2"
          >
            <ShoppingCartIcon className="h-5 w-5" />
            <span>Added to cart</span>
            <button onClick={() => setShowToast(false)}>
              <XMarkIcon className="h-4 w-4 text-green-600" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-purple-600 hover:text-purple-800 mb-6 transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((img, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-white rounded-lg shadow overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  <img
                    src={product.image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-20 object-contain"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        className={`h-5 w-5 ${
                          star <= Math.round(product.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 ml-2">
                    {product.rating} ({Math.floor(product.rating * 20)} reviews)
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <HeartIcon
                  className={`h-6 w-6 ${
                    isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'
                  }`}
                />
              </button>
            </div>

            <div className="mt-6">
              <p className="text-gray-900 text-2xl font-bold">
                ${product.price}
                {product.originalPrice && (
                  <span className="text-gray-400 line-through text-lg ml-2">
                    ${product.originalPrice}
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="ml-2 text-sm bg-red-100 text-red-800 py-1 px-2 rounded-full">
                    Save {product.discount}%
                  </span>
                )}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Details</h3>
              <ul className="mt-2 text-gray-600 space-y-2">
                <li>
                  Category: <span className="capitalize">{product.category}</span>
                </li>
                <li>Brand: {product.brand || 'Generic'}</li>
                <li>In Stock: {product.inStock ? 'Yes' : 'No'}</li>
              </ul>
            </div>

            <div className="mt-8">
              <div className="flex items-center space-x-4 mb-4">
                <label htmlFor="quantity" className="text-gray-700">
                  Quantity:
                </label>
                <div className="flex border border-gray-300 rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="w-full bg-purple-600 hover:bg-purple-900 text-white py-3 px-4 rounded-md flex items-center justify-center space-x-2 transition-colors"
              >
                <ShoppingCartIcon className="h-5 w-5" />
                <span>Add to Cart</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
          <div className="bg-white rounded-xl shadow-md p-6">
            {product.reviews && product.reviews.length > 0 ? (
              <div className="space-y-6">
                {product.reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon
                            key={star}
                            className={`h-5 w-5 ${
                              star <= review.rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">{review.date}</span>
                    </div>
                    <h4 className="mt-2 font-medium text-gray-900">{review.title}</h4>
                    <p className="mt-1 text-gray-600">{review.comment}</p>
                    <p className="mt-2 text-sm text-gray-500">- {review.author}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">
                No reviews yet. Be the first to review this product!
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
