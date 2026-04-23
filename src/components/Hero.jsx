import { motion } from 'framer-motion';
import { ArrowRightIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-blue-500 text-white py-20 md:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover Amazing Products <br />
              <span className="text-yellow-300">At Great Prices</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg">
              Shop the latest collection of premium products with fast delivery and excellent customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  Shop Now <ArrowRightIcon className="h-5 w-5" />
                </motion.button>
              </Link>
              <Link to="/featured-deals">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-500 hover:bg-opacity-10 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  <ShoppingBagIcon className="h-5 w-5" /> View Deals
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-white rounded-3xl opacity-20 blur-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Featured products"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-10 w-8 h-8 bg-yellow-300 rounded-full opacity-20"
      ></motion.div>
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/3 right-20 w-6 h-6 bg-white rounded-full opacity-20"
      ></motion.div>
    </section>
  );
};

export default Hero;