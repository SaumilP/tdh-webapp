import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, AppWindow, CheckCircle2, Shield, Workflow, Cloud } from 'lucide-react';

function ApplicationServices() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            {/* <Code2 className="h-8 w-8 text-[#003B73]" /> */}
            <img src="/images/main-logo-v2.webp"alt="logo-v2" className="h-10 w-10" />
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
            src="/images/pexels-photo-1181467.webp"
            alt="Application Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#003B73] opacity-90"></div>
        </div>
        <div className="relative z-10 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">Application Services</h1>
              <p className="text-xl text-gray-200">
                Comprehensive application lifecycle management for optimal performance and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the content remains unchanged */}
      {/* Table of Contents */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Quick Navigation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="#services" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              Our Services
            </a>
            <a href="#methodology" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              Methodology
            </a>
            <a href="#security" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              Security
            </a>
            <a href="#case-studies" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              Case Studies
            </a>
            <a href="#technologies" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              Technologies
            </a>
            <a href="#faq" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              FAQ
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start">
              <Cloud className="h-12 w-12 text-[#1992D4] mb-4" />
              <h3 className="text-xl font-bold mb-3">Cloud Migration</h3>
              <p className="text-gray-600">Seamless migration of applications to cloud platforms.</p>
            </div>
            <div className="flex flex-col items-start">
              <Shield className="h-12 w-12 text-[#1992D4] mb-4" />
              <h3 className="text-xl font-bold mb-3">Application Security</h3>
              <p className="text-gray-600">Comprehensive security assessment and implementation.</p>
            </div>
            <div className="flex flex-col items-start">
              <Workflow className="h-12 w-12 text-[#1992D4] mb-4" />
              <h3 className="text-xl font-bold mb-3">Performance Optimization</h3>
              <p className="text-gray-600">Enhanced application performance and scalability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Our Methodology</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#1992D4] mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Assessment</h3>
              <p className="text-gray-600">Comprehensive analysis of current application state.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#1992D4] mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Planning</h3>
              <p className="text-gray-600">Detailed roadmap for improvements and optimization.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#1992D4] mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Implementation</h3>
              <p className="text-gray-600">Execution of planned improvements and updates.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#1992D4] mb-4">04</div>
              <h3 className="text-xl font-bold mb-3">Monitoring</h3>
              <p className="text-gray-600">Continuous monitoring and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Security Measures</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Application Security</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Vulnerability Assessment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Security Testing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Compliance Management</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Data Protection</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Encryption</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Access Control</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Backup & Recovery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="/images/pexels-photo-3183150.webp" 
                alt="Cloud Migration"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cloud Migration Success</h3>
                <p className="text-gray-600">Enterprise application migration to cloud</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="/images/pexels-photo-3182812.webp" 
                alt="Performance Optimization"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Performance Boost</h3>
                <p className="text-gray-600">Over 50% improvement in application performance</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="/images/pexels-photo-3183132.webp" 
                alt="Security Enhancement"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Security Enhancement</h3>
                <p className="text-gray-600">Comprehensive security implementation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Technologies We Use</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Cloud Platforms</h3>
              <ul className="space-y-2">
                <li>AWS</li>
                <li>Azure</li>
                <li>Google Cloud</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Monitoring</h3>
              <ul className="space-y-2">
                <li>New Relic</li>
                <li>Datadog</li>
                <li>Prometheus</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Security</h3>
              <ul className="space-y-2">
                <li>OWASP Tools</li>
                <li>Fortify</li>
                <li>Snyk</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">DevOps</h3>
              <ul className="space-y-2">
                <li>Jenkins</li>
                <li>Docker</li>
                <li>Kubernetes</li>
              </ul>
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
              <h3 className="text-xl font-bold mb-3">How do you ensure application security?</h3>
              <p className="text-gray-600">We follow industry best practices and conduct regular security audits and penetration testing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What is your approach to cloud migration?</h3>
              <p className="text-gray-600">We follow a phased approach with thorough planning and testing to ensure minimal disruption.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">How do you handle application maintenance?</h3>
              <p className="text-gray-600">We provide 24/7 monitoring and support with regular maintenance schedules.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ApplicationServices;