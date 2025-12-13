import React from 'react';
import { Building, FileText, Shield, Wallet, TrendingUp, CheckCircle, User, MapPin, ArrowRight, DollarSign, Clock, Target, Award, Briefcase } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Government() {
  const services = [
    {
      title: 'Bank Guarantees (All Types)',
      icon: <Shield className="w-8 h-8 text-[#D4A537]" />,
      description: 'We arrange BGs from government banks & NBFCs:',
      items: [
        {
          name: 'Bid Bond / Earnest Money Deposit (EMD)',
          details: ['Tender submission ke liye', 'Cash deposit ke bina BG route se']
        },
        {
          name: 'Performance Bank Guarantee (PBG)',
          details: ['Work order ke baad required', '5–10% contract value']
        },
        {
          name: 'Advance Payment Guarantee (APG)',
          details: ['Mobilization fund release ke liye', 'Project start karne ke liye essential']
        },
        {
          name: 'Financial BG / Retention Money BG',
          details: ['Retention release', 'Contract value optimization']
        }
      ]
    },
    {
      title: 'Working Capital Limits',
      icon: <Wallet className="w-8 h-8 text-[#D4A537]" />,
      description: 'Government projects me payments milestone-based hoti hain — isliye hum CC limits + OD limits + WC term loans structure karte hain.',
      cashflowSupport: [
        'Material purchase',
        'Labour expenses',
        'Machinery leasing & diesel cost',
        'Sub-contractor payments',
        'Site mobilization & running expenses'
      ]
    },
    {
      title: 'Structured Term Funding for Large Projects',
      icon: <Building className="w-8 h-8 text-[#D4A537]" />,
      projectTypes: [
        'EPC contracts',
        'Road construction',
        'Bridge, culvert, irrigation',
        'Railways, PWD projects',
        'Smart city & electrical tenders'
      ],
      fundingBasis: [
        'Monthly billing projection',
        'Contractor strength',
        'Past execution history',
        'Balance sheet capability'
      ]
    }
  ];

  const supportAreas = [
    'Bid Bonds (EMD Substitution)',
    'Performance Bank Guarantees (PBG)',
    'Advance Payment Guarantees (APG)',
    'Mobilization funding',
    'Cashflow support during project execution'
  ];

  const expertise = [
    'BG margin calculation',
    'Tender compliance review',
    'Work order validation',
    'Monthly RA bill cycle forecasting',
    'Delayed payment risk mapping'
  ];

  const eligibilityCriteria = [
    'Class A/B/C government-registered contractors',
    'EPC, PWD, CPWD, NHAI, PHE, Irrigation contractors',
    'Company/LLP with ongoing projects',
    'Positive net worth (preferably)',
    'Past execution track record'
  ];

  const documentCategories = [
    {
      title: 'Work / Tender Documents',
      icon: <FileText className="w-6 h-6 text-[#D4A537]" />,
      docs: [
        'Tender copy',
        'Work order / LOA',
        'BG format shared by department',
        'Project cost sheet',
        'RA billing schedule'
      ]
    },
    {
      title: 'Company Financials',
      icon: <TrendingUp className="w-6 h-6 text-[#D4A537]" />,
      docs: [
        'Balance sheets (last 3 years)',
        'GST returns',
        'Debtors/creditors list',
        'Past project execution records'
      ]
    },
    {
      title: 'Promoter Documents',
      icon: <User className="w-6 h-6 text-[#D4A537]" />,
      docs: [
        'KYC',
        'Net worth statement',
        'Banking history',
        'Past performance certificates'
      ]
    },
    {
      title: 'BG-Specific Documents',
      icon: <Shield className="w-6 h-6 text-[#D4A537]" />,
      docs: [
        'BG requirement note',
        'BG margin request',
        'Indemnity & collateral detail',
        'Project ID & contractor code'
      ]
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Project & Tender Assessment',
      items: [
        'Tender size',
        'BG requirement',
        'Cashflow gap',
        'Contractor category registration',
        'Execution capability'
      ]
    },
    {
      number: '02',
      title: 'Bank/NBFC Matching',
      description: 'We choose the right institution based on:',
      items: [
        'BG margin requirement',
        'Speed of issuance',
        'Working capital flexibility',
        'Contractor\'s balance sheet strength'
      ]
    },
    {
      number: '03',
      title: 'Documentation & Sanction',
      sections: [
        {
          label: 'We prepare:',
          items: ['Contractor capability note', 'Cashflow model', 'Execution plan', 'Security structure']
        },
        {
          label: 'Bank issues:',
          items: ['WC limit', 'BG sanction', 'APG/PBG as required']
        }
      ]
    },
    {
      number: '04',
      title: 'BG Issuance & Fund Release',
      items: [
        'Swift BG issuance',
        'Mobilization fund release',
        'Start execution',
        'Running bills support'
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

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
          alt="Government infrastructure and construction projects"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0A2740] opacity-90"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-down">
            Working Capital & Bank Guarantees for Government Contractors
          </h1>
          <p className="text-xl md:text-2xl text-[#A4C8E1] max-w-4xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            Specialized financing for contractors, EPC companies, infrastructure developers, and tender-based businesses executing government projects.
          </p>
          <div className="w-24 h-1 bg-[#D4A537] mx-auto animate-scale-in animation-delay-400"></div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-6">
            Finance, BGs & Cashflow Solutions for Government Tender Execution
          </h2>
          
          <p className="text-lg text-[#3A3A3A] max-w-4xl mx-auto leading-relaxed mb-6">
            Government projects require bid participation, performance guarantees, mobilization advance, and strong working capital.
          </p>

          <div className="max-w-3xl mx-auto bg-[#F8F9FB] rounded-xl p-8 border-l-4 border-[#D4A537] mb-8">
            <p className="text-[#0A2740] font-semibold mb-4">AMERAA FINNWAY helps contractors secure:</p>
            <div className="grid md:grid-cols-2 gap-3">
              {supportAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#3A3A3A]">
                  <CheckCircle className="w-5 h-5 text-[#D4A537] shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg text-[#123A5A] font-semibold">
            Hum contractors ko bank-ready documentation + financial structuring ke through high-value tenders execute karne me help karte hain.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F9FB] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-4">
              Complete Financial Support for Contractors Working on Govt Tenders
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-[#D4A537] transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                {services[0].icon}
                <div>
                  <h3 className="text-2xl font-bold text-[#D4A537] mb-2">
                    {services[0].title}
                  </h3>
                  <p className="text-[#3A3A3A]">{services[0].description}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {services[0].items.map((item, idx) => (
                  <div key={idx} className="bg-[#F8F9FB] rounded-lg p-5 border-l-4 border-[#D4A537]">
                    <h4 className="font-bold text-[#0A2740] mb-3 flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#D4A537] mt-0.5 shrink-0" />
                      <span>{item.name}</span>
                    </h4>
                    <ul className="space-y-2 ml-7">
                      {item.details.map((detail, detailIdx) => (
                        <li key={detailIdx} className="text-[#3A3A3A] text-sm flex items-start gap-2">
                          <span className="text-[#D4A537]">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-[#D4A537] transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                {services[1].icon}
                <div>
                  <h3 className="text-2xl font-bold text-[#D4A537] mb-2">
                    {services[1].title}
                  </h3>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-[#0A2740] font-semibold mb-4">Cashflow support including:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {services[1].cashflowSupport.map((support, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[#3A3A3A]">
                      <CheckCircle className="w-5 h-5 text-[#D4A537] shrink-0" />
                      <span>{support}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#F8F9FB] rounded-lg p-5 border-l-4 border-[#D4A537]">
                <p className="text-[#3A3A3A] italic">
                  {services[1].description}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-[#D4A537] transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                {services[2].icon}
                <div>
                  <h3 className="text-2xl font-bold text-[#D4A537] mb-2">
                    {services[2].title}
                  </h3>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-[#0A2740] font-semibold mb-4">For contractors executing high-value works:</p>
                  <div className="space-y-2">
                    {services[2].projectTypes.map((type, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[#3A3A3A]">
                        <CheckCircle className="w-5 h-5 text-[#D4A537] shrink-0" />
                        <span>{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[#0A2740] font-semibold mb-4">We secure funding based on:</p>
                  <div className="space-y-2">
                    {services[2].fundingBasis.map((basis, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[#3A3A3A]">
                        <ArrowRight className="w-5 h-5 text-[#D4A537] shrink-0" />
                        <span>{basis}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-4">
              Why Government Contractors Choose Ameraa Finnway
            </h2>
            <p className="text-xl text-[#123A5A] font-semibold">
              Tender-Based Financing Requires Specialist Advisory
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-[#F8F9FB] rounded-xl p-8 mb-8">
              <p className="text-lg text-[#3A3A3A] mb-6 text-center">
                Humari team government contracting system ko deeply samajhti hai:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {expertise.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#D4A537]"
                  >
                    <CheckCircle className="w-5 h-5 text-[#D4A537] mt-1 shrink-0" />
                    <span className="text-[#3A3A3A]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-linear-to-r from-[#0A2740] to-[#123A5A] rounded-2xl p-8 text-center">
              <p className="text-white text-lg leading-relaxed">
                <span className="text-[#D4A537] font-bold">Is expertise ke wajah se banks aur NBFCs contractors par trust build karte hain.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FB] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-4">
              Eligibility & Document Requirements
            </h2>
            <p className="text-xl text-[#123A5A] font-semibold">
              Eligibility Criteria
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[#3A3A3A] mb-8 text-center">
              Contractors who qualify:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {eligibilityCriteria.map((criteria, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#D4A537]"
                >
                  <CheckCircle className="w-5 h-5 text-[#D4A537] mt-1 shrink-0" />
                  <span className="text-[#3A3A3A]">{criteria}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-4">
              Required Documents
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-[#F8F9FB] rounded-xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#D4A537]"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
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
              Our Contractor Funding Process
            </h2>
            <p className="text-xl text-[#123A5A] font-semibold">
              Fast, Simple & Contractor-Friendly Workflow
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 border-transparent hover:border-[#D4A537]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#D4A537] text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#0A2740] mb-3">
                  {step.title}
                </h3>
                {step.description && (
                  <p className="text-[#3A3A3A] text-sm mb-3">{step.description}</p>
                )}
                {step.items && (
                  <div className="space-y-2">
                    {step.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2">
                        <span className="text-[#D4A537] font-bold">•</span>
                        <span className="text-[#3A3A3A] text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
                {step.sections && (
                  <div className="space-y-4">
                    {step.sections.map((section, sectionIdx) => (
                      <div key={sectionIdx}>
                        <p className="text-[#0A2740] font-semibold text-sm mb-2">{section.label}</p>
                        <div className="space-y-1">
                          {section.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-start gap-2">
                              <span className="text-[#D4A537] font-bold text-xs">•</span>
                              <span className="text-[#3A3A3A] text-xs">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-[#0A2740] to-[#123A5A] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-110 transition-transform duration-300">
              <Shield className="w-12 h-12 text-[#D4A537] mx-auto mb-3" />
              <div className="text-4xl font-bold text-[#D4A537] mb-2">All Types</div>
              <div className="text-white text-lg">Bank Guarantees</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <Briefcase className="w-12 h-12 text-[#D4A537] mx-auto mb-3" />
              <div className="text-4xl font-bold text-[#D4A537] mb-2">Multiple</div>
              <div className="text-white text-lg">Project Types</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <Clock className="w-12 h-12 text-[#D4A537] mx-auto mb-3" />
              <div className="text-4xl font-bold text-[#D4A537] mb-2">Fast</div>
              <div className="text-white text-lg">BG Issuance</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <Target className="w-12 h-12 text-[#D4A537] mx-auto mb-3" />
              <div className="text-4xl font-bold text-[#D4A537] mb-2">100%</div>
              <div className="text-white text-lg">Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-6">
            Get Bank Guarantee Guidance
          </h2>
          <p className="text-lg text-[#3A3A3A] mb-8">
            Secure Bid Bonds, PBG, APG, Working Capital & Financial BGs for your next government tender.
          </p>
          <NavLink 
            to="/apply"
            className="group inline-flex items-center gap-3 bg-[#D4A537] hover:bg-[#C59230] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:scale-110"
          >
            <span>Apply for Contractor Finance</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NavLink>
        </div>
      </section>
    </div>
  );
}