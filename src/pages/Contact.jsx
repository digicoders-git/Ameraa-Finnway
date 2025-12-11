import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Building2, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    projectType: '',
    loanRequirement: '',
    file: null,
    message: ''
  });

  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = sectionRefs.current
      .filter(Boolean)
      .map((ref, index) => {
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [index]: true }));
            }
          },
          { threshold: 0.15 }
        );
        obs.observe(ref);
        return obs;
      });
    
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = () => {
    alert('Thank you! Your project has been submitted for review. Our team will contact you within 24-48 hours.');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scaleX(0);
          }
          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>

      <section className="relative py-20 px-4 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=2070&auto=format&fit=crop"
          alt="Modern office workspace with collaboration"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0A2740] opacity-90"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-white text-5xl font-bold text-center animate-fade-in-down">
            Contact With Us.
          </h1>
          <div className="w-24 h-1 bg-[#D4A537] mx-auto mt-4 animate-scale-in animation-delay-200"></div>
          <p className="text-[#A4C8E1] text-xl max-w-3xl mx-auto text-center mt-6 animate-fade-in-up animation-delay-400">
            Whether you're building a hospital, hotel, real estate tower, industrial plant, or government project, our experts will help you secure ₹20 Cr – ₹100 Cr+ institutional funding from top government banks & NBFCs.
          </p>
        </div>
      </section>
      <div 
        ref={el => sectionRefs.current[0] = el}
        className={`py-16 px-4 transition-all duration-1000 ${
          isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#0A2740] text-3xl font-bold text-center mb-4">
            Share your project plan and we'll take care of the rest.
          </h2>
          <p className="text-[#3A3A3A] text-lg text-center max-w-3xl mx-auto leading-relaxed mb-8">
            We help businesses secure high-value project funding with complete advisory support — from eligibility check to sanction and disbursement.
          </p>
          <p className="text-[#123A5A] text-center max-w-2xl mx-auto mb-6">
            Whether you have a DPR ready or just a concept note, our team will guide you through:
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {['Project evaluation', 'Banking options', 'Documentation preparation', 'Credit presentation', 'Loan approval roadmap'].map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-[#D4A537]" />
                <span className="text-[#0A2740] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div 
        ref={el => sectionRefs.current[1] = el}
        className={`py-12 px-4 bg-white transition-all duration-1000 ${
          isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-xl rounded-xl p-8 border-l-4 border-[#D4A537] hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <Phone className="w-10 h-10 text-[#D4A537] mb-4" />
            <h3 className="text-[#0A2740] font-bold text-xl mb-2">Phone</h3>
            <div className="w-16 h-1 bg-[#D4A537] my-4"></div>
            <p className="text-[#123A5A] text-lg font-semibold">+91 9592171057</p>
            <p className="text-[#3A3A3A] text-sm mt-2">Available Mon–Sat, 10AM–7PM</p>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-8 border-l-4 border-[#D4A537] hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <Mail className="w-10 h-10 text-[#D4A537] mb-4" />
            <h3 className="text-[#0A2740] font-bold text-xl mb-2">Email</h3>
            <div className="w-16 h-1 bg-[#D4A537] my-4"></div>
            <p className="text-[#123A5A] text-lg font-semibold break-all">info@ameraafinnway.co</p>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-8 border-l-4 border-[#D4A537] hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <MapPin className="w-10 h-10 text-[#D4A537] mb-4" />
            <h3 className="text-[#0A2740] font-bold text-xl mb-2">Office Locations</h3>
            <div className="w-16 h-1 bg-[#D4A537] my-4"></div>
            <p className="text-[#123A5A] font-semibold mb-2">Head Office: Lucknow</p>
            <p className="text-[#0A2740] font-medium text-sm mb-2">PAN India Offices:</p>
            <div className="grid grid-cols-2 gap-2 text-[#3A3A3A] text-sm">
              {['Mumbai', 'Bangalore', 'Pune', 'Hyderabad', 'Chennai', 'Indore', 'Ahmedabad'].map((city, idx) => (
                <div key={idx} className="flex items-center gap-1 hover:translate-x-1 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 bg-[#D4A537] rounded-full"></div>
                  <span>{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div 
        ref={el => sectionRefs.current[2] = el}
        className={`py-16 px-4 transition-all duration-1000 ${
          isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 md:p-12 hover:shadow-3xl transition-shadow duration-500">
          <h2 className="text-[#0A2740] text-2xl font-bold mb-6">Tell Us About Your Project</h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#0A2740] font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A537] focus:ring-2 focus:ring-[#D4A537] focus:ring-opacity-20 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-[#0A2740] font-semibold mb-2">Company / Organization *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A537] focus:ring-2 focus:ring-[#D4A537] focus:ring-opacity-20 transition-all duration-300"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#0A2740] font-semibold mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A537] focus:ring-2 focus:ring-[#D4A537] focus:ring-opacity-20 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-[#0A2740] font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A537] focus:ring-2 focus:ring-[#D4A537] focus:ring-opacity-20 transition-all duration-300"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#0A2740] font-semibold mb-2">City / Project Location *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A537] focus:ring-2 focus:ring-[#D4A537] focus:ring-opacity-20 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-[#0A2740] font-semibold mb-2">Project Type *</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A537] focus:ring-2 focus:ring-[#D4A537] focus:ring-opacity-20 transition-all duration-300"
                >
                  <option value="">Select Project Type</option>
                  <option value="real-estate">Real Estate (Residential / Commercial)</option>
                  <option value="healthcare">Healthcare (Hospital / Diagnostic)</option>
                  <option value="hospitality">Hospitality (Hotels / Resorts)</option>
                  <option value="manufacturing">Manufacturing / Industrial Plant</option>
                  <option value="education">Education (School / College)</option>
                  <option value="infrastructure">Infrastructure / Government Contract</option>
                  <option value="renewable">Renewable Energy (Solar / Wind)</option>
                  <option value="other">Other Project Type</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[#0A2740] font-semibold mb-2">Est. Loan Requirement (₹ Cr) *</label>
              <input
                type="text"
                name="loanRequirement"
                placeholder="e.g., 20-50"
                value={formData.loanRequirement}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A537] focus:ring-2 focus:ring-[#D4A537] focus:ring-opacity-20 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-[#0A2740] font-semibold mb-2">Attach DPR / LOI / Project Brief</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A537] focus:ring-2 focus:ring-[#D4A537] focus:ring-opacity-20 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-[#0A2740] font-semibold mb-2">Message / Project Summary</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A537] focus:ring-2 focus:ring-[#D4A537] focus:ring-opacity-20 transition-all duration-300"
              ></textarea>
            </div>

            <p className="text-[#123A5A] text-sm leading-relaxed">
              Our team reviews every project thoroughly. Once submitted, you will receive a call within 24–48 hours for the next steps.
            </p>

            <button
              onClick={handleSubmit}
              className="bg-[#D4A537] hover:bg-[#C59230] text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full md:w-auto"
            >
              Submit Project for Review
            </button>
          </div>
        </div>
      </div>
      <div 
        ref={el => sectionRefs.current[3] = el}
        className={`py-16 px-4 bg-white transition-all duration-1000 ${
          isVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#0A2740] text-3xl font-bold text-center mb-12">
            Why Businesses Trust AMERAA FINNWAY
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              '20+ Years Project Finance Expertise',
              'PAN India Execution Capability',
              'Strong Network of Govt Banks & NBFCs',
              'Fast Approvals With Structured Documentation',
              'Funding from ₹20 Cr – ₹100 Cr+'
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-4 bg-[#F8F9FB] rounded-lg hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-[#D4A537] shrink-0 mt-1" />
                <span className="text-[#0A2740] font-medium text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}