import React from 'react';
import { Zap, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            {/* <Zap className="h-8 w-8 text-blue-400" /> */}
            <span className="text-2xl font-bold">HitchMedia</span>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Empowering businesses with innovative digital marketing solutions that drive growth and create meaningful connections.
          </p>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>© HitchMedia 2025 — All Rights Reserved</span>
              <span className="text-gray-600">|</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>for your success</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;