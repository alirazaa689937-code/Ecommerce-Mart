import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import Location from "./pages/Location";
import About from "./pages/About";
import AdminDashboard from "./pages/Admin/Dashboard";
import AddProduct from "./pages/Admin/AddProduct";
import ProductList from "./pages/Admin/ProductList";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/Forgotpassword";
import Faqs from "./components/Faqs";
import ShippingPolicy from "./components/ShippingPolicy";
import ReturnPolicy from "./components/ReturnPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import CheckoutPage from "./components/CheckOutPage";
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  useEffect(() => {
    const sampleProducts = [
      {
        id: 1,
        name: "Wireless Headphones",
        description:
          "Premium noise-cancelling wireless headphones with 30-hour battery life.",
        price: 199.99,
        originalPrice: 249.99,
        category: "electronics",
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.5,
        discount: 20,
      },
      {
        id: 2,
        name: "Hand watch",
        description: "Premium quality with water proof",
        price: 499.99,
        originalPrice: 349.99,
        category: "electronics",
        image:
          "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.6,
        discount: 5,
      },
      {
        id: 3,
        name: "Phone oppo A16",
        description: "Premium noise heavy duety battery",
        price: 399.99,
        originalPrice: 300.99,
        category: "electronics",
        image:
          "https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.7,
        discount: 10,
      },
      {
        id: 4,
        name: "Clothes",
        description: "Premium noise-cancelling .",
        price: 19.99,
        originalPrice: 14.99,
        category: "clothing",
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4,
        discount: 30,
      },
      {
        id: 5,
        name: "Mobile cover",
        description: "Good quality with durable",
        price: 20.99,
        originalPrice: 17.99,
        category: "electronics",
        image:
          "https://images.unsplash.com/photo-1706684890117-36ab184fa39c?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 3.2,
        discount: 10,
      },
      {
        id: 6,
        name: "Laptop",
        description:
          "hp laptop with 8Gb rab and 256GB  SSD with one month warenty",
        price: 1000.99,
        originalPrice: 1000,
        category: "electronics",
        image:
          "https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fHww",
        rating: 5,
        discount: 30,
      },
      {
        id: 7,
        name: "Charger",
        description: "10W orignal charger.",
        price: 70.99,
        originalPrice: 60.99,
        category: "electronics",
        image:
          "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.9,
        discount: 15,
      },
      {
        id: 8,
        name: "Sofa",
        description: "Comfortable.",
        price: 70.99,
        originalPrice: 60.99,
        category: "Home",
        image:
          "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.9,
        discount: 35,
      },
      {
        id: 9,
        name: "Bed ",
        description: "Comfortable.",
        price: 499.99,
        originalPrice: 390.99,
        category: "Home",
        image:
          "https://images.unsplash.com/photo-1609587639086-b4cbf85e4355?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.6,
        discount: 25,
      },
      {
        id: 10,
        name: "Table",
        description: "Comfortable. rounded ",
        price: 799.99,
        originalPrice: 699.99,
        category: "Home",
        image:
          "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.3,
        discount: 15,
      },
      {
        id: 11,
        name: "Chair",
        description: "Comfortable.",
        price: 199.99,
        originalPrice: 190.99,
        category: "Home",
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.9,
        discount: 10,
      },
      // Add more sample products...
      {
        id: 11,
        name: "Beauty",
        description: "Comfortable.",
        price: 199.99,
        originalPrice: 190.99,
        category: "Beauty",
        image:
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.9,
        discount: 10,
      },
    ];
    setProducts(sampleProducts);
  }, []);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar cartItems={cartItems} setIsCartOpen={setIsCartOpen} />
        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<Home products={products} addToCart={addToCart} />}
            />
            <Route
              path="/products"
              element={<Products products={products} addToCart={addToCart} />}
            />
            <Route
              path="/products/:id"
              element={
                <ProductDetails products={products} addToCart={addToCart} />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/location" element={<Location />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/Shipping-Policy" element={<ShippingPolicy />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route
              path="/admin/add-product"
              element={<AddProduct addProduct={addProduct} />}
            />
            <Route
              path="/admin/products"
              element={<ProductList products={products} />}
            />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </main>

        <a
          href="https://wa.me/923196233642?text=Hello%20I%20want%20to%20order%20from%20GharMart"
          target="_blank"
          className="fixed bottom-5 right-5 z-50"
        >
          <img
            src="/Watsapp.png"
            alt="WhatsApp"
            className="w-11 h-11 hover:scale-110 transition-transform duration-300"
          />
        </a>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
