import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Laptop2, CheckCircle2, Brain, Users, LineChart } from 'lucide-react';

function ITConsulting() {
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
            src="/images/pexels-photo-3184291.webp"
            alt="IT Consulting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#003B73] opacity-90"></div>
        </div>
        <div className="relative z-10 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">IT Consulting Services</h1>
              <p className="text-xl text-gray-200">
                Strategic guidance for digital transformation and technology optimization.
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
            <a href="#services" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              Our Services
            </a>
            <a href="#approach" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              Our Approach
            </a>
            <a href="#industries" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              Industries
            </a>
            <a href="#case-studies" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              Case Studies
            </a>
            <a href="#benefits" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              Benefits
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
              <Brain className="h-12 w-12 text-[#1992D4] mb-4" />
              <h3 className="text-xl font-bold mb-3">Strategic Planning</h3>
              <p className="text-gray-600">Develop comprehensive IT strategies aligned with business objectives.</p>
            </div>
            <div className="flex flex-col items-start">
              <Users className="h-12 w-12 text-[#1992D4] mb-4" />
              <h3 className="text-xl font-bold mb-3">Digital Transformation</h3>
              <p className="text-gray-600">Guide organizations through successful digital transformation initiatives.</p>
            </div>
            <div className="flex flex-col items-start">
              <LineChart className="h-12 w-12 text-[#1992D4] mb-4" />
              <h3 className="text-xl font-bold mb-3">Technology Assessment</h3>
              <p className="text-gray-600">Evaluate current technology stack and recommend improvements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Our Approach</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#1992D4] mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Assessment</h3>
              <p className="text-gray-600">Thorough analysis of current IT infrastructure and business needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#1992D4] mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Strategy</h3>
              <p className="text-gray-600">Development of comprehensive IT strategy and roadmap.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#1992D4] mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Implementation</h3>
              <p className="text-gray-600">Execution of recommended solutions and changes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#1992D4] mb-4">04</div>
              <h3 className="text-xl font-bold mb-3">Optimization</h3>
              <p className="text-gray-600">Continuous monitoring and improvement of implemented solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Healthcare</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Digital Health Solutions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Patient Data Management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Compliance & Security</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Finance</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Digital Banking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>FinTech Solutions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Security & Compliance</span>
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
                alt="Healthcare Transformation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Healthcare Digital Transformation</h3>
                <p className="text-gray-600">Modernizing patient care through technology</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="/images/pexels-photo-3182812.webp" 
                alt="Financial Services"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">FinTech Innovation</h3>
                <p className="text-gray-600">Digital banking transformation success</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="/images/pexels-photo-3183132.webp" 
                alt="Retail Innovation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Retail Innovation</h3>
                <p className="text-gray-600">Digital-first retail transformation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Benefits of Our Consulting</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Strategic Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Improved Decision Making</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Risk Mitigation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Innovation Leadership</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Operational Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Cost Optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Increased Efficiency</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Better Resource Utilization</span>
                </li>
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
              <h3 className="text-xl font-bold mb-3">What is the typical engagement timeline?</h3>
              <p className="text-gray-600">Our engagements typically range from 3-12 months, depending on the scope and complexity of the project.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">How do you measure success?</h3>
              <p className="text-gray-600">We establish clear KPIs at the start of each engagement and provide regular progress reports against these metrics.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What industries do you specialize in?</h3>
              <p className="text-gray-600">We have extensive experience across healthcare, finance, retail, and manufacturing sectors.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ITConsulting;