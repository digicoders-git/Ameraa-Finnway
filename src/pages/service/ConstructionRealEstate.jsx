import React, { useEffect, useRef, useState } from 'react';
import { Building2, Home, TrendingUp, CheckCircle, FileText, MapPin, Briefcase, ArrowRight, Shield, Clock, DollarSign, Target } from 'lucide-react';

export default function ConstructionRealEstate() {
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
          { threshold: 0.12 }
        );
        obs.observe(ref);
        return obs;
      });
    
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const fundingCategories = [
    {
      id: 'land-acquisition',
      icon: <MapPin className="w-8 h-8 text-[#D4A537]" aria-hidden="true" />,
      title: 'Land Acquisition Funding',
      description: 'For purchase of freehold land, redevelopment plots, and development rights.'
    },
    {
      id: 'construction',
      icon: <Building2 className="w-8 h-8 text-[#D4A537]" aria-hidden="true" />,
      title: 'Construction Finance',
      description: 'Funding for civil work, RCC structure, interiors, utilities & engineering systems.'
    },
    {
      id: 'bridge-finance',
      icon: <TrendingUp className="w-8 h-8 text-[#D4A537]" aria-hidden="true" />,
      title: 'Pre-Sales / Cashflow Bridge Finance',
      description: 'For projects awaiting customer collections or pre-launch commitments.'
    },
    {
      id: 'township',
      icon: <Home className="w-8 h-8 text-[#D4A537]" aria-hidden="true" />,
      title: 'Infrastructure & Township Development',
      description: 'Roads, amenities, utilities, commercial spaces within integrated projects.'
    }
  ];

  const bankBenefits = [
    'Lower Interest Rates vs private lenders',
    'Longer Repayment Tenure (10–15 year structured options)',
    'Higher Credibility for end-buyers and investors',
    'Better project monitoring improves execution discipline',
    'Lower overall cost of funds → higher developer margin'
  ];

  const eligibilityCriteria = [
    'Clear and marketable land title',
    'Approved DPR / project cost structure',
    'Promoter net-worth & past performance',
    'Sales/lease projections validated via cashflow',
    'Regulatory approvals as applicable (RERA, commencement, layout)',
    'Feasible project IRR and DSCR as per bank norms'
  ];

  const documentCategories = [
    {
      title: 'Promoter & Company Documents',
      docs: [
        'KYC (PAN, Aadhaar, Address Proof)',
        'Last 3 years financial statements',
        'Company profile & completed projects'
      ]
    },
    {
      title: 'Land Documents',
      docs: [
        'Title deed',
        'Mutation / 7/12 extract',
        'Search report',
        'Encumbrance certificate'
      ]
    },
    {
      title: 'Project Documents',
      docs: [
        'DPR / BOQ / cost estimates',
        'Architectural drawings',
        'Sanctioned plan / commencement certificate',
        'Cashflow projections & sales plan'
      ]
    },
    {
      title: 'Bank Documents',
      docs: [
        'GST returns',
        'ITR',
        'Loan application & net-worth statement'
      ]
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Project Intake & Initial Review',
      description: 'We evaluate land title, project feasibility, promoter profile, and DPR.'
    },
    {
      number: '02',
      title: 'DPR Optimization & Bank Matching',
      description: 'We match your project with suitable government banks/NBFCs based on ticket size, locality, and category.'
    },
    {
      number: '03',
      title: 'Proposal Submission & Credit Appraisal',
      description: 'We prepare the complete file, financial model, and cashflow structure.'
    },
    {
      number: '04',
      title: 'Term Sheet Finalization',
      description: 'Bank issues indicative terms and conditions.'
    },
    {
      number: '05',
      title: 'Loan Sanction',
      description: 'Approval of term loan and construction finance.'
    },
    {
      number: '06',
      title: 'Phased Disbursement',
      description: 'Tranche-wise releases tied to actual construction progress.'
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
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Real estate construction and development"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0A2740] opacity-90"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-down">
            Project Finance for Real Estate Developers & Builders
          </h1>
          <p className="text-xl md:text-2xl text-[#A4C8E1] max-w-4xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            Structured Term Loans • Construction Finance • Working Capital Solutions
          </p>
          <div className="w-24 h-1 bg-[#D4A537] mx-auto animate-scale-in animation-delay-400"></div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-6">
            Accelerating Real Estate Growth Through Structured Funding
          </h2>
          <p className="text-lg text-[#3A3A3A] max-w-4xl mx-auto leading-relaxed mb-4">
            We provide end-to-end funding solutions for residential, commercial, and mixed-use real estate developments.
          </p>
          <p className="text-lg text-[#3A3A3A] max-w-4xl mx-auto leading-relaxed">
            Our expertise covers term loans, construction finance, bridge financing, and working capital support for projects ranging from <span className="text-[#D4A537] font-semibold">₹5 Crore to ₹100 Crore+</span>.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F9FB] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-4">
              Comprehensive Funding Support for Developers
            </h2>
            <p className="text-lg text-[#3A3A3A]">Key funding categories include:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {fundingCategories.map((category, idx) => (
              <div
                key={category.id}
                ref={el => sectionRefs.current[idx] = el}
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-[#D4A537] transition-all duration-500 hover:scale-105 ${
                  isVisible[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className=" bg-opacity-10 rounded-xl p-4 shrink-0">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2740] mb-3">
                      {category.title}
                    </h3>
                    <p className="text-[#3A3A3A] leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-[#3A3A3A] text-lg italic">
              Each financing structure is tailored to the project's cashflow cycle and absorption potential.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-4">
              Why Government Banks for Real Estate Projects?
            </h2>
            <p className="text-xl text-[#123A5A] font-semibold">
              Government Banks Provide Strong, Long-Term Stability
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[#3A3A3A] mb-8 text-center">
              Developers prefer government bank funding due to:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {bankBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-[#F8F9FB] p-4 rounded-lg hover:bg-[#D4A537] hover:bg-opacity-10 transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-[#D4A537] shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-[#3A3A3A] leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-linear-to-r from-[#0A2740] to-[#123A5A] rounded-2xl p-8 text-center">
              <p className="text-white text-lg leading-relaxed">
                <span className="text-[#D4A537] font-bold">Government banks + Ameraa Finnway's structured advisory =</span>
                <br />
                Faster approvals + stronger financial credibility + long-term banking relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FB] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-4">
              Eligibility Criteria
            </h2>
            <p className="text-xl text-[#123A5A] font-semibold">
              Who Qualifies for Real Estate Project Finance?
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[#3A3A3A] mb-8 text-center">
              Most real-estate projects qualify if they meet the following:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {eligibilityCriteria.map((criteria, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#D4A537]"
                >
                  <CheckCircle className="w-5 h-5 text-[#D4A537] shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-[#3A3A3A] leading-relaxed">{criteria}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#D4A537] bg-opacity-10 rounded-xl p-6 border-l-4 border-[#D4A537]">
              <p className="text-[#0A2740] font-semibold text-center">
                We pre-screen your project for compliance and bankability before submission.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-4">
              Documents Required
            </h2>
            <p className="text-xl text-[#123A5A] font-semibold">
              Essential Documents for Real Estate Funding
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-[#F8F9FB] rounded-xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#D4A537]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-[#D4A537]" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-[#0A2740]">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.docs.map((doc, docIdx) => (
                    <li
                      key={docIdx}
                      className="flex items-start gap-2 text-sm text-[#3A3A3A]"
                    >
                      <span className="text-[#D4A537] font-bold mt-1">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FB] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-4">
              Our Funding Process
            </h2>
            <p className="text-xl text-[#123A5A] font-semibold">
              A Structured, Transparent & Result-Driven Approach
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 border-transparent hover:border-[#D4A537]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#D4A537] text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2740]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[#3A3A3A] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-linear-to-br from-[#0A2740] to-[#123A5A] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-110 transition-transform duration-300">
              <DollarSign className="w-12 h-12 text-[#D4A537] mx-auto mb-3" aria-hidden="true" />
              <div className="text-4xl font-bold text-[#D4A537] mb-2">₹5-100Cr+</div>
              <div className="text-white text-lg">Funding Range</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <Clock className="w-12 h-12 text-[#D4A537] mx-auto mb-3" aria-hidden="true" />
              <div className="text-4xl font-bold text-[#D4A537] mb-2">15-45 Days</div>
              <div className="text-white text-lg">Typical Approval</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <Shield className="w-12 h-12 text-[#D4A537] mx-auto mb-3" aria-hidden="true" />
              <div className="text-4xl font-bold text-[#D4A537] mb-2">20+ Years</div>
              <div className="text-white text-lg">Experience</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <Target className="w-12 h-12 text-[#D4A537] mx-auto mb-3" aria-hidden="true" />
              <div className="text-4xl font-bold text-[#D4A537] mb-2">100%</div>
              <div className="text-white text-lg">Customized</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-6">
            Ready to Access Structured Real Estate Project Finance?
          </h2>
          <p className="text-lg text-[#3A3A3A] mb-8">
            We help developers secure fast, stable, and high-value funding from leading banks.
          </p>
          <a 
            href="#contact"
            className="group inline-flex items-center gap-3 bg-[#D4A537] hover:bg-[#C59230] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:scale-110"
            aria-label="Apply for real estate finance"
          >
            <span>Apply for Real Estate Finance</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}