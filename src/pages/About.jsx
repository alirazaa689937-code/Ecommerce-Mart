import { motion } from 'framer-motion';
import { UsersIcon, GlobeAltIcon, SparklesIcon, TruckIcon } from '@heroicons/react/24/outline';

const About = () => {
  const stats = [
    { id: 1, name: 'Happy Customers', value: '10,000+', icon: UsersIcon },
    { id: 2, name: 'Products Available', value: '500+', icon: SparklesIcon },
    { id: 3, name: 'Cities Served', value: '50+', icon: GlobeAltIcon },
    { id: 4, name: 'Fast Delivery', value: '24-48 hrs', icon: TruckIcon },
  ];

  const team = [
    {
      id: 1,
      name: 'Ali Khan',
      role: 'Founder & CEO',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 2,
      name: 'Fatima Ahmed',
      role: 'Marketing Director',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 3,
      name: 'Usman Malik',
      role: 'CTO',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
    {
      id: 4,
      name: 'Ayesha Raza',
      role: 'Customer Support',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
  ];

  return (
    <div className="min-h-screen pt-30 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About GharMart</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted online shopping destination in Pakistan
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                <stat.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">{stat.value}</h3>
              <p className="mt-1 text-gray-600">{stat.name}</p>
            </div>
          ))}
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2023, GharMart began as a small startup with a big vision: to revolutionize
                online shopping in Pakistan. Our founders recognized the need for a reliable,
                customer-centric e-commerce platform that offers quality products at affordable prices.
              </p>
              <p>
                What started as a team of three passionate individuals has now grown into a thriving
                business serving thousands of customers across Pakistan. We take pride in our
                Pakistani roots and are committed to supporting local businesses and manufacturers.
              </p>
              <p>
                Today, GharMart stands as one of the fastest-growing e-commerce platforms in the
                country, thanks to the trust and support of our valued customers.
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Our team working"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Customer First',
                description:
                  'We prioritize our customers in every decision we make, ensuring their satisfaction is always our top priority.',
                icon: '❤️',
              },
              {
                title: 'Quality Assurance',
                description:
                  'Every product in our catalog goes through rigorous quality checks before reaching our customers.',
                icon: '✨',
              },
              {
                title: 'Innovation',
                description:
                  'We continuously improve our platform and services to provide the best shopping experience.',
                icon: '🚀',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((person) => (
              <motion.div
                key={person.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden text-center hover:shadow-lg transition-shadow"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={person.image}
                  alt={person.name}
                />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{person.name}</h3>
                  <p className="text-gray-600">{person.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;