import React from 'react';
import { Home, User, Mail, FileText } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-gray-900">SoluTion</a>
          </div>
          <div className="flex space-x-4">
            <a href="/profile" className="text-gray-900 hover:text-gray-700">
              <User className="inline-block mr-1" /> Profile
            </a>
            <a href="/billing" className="text-gray-900 hover:text-gray-700">
              <FileText className="inline-block mr-1" /> Billing
            </a>
            <a href="/mail" className="text-gray-900 hover:text-gray-700">
              <Mail className="inline-block mr-1" /> Mail
            </a>
            <a href="/" className="text-gray-900 hover:text-gray-700">
              <Home className="inline-block mr-1" /> Home
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
