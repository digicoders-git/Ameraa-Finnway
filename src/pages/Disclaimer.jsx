import React, { useState, useEffect, useRef } from 'react';
import { AlertTriangle, Shield, FileWarning, CheckCircle, XCircle, Mail, Phone, MapPin, Scale, Building2, Clock, UserCheck, Info, AlertCircle } from 'lucide-react';

export default function Disclaimer() {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    sectionRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [idx]: true }));
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(ref);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const disclaimerCards = [
    {
      id: 1,
      icon: <Building2 className="w-8 h-8" />,
      title: "Advisory Nature of Services",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      borderColor: "border-l-4 border-blue-500",
      content: [
        "AMIRRA FINWAYE is a Project Finance Advisory & Business Consulting Firm",
        "We are NOT a bank, NBFC, financial institution, or lender",
        "Our role is limited to advisory, documentation support, and bank coordination",
        "Final decisions (loan sanction, interest rates) are made solely by banks/NBFCs"
      ]
    },
    {
      id: 2,
      icon: <XCircle className="w-8 h-8" />,
      title: "No Guaranteed Funding",
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600",
      borderColor: "border-l-4 border-red-500",
      content: [
        "❌ Does NOT guarantee loan approval",
        "❌ Does NOT promise sanction amounts",
        "❌ Does NOT commit to timelines",
        "❌ Does NOT assure interest rates",
        "Approvals depend on: Project viability, Documentation quality, Bank policy, Promoter net worth"
      ]
    },
    {
      id: 3,
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Accuracy of Information",
      color: "bg-yellow-50 border-yellow-200",
      iconColor: "text-yellow-600",
      borderColor: "border-l-4 border-yellow-500",
      content: [
        "Financial projections are INDICATIVE only",
        "Based on available data & subject to bank verification",
        "Clients must conduct own due diligence",
        "Not liable for losses from incorrect client data or market changes"
      ]
    },
    {
      id: 4,
      icon: <Shield className="w-8 h-8" />,
      title: "Third-Party Institutions",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      borderColor: "border-l-4 border-purple-500",
      content: [
        "We reference banks, NBFCs & financial partners",
        "We do NOT control their: Decision-making, Approval processes, Timelines, Interest rates",
        "Use of third-party links at client's discretion"
      ]
    },
    {
      id: 5,
      icon: <Scale className="w-8 h-8" />,
      title: "No Legal/Tax Advice",
      color: "bg-gray-50 border-gray-200",
      iconColor: "text-gray-600",
      borderColor: "border-l-4 border-gray-500",
      content: [
        "Content is NOT substitute for: Legal advice, Tax advice, Accounting services",
        "Clients should consult own professionals",
        "We provide advisory insights only"
      ]
    },
    {
      id: 6,
      icon: <FileWarning className="w-8 h-8" />,
      title: "Document Submission",
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
      borderColor: "border-l-4 border-orange-500",
      content: [
        "Documents provided voluntarily by clients",
        "Not responsible for: Errors in client documents, Misrepresentation, Delays from incomplete paperwork",
        "Documents used only for funding evaluation"
      ]
    },
    {
      id: 7,
      icon: <Info className="w-8 h-8" />,
      title: "Website Accuracy",
      color: "bg-cyan-50 border-cyan-200",
      iconColor: "text-cyan-600",
      borderColor: "border-l-4 border-cyan-500",
      content: [
        "We strive for accuracy but don't warrant: Error-free content, Always current information, Complete sector data",
        "Content subject to updates without notice"
      ]
    },
    {
      id: 8,
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Limitation of Liability",
      color: "bg-rose-50 border-rose-200",
      iconColor: "text-rose-600",
      borderColor: "border-l-4 border-rose-500",
      content: [
        "NOT liable for: Loss of business, Loss of revenue, Delay in funding, Bank rejection, Market changes",
        "Responsibility limited to advisory efforts only"
      ]
    },
    {
      id: 9,
      icon: <UserCheck className="w-8 h-8" />,
      title: "Consent to Communication",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      borderColor: "border-l-4 border-green-500",
      content: [
        "By submitting details, you authorize contact via: Email, Phone, SMS, WhatsApp",
        "Necessary for advisory & coordination"
      ]
    },
    {
      id: 10,
      icon: <Clock className="w-8 h-8" />,
      title: "Policy Updates",
      color: "bg-indigo-50 border-indigo-200",
      iconColor: "text-indigo-600",
      borderColor: "border-l-4 border-indigo-500",
      content: [
        "We may revise this Disclaimer anytime",
        "Updates posted on this page",
        "Revised effective date will be shown"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-[#0A2740] to-[#123A5A] text-white py-20 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2125')] bg-cover bg-center"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#D4A537] to-[#C59230] rounded-full mb-8 animate-float">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-down">
              Legal Disclaimer
            </h1>
            <p className="text-xl md:text-2xl text-[#A4C8E1] mb-8 animate-fade-in-up animation-delay-200">
              Important Service Boundaries & Limitations
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-[#D4A537] to-[#C59230] mx-auto animate-scale-in animation-delay-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Warning Alert */}
      <section className="bg-gradient-to-r from-yellow-50 to-orange-50 py-8 border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm">
              <AlertTriangle className="w-8 h-8 text-yellow-600 animate-pulse" />
              <div>
                <h3 className="text-lg font-bold text-yellow-800">CRITICAL LEGAL NOTICE</h3>
                <p className="text-yellow-700 text-sm">Read carefully before proceeding</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-yellow-800 font-medium">
                AMIRRA FINWAYE is an ADVISORY FIRM — Not a direct lender
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#0A2740]">11</div>
              <div className="text-sm text-[#3A3A3A]">Key Disclaimers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#0A2740]">100%</div>
              <div className="text-sm text-[#3A3A3A]">Advisory Service</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#0A2740]">0%</div>
              <div className="text-sm text-[#3A3A3A]">Funding Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#0A2740]">Mar'24</div>
              <div className="text-sm text-[#3A3A3A]">Last Updated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Cards Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-4">
              Service Limitations & Boundaries
            </h2>
            <p className="text-lg text-[#123A5A] max-w-3xl mx-auto">
              Clear understanding of what we do and don't guarantee
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {disclaimerCards.map((card, index) => (
              <div
                key={card.id}
                ref={el => sectionRefs.current[index] = el}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                  isVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${card.color} ${card.borderColor}`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${card.color.replace('bg-', 'bg-').replace('-50', '-100')}`}>
                      <div className={card.iconColor}>
                        {card.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#123A5A] uppercase tracking-wider">
                        Disclaimer #{card.id}
                      </div>
                      <h3 className="text-xl font-bold text-[#0A2740]">{card.title}</h3>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {card.content.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${card.iconColor}`}></div>
                        <span className="text-[#3A3A3A] text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <Info className="w-3 h-3" />
                      Important legal boundary
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Understanding Section */}
          <div 
            ref={el => sectionRefs.current[10] = el}
            className={`mt-16 bg-gradient-to-r from-[#0A2740] to-[#123A5A] rounded-2xl p-8 text-white transition-all duration-1000 ${
              isVisible[10] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-[#D4A537] mb-2">⚠️</div>
                      <h3 className="text-2xl font-bold text-white">Core Principle</h3>
                      <p className="text-[#A4C8E1] mt-2">Advisory Only • No Guarantees</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h3 className="text-2xl font-bold text-[#D4A537] mb-6">Essential Understanding</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        What We DO
                      </h4>
                      <ul className="text-[#A4C8E1] text-sm space-y-1">
                        <li>• Project evaluation & advisory</li>
                        <li>• Documentation support</li>
                        <li>• Bank matching & coordination</li>
                        <li>• Financial strategy consulting</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-red-400" />
                        What We DON'T
                      </h4>
                      <ul className="text-[#A4C8E1] text-sm space-y-1">
                        <li>• Guarantee funding approval</li>
                        <li>• Provide direct loans</li>
                        <li>• Control bank decisions</li>
                        <li>• Assure timelines/rates</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-[#D4A537] font-semibold mt-6 text-center">
                    Final funding decisions rest SOLELY with banking partners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Acceptance */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-[#0A2740] mb-6">Contact for Clarifications</h3>
              <div className="space-y-6">
                <div className="bg-[#F8F9FB] rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#D4A537] rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#123A5A]">Email</h4>
                      <a href="mailto:info@ameraafinnway.com" className="text-[#3A3A3A] hover:text-[#D4A537] transition-colors">
                        info@ameraafinnway.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F8F9FB] rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#D4A537] rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#123A5A]">Phone</h4>
                      <div className="space-y-1">
                        <a href="tel:+919076612555" className="text-[#3A3A3A] hover:text-[#D4A537] transition-colors block">
                          +91 90766 12555
                        </a>
                        <a href="tel:+919592171057" className="text-[#3A3A3A] hover:text-[#D4A537] transition-colors block">
                          +91 9592171057
                        </a>
                        
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F8F9FB] rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#D4A537] rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#123A5A]">Head Office</h4>
                      <p className="text-[#3A3A3A]">Lucknow, India</p>
                      <p className="text-sm text-[#123A5A] mt-1">
                        Mumbai • Bangalore • Pune • Hyderabad • Chennai • Indore • Ahmedabad
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Acceptance Box */}
            <div className="bg-gradient-to-br from-[#0A2740] to-[#123A5A] rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                  <UserCheck className="w-7 h-7 text-[#D4A537]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Acceptance Required</h3>
                  <p className="text-[#A4C8E1]">Proceeding indicates understanding</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <span className="text-[#A4C8E1]">I understand AMIRRA FINWAYE is an advisory firm</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <span className="text-[#A4C8E1]">I acknowledge there are NO funding guarantees</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <span className="text-[#A4C8E1]">Final decisions rest with banking partners</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <span className="text-[#A4C8E1]">I've read all disclaimers above</span>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="/apply"
                  className="block w-full bg-[#D4A537] hover:bg-[#C59230] text-white font-semibold py-4 px-6 rounded-lg text-center transition-all duration-200 hover:scale-105"
                >
                  I Accept & Proceed
                </a>
                <a
                  href="/contact"
                  className="block w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-6 rounded-lg text-center transition-all duration-200 border border-white/30"
                >
                  Need Clarification First
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-xs text-[#A4C8E1] text-center">
                  By using our services, you acknowledge reading and understanding this entire disclaimer
                </p>
              </div>
            </div>
          </div>
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
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

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}