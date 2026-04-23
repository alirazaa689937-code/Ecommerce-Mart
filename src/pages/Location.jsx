import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/solid';

const Location = () => {
  return (
    <div className="min-h-screen pt-30 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Location</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit our physical store or warehouse
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-2 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src=":/https/www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.248346199384!2d67.0288463150036!3d24.86167798405293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Store Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-100 p-3 rounded-full">
                    <MapPinIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Main Store</h3>
                    <p className="mt-1 text-gray-600">
                      123 Commerce Street, Karachi, Pakistan
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Opening Hours</h3>
                  <ul className="space-y-2">
                    {[
                      { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM' },
                      { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
                      { day: 'Sunday', hours: '12:00 PM - 5:00 PM' },
                    ].map((item, index) => (
                      <li key={index} className="flex justify-between">
                        <span className="text-gray-600">{item.day}</span>
                        <span className="font-medium text-gray-900">{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Parking Information</h3>
                  <p className="text-gray-600">
                    Free parking available in front of the store. Additional parking available in the
                    adjacent parking lot.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Warehouse</h2>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-100 p-3 rounded-full">
                  <MapPinIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-600">
                    456 Industrial Area, Karachi, Pakistan
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    Note: Warehouse is not open to public. All pickups must be arranged in advance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Location;