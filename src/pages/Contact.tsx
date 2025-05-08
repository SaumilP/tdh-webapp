import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { 
  // Code2, 
  Clock, 
  UserCircle, 
  Heart, 
  MapPin, 
  Phone, 
  Mail,
  Loader2,
  Upload
  // , Quote
} from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    needsNDA: false,
    file: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-email-worker`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          needsNDA: formData.needsNDA,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success('Message sent successfully! We will get back to you soon.');
      
      // Reset form
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        needsNDA: false,
        file: null,
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e5f1fb] to-white">
      <Toaster position="top-right" />
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
            <Link to="/#services" className="text-gray-700 hover:text-[#1992D4] transition-colors">
              Services
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 bg-white rounded-2xl shadow-lg p-8">
            {/* Left Section */}
            <div className="md:col-span-2 bg-[#f8fafc] rounded-xl p-6">
              <h2 className="text-2xl font-bold text-[#2a2a2a] mb-8">Why Work With Us</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-[#005BAA] mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Quick Response</h3>
                    <p className="text-gray-600">
                      We typically reply within 1 business hour and can sign an NDA the same day to get started.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <UserCircle className="h-6 w-6 text-[#005BAA] mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Personalized Approach</h3>
                    <p className="text-gray-600">
                      You'll speak directly with experts who understand your industry and can guide your digital journey.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Heart className="h-6 w-6 text-[#005BAA] mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">No Pressure</h3>
                    <p className="text-gray-600">
                      We're here to offer insights and guidance when you're ready. No pushy sales – just helpful conversations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Location */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-lg mb-6">Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#005BAA] mt-1 mr-3" />
                    <p className="text-gray-600">
                      1 Stone Manor, 46th North Road, 
                      Morningside 2196, Johannesburg, 
                      Gauteng, South Africa
                    </p>
                  </div>
                  {/* <div className="flex items-center">
                    <Phone className="h-5 w-5 text-[#005BAA] mr-3" />
                    <p className="text-gray-600">+27 79 935 3985</p>
                  </div> */}
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[#005BAA] mr-3" />
                    <p className="text-gray-600">contact@tdhenterprises.co.za</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold text-[#2a2a2a] mb-4">Let's discuss your needs</h2>
              <p className="text-gray-600 mb-8">
                Do you have a question for our experts or want to discuss a potential project? 
                Feel free to send your request using the form below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005BAA] focus:border-transparent"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005BAA] focus:border-transparent"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005BAA] focus:border-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005BAA] focus:border-transparent"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005BAA] focus:border-transparent"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={formData.needsNDA}
                      onChange={(e) => setFormData({ ...formData, needsNDA: e.target.checked })}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#005BAA]"></div>
                    <span className="ml-3 text-sm font-medium text-gray-700">I'd like to sign an NDA</span>
                  </label>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <Upload className="h-8 w-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-600">
                      Drag and drop or click to upload files
                    </span>
                    <span className="text-xs text-gray-500 mt-1">
                      Maximum file size: 10MB
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting} 
                  className="w-full bg-[#f5b301] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#e5a701] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5 mr-2" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Testimonial Section */}
          {/* <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start gap-6">
                <Quote className="h-8 w-8 text-[#005BAA] flex-shrink-0" />
                <div className="flex-grow">
                  <p className="text-gray-600 italic mb-4">
                    "Working with your team has been a professional experience from start to finish. 
                    Their proactive recommendations, on-time delivery, and clear communication made 
                    all the difference. We truly appreciated the attention to detail and consistent 
                    follow-up throughout the engagement."
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Senior Development Manager</p>
                      <p className="text-gray-500">Discovery Health</p>
                    </div>
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;