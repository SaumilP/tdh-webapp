import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Code2, Laptop2, AppWindow, TestTubes, Phone, Mail, Users2 } from 'lucide-react';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import ITConsulting from './pages/ITConsulting';
import ApplicationServices from './pages/ApplicationServices';
import TestingQA from './pages/TestingQA';
import Contact from './pages/Contact';
import StaffAugmentation from './pages/StaffAugmentation';
function App() {
  return (
    <Routes>
      <Route path="/services/software-development" element={<SoftwareDevelopment />} />
      <Route path="/services/it-consulting" element={<ITConsulting />} />
      <Route path="/services/application-services" element={<ApplicationServices />} />
      <Route path="/services/testing-qa" element={<TestingQA />} />
      <Route path="/services/staff-augmentation" element={<StaffAugmentation />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={
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
                <a href="#services" className="text-gray-700 hover:text-[#1992D4] transition-colors">Services</a>
                <Link to="/contact" className="bg-[#1992D4] text-white px-6 py-2 rounded-lg hover:bg-[#1576A8] transition-colors">
                  Get in touch
                </Link>
              </div>
            </nav>
          </header>

          {/* Hero Section */}
          <section className="pt-24 pb-16">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl font-bold leading-tight mb-6">
                    Navigate the{' '}
                    <span className="text-[#1992D4]">Digital Future</span>{' '}
                    with Innovation and Excellence.
                  </h1>
                  <p className="text-gray-600 mb-8 text-lg">
                    At TDH Enterprises, we are your technology partner in your digital journey. 
                    We offer comprehensive IT services to ensure your success, 
                    from software development to quality assurance.
                  </p>
                  <Link 
                    to="/contact"
                    className="bg-[#1992D4] text-white px-8 py-3 rounded-lg hover:bg-[#1576A8] transition-colors text-lg inline-block"
                  >
                    Get in touch
                  </Link>
                </div>
                <div className="relative">
                  <img 
                    src="/images/pexels-photo-3183150.webp" 
                    alt="Team working on software development"
                    className="rounded-2xl shadow-xl w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 bg-gray-50" id="services">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Link to="/services/software-development" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Code2 className="h-12 w-12 text-[#1992D4] mb-4" />
                  <h3 className="text-xl font-bold mb-4">Software Development</h3>
                  <p className="text-gray-600">
                    With over 20 years of proven excellence in software development, we specialize in engineering reliable, scalable, and secure solutions across all operating systems, browsers, and devices. By combining deep industry knowledge with the latest technological advancements, we deliver tailored software and products that align seamlessly with user needs and behavior.
                  </p>
                </Link>
                <Link to="/services/it-consulting" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Laptop2 className="h-12 w-12 text-[#1992D4] mb-4" />
                  <h3 className="text-xl font-bold mb-4">IT Consulting</h3>
                  <p className="text-gray-600">
                    Our experts provide strategic guidance to help you plan and execute an effective IT strategy, ensure a seamless digital transformation and system integration, and offer insights to enhance your digital customer experience.
                  </p>
                </Link>
                <Link to="/services/application-services" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <AppWindow className="h-12 w-12 text-[#1992D4] mb-4" />
                  <h3 className="text-xl font-bold mb-4">Application Services</h3>
                  <p className="text-gray-600">
                    Our experts support mid-sized and large enterprises in building, testing, securing, managing, migrating, and optimizing digital solutions—ensuring continuous performance and delivering the best possible total cost of ownership (TCO).
                  </p>
                </Link>
                <Link to="/services/testing-qa" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <TestTubes className="h-12 w-12 text-[#1992D4] mb-4" />
                  <h3 className="text-xl font-bold mb-4">Testing & QA</h3>
                  <p className="text-gray-600">
                    We provide comprehensive QA and testing outsourcing services, supporting the development of new QA strategies or enhancing existing frameworks. Our team also assists with the setup and advancement of Testing Centers of Excellence (TCoE). We conduct end-to-end testing of mobile, web, and desktop applications across every stage of the development lifecycle.
                  </p>
                </Link>
                <Link to="/services/staff-augmentation" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                  <Users2 className="h-12 w-12 text-[#1992D4] mb-4" />
                  <h3 className="text-xl font-bold mb-4">IT Staff Augmentation Services</h3>
                  <p className="text-gray-600">
                    We offer expert IT Staff Augmentation Services tailored to your business needs. Our seasoned professionals bring deep expertise across a wide range of technologies and industries, seamlessly integrating into your teams to deliver high-impact results. We provide agile, scalable, and cost-effective solutions that enable you to meet evolving project demands without the overhead of permanent hires. Beyond staff augmentation, our comprehensive services include software development, UI/UX design, and technology consulting—ensuring all your IT requirements are met under one roof. Partner with TDH Enterprises to accelerate innovation, enhance efficiency, and drive sustainable growth.
                  </p>
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-[#E7F3FA]">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Future?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your technology goals with our expert guidance and comprehensive solutions.
              </p>
              <Link 
                to="/contact"
                className="bg-[#1992D4] text-white px-8 py-3 rounded-lg hover:bg-[#1576A8] transition-colors text-lg inline-block"
              >
                Get in touch
              </Link>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-[#003B73] text-white py-12">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <Code2 className="h-6 w-6" />
                    <span className="ml-2 font-bold">TDH ENTERPRISES</span>
                  </div>
                  <p className="text-gray-300">
                    Your trusted partner in digital transformation.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Services</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li><Link to="/services/software-development" className="hover:text-white">Software Development</Link></li>
                    <li><Link to="/services/it-consulting" className="hover:text-white">IT Consulting</Link></li>
                    <li><Link to="/services/application-services" className="hover:text-white">Application Services</Link></li>
                    <li><Link to="/services/testing-qa" className="hover:text-white">Testing & QA</Link></li>
                    <li><Link to="/services/staff-augmentation" className="hover:text-white">Staff Augmentation</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Contact</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-gray-300 mr-3" />
                        <p className="text-gray-300">contact@tdhenterprises.co.za</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-300 mr-3" />
                        <p className="text-gray-300">+27 79 935 3985</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
                    <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
                <p>&copy; 2025 TDH Enterprises (Pty) Ltd. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      } />
    </Routes>
  );
}

export default App;