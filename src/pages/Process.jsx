import React, { useEffect, useRef, useState } from 'react';
import { FileText, CheckCircle, TrendingUp, ArrowRight, Check } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Process() {
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

  const steps = [
    {
      id: 'step-1',
      number: '01',
      title: 'Share Your Project Plan',
      icon: <FileText className="w-8 h-8 text-[#D4A537]" aria-hidden="true" />,
      description: 'We begin by collecting essential project details, financials, DPR, and promoter documents. Our team reviews the proposal to understand scale, feasibility, and projected ROI.',
      requirements: [
        'DPR (Detailed Project Report)',
        'Project Overview / LOI',
        'Cost Sheet & Financial Projections',
        'Company Profile & Past Performance'
      ]
    },
    {
      id: 'step-2',
      number: '02',
      title: 'Eligibility Assessment & Bank Matching',
      icon: <CheckCircle className="w-8 h-8 text-[#D4A537]" aria-hidden="true" />,
      description: 'Based on your project profile, we match your requirements with the right institutional lenders through our strong network of Government Banks, NBFCs & private institutions.',
      requirements: [
        'Project feasibility & revenue model',
        'Promoter net-worth & capability',
        'Regulatory compliance & land/title clarity',
        'Funding structure required (Term Loan / WC / Mix)'
      ],
      deliverables: [
        'Fast pre-screening',
        'Shortlisted Government Banks / NBFCs',
        'Most suitable funding structure for your sector'
      ]
    },
    {
      id: 'step-3',
      number: '03',
      title: 'Sanction & Disbursement',
      icon: <TrendingUp className="w-8 h-8 text-[#D4A537]" aria-hidden="true" />,
      description: 'Once documents are ready, we coordinate end-to-end with the bank — from sanction to final disbursement — ensuring smooth processing and fast turnaround.',
      requirements: [
        'File preparation as per lender norms',
        'Bank meetings & proposal submission',
        'Credit appraisal & sanction',
        'Structured term loan and/or working capital approval',
        'Tranche-wise disbursement'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
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

        @keyframes drawLine {
          from {
            height: 0;
          }
          to {
            height: 100%;
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

        .animate-draw-line {
          animation: drawLine 1s ease-out forwards;
        }
      `}</style>
      <section className="relative py-20 px-4 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
          alt="Business planning and financial documentation"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0A2740] opacity-90"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-down">
            Our 3-Step Funding Process
          </h1>
          <p className="text-xl md:text-2xl text-[#A4C8E1] max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            Fast • Structured • Result-Driven
          </p>
          <div className="w-24 h-1 bg-[#D4A537] mx-auto animate-scale-in animation-delay-400"></div>
        </div>
      </section>
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-6">
            From Application to Approval
          </h2>
          <p className="text-lg text-[#3A3A3A] max-w-4xl mx-auto leading-relaxed">
            Our proven 3-step process ensures your project receives the right funding through the right channels. 
            With <span className="text-[#D4A537] font-semibold">20+ years</span> of expertise, we've refined a system that delivers results for projects ranging from <span className="text-[#D4A537] font-semibold">₹20 Crore to ₹100 Crore+</span>.
          </p>
        </div>
      </section>
      <section className="bg-[#F8F9FB] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#D4A537] opacity-20 transform -translate-x-1/2"></div>

            {steps.map((step, idx) => (
              <div
                key={step.id}
                ref={el => sectionRefs.current[idx] = el}
                className={`relative mb-16 last:mb-0 transition-all duration-1000 ${
                  isVisible[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 bg-[#D4A537] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl font-bold">{step.number}</span>
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="hidden md:block absolute top-full left-1/2 w-1 h-16 bg-[#D4A537] opacity-20 transform -translate-x-1/2"></div>
                    )}
                  </div>

                  <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#D4A537]">
                    <div className="flex items-start gap-4 mb-6">
                      <div className=" bg-opacity-10 rounded-xl p-4 shrink-0">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0A2740] mb-3">
                          {step.title}
                        </h3>
                        <p className="text-[#3A3A3A] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-[#0A2740] font-semibold mb-4 flex items-center gap-2">
                        <span className="w-8 h-0.5 bg-[#D4A537]" aria-hidden="true"></span>
                        {step.deliverables ? 'What we evaluate:' : 'What we need:'}
                      </h4>
                      <ul className="space-y-3">
                        {step.requirements.map((req, reqIdx) => (
                          <li 
                            key={reqIdx}
                            className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300"
                          >
                            <Check className="w-5 h-5 text-[#D4A537] shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="text-[#3A3A3A]">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {step.deliverables && (
                      <div className="pt-6 border-t border-gray-200">
                        <h4 className="text-[#0A2740] font-semibold mb-4 flex items-center gap-2">
                          <span className="w-8 h-0.5 bg-[#D4A537]" aria-hidden="true"></span>
                          What we deliver:
                        </h4>
                        <ul className="space-y-3">
                          {step.deliverables.map((del, delIdx) => (
                            <li 
                              key={delIdx}
                              className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300"
                            >
                              <Check className="w-5 h-5 text-[#D4A537] shrink-0 mt-0.5" aria-hidden="true" />
                              <span className="text-[#3A3A3A]">{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-linear-to-br from-[#F8F9FB] to-white rounded-2xl p-8 md:p-12 border-2 border-[#D4A537] shadow-xl">
            <p className="text-xl md:text-2xl text-[#0A2740] font-bold text-center leading-relaxed">
              A transparent, structured and time-tested funding process designed for <span className="text-[#D4A537]">₹20 Cr – ₹100 Cr+</span> projects.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FB] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-12">
            Why Our Process Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FileText className="w-8 h-8 text-[#D4A537]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2740] text-center mb-4">
                Thorough Documentation
              </h3>
              <p className="text-[#3A3A3A] text-center leading-relaxed">
                We ensure all documents meet lender requirements, reducing back-and-forth and accelerating approvals
              </p>
            </article>
            <article className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <CheckCircle className="w-8 h-8 text-[#D4A537]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2740] text-center mb-4">
                Strategic Bank Matching
              </h3>
              <p className="text-[#3A3A3A] text-center leading-relaxed">
                Our extensive network allows us to connect you with the most suitable lenders for your specific sector
              </p>
            </article>
            <article className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <TrendingUp className="w-8 h-8 text-[#D4A537]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2740] text-center mb-4">
                End-to-End Support
              </h3>
              <p className="text-[#3A3A3A] text-center leading-relaxed">
                From initial application to final disbursement, we manage every step with expert coordination
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-12">
            Typical Timeline
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#F8F9FB] rounded-xl p-6 text-center border-2 border-transparent hover:border-[#D4A537] transition-all duration-300">
              <div className="text-4xl font-bold text-[#D4A537] mb-2">1-2 Days</div>
              <div className="text-[#0A2740] font-semibold mb-2">Initial Review</div>
              <p className="text-sm text-[#3A3A3A]">Document assessment & eligibility check</p>
            </div>
            <div className="bg-[#F8F9FB] rounded-xl p-6 text-center border-2 border-transparent hover:border-[#D4A537] transition-all duration-300">
              <div className="text-4xl font-bold text-[#D4A537] mb-2">3-7 Days</div>
              <div className="text-[#0A2740] font-semibold mb-2">Bank Matching</div>
              <p className="text-sm text-[#3A3A3A]">Lender selection & proposal preparation</p>
            </div>
            <div className="bg-[#F8F9FB] rounded-xl p-6 text-center border-2 border-transparent hover:border-[#D4A537] transition-all duration-300">
              <div className="text-4xl font-bold text-[#D4A537] mb-2">15-45 Days</div>
              <div className="text-[#0A2740] font-semibold mb-2">Approval & Sanction</div>
              <p className="text-sm text-[#3A3A3A]">Credit appraisal to final sanction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linear-to-r from-[#0A2740] to-[#123A5A] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Begin Your Funding Journey?
          </h2>
          <p className="text-xl text-[#123A5A] mb-8">
            <span className="text-[#A4C8E1]">Start your application today and get expert guidance through every step of the funding process</span>
          </p>
          <NavLink 
            to="/contact"
            className="group inline-flex items-center gap-3 bg-[#D4A537] hover:bg-[#C59230] text-white font-semibold py-4 px-10 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
            aria-label="Start your funding application"
          >
            <span>Start Your Application</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </NavLink>
          <p className="mt-6 text-[#A4C8E1] text-sm">
            Or call us directly for immediate assistance
          </p>
        </div>
      </section>
    </div>
  );
}