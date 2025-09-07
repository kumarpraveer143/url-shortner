import React from 'react'
import { Link2, Database, Zap, Users, BarChart3, Globe, Code, Server } from 'lucide-react'

const About = () => {
  const techStack = [
    {
      name: 'Clerk',
      description: 'Authentication & User Management',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-blue-100 text-blue-700'
    },
    {
      name: 'Express.js',
      description: 'Fast & Lightweight Backend API',
      icon: <Server className="w-6 h-6" />,
      color: 'bg-green-100 text-green-700'
    },
    {
      name: 'MongoDB',
      description: 'NoSQL Database for Data Storage',
      icon: <Database className="w-6 h-6" />,
      color: 'bg-emerald-100 text-emerald-700'
    },
    {
      name: 'React',
      description: 'Modern Frontend User Interface',
      icon: <Code className="w-6 h-6" />,
      color: 'bg-cyan-100 text-cyan-700'
    },
    {
      name: 'Redis',
      description: 'High-Speed Caching Layer',
      icon: <Zap className="w-6 h-6" />,
      color: 'bg-red-100 text-red-700'
    },
    {
      name: 'Apache Kafka',
      description: 'Event Streaming & Message Queue',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'bg-purple-100 text-purple-700'
    }
  ]

  const features = [
    {
      title: '100M+ Requests/Month',
      description: 'Built to handle massive scale with enterprise-grade performance',
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />
    },
    {
      title: '301 Redirect',
      description: 'SEO-friendly permanent redirects that preserve link equity',
      icon: <Globe className="w-8 h-8 text-green-600" />
    },
    {
      title: 'Custom Encoding',
      description: 'Proprietary algorithm for generating unique short URLs',
      icon: <Code className="w-8 h-8 text-purple-600" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600 rounded-full">
              <Link2 className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            URL Shortener
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A high-performance, enterprise-grade URL shortening service built with modern technologies
            to handle millions of requests while maintaining lightning-fast response times.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${tech.color} mb-4`}>
                  {tech.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tech.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Overview */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Architecture Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• React-based responsive user interface</li>
                <li>• Clerk integration for seamless authentication</li>
                <li>• Real-time analytics dashboard</li>
                <li>• Mobile-optimized design</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Express.js RESTful API server</li>
                <li>• MongoDB for persistent data storage</li>
                <li>• Redis for high-speed caching</li>
                <li>• Kafka for event streaming and analytics</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance & Scalability</h3>
            <p className="text-gray-600 leading-relaxed">
              Our custom encoding algorithm ensures unique short URLs while maintaining optimal performance.
              The Redis caching layer reduces database load and provides sub-millisecond response times.
              Kafka handles real-time event processing for analytics and monitoring, enabling the system
              to process over 100 million requests per month with 99.9% uptime.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            Built with ❤️ using modern web technologies for optimal performance and scalability.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About