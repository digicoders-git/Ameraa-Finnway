import React, { useState, useEffect, useRef } from 'react';
import { Shield, Lock, FileText, Users, Building2, CheckCircle, Mail, Phone, MapPin, Database, Eye, Share2, Clock, Key, Globe, RefreshCw, AlertTriangle } from 'lucide-react';

export default function PrivacyAndPolicy() {
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

  const privacyCards = [
    {
      id: 1,
      icon: <Shield className="w-8 h-8" />,
      title: "Introduction",
      number: "01",
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      content: [
        "Amirra Finwaye is committed to protecting your privacy",
        "Explains how we collect, use, disclose & safeguard information",
        "Applies to website visits & project submissions",
        "By using our services, you consent to this policy"
      ]
    },
    {
      id: 2,
      icon: <Database className="w-8 h-8" />,
      title: "Information We Collect",
      number: "02",
      color: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      subsections: [
        {
          title: "Personal Information",
          items: ["Name", "Phone", "Email", "Company", "Location", "ID Documents"]
        },
        {
          title: "Project Information",
          items: ["DPR/Reports", "Financials", "Bank Statements", "GST", "Property Docs"]
        },
        {
          title: "Technical Data",
          items: ["IP Address", "Browser Info", "Pages Visited", "Time Spent"]
        }
      ]
    },
    {
      id: 3,
      icon: <Eye className="w-8 h-8" />,
      title: "How We Use Information",
      number: "03",
      color: "bg-gradient-to-br from-green-50 to-green-100",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      content: [
        "✓ Project evaluation & eligibility check",
        "✓ Documentation & compliance processing",
        "✓ Communication & follow-up",
        "✓ Internal data analysis",
        "✓ Legal & regulatory requirements",
        "❌ We do NOT sell, rent, or misuse your data"
      ]
    },
    {
      id: 4,
      icon: <Share2 className="w-8 h-8" />,
      title: "Information Sharing",
      number: "04",
      color: "bg-gradient-to-br from-amber-50 to-amber-100",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      content: [
        "Shared ONLY with: Banking institutions",
        "Internal team & verified associates",
        "For legal compliance requirements",
        "❌ NOT shared with: Advertisers",
        "Marketing agencies, Unrelated third parties"
      ]
    },
    {
      id: 5,
      icon: <Lock className="w-8 h-8" />,
      title: "Data Security",
      number: "05",
      color: "bg-gradient-to-br from-emerald-50 to-emerald-100",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      content: [
        "Encrypted storage systems",
        "Limited internal access controls",
        "Secured servers & authentication",
        "Protected document transmission",
        "Enterprise-grade security protocols"
      ]
    },
    {
      id: 6,
      icon: <Clock className="w-8 h-8" />,
      title: "Storage Duration",
      number: "06",
      color: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      content: [
        "During project evaluation period",
        "As required for compliance",
        "Until deletion request by you",
        "Documents can be permanently deleted",
        "Minimal retention principle"
      ]
    },
    {
      id: 7,
      icon: <Key className="w-8 h-8" />,
      title: "Your Rights",
      number: "07",
      color: "bg-gradient-to-br from-rose-50 to-rose-100",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      content: [
        "Access to your submitted data",
        "Correction of inaccurate information",
        "Deletion of your documents",
        "Withdrawal from funding process",
        "Data portability rights"
      ]
    },
    {
      id: 8,
      icon: <Globe className="w-8 h-8" />,
      title: "Third-Party Links",
      number: "08",
      color: "bg-gradient-to-br from-cyan-50 to-cyan-100",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      content: [
        "Website may include external links",
        "We are NOT responsible for:",
        "Third-party website content",
        "Their privacy practices",
        "Use external links at your discretion"
      ]
    },
    {
      id: 9,
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Policy Updates",
      number: "09",
      color: "bg-gradient-to-br from-violet-50 to-violet-100",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      content: [
        "We may update this policy",
        "Changes posted on this page",
        "Updated effective date shown",
        "Continued use = acceptance",
        "Review periodically for updates"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F9FB] to-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-[#0A2740] to-[#123A5A] text-white py-20 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070')] bg-cover bg-center"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#D4A537] rounded-full mb-6 animate-bounce-slow">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-down">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-[#A4C8E1] mb-8 animate-fade-in-up animation-delay-200">
              Protecting Your Information with Integrity & Transparency
            </p>
            <div className="w-24 h-1 bg-[#D4A537] mx-auto animate-scale-in animation-delay-400"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-[#F8F9FB] rounded-xl">
              <div className="text-3xl font-bold text-[#0A2740] mb-1">100%</div>
              <div className="text-sm text-[#3A3A3A] font-medium">Data Protection</div>
            </div>
            <div className="text-center p-4 bg-[#F8F9FB] rounded-xl">
              <div className="text-3xl font-bold text-[#0A2740] mb-1">0</div>
              <div className="text-sm text-[#3A3A3A] font-medium">Data Sales</div>
            </div>
            <div className="text-center p-4 bg-[#F8F9FB] rounded-xl">
              <div className="text-3xl font-bold text-[#0A2740] mb-1">Mar'24</div>
              <div className="text-sm text-[#3A3A3A] font-medium">Last Updated</div>
            </div>
            <div className="text-center p-4 bg-[#F8F9FB] rounded-xl">
              <div className="text-3xl font-bold text-[#0A2740] mb-1">Enterprise</div>
              <div className="text-sm text-[#3A3A3A] font-medium">Security Grade</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Cards Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-4">
              Our Privacy Commitment
            </h2>
            <p className="text-lg text-[#123A5A] max-w-3xl mx-auto">
              Clear policies on data collection, usage, protection, and your rights
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {privacyCards.map((card, index) => (
              <div
                key={card.id}
                ref={el => sectionRefs.current[index] = el}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl border border-gray-100 ${
                  isVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Card Header */}
                <div className={`p-6 ${card.color} relative`}>
                  <div className="absolute top-4 right-4 text-4xl font-bold text-black/5">
                    {card.number}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${card.iconBg} shadow-md`}>
                      <div className={card.iconColor}>
                        {card.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#123A5A] uppercase tracking-wider">
                        Section {card.number}
                      </div>
                      <h3 className="text-xl font-bold text-[#0A2740]">{card.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* For Section 2 with Subsections */}
                  {card.id === 2 ? (
                    <div className="space-y-4">
                      {card.subsections.map((subsection, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-[#0A2740] mb-2 flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${card.iconColor}`}></div>
                            {subsection.title}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {subsection.items.map((item, itemIdx) => (
                              <span key={itemIdx} className="text-xs bg-white px-2 py-1 rounded border border-gray-200 text-gray-700">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-3">
                      {card.content.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          {item.startsWith('✓') ? (
                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          ) : item.startsWith('❌') ? (
                            <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                          ) : (
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${card.iconColor}`}></div>
                          )}
                          <span className={`text-sm leading-relaxed ${
                            item.startsWith('✓') ? 'text-green-700' : 
                            item.startsWith('❌') ? 'text-red-700' : 'text-[#3A3A3A]'
                          }`}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Card Footer */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Policy #{card.id}</span>
                      <span className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-700">
                        Privacy Protected
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Security Commitment Section */}
          <div 
            ref={el => sectionRefs.current[9] = el}
            className={`bg-gradient-to-r from-[#0A2740] to-[#123A5A] rounded-3xl p-8 text-white transition-all duration-1000 ${
              isVisible[9] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-2/5">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                    <div className="text-6xl mb-4">🔒</div>
                    <h3 className="text-2xl font-bold text-white">Security First</h3>
                    <p className="text-[#A4C8E1] mt-2">Enterprise-Grade Protection</p>
                  </div>
                </div>
                <div className="lg:w-3/5">
                  <h3 className="text-2xl font-bold text-[#D4A537] mb-6">Our Security Commitment</h3>
                  <p className="text-[#A4C8E1] leading-relaxed mb-6">
                    At Amirra Finwaye, we implement enterprise-grade security protocols to protect your data. 
                    From encrypted storage to limited access controls, we ensure your information remains 
                    confidential and secure throughout our engagement.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-[#D4A537]" />
                        Encrypted Storage
                      </h4>
                      <p className="text-[#A4C8E1] text-sm">All sensitive data encrypted</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-[#D4A537]" />
                        Limited Access
                      </h4>
                      <p className="text-[#A4C8E1] text-sm">Strict internal access controls</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Rights Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0A2740] mb-2">Contact Us</h3>
                <p className="text-[#123A5A]">Section 10: For privacy policy queries</p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#F8F9FB] to-white rounded-2xl p-6 shadow-md border border-gray-100">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#D4A537] to-[#C59230] rounded-xl flex items-center justify-center shadow-lg">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0A2740] text-lg">Email Address</h4>
                      <a href="mailto:info@ameraafinnway.com" className="text-[#123A5A] hover:text-[#D4A537] transition-colors text-lg font-medium">
                        info@ameraafinnway.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#F8F9FB] to-white rounded-2xl p-6 shadow-md border border-gray-100">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#D4A537] to-[#C59230] rounded-xl flex items-center justify-center shadow-lg">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0A2740] text-lg">Phone Number</h4>
                      <div className="space-y-1">
                        
                        <a href="tel:+919076612555" className="text-[#123A5A] hover:text-[#D4A537] transition-colors text-lg font-medium block">
                          +91 90766 12555
                        </a>
                        <a href="tel:+919592171057" className="text-[#123A5A] hover:text-[#D4A537] transition-colors text-lg font-medium block">
                          +91 9592171057
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#F8F9FB] to-white rounded-2xl p-6 shadow-md border border-gray-100">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#D4A537] to-[#C59230] rounded-xl flex items-center justify-center shadow-lg">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0A2740] text-lg">Office Locations</h4>
                      <p className="text-[#123A5A] text-lg font-medium">Lucknow (Head Office)</p>
                      <p className="text-[#3A3A3A] text-sm mt-1">
                        Mumbai • Bangalore • Pune • Hyderabad • Chennai • Indore • Ahmedabad
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights Box */}
            <div className="bg-gradient-to-br from-[#0A2740] to-[#123A5A] rounded-2xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                  <Key className="w-8 h-8 text-[#D4A537]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Your Data Rights</h3>
                  <p className="text-[#A4C8E1]">Section 7: What you can request</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 bg-white/5 rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Access Rights</h4>
                    <p className="text-[#A4C8E1] text-sm">Request access to your submitted data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/5 rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Correction Rights</h4>
                    <p className="text-[#A4C8E1] text-sm">Request correction of inaccurate information</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/5 rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Deletion Rights</h4>
                    <p className="text-[#A4C8E1] text-sm">Request deletion of your documents</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/5 rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Withdrawal Rights</h4>
                    <p className="text-[#A4C8E1] text-sm">Withdraw from funding process anytime</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-[#D4A537] to-[#C59230] hover:from-[#C59230] hover:to-[#D4A537] text-white font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Exercise Your Rights
                </a>
                {/* <a
                  href="/download-policy"
                  className="block w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-6 rounded-xl text-center transition-all duration-300 border border-white/30"
                >
                  Download Policy PDF
                </a> */}
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-xs text-[#A4C8E1] text-center">
                  Your privacy is our priority. We never sell or misuse your data.
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

        @keyframes pulseSlow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(212, 165, 55, 0.5);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 40px rgba(212, 165, 55, 0.8);
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

        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
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