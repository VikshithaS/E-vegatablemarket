import React from 'react';
import { Sprout, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sprout className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">AgriMarket Pro</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering farmers, wholesalers, retailers, and consumers with transparent market pricing 
              and fair trade opportunities across India.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <span>support@agrimarket.gov.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/market" className="hover:text-green-400 transition-colors">Market Dashboard</a></li>
              <li><a href="/products" className="hover:text-green-400 transition-colors">Product Listings</a></li>
              <li><a href="/compare" className="hover:text-green-400 transition-colors">Price Comparison</a></li>
              <li><a href="/complaints" className="hover:text-green-400 transition-colors">File Complaint</a></li>
              <li><a href="/help" className="hover:text-green-400 transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1800-AGRI-HELP</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Available in 28 States</span>
              </li>
              <li><a href="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-green-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AgriMarket Pro. A Government of India Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;