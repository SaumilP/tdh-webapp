import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, CheckCircle2, Server, Database, Globe2 } from 'lucide-react';

function SoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            {/* <Code2 className="h-8 w-8 text-[#003B73]" /> */}
            <img src="/images/main-logo-v1.webp"alt="logo-v1" className="h-16 w-16" />
            <span className="ml-2 text-xl font-bold">
              <span className="text-[#003B73]">TDH</span>{' '}
              <span className="text-[#1992D4]">ENTERPRISES</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#services" className="text-gray-700 hover:text-[#1992D4] transition-colors">Services</Link>
            <button className="bg-[#1992D4] text-white px-6 py-2 rounded-lg hover:bg-[#1576A8] transition-colors">
              Get in touch
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pexels-photo-3183153.webp"
            alt="Software Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#003B73] opacity-90"></div>
        </div>
        <div className="relative z-10 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">Software Development Services</h1>
              <p className="text-xl text-gray-200">
                Transform your business with custom software solutions built for scalability, security, and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Quick Navigation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="#how-we-help" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              How We Can Help
            </a>
            <a href="#software-types" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              Software Types
            </a>
            <a href="#projects" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              Projects
            </a>
            <a href="#faq" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              FAQ
            </a>
            <a href="#costs" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              Development Costs
            </a>
            <a href="#tech-stack" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              Technology Stack
            </a>
          </div>
        </div>
      </section>

      {/* How We Can Help */}
      <section id="how-we-help" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">How We Can Help</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start">
              <CheckCircle2 className="h-12 w-12 text-[#1992D4] mb-4" />
              <h3 className="text-xl font-bold mb-3">Custom Software Development</h3>
              <p className="text-gray-600">Tailored solutions designed specifically for your business needs and goals.</p>
            </div>
            <div className="flex flex-col items-start">
              <Server className="h-12 w-12 text-[#1992D4] mb-4" />
              <h3 className="text-xl font-bold mb-3">Enterprise Solutions</h3>
              <p className="text-gray-600">Scalable enterprise applications that streamline operations and boost efficiency.</p>
            </div>
            <div className="flex flex-col items-start">
              <Globe2 className="h-12 w-12 text-[#1992D4] mb-4" />
              <h3 className="text-xl font-bold mb-3">Web Applications</h3>
              <p className="text-gray-600">Modern web applications built with the latest technologies and best practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Software Types */}
      <section id="software-types" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Software Types</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Enterprise Software</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>ERP Systems</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>CRM Solutions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Business Intelligence Tools</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Web Applications</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Progressive Web Apps</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>E-commerce Platforms</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>SaaS Applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="/images/pexels-photo-3183150.webp" 
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Enterprise ERP System</h3>
                <p className="text-gray-600">Custom ERP solution for manufacturing industry</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="/images/pexels-photo-3182812.webp" 
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                <p className="text-gray-600">Scalable e-commerce solution with advanced features</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="/images/pexels-photo-3183132.webp" 
                alt="Project 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Healthcare Management System</h3>
                <p className="text-gray-600">Comprehensive healthcare management solution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">How long does it take to develop custom software?</h3>
              <p className="text-gray-600">The development timeline varies based on project complexity, typically ranging from 3-12 months for enterprise solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What is your development process?</h3>
              <p className="text-gray-600">We follow an Agile methodology with regular sprints and client feedback to ensure the final product meets all requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Do you provide ongoing support?</h3>
              <p className="text-gray-600">Yes, we offer comprehensive maintenance and support packages to ensure your software remains up-to-date and performs optimally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Costs */}
      <section id="costs" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Development Costs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Basic</h3>
              <p className="text-gray-600 mb-4">Simple applications with standard features</p>
              <p className="text-3xl font-bold text-[#1992D4]">ZAR 100k - ZAR 500k</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-[#1992D4]">
              <h3 className="text-xl font-bold mb-4">Professional</h3>
              <p className="text-gray-600 mb-4">Complex applications with custom features</p>
              <p className="text-3xl font-bold text-[#1992D4]">ZAR 500k - ZAR 5m</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Enterprise</h3>
              <p className="text-gray-600 mb-4">Large-scale enterprise solutions</p>
              <p className="text-3xl font-bold text-[#1992D4]">ZAR 5m+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="tech-stack" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Technology Stack</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <ul className="space-y-2">
                <li>React</li>
                <li>Angular</li>
                <li>Vue.js</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <ul className="space-y-2">
                <li>Node.js</li>
                <li>Python</li>
                <li>Java</li>
                <li>.NET</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Database</h3>
              <ul className="space-y-2">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Redis</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Cloud</h3>
              <ul className="space-y-2">
                <li>AWS</li>
                <li>Azure</li>
                <li>Google Cloud</li>
                <li>Digital Ocean</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SoftwareDevelopment;