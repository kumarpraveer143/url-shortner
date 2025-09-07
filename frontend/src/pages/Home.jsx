import React from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/clerk-react';
import { Link2, Zap, Shield, BarChart3, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
                    <div className="text-center">
                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            Shorten URLs
                            <span className="block text-blue-600">Boost Results</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Transform your long, unwieldy URLs into powerful, trackable short links.
                            Perfect for social media, email campaigns, and everywhere you share content.
                        </p>

                        {/* CTA Buttons - Only show when signed out */}
                        <SignedOut>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                                <div className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    <SignUpButton mode="modal">
                                        <button className="flex items-center gap-2">
                                            Get Started Free
                                            <ArrowRight className="h-5 w-5" />
                                        </button>
                                    </SignUpButton>
                                </div>
                                <div className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200">
                                    <SignInButton mode="modal">
                                        <button>
                                            Sign In
                                        </button>
                                    </SignInButton>
                                </div>
                            </div>
                        </SignedOut>

                        {/* Welcome message for signed in users */}
                        <SignedIn>
                            <div className="mb-12">
                                <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-2xl mx-auto mb-6">
                                    <div className="flex items-center justify-center gap-3 text-green-800 mb-4">
                                        <Check className="h-6 w-6" />
                                        <p className="text-lg font-semibold">
                                            Welcome back! Ready to create some short links?
                                        </p>
                                    </div>
                                </div>
                                <Link
                                    to="/createlink"
                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    Create Short Link
                                    <Link2 className="h-5 w-5" />
                                </Link>
                            </div>
                        </SignedIn>

                        {/* Hero Image/Illustration */}
                        <div className="relative max-w-4xl mx-auto">
                            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                    <div className="flex-1 bg-gray-100 h-8 rounded-lg flex items-center px-4">
                                        <span className="text-gray-500 text-sm">https://example.com/very-long-url...</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center py-8">
                                    <Link2 className="h-16 w-16 text-blue-600 animate-pulse" />
                                </div>
                                <div className="bg-blue-50 border-2 border-dashed border-blue-300 rounded-lg p-4">
                                    <span className="text-blue-700 font-mono text-lg">short.ly/abc123</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                    <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-20 animate-pulse delay-2000"></div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Our URL Shortener?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            More than just shortening links - get powerful features that help you track, manage, and optimize your content sharing.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                                <Zap className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Generate short links instantly with our optimized infrastructure. No waiting, no delays.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                            <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                                <Shield className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Reliable</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Your links are protected with enterprise-grade security. 99.9% uptime guaranteed.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                            <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                                <BarChart3 className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Detailed Analytics</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Track clicks, analyze traffic sources, and measure the success of your campaigns.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;