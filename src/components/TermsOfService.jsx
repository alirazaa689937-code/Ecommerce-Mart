import { Link } from 'react-router-dom';

const TermsOfService = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50 py-25 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-900 text-white px-6 py-2">
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className="mt-2 text-gray-300">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Welcome to GharMart ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of our website, products, and services (collectively, the "Services").
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Services.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Account Registration</h2>
            <div className="space-y-4 text-gray-600">
              <ul className="list-disc pl-5 space-y-2">
                <li>You must be at least 18 years old to create an account</li>
                <li>You agree to provide accurate and complete registration information</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
                <li>We reserve the right to refuse service or terminate accounts at our discretion</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Products and Pricing</h2>
            <div className="space-y-4 text-gray-600">
              <ul className="list-disc pl-5 space-y-2">
                <li>All products are subject to availability</li>
                <li>We reserve the right to modify or discontinue products at any time</li>
                <li>Prices are subject to change without notice</li>
                <li>Errors in pricing or product descriptions may be corrected at our discretion</li>
                <li>Additional taxes and fees may apply depending on your location</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Orders and Payment</h2>
            <div className="space-y-4 text-gray-600">
              <ul className="list-disc pl-5 space-y-2">
                <li>By placing an order, you agree to pay all charges including applicable taxes</li>
                <li>We accept major credit cards and other payment methods as displayed at checkout</li>
                <li>You represent that you have the legal right to use any payment method provided</li>
                <li>We may cancel any order and limit quantities purchased per person/household</li>
                <li>Orders are not binding until we send you an order confirmation</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Shipping and Returns</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Please review our <Link to="/shipping-policy" className="text-purple-600 hover:underline">Shipping Policy</Link> and <Link to="/return-policy" className="text-purple-600 hover:underline">Return Policy</Link> for complete details. Key points:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Shipping times are estimates, not guarantees</li>
                <li>Risk of loss passes to you upon delivery to the carrier</li>
                <li>Return eligibility and timeframes vary by product</li>
                <li>Some items are final sale and cannot be returned</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Intellectual Property</h2>
            <div className="space-y-4 text-gray-600">
              <ul className="list-disc pl-5 space-y-2">
                <li>All content on our Services is our property or licensed to us</li>
                <li>You may not use our trademarks, logos, or content without express written permission</li>
                <li>User-generated content remains your property but you grant us a license to use it</li>
                <li>We respect intellectual property rights and respond to DMCA notices</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. User Conduct</h2>
            <div className="space-y-4 text-gray-600">
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use our Services for any illegal purpose</li>
                <li>Violate any laws in your jurisdiction</li>
                <li>Infringe on any intellectual property rights</li>
                <li>Transmit viruses or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper working of our Services</li>
                <li>Use any automated system to access our Services without permission</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Disclaimers and Limitations of Liability</h2>
            <div className="space-y-4 text-gray-600">
              <div className="bg-yellow-50 p-4 rounded-md border border-yellow-100">
                <h3 className="font-medium text-yellow-800">Important: Please Read Carefully</h3>
                <p className="mt-1 text-yellow-700">
                  Our Services are provided "as is" without warranties of any kind. We disclaim all warranties to the fullest extent permitted by law.
                </p>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li>We do not guarantee uninterrupted or error-free service</li>
                <li>We are not liable for any indirect, incidental, or consequential damages</li>
                <li>Our total liability for any claim is limited to the amount you paid for the product</li>
                <li>Some jurisdictions do not allow certain limitations, so these may not apply to you</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Indemnification</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                You agree to defend, indemnify, and hold harmless GharMart and its affiliates from any claims, damages, or expenses arising from:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Your use of the Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of a third party</li>
                <li>Any user content you submit</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Governing Law</h2>
            <div className="space-y-4 text-gray-600">
              <ul className="list-disc pl-5 space-y-2">
                <li>These Terms shall be governed by the laws of [Your State/Country]</li>
                <li>Any disputes shall be resolved in the courts located in [Your County/Region]</li>
                <li>We make no claims that our Services are appropriate for use outside our primary jurisdiction</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Changes to Terms</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We may modify these Terms at any time. The updated version will be posted with a new "Last Updated" date. Your continued use of our Services after changes constitutes acceptance of the new Terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact Information</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                For questions about these Terms, please contact us:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Email: <a href="mailto:legal@gharmart.com" className="text-purple-600 hover:underline">legal@gharmart.com</a></li>
                <li>Phone: <a href="tel:+18005551234" className="text-purple-600 hover:underline">(800) 555-1234</a></li>
                <li>Mail: GharMart Legal Department, 123 Commerce St, Anytown, ST 12345</li>
              </ul>
            </div>
          </section>

          <div className="bg-purple-50 p-4 rounded-md">
            <h3 className="font-medium text-purple-800">Additional Policies</h3>
            <p className="mt-1 text-purple-700">
              Please review our <Link to="/privacy-policy" className="font-semibold hover:underline">Privacy Policy</Link> and <Link to="/cookie-policy" className="font-semibold hover:underline">Cookie Policy</Link> for information about how we collect and use your data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;