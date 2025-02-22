import React from 'react';
import { Home, User, Mail, FileText, Newspaper, Edit } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#C74088] shadow text-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-white">CréaVenture</a>
          </div>
          <div className="flex space-x-4">
            <a href="/" className="text-white hover:text-gray-300">
              <Home className="inline-block mr-1" /> Home
            </a>
            <a href="/profile" className="text-white hover:text-gray-300">
              <User className="inline-block mr-1" /> Profile
            </a>
            <a href="/billing" className="text-white hover:text-gray-300">
              <FileText className="inline-block mr-1" /> Billing
            </a>
            <a href="/mail" className="text-white hover:text-gray-300">
              <Mail className="inline-block mr-1" /> Mail
            </a>
            <a href="/news" className="text-white hover:text-gray-300">
              <Newspaper className="inline-block mr-1" /> News
            </a>
            <a href="/posts" className="text-white hover:text-gray-300">
              <Edit className="inline-block mr-1" /> Posts
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
