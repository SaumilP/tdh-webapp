import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Users2, CheckCircle2, Briefcase, Brain, Rocket, Target, Award } from 'lucide-react';

function StaffAugmentation() {
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
            <Link to="/contact" className="bg-[#1992D4] text-white px-6 py-2 rounded-lg hover:bg-[#1576A8] transition-colors">
              Get in touch
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pexels-photo-3184291.webp"
            alt="Staff Augmentation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#003B73] opacity-90"></div>
        </div>
        <div className="relative z-10 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">IT Staff Augmentation Services</h1>
              <p className="text-xl text-gray-200">
                Enhance your team with skilled professionals who bring expertise and innovation to your projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Award className="h-12 w-12 text-[#1992D4] mb-4" />
              <h3 className="text-xl font-bold mb-3">Proven Expertise</h3>
              <p className="text-gray-600">
                Access to a vast pool of pre-vetted technology experts with proven track records in delivering successful projects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Rocket className="h-12 w-12 text-[#1992D4] mb-4" />
              <h3 className="text-xl font-bold mb-3">Rapid Scaling</h3>
              <p className="text-gray-600">
                Quickly scale your team up or down based on project demands, ensuring optimal resource utilization.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Target className="h-12 w-12 text-[#1992D4] mb-4" />
              <h3 className="text-xl font-bold mb-3">Cost-Effective</h3>
              <p className="text-gray-600">
                Reduce overhead costs while maintaining high-quality output through our flexible engagement models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Are Different Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">How We Are Different</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Strategic Partnership</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Long-term partnership focus vs. transactional relationships</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Dedicated account management and support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Proactive resource planning and scaling</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Rigorous talent screening and validation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Continuous performance monitoring</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[#1992D4] mr-2" />
                  <span>Regular skill enhancement programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Staff Augmentation Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Our Staff Augmentation Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Brain className="h-12 w-12 text-[#1992D4] mb-4" />
              <h3 className="text-xl font-bold mb-3">Industry-Specific Expertise</h3>
              <p className="text-gray-600">
                Access specialized talent with deep domain knowledge across healthcare, finance, retail, and more. Our experts bring industry-specific insights to drive innovation and efficiency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users2 className="h-12 w-12 text-[#1992D4] mb-4" />
              <h3 className="text-xl font-bold mb-3">Strategic Workforce Solutions</h3>
              <p className="text-gray-600">
                Flexible staffing solutions designed to meet both short-term project needs and long-term strategic initiatives, ensuring seamless integration with your existing teams.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Briefcase className="h-12 w-12 text-[#1992D4] mb-4" />
              <h3 className="text-xl font-bold mb-3">Technology Advisory Services</h3>
              <p className="text-gray-600">
                Strategic guidance on technology adoption and implementation, backed by experienced consultants who understand your business objectives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Code2 className="h-12 w-12 text-[#1992D4] mb-4" />
              <h3 className="text-xl font-bold mb-3">Remote Development Teams</h3>
              <p className="text-gray-600">
                Dedicated remote development teams that seamlessly integrate with your organization, bringing specialized skills and agile methodologies to your projects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Target className="h-12 w-12 text-[#1992D4] mb-4" />
              <h3 className="text-xl font-bold mb-3">Scalable Team Extension</h3>
              <p className="text-gray-600">
                Flexible team augmentation solutions that adapt to your project needs, enabling rapid scaling while maintaining quality and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What is staff augmentation?</h3>
              <p className="text-gray-600">
                Staff augmentation is a strategy employed by businesses to supplement their existing workforce by hiring external professionals, consultants or contractors on a temporary basis to fill specific skill gaps or augment their existing teams. Rather than hiring full-time employees, organisations can engage with external resources to extend their capabilities and meet project demands. Staff augmentation services can also be provided by companies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What factors should be considered when selecting staff augmentation providers?</h3>
              <p className="text-gray-600">
              When selecting staff augmentation providers, it is essential to consider several factors to ensure a successful partnership. Here are some key factors to consider: expertise and skill, flexibility, client referrals, cost and value, cultural fit, confidentiality. These are a few factors you can consider, they can change based on the organisation’s requirements. 
              </p>
              <br />
              <p className="text-gray-600">
              By considering some of these factors, you can make an informed decision and choose a staff augmentation service that aligns with your specific needs and contributes to the success of your project.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">How does staff augmentation work?</h3>
              <p className="text-gray-600">
                Staff augmentation works by engaging external professionals or contractors to supplement an organisation’s existing workforce and meet specific project or skill requirements. Here’s how it typically works:
              </p><br />
              <ol>
                <li className="text-gray-600">1. Identify Skill Gap or Project Needs</li>
                <li className="text-gray-600">2. Define The Requirements</li>
                <li className="text-gray-600">3. Select a Staff Augmentation Provider</li>
                <li className="text-gray-600">4. Interview and Selection</li>
                <li className="text-gray-600">5. Onboarding and Integration</li>
                <li className="text-gray-600">6. Collaborative Work</li>
                <li className="text-gray-600">7. Project Completion and Transition.</li>
              </ol> <br />
              <p className="text-gray-600">
                It’s important to establish clear expectations, maintain open communication, and foster a collaborative environment to maximize the success of the staff augmentation engagement.
              </p>
              <br />
              <p className="text-gray-600">
                By considering some of these factors, you can make an informed decision and choose a staff augmentation service that aligns with your specific needs and contributes to the success of your project.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">How quickly can you provide qualified staff?</h3>
              <p className="text-gray-600">
                We typically match qualified candidates within 1-2 weeks, depending on the specific requirements and skill set needed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What is your vetting process?</h3>
              <p className="text-gray-600">
                Our comprehensive vetting process includes technical assessments, soft skills evaluation, background checks, and previous project verification.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">How do you ensure quality and cultural fit?</h3>
              <p className="text-gray-600">
                We conduct thorough cultural fit assessments and provide regular performance monitoring to ensure seamless integration with your team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StaffAugmentation;