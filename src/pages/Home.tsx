import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  TrendingUp, 
  Users, 
  Shield, 
  Globe, 
  BarChart3, 
  Truck,
  CheckCircle,
  ArrowRight,
  Sprout,
  Star
} from 'lucide-react';

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: TrendingUp,
      title: 'Real-time Market Prices',
      description: 'Get live pricing data from farmers, wholesalers, and retailers across India',
    },
    {
      icon: BarChart3,
      title: 'Price Comparison',
      description: 'Compare prices across different regions and track inflation rates',
    },
    {
      icon: Shield,
      title: 'Government Verified',
      description: 'All pricing data is verified against official government rates',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Connect directly with farmers, wholesalers, and verified retailers',
    },
    {
      icon: Truck,
      title: 'Bulk Ordering',
      description: 'Commercial users can place bulk orders directly from producers',
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Available in Hindi, English, and major regional languages',
    },
  ];

  const stats = [
    { label: 'Active Farmers', value: '50,000+', icon: Users },
    { label: 'Products Listed', value: '10,000+', icon: Sprout },
    { label: 'States Covered', value: '28', icon: Globe },
    { label: 'Transactions', value: '1M+', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transparent 
                <span className="text-green-600"> Vegetable </span>
                Market for All
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect farmers, wholesalers, retailers, and consumers in a transparent ecosystem. 
                Get fair prices, reduce black marketing, and build trust in the agricultural supply chain.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {!isAuthenticated ? (
                  <>
                    <Link
                      to="/register"
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 text-center"
                    >
                      Get Started Today
                    </Link>
                    <Link
                      to="/market"
                      className="border border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 text-center"
                    >
                      Explore Market
                    </Link>
                  </>
                ) : (
                  <Link
                    to="/market"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center"
                  >
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                )}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1413650/pexels-photo-1413650.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fresh vegetables in market"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Fair Trade Verified</p>
                    <p className="text-sm text-gray-600">Government Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AgriMarket Pro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform brings transparency, fairness, and efficiency to the vegetable market ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to get started with transparent vegetable trading
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Register & Verify</h3>
              <p className="text-gray-600">
                Sign up with your role (Farmer, Wholesaler, Retailer, or Civilian) and get verified
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Explore & Compare</h3>
              <p className="text-gray-600">
                Browse real-time prices, compare rates across regions, and find the best deals
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trade & Grow</h3>
              <p className="text-gray-600">
                Connect directly with verified traders, place orders, and grow your business
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Agricultural Business?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join thousands of farmers, wholesalers, and retailers who are already benefiting from transparent market pricing
          </p>
          
          {!isAuthenticated && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Register Now
              </Link>
              <Link
                to="/market"
                className="border border-white text-white hover:bg-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                View Market Data
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;