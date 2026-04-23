import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Products = ({ products, addToCart }) => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      let result = products;

      // Filter by category if specified
      if (category) {
        result = products.filter(
          (product) => product.category.toLowerCase() === category.toLowerCase()
        );
      }

      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        result = result.filter(
          (product) =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );
      }

      // Sort products
      switch (sortOption) {
        case "price-low":
          result = [...result].sort((a, b) => a.price - b.price);
          break;
        case "price-high":
          result = [...result].sort((a, b) => b.price - a.price);
          break;
        case "rating":
          result = [...result].sort((a, b) => b.rating - a.rating);
          break;
        default:
          // Default sorting (newest first)
          result = [...result].sort((a, b) => b.id - a.id);
      }

      setFilteredProducts(result);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [products, category, sortOption, searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen pt-30 pb-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {category
                ? `${
                    category.charAt(0).toUpperCase() + category.slice(1)
                  } Products`
                : "All Products"}
            </h1>
            <p className="text-gray-600">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "product" : "products"} available
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 w-full md:w-auto bg-white shadow-lg p-2 rounded-xl border border-blue-300">
            {/* Search Bar */}
            <motion.div
              className={`relative flex-1 min-w-[200px]`}
              animate={{
                scale: isSearchFocused ? 1.02 : 1,
                boxShadow: isSearchFocused
                  ? "0 8px 12px rgba(0, 0, 0, 0.05)"
                  : "none",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products....."
                className="w-full bg-gray-50 border border-gray-300 text-gray-800 rounded-xl py-2 pl-10 pr-10 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-400 transition-all duration-200 shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              )}
            </motion.div>

            {/* Sort Dropdown */}
            <div className="w-full sm:w-auto">
              <label htmlFor="sort" className="sr-only">
                Sort
              </label>
              <select
                id="sort"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 text-gray-800 rounded-xl py-2 px-3 focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-500 transition-all duration-200 shadow-sm"
              >
                <option  value="default">Sort by</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rating</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence>
          {filteredProducts.length > 0 ? (
            <motion.div
              key="products-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  customDelay={index * 0.05}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-products"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                {searchQuery
                  ? "No matching products found"
                  : "No products found"}
              </h3>
              <p className="text-gray-600">
                {searchQuery
                  ? `We couldn't find any products matching "${searchQuery}"`
                  : category
                  ? `We don't have any products in the ${category} category yet.`
                  : "No products available at the moment."}
              </p>
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="mt-4 text-purple-600 hover:text-purple-800 font-medium"
                >
                  Clear search
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Products;