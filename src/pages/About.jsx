import React, { useEffect, useRef, useState } from 'react';
import { Building2, Target, Eye, Award, Users, MapPin, CheckCircle, TrendingUp, Briefcase, Shield, FileText, DollarSign } from 'lucide-react';
import C1 from '../components/about/C1';
import owner from '../assets/owner.png'
import { NavLink } from 'react-router-dom';


export default function About() {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [index]: true }));
          }
        },
        { threshold: 0.1 }
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);
  const offices = [
    'Mumbai', 'Bangalore', 'Pune', 'Hyderabad', 
    'Chennai', 'Indore', 'Ahmedabad', 'Lucknow (HQ)'
  ];

  const strengths = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "20+ Years of Industry Expertise",
      description: "Deep experience in project funding, loan structuring, banking protocols, and compliance management"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Strong Banking Network",
      description: "Trusted partnerships with leading Government Banks, reputed NBFCs, and private institutional lenders"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "End-to-End Execution Support",
      description: "Complete advisory from project evaluation to disbursement with seamless coordination"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Pan-India Presence",
      description: "Local support in major business hubs across India for operational excellence"
    }
  ];

  const differentiators = [
    "High-ticket funding specialization (₹20Cr – ₹100Cr+)",
    "Strong government banking relationships",
    "Sector-specific expertise (Real Estate, Healthcare, Hospitality)",
    "Fast approvals with structured documentation",
    "Personalized support from industry experts",
    "Transparent & compliance-driven processes",
    "Advisory built on trust, experience & long-term relationships"
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')`,
          }}
        />
        <div className="absolute inset-0 bg-[#0A2740] opacity-90"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-down">
            About Ameraa Finnway
          </h1>
          <p className="text-xl md:text-2xl text-[#A4C8E1] max-w-4xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            Premier Project Finance Advisory Specializing in ₹20 Crore to ₹100 Crore+ Funding
          </p>
          <div className="w-24 h-1 bg-[#D4A537] mx-auto animate-scale-in animation-delay-400"></div>
        </div>
      </section>

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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .section-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>

      <section 
        ref={el => sectionRefs.current[0] = el}
        className={`bg-[#F8F9FB] py-16 px-4 transition-all duration-1000 ${
          isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-6 relative inline-block">
              Company Overview
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#D4A537]"></span>
            </h2>
            <p className="text-lg text-[#3A3A3A] leading-relaxed mb-6">
              Ameraa Finnway is a premier project finance advisory firm specializing in <span className="text-[#D4A537] font-semibold">₹20 Crore to ₹100 Crore+ funding</span> for capital-intensive infrastructure and commercial ventures across India.
            </p>
            <p className="text-lg text-[#3A3A3A] leading-relaxed mb-6">
              For over <span className="text-[#D4A537] font-semibold">20 years</span>, we have enabled businesses, developers, contractors, institutions, and industrial enterprises to access funding from leading Government Banks, NBFCs, and Private Financial Institutions with structured financial planning and seamless execution.
            </p>
            <p className="text-lg text-[#3A3A3A] leading-relaxed mb-6">
              We combine deep industry expertise, pan-India presence, and strong banking partnerships to provide end-to-end advisory, from project evaluation and documentation to bank coordination and disbursement.
            </p>
            <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-[#D4A537] mt-8">
              <p className="text-xl font-semibold text-[#0A2740] italic">
                "To empower India's development through accessible, structured, and high-value institutional funding."
              </p>
            </div>
          </div>
        </div>
      </section>
<C1 />
<section 
  ref={el => sectionRefs.current[8] = el}
  className={`bg-white py-16 px-4 transition-all duration-1000 ${
    isVisible[8] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-6">
        Growth Advisory: Building Future-Ready Businesses
      </h2>
      <p className="text-lg text-[#3A3A3A] max-w-4xl mx-auto leading-relaxed">
        Ameraa Finnway not only provides high-value project funding — we also help businesses scale, transform, and become future-ready through our specialized Growth Advisory Services. Our goal is to create a strong foundation for long-term success by improving strategy, operations, financial planning, and market positioning.
      </p>
    </div>

    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {[
          {
            icon: <Target className="w-8 h-8" />,
            title: "Business Strategy & Planning",
            desc: "Give your company clarity and structured direction"
          },
          {
            icon: <Award className="w-8 h-8" />,
            title: "Branding & Market Positioning",
            desc: "Help attract and retain high-value customers"
          },
          {
            icon: <Users className="w-8 h-8" />,
            title: "Sales & Marketing Advisory",
            desc: "For predictable revenue and customer acquisition"
          },
          {
            icon: <DollarSign className="w-8 h-8" />,
            title: "Financial Planning & Forecasting",
            desc: "Strengthen cash flow and profitability"
          },
          {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Business Process Improvement",
            desc: "For efficient, scalable operations"
          }
        ].map((service, idx) => (
          <div 
            key={idx}
            className="flex items-start gap-4 bg-[#F8F9FB] p-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#D4A537] shrink-0 shadow-sm">
              {service.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0A2740] mb-2">
                {service.title}
              </h3>
              <p className="text-[#3A3A3A] text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a 
          href="/growth-advisory"
          className="inline-block bg-[#D4A537] hover:bg-[#C59230] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
        >
          Learn More →
        </a>
      </div>
    </div>
  </div>
</section>

      <section 
        ref={el => sectionRefs.current[1] = el}
        className={`bg-white py-16 px-4 transition-all duration-1000 ${
          isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-6">
              The Ameraa Finnway Story
            </h2>
            <div className="border-l-4 border-[#D4A537] pl-6">
              <p className="text-lg text-[#3A3A3A] leading-relaxed mb-6">
                Ameraa Finnway was founded with a mission to solve the biggest challenge faced by large project developers and business owners: <span className="text-[#D4A537] font-semibold">accessing timely, structured, and bank-approved project finance</span>.
              </p>
              <p className="text-lg text-[#3A3A3A] leading-relaxed mb-6">
                With years of experience in financial advisory, government banking processes, and project structuring, the founder recognized a major gap — businesses needed a trusted partner who could navigate complex financial systems and deliver results.
              </p>
              <p className="text-lg text-[#3A3A3A] leading-relaxed mb-6">
                What began as a consultancy offering specialized project finance solutions has today evolved into a pan-India advisory network, supporting industries such as:
              </p>
              <ul className="grid md:grid-cols-2 gap-3 mb-6">
                {[
                  'Real Estate Development',
                  'Healthcare & Hospital Infrastructure',
                  'Education Institutions',
                  'Hospitality & Hotels',
                  'Manufacturing & Industrial Plants',
                  'Renewable Energy (Solar/Wind)',
                  'Government Contractors & Infrastructure Projects'
                ].map((industry, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[#3A3A3A]">
                    <CheckCircle className="w-5 h-5 text-[#D4A537] shrink-0 mt-1" />
                    <span>{industry}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-[#0A2740] font-semibold">
                Day after day, we help businesses unlock growth through structured funding and institutional partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section 
        ref={el => sectionRefs.current[2] = el}
        className={`bg-linear-to-br from-[#0A2740] to-[#123A5A] py-16 px-4 transition-all duration-1000 ${
          isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 hover:bg-white/10 transition-all duration-500">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 bg-linear-to-br from-[#D4A537] to-[#C59230] rounded-full flex items-center justify-center shrink-0 animate-pulse-slow">
                {/* <Users className="w-24 h-24 text-white" /> */}
                <img src={owner} className='rounded-full' alt="" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-[#D4A537] mb-2">
                  Vishhal S. Kumar
                </h3>
                <p className="text-xl text-white mb-4">
                  Founder, Ameraa Finnway – Lucknow, India
                </p>
                <p className="text-[#A4C8E1] leading-relaxed mb-6">
                  With more than 20 years of financial expertise, Vishhal S Kumar is a recognized advisor in the space of project funding, construction finance, institutional lending, and government bank loan structuring.
                </p>
                <div className="space-y-3">
                  {[
                    'Structuring ₹20 Cr – ₹100 Cr+ project proposals',
                    'Strategic partnerships with nationalized banks & NBFCs',
                    'Advisory for complex infra & commercial projects',
                    'Documentation, compliance & execution leadership',
                    'Supporting developers, hospital chains & contractors'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#D4A537] shrink-0 mt-1" />
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-[#D4A537] font-semibold text-lg italic">
                    "To empower ambitious businesses by making large-scale funding accessible, reliable, and growth-driven."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        ref={el => sectionRefs.current[3] = el}
        className={`bg-[#F8F9FB] py-16 px-4 transition-all duration-1000 ${
          isVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-12">
            Vision & Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <Eye className="w-12 h-12 text-[#D4A537] mb-4" />
              <h3 className="text-2xl font-bold text-[#D4A537] mb-4">Vision</h3>
              <p className="text-[#3A3A3A] leading-relaxed">
                To become India's most trusted and result-driven project finance advisory, enabling large-scale infrastructure, commercial and institutional growth through structured funding solutions.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <Target className="w-12 h-12 text-[#D4A537] mb-4" />
              <h3 className="text-2xl font-bold text-[#D4A537] mb-4">Mission</h3>
              <ul className="space-y-3">
                {[
                  'Bridge the gap between businesses and financial institutions',
                  'Support developers with transparent, high-value funding options',
                  'Deliver tailored financing solutions based on industry and scale',
                  'Ensure seamless execution from documentation to disbursement',
                  'Contribute to India\'s development by enabling capital-intensive projects'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#D4A537] shrink-0 mt-1" />
                    <span className="text-[#3A3A3A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section 
        ref={el => sectionRefs.current[4] = el}
        className={`bg-[#0A2740] py-16 px-4 transition-all duration-1000 ${
          isVisible[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4A537] text-center mb-4">
            Our Strengths & Partnerships
          </h2>
          <p className="text-[#A4C8E1] text-center mb-12 text-lg">
            Four core pillars of strength driving our success
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-500 hover:border-[#D4A537] border border-transparent hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-14 h-14 bg-[#0A2740] rounded-lg flex items-center justify-center mb-4 text-[#D4A537]">
                  {strength.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0A2740] mb-3">
                  {strength.title}
                </h3>
                <p className="text-[#3A3A3A] text-sm leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        ref={el => sectionRefs.current[5] = el}
        className={`bg-white py-16 px-4 transition-all duration-1000 ${
          isVisible[5] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-12">
            What Makes Us Different
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {differentiators.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-3 bg-[#F8F9FB] p-4 rounded-lg hover:bg-[#D4A537]/10 transition-all duration-300 hover:scale-105"
              >
                <CheckCircle className="w-6 h-6 text-[#D4A537] shrink-0 mt-1" />
                <span className="text-[#3A3A3A]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        ref={el => sectionRefs.current[6] = el}
        className={`bg-[#F8F9FB] py-16 px-4 transition-all duration-1000 ${
          isVisible[6] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-4">
            Pan-India Office Locations
          </h2>
          <p className="text-[#123A5A] text-center mb-12 text-lg">
            Wide presence to support projects across India without operational delays
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {offices.map((office, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 text-center hover:scale-110 hover:bg-[#D4A537]/5"
              >
                <MapPin className="w-8 h-8 text-[#D4A537] mx-auto mb-2" />
                <p className="text-[#123A5A] font-semibold">{office}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        ref={el => sectionRefs.current[7] = el}
        className={`bg-linear-to-r from-[#0A2740] to-[#123A5A] py-16 px-4 transition-all duration-1000 ${
          isVisible[7] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Unlock Your Project's Potential?
          </h2>
          <p className="text-xl text-[#A4C8E1] mb-8">
            Partner with India's trusted project finance advisory for structured funding from ₹20 Cr to ₹100 Cr+
          </p>
          <NavLink to="/contact" className="bg-[#D4A537] hover:bg-[#C59230] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 cursor-pointer">
            Get Started Today
          </NavLink>
        </div>
      </section>
    </div>
  );
}