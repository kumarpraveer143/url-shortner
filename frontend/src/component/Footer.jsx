import React from 'react';
import { Link2, Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Link2 className="h-8 w-8 text-blue-400" />
                            <div className="text-2xl font-bold text-blue-400">
                                URL Shortner
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                            The most reliable and fastest URL shortening service on the web.
                            Transform your long URLs into powerful, trackable short links.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span>Made with</span>
                            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                            <span>by</span>
                            <span className="text-blue-400 font-semibold">Kumar Praveer</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="/analytics" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                    Analytics
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/help" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} URL Shortner. All rights reserved.
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/kumarpraveer143"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/praveerdeveloper/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>

                        </div>
                    </div>
                </div>
            </div>

            {/* Developer Credit */}
            <div className="bg-gray-950 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-500 text-sm">
                        Developed by{' '}
                        <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200">
                            Kumar Praveer
                        </span>
                        {' '}- Full Stack Developer
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;