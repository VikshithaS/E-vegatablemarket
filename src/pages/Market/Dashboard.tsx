import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { mockProducts, mockPriceComparisons } from '../../data/mockData';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  ShoppingCart, 
  DollarSign,
  AlertTriangle,
  Calendar,
  MapPin
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    {
      label: 'Today\'s Average Price',
      value: '₹38/kg',
      change: '+2.5%',
      trending: 'up',
      icon: DollarSign,
    },
    {
      label: 'Active Products',
      value: '1,247',
      change: '+12',
      trending: 'up',
      icon: ShoppingCart,
    },
    {
      label: 'Market Participants',
      value: '5,643',
      change: '+156',
      trending: 'up',
      icon: Users,
    },
    {
      label: 'Price Alerts',
      value: '23',
      change: '-5',
      trending: 'down',
      icon: AlertTriangle,
    },
  ];

  const recentActivity = [
    { type: 'price_update', product: 'Tomatoes', location: 'Punjab', price: '₹45/kg', time: '2 hours ago' },
    { type: 'new_product', product: 'Organic Carrots', location: 'Kashmir', price: '₹55/kg', time: '4 hours ago' },
    { type: 'bulk_order', product: 'Onions', location: 'Maharashtra', price: '₹35/kg', time: '6 hours ago' },
    { type: 'complaint', product: 'Price Mismatch', location: 'Delhi', price: 'Resolved', time: '8 hours ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 mt-2">
            Here's what's happening in the vegetable market today
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    {stat.trending === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm font-medium ${
                      stat.trending === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <stat.icon className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Price Trends */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">Current Market Prices</h2>
                <p className="text-gray-600 text-sm">Real-time pricing across different regions</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {mockProducts.slice(0, 5).map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-3 w-3 mr-1" />
                            {product.location}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex space-x-3">
                          <div>
                            <p className="text-sm text-gray-600">Retail</p>
                            <p className="font-semibold text-gray-900">₹{product.price}/kg</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Wholesale</p>
                            <p className="font-semibold text-gray-900">₹{product.wholesalePrice}/kg</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Govt Rate</p>
                            <p className="font-semibold text-green-600">₹{product.governmentPrice}/kg</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
                <p className="text-gray-600 text-sm">Latest updates from the market</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.product}</p>
                        <div className="flex items-center text-xs text-gray-600">
                          <MapPin className="h-3 w-3 mr-1" />
                          {activity.location} • {activity.price}
                        </div>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          {activity.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 mt-6">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">View All Products</div>
                    <div className="text-sm text-gray-600">Browse complete product listings</div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">Compare Prices</div>
                    <div className="text-sm text-gray-600">Regional price comparison</div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">File Complaint</div>
                    <div className="text-sm text-gray-600">Report pricing issues</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;