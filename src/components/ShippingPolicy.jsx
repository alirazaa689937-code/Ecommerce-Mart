import { Link } from 'react-router-dom';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-25 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-900 text-white px-6 py-4">
          <h1 className="text-3xl font-bold">Shipping Policy</h1>
          <p className="mt-2 text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping Options & Delivery Times</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-700">Standard Shipping</h3>
                <p className="mt-2 text-gray-600">
                  - Delivery within 3-5 business days (continental US)<br />
                  - Free on orders over $50<br />
                  - $4.99 for orders under $50
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-700">Expedited Shipping</h3>
                <p className="mt-2 text-gray-600">
                  - 2-day delivery: $9.99<br />
                  - Overnight delivery: $19.99<br />
                  - Order by 12pm EST for same-day processing
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">International Shipping</h3>
                <p className="mt-2 text-gray-600">
                  - Delivery times vary by destination (typically 7-14 business days)<br />
                  - Shipping costs calculated at checkout<br />
                  - Customers are responsible for any customs/duties fees
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Processing</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Orders placed before 12pm EST are processed the same business day</li>
              <li>Orders placed after 12pm EST or on weekends/holidays are processed the next business day</li>
              <li>You will receive a confirmation email with tracking information once your order ships</li>
              <li>Processing times may be longer during peak seasons or promotions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping Restrictions</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We currently ship to all 50 U.S. states and over 100 countries worldwide. Some restrictions apply:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Certain items cannot be shipped internationally due to manufacturer restrictions</li>
                <li>We cannot ship to PO boxes or APO/FPO addresses for expedited services</li>
                <li>Some remote locations may require additional delivery time</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tracking Your Order</h2>
            <p className="text-gray-600">
              Once your order ships, you'll receive an email with tracking information. You can track your package through:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
              <li>Our website's <Link to="/account/orders" className="text-purple-600 hover:underline">Order History</Link> page</li>
              <li>The carrier's website using your tracking number</li>
              <li>Our mobile app (if applicable)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping Problems</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                If you experience any issues with your shipment, please contact us within 14 days of delivery:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Damaged items - Include photos of the damaged product and packaging</li>
                <li>Lost packages - Wait 3 business days past the expected delivery date before reporting</li>
                <li>Incorrect items - Keep all original packaging and materials</li>
              </ul>
              <p>
                For immediate assistance, contact our customer service team at <a href="mailto:shipping@gharmart.com" className="text-purple-600 hover:underline">shipping@gharmart.com</a> or call <a href="tel:+18005551234" className="text-purple-600 hover:underline">(800) 555-1234</a>.
              </p>
            </div>
          </section>

          <div className="bg-purple-50 p-4 rounded-md">
            <h3 className="font-medium text-purple-800">Need more information?</h3>
            <p className="mt-1 text-purple-700">
              Visit our <Link to="/faqs" className="font-semibold hover:underline">FAQ page</Link> or <Link to="/contact" className="font-semibold hover:underline">contact us</Link> for additional shipping questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;