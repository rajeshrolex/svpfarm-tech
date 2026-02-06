import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Egg, ShoppingBag, Truck } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Egg Rate', href: '/egg-rate' },
        { name: 'Chick Rate', href: '/chick-rate' },
        { name: 'Chicken Rate', href: '/chicken-rate' },
        { name: 'Lifting Sale', href: '/lifting-sale' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-primary-600">Poultry<span className="text-accent-500">Market</span></span>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${isActive(item.href)
                                        ? 'bg-primary-50 text-primary-700'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="ml-4 flex items-center space-x-2">
                            <Link to="/login" className="px-4 py-2 text-sm font-medium text-primary-600 bg-white border border-primary-600 rounded-md hover:bg-primary-50">
                                Login
                            </Link>
                            <Link to="/register" className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 shadow-sm">
                                Register
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(item.href)
                                        ? 'bg-primary-50 text-primary-700'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col space-y-2 px-3">
                            <Link
                                to="/login"
                                onClick={() => setIsOpen(false)}
                                className="block text-center px-4 py-2 text-base font-medium text-primary-600 bg-white border border-primary-600 rounded-md hover:bg-primary-50"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                onClick={() => setIsOpen(false)}
                                className="block text-center px-4 py-2 text-base font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
