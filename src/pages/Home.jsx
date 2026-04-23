import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import electronics from "../assets/Electronics.png";
import beauty from "../assets/Beauty.png";
import home from "../assets/Home.png";
import cloth from "../assets/Cloths.png";

const Home = ({ products, addToCart }) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const categoryImages = {
    electronics: electronics,
    clothing: cloth,
    home: home,
    beauty: beauty,
  };
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setFeaturedProducts(products.slice(0, 4));
      setNewArrivals(products.slice(4, 8));
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [products]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="pt-20 pb-10">
      <Hero />

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              New Arrivals
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out our latest additions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find what you're looking for in our specialized categories
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Electronics", "Clothing", "Home", "Beauty"].map(
            (category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Link
                  to={`/products?category=${category.toLowerCase()}`}
                  className="block"
                >
                  <div className="h-32 bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center">
                    {/* <span className="text-4xl">📱</span> */}
                    <img
  src={categoryImages[category.toLowerCase()]}
  alt={category}
  className="h-full w-full object-cover"
/>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-medium text-gray-800">{category}</h3>
                    <p className="text-sm text-gray-500 mt-1">Shop now</p>
                  </div>
                </Link>
              </motion.div>
            ),
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
