import React from 'react';
import { Factory, Building2, Cog, Wrench, TrendingUp, Wallet, CheckCircle, FileText, User, MapPin, ArrowRight, DollarSign, Clock, Target, Package } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Manufacturing() {
  const fundingCategories = [
    {
      icon: <Building2 className="w-8 h-8 text-[#D4A537]" />,
      title: 'New Industrial Plant Setup',
      items: [
        'Greenfield factory construction',
        'Heavy manufacturing units',
        'Processing & packaging plants',
        'Assembly lines'
      ]
    },
    {
      icon: <Factory className="w-8 h-8 text-[#D4A537]" />,
      title: 'Plant Expansion & Modernisation',
      items: [
        'Capacity enhancement',
        'Multi-line upgrades',
        'Automation & efficiency tools',
        'Quality compliance upgrades'
      ]
    },
    {
      icon: <Cog className="w-8 h-8 text-[#D4A537]" />,
      title: 'Machinery Procurement Finance',
      description: 'Machinery is a high-value investment — we structure long-tenure loans for smoother repayment cycles.',
      items: [
        'CNC machines',
        'Industrial robotics',
        'Injection moulding',
        'Press machines',
        'Fabrication units',
        'Energy-efficient machinery'
      ]
    },
    {
      icon: <Wallet className="w-8 h-8 text-[#D4A537]" />,
      title: 'Working Capital for Manufacturing',
      description: 'Manufacturing units need a steady cash cycle — our advisory ensures lenders support this requirement.',
      items: [
        'Raw material stocking',
        'Inventory management',
        'Payroll, utilities & operations',
        'Export-oriented production cycles'
      ]
    }
  ];

  const focusAreas = [
    'New industrial plant setup',
    'Expansion of existing units',
    'Modernisation & automation upgrades',
    'Machinery purchase & installation',
    'High-volume working capital'
  ];

  const bankApprovalFactors = [
    'Technical specifications are validated',
    'CAPEX planning is structured',
    'Cashflow cycles match production timelines',
    'Promoter experience supports higher leverage',
    'Compliance documents are complete'
  ];

  const ourStructuring = [
    'CAPEX justification',
    'Machinery technical evaluation',
    'Production cycle revenue modelling',
    'Export-based turnover projections',
    'Bankability scoring documentation'
  ];

  const eligibilityList = [
    'Registered manufacturing companies / LLPs',
    'New plant developers',
    'Existing unit owners expanding capacity',
    'Exporters / domestic supply manufacturers',
    'Industrial land owners with factory plans'
  ];

  const documentCategories = [
    {
      title: 'Technical Documents',
      icon: <Cog className="w-6 h-6 text-[#D4A537]" />,
      docs: [
        'Machinery specifications',
        'Vendor quotations',
        'Capacity & production data',
        'Plant layout drawings',
        'Automation plan (if any)'
      ]
    },
    {
      title: 'CAPEX & Project Financials',
      icon: <TrendingUp className="w-6 h-6 text-[#D4A537]" />,
      docs: [
        'Project cost sheet',
        'CAPEX plan',
        'Working capital cycle',
        'Break-even & revenue projections'
      ]
    },
    {
      title: 'Promoter & Company Documents',
      icon: <User className="w-6 h-6 text-[#D4A537]" />,
      docs: [
        'KYC of promoters',
        'Company financial statements (3 years)',
        'GST returns',
        'Net worth summary',
        'Factory compliance history'
      ]
    },
    {
      title: 'Land / Lease Documents',
      icon: <MapPin className="w-6 h-6 text-[#D4A537]" />,
      docs: [
        'Ownership documents',
        'Registered lease agreement',
        'NA approvals',
        'Industrial zoning clearance'
      ]
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Project Assessment',
      items: [
        'Technical feasibility',
        'CAPEX breakdown',
        'Machinery specs',
        'Operating expenses',
        'Market demand'
      ]
    },
    {
      number: '02',
      title: 'Bank Matching',
      description: 'We match your plant requirements with banks that specialise in:',
      items: [
        'Manufacturing loans',
        'Machinery funding',
        'Export-oriented units',
        'Government subsidies (if applicable)'
      ]
    },
    {
      number: '03',
      title: 'Proposal Structuring',
      items: [
        'Techno-economic viability (TEV) report',
        'Cashflow justification',
        'Repayment capacity modelling',
        'Machinery utilization mapping'
      ]
    },
    {
      number: '04',
      title: 'Sanction & Disbursement',
      items: [
        'Term loan sanction',
        'Machinery finance release',
        'Working capital approval',
        'Phased disbursement'
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

      <section className="relative py-20 px-4 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
          alt="Modern manufacturing plant and industrial facility"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0A2740] opacity-90"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-down">
            Finance for Manufacturing Plants & Industrial Units
          </h1>
          <p className="text-xl md:text-2xl text-[#A4C8E1] max-w-4xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            Structured funding for factory setup, plant expansion, machinery procurement, and working capital needs.
          </p>
          <div className="w-24 h-1 bg-[#D4A537] mx-auto animate-scale-in animation-delay-400"></div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-6">
            Unlock Large-Scale Industrial Growth With Structured Financing
          </h2>
          
          <p className="text-lg text-[#3A3A3A] max-w-4xl mx-auto leading-relaxed mb-6">
            India's manufacturing sector is expanding rapidly — but high CAPEX, machinery costs, land acquisition, and rising operational expenses often limit growth.
          </p>

          <p className="text-lg text-[#3A3A3A] max-w-4xl mx-auto leading-relaxed mb-8">
            AMIRRA FINWAYE specialises in <span className="text-[#D4A537] font-semibold">₹15 Cr. above</span> funding for manufacturing units, helping promoters scale production with strong financial backing.
          </p>

          <div className="max-w-3xl mx-auto bg-[#F8F9FB] rounded-xl p-8 border-l-4 border-[#D4A537]">
            <p className="text-[#0A2740] font-semibold mb-4">We focus on:</p>
            <div className="grid md:grid-cols-2 gap-3">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#3A3A3A]">
                  <CheckCircle className="w-5 h-5 text-[#D4A537] shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
            <p className="text-[#123A5A] font-semibold mt-6">
              Our structured loan models ensure bank approval speed + lower risk perception.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FB] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-4">
              End-to-End Financing for Manufacturing Units
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {fundingCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-[#D4A537] transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2740] mb-3">
                      {category.title}
                    </h3>
                    {category.description && (
                      <p className="text-[#3A3A3A] text-sm mb-4 italic">
                        {category.description}
                      </p>
                    )}
                  </div>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-[#3A3A3A]">
                      <CheckCircle className="w-5 h-5 text-[#D4A537] mt-0.5 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-4">
              Why Manufacturing Companies Choose Us
            </h2>
            <p className="text-xl text-[#123A5A] font-semibold">
              Manufacturing Projects Require Technical + Financial Expertise
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-[#F8F9FB] rounded-xl p-8 mb-8">
              <p className="text-lg text-[#3A3A3A] mb-6 text-center">
                Banks approve manufacturing projects only when:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {bankApprovalFactors.map((factor, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#D4A537]"
                  >
                    <CheckCircle className="w-5 h-5 text-[#D4A537] mt-1 shrink-0" />
                    <span className="text-[#3A3A3A]">{factor}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6 border-l-4 border-[#D4A537]">
                <p className="text-[#0A2740] font-semibold mb-4">Hum ye poora structuring handle karte hain:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {ourStructuring.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[#3A3A3A]">
                      <ArrowRight className="w-4 h-4 text-[#D4A537]" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-linear-to-r from-[#0A2740] to-[#123A5A] rounded-2xl p-8 text-center">
              <p className="text-white text-lg leading-relaxed">
                <span className="text-[#D4A537] font-bold">Result → Faster approvals + better loan terms + confident lenders.</span>
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
              Who Can Apply?
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {eligibilityList.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#D4A537]"
                >
                  <CheckCircle className="w-5 h-5 text-[#D4A537] mt-1 shrink-0" />
                  <span className="text-[#3A3A3A]">{item}</span>
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
              Required Documentation
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
              Our Industrial Funding Process
            </h2>
            <p className="text-xl text-[#123A5A] font-semibold">
              A Structured Workflow Designed for Factory Projects
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
                  <p className="text-[#3A3A3A] text-sm italic mb-4">
                    {step.description}
                  </p>
                )}
                <div className="space-y-2">
                  {step.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2">
                      <span className="text-[#D4A537] font-bold">•</span>
                      <span className="text-[#3A3A3A] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-[#0A2740] to-[#123A5A] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-110 transition-transform duration-300">
              <DollarSign className="w-12 h-12 text-[#D4A537] mx-auto mb-3" />
              <div className="text-4xl font-bold text-[#D4A537] mb-2">15 Cr. above</div>
              <div className="text-white text-lg">Funding Range</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <Factory className="w-12 h-12 text-[#D4A537] mx-auto mb-3" />
              <div className="text-4xl font-bold text-[#D4A537] mb-2">All Types</div>
              <div className="text-white text-lg">Manufacturing Units</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <Clock className="w-12 h-12 text-[#D4A537] mx-auto mb-3" />
              <div className="text-4xl font-bold text-[#D4A537] mb-2">Fast</div>
              <div className="text-white text-lg">Processing Time</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <Target className="w-12 h-12 text-[#D4A537] mx-auto mb-3" />
              <div className="text-4xl font-bold text-[#D4A537] mb-2">100%</div>
              <div className="text-white text-lg">Customized</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-6">
            Finance My Plant
          </h2>
          <p className="text-lg text-[#3A3A3A] mb-8">
            Scale your manufacturing capabilities with structured funding from government banks and top NBFC partners.
          </p>
          <a 
            href="#contact"
            className="group inline-flex items-center gap-3 bg-[#D4A537] hover:bg-[#C59230] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:scale-110"
          >
            <NavLink to='/apply'>Apply for Manufacturing Finance</NavLink>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}