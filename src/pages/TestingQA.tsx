import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, TestTubes, CheckCircle2, Bug, Microscope, Gauge } from 'lucide-react';

function TestingQA() {
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
            src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
            alt="Testing & QA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#003B73] opacity-90"></div>
        </div>
        <div className="relative z-10 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">Testing & Quality Assurance</h1>
              <p className="text-xl text-gray-200">
                Comprehensive testing solutions to ensure your applications meet the highest quality standards.
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
              Testing Services
            </a>
            <a href="#process" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              Testing Process
            </a>
            <a href="#automation" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              Test Automation
            </a>
            <a href="#tools" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              Tools & Technologies
            </a>
            <a href="#case-studies" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              Case Studies
            </a>
            <a href="#faq" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              FAQ
            </a>
          </div>
        </div>
      </section>

      {/* Testing Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Testing Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start">
              <Bug className="h-12 w-12 text-[#1992D4] mb-4" />
              <h3 className="text-xl font-bold mb-3">Functional Testing</h3>
              <p className="text-gray-600">Comprehensive testing of all application features and functions.</p>
            </div>
            <div className="flex flex-col items-start">
              <Gauge className="h-12 w-12 text-[#1992D4] mb-4" />
              <h3 className="text-xl font-bold mb-3">Performance Testing</h3>
              <p className="text-gray-600">Load testing and performance optimization services.</p>
            </div>
            <div className="flex flex-col items-start">
              <Microscope className="h-12 w-12 text-[#1992D4] mb-4" />
              <h3 className="text-xl font-bold mb-3">Security Testing</h3>
              <p className="text-gray-600">Thorough security assessment and vulnerability testing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Process Section */}
      <section id="process" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Our Testing Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#1992D4] mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Planning</h3>
              <p className="text-gray-600">Test strategy and test case development.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#1992D4] mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Execution</h3>
              <p className="text-gray-600">Systematic test execution and defect tracking.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#1992D4] mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Analysis</h3>
              <p className="text-gray-600">Results analysis and reporting.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#1992D4] mb-4">04</div>
              <h3 className="text-xl font-bold mb-3">Optimization</h3>
              <p className="text-gray-600">Continuous improvement of test processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Test Automation Section */}
      <section id="automation" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Test Automation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Automation Framework</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Custom Framework Development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>CI/CD Integration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Automated Reporting</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Faster Time to Market</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Reduced Testing Costs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Improved Test Coverage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies Section */}
      <section id="tools" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Tools & Technologies</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Automation Tools</h3>
              <ul className="space-y-2">
                <li>Selenium</li>
                <li>Cypress</li>
                <li>Playwright</li>
                <li>Appium</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Performance Tools</h3>
              <ul className="space-y-2">
                <li>JMeter</li>
                <li>K6</li>
                <li>LoadRunner</li>
                <li>Gatling</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Security Tools</h3>
              <ul className="space-y-2">
                <li>OWASP ZAP</li>
                <li>Burp Suite</li>
                <li>Acunetix</li>
                <li>Netsparker</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">CI/CD Tools</h3>
              <ul className="space-y-2">
                <li>Jenkins</li>
                <li>GitLab CI</li>
                <li>CircleCI</li>
                <li>Azure DevOps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
                alt="E-commerce Testing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-commerce Platform Testing</h3>
                <p className="text-gray-600">Comprehensive testing for a major retail platform</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="/images/pexels-photo-3182812.webp" 
                alt="Banking App Testing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Banking App Security</h3>
                <p className="text-gray-600">Security testing for mobile banking application</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="/images/pexels-photo-3183132.webp" 
                alt="Healthcare Testing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Healthcare System Testing</h3>
                <p className="text-gray-600">End-to-end testing of healthcare platform</p>
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
              <h3 className="text-xl font-bold mb-3">What types of testing do you provide?</h3>
              <p className="text-gray-600">We offer functional, performance, security, and automation testing services.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">How do you ensure test coverage?</h3>
              <p className="text-gray-600">We use a combination of manual and automated testing approaches with detailed test plans.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What is your test automation approach?</h3>
              <p className="text-gray-600">We create custom frameworks tailored to your needs using industry-standard tools.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestingQA;