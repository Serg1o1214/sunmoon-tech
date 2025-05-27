import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  };

  return (
    <div className="flex items-center">
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-white hover:text-blue-200 transition-colors">首页</Link>
        <Link to="/services" className="text-white hover:text-blue-200 transition-colors">服务</Link>
        <Link to="/about" className="text-white hover:text-blue-200 transition-colors">关于我们</Link>
        <Link to="/contact" className="text-white hover:text-blue-200 transition-colors">联系我们</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      >
        <span className="sr-only">打开主菜单</span>
        {isOpen ? (
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed top-0 left-0 w-full h-full bg-blue-900 bg-opacity-95 transform transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white hover:text-blue-200"
          >
            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Link
            to="/"
            onClick={toggleMenu}
            className="text-2xl text-white hover:text-blue-200 transition-colors"
          >
            首页
          </Link>
          <Link
            to="/services"
            onClick={toggleMenu}
            className="text-2xl text-white hover:text-blue-200 transition-colors"
          >
            服务
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="text-2xl text-white hover:text-blue-200 transition-colors"
          >
            关于我们
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="text-2xl text-white hover:text-blue-200 transition-colors"
          >
            联系我们
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav; 