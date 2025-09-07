import React, { useState } from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow-lg border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
                            <Link to="/">
                                URL Shortener
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {/* About Link */}
                        <Link
                            to="/about"
                            className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
                        >
                            About
                        </Link>

                        {/* Authenticated User Links */}
                        <SignedIn>
                            <Link
                                to="/createlink"
                                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
                            >
                                Create Link
                            </Link>
                            <Link
                                to="/dashboard"
                                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
                            >
                                Dashboard
                            </Link>
                        </SignedIn>

                        {/* Authentication Buttons */}
                        <div className="flex items-center">
                            <SignedOut>
                                <div className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                                    <SignInButton />
                                </div>
                            </SignedOut>
                            <SignedIn>
                                <UserButton
                                    appearance={{
                                        elements: {
                                            avatarBox: "w-8 h-8"
                                        }
                                    }}
                                />
                            </SignedIn>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
                        {/* About Link - Mobile */}
                        <Link
                            to="/about"
                            className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>

                        {/* Authenticated User Links - Mobile */}
                        <SignedIn>
                            <Link
                                to="/create-link"
                                className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Create Link
                            </Link>
                            <Link
                                to="/dashboard"
                                className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Dashboard
                            </Link>
                        </SignedIn>

                        {/* Authentication - Mobile */}
                        <div className="px-3 py-2">
                            <SignedOut>
                                <div className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg inline-block transition-colors duration-200">
                                    <SignInButton />
                                </div>
                            </SignedOut>
                            <SignedIn>
                                <div className="flex items-center">
                                    <UserButton
                                        appearance={{
                                            elements: {
                                                avatarBox: "w-8 h-8"
                                            }
                                        }}
                                    />
                                </div>
                            </SignedIn>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;