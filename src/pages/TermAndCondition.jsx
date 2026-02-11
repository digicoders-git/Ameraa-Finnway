import React, { useState, useEffect, useRef } from 'react';
import { FileText, Scale, Shield, CheckCircle, XCircle, Lock, Building2, Mail, Phone, MapPin, Award, Users, Clock, Globe, PenTool, Handshake } from 'lucide-react';

export default function TermAndCondition() {
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

  const termsCards = [
    {
      id: 1,
      icon: <Handshake className="w-8 h-8" />,
      title: "Introduction & Agreement",
      number: "01",
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      content: [
        "Welcome to AMIRRA FINWAYE ('Company', 'we', 'our', 'us')",
        "By using our website/services, you agree to these Terms",
        "If you disagree, please discontinue use immediately",
        "Our services include: Project Finance Advisory, Business Consulting, Funding Facilitation"
      ]
    },
    {
      id: 2,
      icon: <Building2 className="w-8 h-8" />,
      title: "Nature of Services",
      number: "02",
      color: "bg-gradient-to-br from-green-50 to-green-100",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      doItems: [
        "✓ Prepare & structure project documents",
        "✓ Match projects with suitable lenders",
        "✓ Assist with compliance & bank coordination",
        "✓ Provide business strategy consulting"
      ],
      dontItems: [
        "✗ Guarantee funding approval",
        "✗ Provide loans directly",
        "✗ Charge hidden fees",
        "✗ Assure approval timelines"
      ]
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8" />,
      title: "User Responsibilities",
      number: "03",
      color: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      content: [
        "All information provided must be true & accurate",
        "You have authority to share business/financial details",
        "Incomplete/incorrect info affects project evaluation",
        "No unauthorized access to our website/systems"
      ]
    },
    {
      id: 4,
      icon: <Shield className="w-8 h-8" />,
      title: "Funding Eligibility",
      number: "04",
      color: "bg-gradient-to-br from-amber-50 to-amber-100",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      content: [
        "Approvals depend on: Bank policies, Project feasibility",
        "Documentation completeness, Financial compliance",
        "Promoter profile & creditworthiness, Sector regulations",
        "NO guarantees: Approval, Amount, Timeline, Interest rates"
      ]
    },
    {
      id: 5,
      icon: <FileText className="w-8 h-8" />,
      title: "Fees & Charges",
      number: "05",
      color: "bg-gradient-to-br from-emerald-50 to-emerald-100",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      content: [
        "Fees clearly communicated in advance",
        "Mentioned in writing, Project-specific",
        "Non-refundable if documents processed",
        "NO hidden charges"
      ]
    },
    {
      id: 6,
      icon: <Lock className="w-8 h-8" />,
      title: "Document Confidentiality",
      number: "06",
      color: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      content: [
        "All documents handled confidentially",
        "Shared only with relevant banking partners",
        "Documents submitted voluntarily",
        "Used only for funding evaluation",
        "Can request deletion anytime"
      ]
    },
    {
      id: 7,
      icon: <Scale className="w-8 h-8" />,
      title: "Limitation of Liability",
      number: "07",
      color: "bg-gradient-to-br from-rose-50 to-rose-100",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      content: [
        "NOT responsible for: Bank rejection",
        "Delays by banks/third parties",
        "Losses from incorrect client documents",
        "Financial decisions based on our advisory",
        "Advisory on best-effort basis"
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
        "Website may contain external links",
        "We don't control: Third-party content",
        "Privacy practices of other sites",
        "Terms of external websites",
        "Use links at your discretion"
      ]
    },
    {
      id: 9,
      icon: <PenTool className="w-8 h-8" />,
      title: "Intellectual Property",
      number: "09",
      color: "bg-gradient-to-br from-violet-50 to-violet-100",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      content: [
        "All website content is our property",
        "NOT permitted: Copy, Reproduce, Modify",
        "Redistribute, Republish any content",
        "Requires prior written approval"
      ]
    },
    {
      id: 10,
      icon: <Award className="w-8 h-8" />,
      title: "Indemnification",
      number: "10",
      color: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      content: [
        "You indemnify us from claims arising from:",
        "Misrepresentation of documents",
        "False information provided",
        "Unauthorized website use",
        "Violations of these Terms"
      ]
    },
    {
      id: 11,
      icon: <Clock className="w-8 h-8" />,
      title: "Policy Updates",
      number: "11",
      color: "bg-gradient-to-br from-slate-50 to-slate-100",
      iconBg: "bg-slate-100",
      iconColor: "text-slate-600",
      content: [
        "We may update terms anytime",
        "Revised terms posted on this page",
        "New effective date will be shown",
        "Continued use = acceptance of changes"
      ]
    },
    {
      id: 12,
      icon: <Scale className="w-8 h-8" />,
      title: "Governing Law",
      number: "12",
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      content: [
        "Governed by laws of India",
        "Disputes under Lucknow jurisdiction",
        "Uttar Pradesh courts' authority",
        "Legal compliance as per Indian norms"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F9FB] to-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-[#0A2740] to-[#123A5A] text-white py-20 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070')] bg-cover bg-center"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#D4A537] rounded-full mb-6 animate-float">
              <Scale className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-down">
              Terms & Conditions
            </h1>
            <p className="text-xl md:text-2xl text-[#A4C8E1] mb-8 animate-fade-in-up animation-delay-200">
              Understanding Our Service Agreement
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
              <div className="text-3xl font-bold text-[#0A2740] mb-1">12</div>
              <div className="text-sm text-[#3A3A3A] font-medium">Sections</div>
            </div>
            <div className="text-center p-4 bg-[#F8F9FB] rounded-xl">
              <div className="text-3xl font-bold text-[#0A2740] mb-1">100%</div>
              <div className="text-sm text-[#3A3A3A] font-medium">Legal Compliance</div>
            </div>
            <div className="text-center p-4 bg-[#F8F9FB] rounded-xl">
              <div className="text-3xl font-bold text-[#0A2740] mb-1">Mar'24</div>
              <div className="text-sm text-[#3A3A3A] font-medium">Last Updated</div>
            </div>
            <div className="text-center p-4 bg-[#F8F9FB] rounded-xl">
              <div className="text-3xl font-bold text-[#0A2740] mb-1">India</div>
              <div className="text-sm text-[#3A3A3A] font-medium">Governing Law</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Cards Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-4">
              Service Terms & Legal Framework
            </h2>
            <p className="text-lg text-[#123A5A] max-w-3xl mx-auto">
              Clear understanding of our agreement, responsibilities, and boundaries
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {termsCards.map((card, index) => (
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
                  {/* For Section 2 with DO/DON'T */}
                  {card.id === 2 ? (
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <h4 className="font-semibold text-green-700">We DO:</h4>
                        </div>
                        <ul className="space-y-2">
                          {card.doItems.map((item, idx) => (
                            <li key={idx} className="text-sm text-green-800 pl-7">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <XCircle className="w-5 h-5 text-red-500" />
                          <h4 className="font-semibold text-red-700">We DON'T:</h4>
                        </div>
                        <ul className="space-y-2">
                          {card.dontItems.map((item, idx) => (
                            <li key={idx} className="text-sm text-red-800 pl-7">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <ul className="space-y-3">
                      {card.content.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${card.iconColor}`}></div>
                          <span className="text-[#3A3A3A] text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Card Footer */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Term #{card.id}</span>
                      <span className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-700">
                        Binding Agreement
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Important Notice Section */}
          <div 
            ref={el => sectionRefs.current[12] = el}
            className={`bg-gradient-to-r from-[#0A2740] to-[#123A5A] rounded-3xl p-8 text-white transition-all duration-1000 ${
              isVisible[12] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-2/5">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                    <div className="text-6xl mb-4">⚖️</div>
                    <h3 className="text-2xl font-bold text-white">Legal Binding</h3>
                    <p className="text-[#A4C8E1] mt-2">Read & Understand Carefully</p>
                  </div>
                </div>
                <div className="lg:w-3/5">
                  <h3 className="text-2xl font-bold text-[#D4A537] mb-6">Important Legal Notice</h3>
                  <p className="text-[#A4C8E1] leading-relaxed mb-6">
                    These Terms & Conditions form a legally binding agreement between you and AMIRRA FINWAYE. 
                    By using our services, you acknowledge that you have read, understood, and agreed to all 
                    terms mentioned in the sections above.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-[#D4A537]" />
                        Legal Compliance
                      </h4>
                      <p className="text-[#A4C8E1] text-sm">Verified by legal team</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-[#D4A537]" />
                        Secure Agreement
                      </h4>
                      <p className="text-[#A4C8E1] text-sm">Protected & confidential</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Acceptance */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0A2740] mb-2">Contact Information</h3>
                <p className="text-[#123A5A]">Section 13: For questions about these Terms</p>
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
                      <h4 className="font-bold text-[#0A2740] text-lg">Head Office</h4>
                      <p className="text-[#123A5A] text-lg font-medium">Lucknow, India</p>
                      <p className="text-[#3A3A3A] text-sm mt-1">
                        (Pan-India presence across major cities)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Acceptance Box */}
            <div className="bg-gradient-to-br from-[#0A2740] to-[#123A5A] rounded-2xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                  <Handshake className="w-8 h-8 text-[#D4A537]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Acceptance Required</h3>
                  <p className="text-[#A4C8E1]">Proceeding indicates agreement</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 bg-white/5 rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                  <span className="text-[#A4C8E1]">I have read all 12 sections above</span>
                </div>
                <div className="flex items-start gap-3 bg-white/5 rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                  <span className="text-[#A4C8E1]">I understand AMIRRA FINWAYE is an advisory firm</span>
                </div>
                <div className="flex items-start gap-3 bg-white/5 rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                  <span className="text-[#A4C8E1]">I accept these Terms & Conditions</span>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="/apply"
                  className="block w-full bg-gradient-to-r from-[#D4A537] to-[#C59230] hover:from-[#C59230] hover:to-[#D4A537] text-white font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  ✓ I Accept & Continue to Apply
                </a>
                <a
                  href="/contact"
                  className="block w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-6 rounded-xl text-center transition-all duration-300 border border-white/30"
                >
                  ? Need Clarification First
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-xs text-[#A4C8E1] text-center">
                  By using our services, you legally accept all Terms & Conditions stated herein
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

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(212, 165, 55, 0.5);
          }
          50% {
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

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
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