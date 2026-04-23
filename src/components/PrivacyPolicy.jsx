import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50 py-25 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-900 text-white px-6 py-4">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-gray-300">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          <section>
            <p className="text-gray-600">
              At GharMart, we are committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or make a
              purchase from us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Information We Collect
            </h2>
            <div className="space-y-4 text-gray-600">
              <h3 className="text-lg font-medium text-gray-700">
                Personal Information
              </h3>
              <p>
                We collect personal information you voluntarily provide when
                you:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Create an account or make a purchase</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact customer service</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p>
                This may include your name, email address, phone number,
                shipping/billing address, payment information, and purchase
                history.
              </p>

              <h3 className="text-lg font-medium text-gray-700 mt-6">
                Automatically Collected Information
              </h3>
              <p>
                When you visit our site, we automatically collect certain
                information about your device and browsing activity:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>IP address and browser type</li>
                <li>Pages viewed and time spent on site</li>
                <li>Referring website and search terms</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your account or purchases</li>
                <li>Improve and personalize your shopping experience</li>
                <li>Prevent fraud and enhance security</li>
                <li>Comply with legal obligations</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Sharing Your Information
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>We may share your information with:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Service providers (payment processors, shipping carriers)
                </li>
                <li>Marketing partners (with your consent)</li>
                <li>Legal authorities when required by law</li>
                <li>Business successors in case of merger or acquisition</li>
              </ul>
              <p>
                We never sell your personal information to third parties for
                their own marketing purposes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Cookies and Tracking Technologies
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Remember your preferences and login status</li>
                <li>Analyze site traffic and usage patterns</li>
                <li>Deliver targeted advertisements</li>
                <li>Measure campaign effectiveness</li>
              </ul>
              <p>
                You can control cookies through your browser settings. Disabling
                cookies may affect certain site features.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Rights and Choices
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access, correct, or delete your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Restrict or object to certain data processing</li>
                <li>Request a copy of your data in a portable format</li>
                <li>Lodge a complaint with a regulatory authority</li>
              </ul>
              <p>
                To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:privacy@gharmart.com"
                  className="text-purple-600 hover:underline"
                >
                  privacy@gharmart.com
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Data Security
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We implement appropriate security measures to protect your
                information, including:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>SSL encryption for all data transmissions</li>
                <li>Secure storage with access controls</li>
                <li>Regular security audits</li>
                <li>PCI compliance for payment processing</li>
              </ul>
              <p>
                While we strive to protect your data, no method of transmission
                over the Internet is 100% secure.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Children's Privacy
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Our services are not directed to children under 16. We do not
                knowingly collect personal information from children. If you
                believe we have inadvertently collected such information, please
                contact us immediately.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Changes to This Policy
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We may update this Privacy Policy periodically. The updated
                version will be posted on our website with a new effective date.
                We encourage you to review this policy regularly.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                If you have questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:privacy@gharmart.com"
                    className="text-purple-600 hover:underline"
                  >
                    privacy@gharmart.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a
                    href="tel:+18005551234"
                    className="text-purple-600 hover:underline"
                  >
                    (800) 555-1234
                  </a>
                </li>
                <li>
                  Mail: GharMart Privacy Office, 123 Commerce St, Anytown, ST
                  12345
                </li>
              </ul>
            </div>
          </section>

          <div className="bg-purple-50 p-4 rounded-md">
            <h3 className="font-medium text-purple-800">
              Additional Information
            </h3>
            <p className="mt-1 text-purple-700">
              For more details about how we handle your data, please see our{" "}
              <Link
                to="/cookie-policy"
                className="font-semibold hover:underline"
              >
                Cookie Policy
              </Link>{" "}
              or{" "}
              <Link to="/terms" className="font-semibold hover:underline">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
