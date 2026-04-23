
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Truck, CreditCard, CheckCircle } from 'react-feather';
import { Link } from 'react-router-dom';
const CheckoutPage = ({ cartItems = [], onClose }) => {
  const [shippingOption, setShippingOption] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const safeItems = Array.isArray(cartItems) ? cartItems : [];
  const subtotal = safeItems.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );
  const shippingCost = shippingOption === 'express' ? 15 : 5;
  const tax = subtotal * 0.1; 
  const total = subtotal + shippingCost + tax;
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.4 } }
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setOrderPlaced(true);
    }, 1500);
  };

  if (orderPlaced) {
    return (
      <motion.div 
        className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50"
        variants={successVariants}
        initial="hidden"
        animate="visible"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
        <p className="text-gray-600 mb-6 text-center">
          Your order #438sfgjk48 has been placed successfully. We've sent a confirmation to your email.
        </p>
        <Link
  to="/products"
  className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
>
  Continue Shopping
</Link>
      </motion.div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 py-25 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Checkout</h1>
          <div className="flex justify-center mt-4">
            <div className="flex items-center">
              <div className="flex items-center text-indigo-600">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4 text-white" />
                </div>
                <div className="w-16 h-1 bg-indigo-600"></div>
              </div>
              <div className="flex items-center text-indigo-600">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                  <Truck className="w-4 h-4 text-white" />
                </div>
                <div className="w-16 h-1 bg-indigo-600"></div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Order Summary */}
          <motion.div 
            className="md:w-2/3"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Shipping Method</h2>
              <div className="space-y-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-indigo-500">
                    <input 
                      type="radio" 
                      name="shipping" 
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                      checked={shippingOption === 'standard'}
                      onChange={() => setShippingOption('standard')}
                    />
                    <div className="ml-3">
                      <span className="block text-sm font-medium text-gray-900">Standard Shipping</span>
                      <span className="block text-sm text-gray-500">5-7 business days • ${shippingOption === 'standard' ? '5.00' : '5.00'}</span>
                    </div>
                  </label>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-indigo-500">
                    <input 
                      type="radio" 
                      name="shipping" 
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                      checked={shippingOption === 'express'}
                      onChange={() => setShippingOption('express')}
                    />
                    <div className="ml-3">
                      <span className="block text-sm font-medium text-gray-900">Express Shipping</span>
                      <span className="block text-sm text-gray-500">2-3 business days • ${shippingOption === 'express' ? '15.00' : '15.00'}</span>
                    </div>
                  </label>
                </motion.div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <div className="space-y-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-indigo-500">
                    <input 
                      type="radio" 
                      name="payment" 
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                      checked={paymentMethod === 'credit'}
                      onChange={() => setPaymentMethod('credit')}
                    />
                    <div className="ml-3">
                      <span className="block text-sm font-medium text-gray-900">Credit/Debit Card</span>
                      <span className="block text-sm text-gray-500">Visa, Mastercard, American Express</span>
                    </div>
                  </label>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-indigo-500">
                    <input 
                      type="radio" 
                      name="payment" 
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                      checked={paymentMethod === 'paypal'}
                      onChange={() => setPaymentMethod('paypal')}
                    />
                    <div className="ml-3">
                      <span className="block text-sm font-medium text-gray-900">PayPal</span>
                      <span className="block text-sm text-gray-500">Secure online payments</span>
                    </div>
                  </label>
                </motion.div>
              </div>

              {paymentMethod === 'credit' && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 overflow-hidden"
                >
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                      <input 
                        type="text" 
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                        <input 
                          type="text" 
                          placeholder="MM/YY"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                        <input 
                          type="text" 
                          placeholder="123"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="divide-y divide-gray-200">
                <AnimatePresence>
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, x: -20 }}
                      className="py-4 flex"
                    >
                      <div className="flex-shrink-0 w-16 h-16 border border-gray-200 rounded-md overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.name}</h3>
                          <p>${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Subtotal</span>
                  <span className="text-sm font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Shipping</span>
                  <span className="text-sm font-medium">${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Tax</span>
                  <span className="text-sm font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-gray-200">
                  <span className="text-base font-medium text-gray-900">Total</span>
                  <span className="text-base font-bold">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Place Order
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CheckoutPage;