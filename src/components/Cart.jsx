import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
const Cart = ({ 
  isOpen = false, 
  onClose = () => {}, 
  cartItems = [], 
  removeFromCart = () => {}, 
  updateQuantity = () => {} 
}) => {
  const location = useLocation();
  const isStandalone = !isOpen && location.pathname === '/cart';

  // Safely calculate cart total
  const calculateTotal = () => {
    if (!Array.isArray(cartItems)) return 0;
    return cartItems.reduce((total, item) => {
      const price = Number(item?.price) || 0;
      const quantity = Number(item?.quantity) || 0;
      return total + (price * quantity);
    }, 0);
  };

  // Render individual cart item
  const renderCartItem = (item) => {
    if (!item) return null;
    
    return (
      <motion.li
        key={item.id || Math.random()}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.2 }}
        className="py-6 flex"
      >
        <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
          <img
            src={item.image || ''}
            alt={item.name || 'Product'}
            className="w-full h-full object-center object-cover"
          />
        </div>

        <div className="ml-4 flex-1 flex flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>{item.name || 'Unnamed Product'}</h3>
              <p className="ml-4">
                ${((item.price || 0) * (item.quantity || 1)).toFixed(2)}
              </p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{item.category || ''}</p>
          </div>
          <div className="flex-1 flex items-end justify-between text-sm">
            <div className="flex items-center">
              <button
                onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                className="text-gray-500 hover:text-gray-700 px-2"
              >
                -
              </button>
              <span className="mx-2">{item.quantity || 1}</span>
              <button
                onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                className="text-gray-500 hover:text-gray-700 px-2"
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="font-medium text-purple-600 hover:text-purple-500"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </motion.li>
    );
  };

  // Render empty cart state
  const renderEmptyCart = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center py-12"
    >
      <ShoppingCartIcon className="h-12 w-12 text-gray-400 mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-1">Your cart is empty</h3>
      <p className="text-gray-500 mb-6">Start shopping to add items to your cart</p>
      <button
        onClick={isStandalone ? () => window.history.back() : onClose}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
      >
        Continue Shopping
      </button>
    </motion.div>
  );

  // Render cart contents
  const renderCartContents = () => {
    if (!Array.isArray(cartItems)) {
      return (
        <div className="flex flex-col items-center justify-center py-12">
          <ShoppingCartIcon className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">Cart Error</h3>
          <p className="text-gray-500 mb-6">Unable to load cart items</p>
        </div>
      );
    }

    return (
      <>
        <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
          <div className="flex items-start justify-between">
            <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
            {!isStandalone && (
              <button
                type="button"
                className="-mr-2 p-2 text-gray-400 hover:text-gray-500"
                onClick={onClose}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            )}
          </div>

          <div className="mt-8">
            {cartItems.length === 0 ? renderEmptyCart() : (
              <div className="flow-root">
                <ul className="-my-6 divide-y divide-gray-200">
                  <AnimatePresence>
                    {cartItems.map(renderCartItem)}
                  </AnimatePresence>
                </ul>
              </div>
            )}
          </div>
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${calculateTotal().toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <Link to="/checkout" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-30 rounded-md transition-colors bg-center">
                Checkout
              </Link>
              
            </div>
            {!isStandalone && (
              <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                <p>
                  or{' '}
                  <button
                    type="button"
                    className="text-purple-600 font-medium hover:text-purple-500"
                    onClick={onClose}
                  >
                    Continue Shopping<span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            )}
          </div>
        )}
      </>
    );
  };

  if (isStandalone) {
    return (
      <div className="container mx-auto px-4 py-25">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {renderCartContents()}
        </div>
      </div>
    );
  }

  // Modal view
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={onClose}
            ></motion.div>

            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', ease: 'easeInOut' }}
                className="w-screen max-w-md"
              >
                <div className="h-full flex flex-col bg-white shadow-xl">
                  {renderCartContents()}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Cart.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
      image: PropTypes.string,
      category: PropTypes.string
    })
  ),
  removeFromCart: PropTypes.func,
  updateQuantity: PropTypes.func
};

Cart.defaultProps = {
  isOpen: false,
  onClose: () => {},
  cartItems: [],
  removeFromCart: () => {},
  updateQuantity: () => {}
};

export default Cart;