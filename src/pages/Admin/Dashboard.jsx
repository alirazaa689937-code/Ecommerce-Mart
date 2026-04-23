import { motion } from 'framer-motion';
import { ChartBarIcon, ShoppingBagIcon, UserGroupIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const AdminDashboard = () => {
  const stats = [
    { id: 1, name: 'Total Sales', value: 'PKR 1,245,678', icon: CurrencyDollarIcon, change: '+12%', changeType: 'increase' },
    { id: 2, name: 'Total Orders', value: '1,234', icon: ShoppingBagIcon, change: '+5%', changeType: 'increase' },
    { id: 3, name: 'Customers', value: '5,678', icon: UserGroupIcon, change: '+8%', changeType: 'increase' },
    { id: 4, name: 'Avg. Order Value', value: 'PKR 1,008', icon: ChartBarIcon, change: '-2%', changeType: 'decrease' },
  ];

  const recentOrders = [
    { id: 1, customer: 'Ali Ahmed', date: '2023-06-15', amount: 'PKR 12,345', status: 'Delivered' },
    { id: 2, customer: 'Fatima Khan', date: '2023-06-14', amount: 'PKR 8,765', status: 'Shipped' },
    { id: 3, customer: 'Usman Malik', date: '2023-06-14', amount: 'PKR 15,678', status: 'Processing' },
    { id: 4, customer: 'Ayesha Raza', date: '2023-06-13', amount: 'PKR 5,432', status: 'Delivered' },
    { id: 5, customer: 'Zainab Ali', date: '2023-06-12', amount: 'PKR 9,876', status: 'Delivered' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-gray-600">Welcome back! Here's what's happening with your store today.</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-purple-100 p-3 rounded-md">
                    <stat.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                      <div
                        className={`ml-2 flex items-baseline text-sm font-semibold ${
                          stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {stat.change}
                      </div>
                    </dd>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Orders</h3>
                <p className="mt-1 text-sm text-gray-500">Last 5 orders from your store</p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentOrders.map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              order.status === 'Delivered'
                                ? 'bg-green-100 text-green-800'
                                : order.status === 'Shipped'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Quick Actions</h3>
                <p className="mt-1 text-sm text-gray-500">Manage your store efficiently</p>
              </div>
              <div className="p-6 space-y-4">
                <a
                  href="/admin/add-product"
                  className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md text-center transition-colors"
                >
                  Add New Product
                </a>
                <a
                  href="/admin/products"
                  className="block w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-md text-center transition-colors"
                >
                  View All Products
                </a>
                <a
                  href="#"
                  className="block w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-md text-center transition-colors"
                >
                  View Customers
                </a>
                <a
                  href="#"
                  className="block w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-md text-center transition-colors"
                >
                  View Orders
                </a>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
                <p className="mt-1 text-sm text-gray-500">Latest actions in your store</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {[
                    'New order #1234 placed by Ali Ahmed',
                    'Product "Wireless Headphones" was updated',
                    'New customer Zainab Ali registered',
                    'Order #1232 was marked as delivered',
                    'New product "Smart Watch" was added',
                  ].map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-2 w-2 mt-2 bg-purple-600 rounded-full"></div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-700">{activity}</p>
                        <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;