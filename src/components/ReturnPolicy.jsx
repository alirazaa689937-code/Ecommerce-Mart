import { Link } from 'react-router-dom';

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-25 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-900 text-white px-6 py-4">
          <h1 className="text-3xl font-bold">Return & Refund Policy</h1>
          <p className="mt-2 text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Return Policy</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We want you to be completely satisfied with your purchase. If you're not happy with your order, you may return most items within <span className="font-semibold">30 days</span> of delivery for a refund or exchange.
              </p>
              <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                <h3 className="font-medium text-blue-800 mb-2">Key Points:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>30-day return window from delivery date</li>
                  <li>Items must be unused, in original condition with tags</li>
                  <li>Original proof of purchase required</li>
                  <li>Some items are final sale (see exceptions below)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Return an Item</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-3">1. Initiate Your Return</h3>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                  <li>Log in to your account and visit <Link to="/account/orders" className="text-purple-600 hover:underline">Order History</Link></li>
                  <li>Select the item(s) you wish to return</li>
                  <li>Print your prepaid return label (if eligible)</li>
                  <li>Package your return securely</li>
                </ol>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-3">2. Ship Your Return</h3>
                <div className="text-gray-600">
                  <p className="mb-2">For prepaid returns:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Attach the provided return label to your package</li>
                    <li>Drop off at any authorized carrier location</li>
                  </ul>
                  <p className="mt-4 mb-2">For self-arranged returns:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Ship to: Returns Department, 123 Commerce St, Anytown, ST 12345</li>
                    <li>Include your order number inside the package</li>
                    <li>We recommend using a trackable shipping method</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">3. Receive Your Refund</h3>
                <div className="text-gray-600">
                  <p>Once we receive and inspect your return:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Refunds processed within 3-5 business days</li>
                    <li>Original payment method will be credited</li>
                    <li>You'll receive email confirmation when completed</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Details</h2>
            <div className="space-y-4 text-gray-600">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-700">Refund Method</h3>
                <p className="mt-2">
                  Refunds are issued to the original payment method. Credit card refunds may take 3-10 business days to appear on your statement depending on your bank.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-700">Shipping Costs</h3>
                <p className="mt-2">
                  Original shipping fees are non-refundable unless the return is due to our error. Return shipping costs are the customer's responsibility unless the item arrived damaged or defective.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Partial Refunds</h3>
                <p className="mt-2">
                  Items returned in used condition or missing parts may receive a partial refund at our discretion. We'll notify you if this applies to your return.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Exceptions</h2>
            <div className="space-y-4 text-gray-600">
              <p>The following items are <span className="font-semibold">final sale</span> and cannot be returned:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Personalized or custom-made products</li>
                <li>Gift cards and downloadable software</li>
                <li>Intimate apparel, swimwear, and pierced jewelry (for hygiene reasons)</li>
                <li>Items marked "Final Sale" at time of purchase</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-md border border-yellow-100">
                <h3 className="font-medium text-yellow-800">Damaged or Defective Items</h3>
                <p className="mt-1 text-yellow-700">
                  If your item arrived damaged or defective, please contact us within <span className="font-semibold">7 days</span> of delivery at <a href="mailto:returns@gharmart.com" className="underline">returns@gharmart.com</a> with photos of the damage.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Exchanges</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We currently offer exchanges for size or color variations when inventory is available. To request an exchange:
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Initiate a return as described above</li>
                <li>Include a note requesting your preferred exchange item</li>
                <li>We'll process the exchange once we receive your return</li>
              </ol>
              <p>
                For faster service, we recommend placing a new order for the desired item and returning the original separately.
              </p>
            </div>
          </section>

          <div className="bg-purple-50 p-4 rounded-md">
            <h3 className="font-medium text-purple-800">Need Help With Your Return?</h3>
            <p className="mt-1 text-purple-700">
              Contact our returns team at <a href="mailto:returns@gharmart.com" className="font-semibold hover:underline">returns@gharmart.com</a> or call <a href="tel:+18005551234" className="font-semibold hover:underline">(800) 555-1234</a> Monday-Friday, 9am-5pm EST.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;