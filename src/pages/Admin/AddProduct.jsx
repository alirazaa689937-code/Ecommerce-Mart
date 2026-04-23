import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = ({ addProduct }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    originalPrice: '',
    category: '',
    image: '',
    rating: 4.5,
    discount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...formData,
      id: Date.now(),
      price: parseFloat(formData.price),
      originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
      rating: parseFloat(formData.rating),
      discount: parseInt(formData.discount),
    };
    addProduct(newProduct);
    navigate('/admin/products');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6 sm:p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Add New Product</h1>
            <p className="mt-1 text-sm text-gray-500">
              Fill in the details below to add a new product to your store
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Product Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="py-2 px-3 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    required
                    value={formData.description}
                    onChange={handleChange}
                    className="py-2 px-3 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price ($)
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    min="0"
                    step="0.01"
                    required
                    value={formData.price}
                    onChange={handleChange}
                    className="py-2 px-3 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="originalPrice" className="block text-sm font-medium text-gray-700">
                  Original Price ($) (optional)
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="originalPrice"
                    id="originalPrice"
                    min="0"
                    step="0.01"
                    value={formData.originalPrice}
                    onChange={handleChange}
                    className="py-2 px-3 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <div className="mt-1">
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="py-2 px-3 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border border-gray-300 rounded-md"
                  >
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="home">Home</option>
                    <option value="beauty">Beauty</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="discount" className="block text-sm font-medium text-gray-700">
                  Discount (%)
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="discount"
                    id="discount"
                    min="0"
                    max="100"
                    value={formData.discount}
                    onChange={handleChange}
                    className="py-2 px-3 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Image URL
                </label>
                <div className="mt-1">
                  <input
                    type="url"
                    name="image"
                    id="image"
                    required
                    value={formData.image}
                    onChange={handleChange}
                    className="py-2 px-3 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                  Rating (1-5)
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="rating"
                    id="rating"
                    min="1"
                    max="5"
                    step="0.1"
                    required
                    value={formData.rating}
                    onChange={handleChange}
                    className="py-2 px-3 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => navigate('/admin/products')}
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;