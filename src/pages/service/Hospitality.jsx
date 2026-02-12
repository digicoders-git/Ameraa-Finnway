import React from 'react';
import { Hotel, Building2, Sofa, Rocket, Handshake, TrendingUp, CheckCircle, FileText, User, MapPin, ArrowRight, DollarSign, Clock, Target, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Hospitality() {
  const fundingCategories = [
    {
      icon: <Building2 className="w-8 h-8 text-[#D4A537]" />,
      title: 'Hotel Construction & New Builds',
      items: [
        'Greenfield hospitality projects',
        'Boutique hotels, business hotels, resorts',
        'Multi-storey commercial + hotel combinations',
        'Banquet hall + rooms combo properties'
      ]
    },
    {
      icon: <Sofa className="w-8 h-8 text-[#D4A537]" />,
      title: 'FF&E (Furniture, Fixtures & Equipment)',
      description: 'FF&E hotel CAPEX ka major portion hota hai — hum banks ke through structured FF&E loans arrange karte hain.',
      items: [
        'Beds, furniture, interiors',
        'HVAC, elevators, electrical systems',
        'Kitchen & restaurant equipment',
        'Laundry & housekeeping systems'
      ]
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#D4A537]" />,
      title: 'Pre-Opening Expenses',
      description: 'Hotels open hone se pehle kaafi cost aati hai. Hum in expenses ke liye working capital lines structure karte hain.',
      items: [
        'Staff hiring & training',
        'Marketing launches',
        'Brand audits',
        'Pre-opening hospitality systems',
        'Payroll buffer until occupancy stabilizes'
      ]
    },
    {
      icon: <Handshake className="w-8 h-8 text-[#D4A537]" />,
      title: 'Hotel Franchise / Brand Tie-Ups',
      description: 'Banks brand affiliation ko risk-lowering factor maante hain. Hum documentation prepare karte hain to support this.',
      items: [
        'OYO / Treebo / Fab / Ginger',
        'Radisson / Marriott associate properties',
        'Lemon Tree / Sarovar / Taj gateways',
        'Domestic & international brand agreements'
      ]
    }
  ];

  const whyChooseUs = [
    'ADR (Average Daily Rate)',
    'Occupancy forecasts',
    'Seasonal demand variation',
    'RevPAR projections',
    'FOH + BOH operating models'
  ];

  const eligibilityRequirements = [
    'Clear land title or registered lease',
    'Promoter net worth & banking history',
    'Feasibility report (location demand & tourism impact)',
    'Project cost sheet & construction timelines',
    'Projected financials (occupancy, ADR, RevPAR)',
    'Brand/franchise agreement (if applicable)'
  ];

  const documentCategories = [
    {
      title: 'Project Documents',
      icon: <FileText className="w-6 h-6 text-[#D4A537]" />,
      docs: [
        'DPR / Feasibility Report',
        'Hotel positioning report (business, boutique, resort)',
        'Room inventory & FF&E list',
        'Project cost sheet',
        'Construction drawings & BOQ'
      ]
    },
    {
      title: 'Promoter Documents',
      icon: <User className="w-6 h-6 text-[#D4A537]" />,
      docs: [
        'KYC',
        'Net worth statement',
        'Business background',
        'Existing property financials (if chain hotel)'
      ]
    },
    {
      title: 'Brand / Franchise Documents',
      icon: <Handshake className="w-6 h-6 text-[#D4A537]" />,
      docs: [
        'LOI / MOU with brand',
        'Franchise agreement draft',
        'Brand standards checklist'
      ]
    },
    {
      title: 'Statutory Documents',
      icon: <MapPin className="w-6 h-6 text-[#D4A537]" />,
      docs: [
        'Land ownership/title',
        'NA/NOC approvals',
        'Local authority building approval',
        'Fire, pollution, tourism approvals (if applicable)'
      ]
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Project Intake & Hotel Feasibility Review',
      items: [
        'Location demand',
        'Market competition',
        'ADR trends',
        'Forecasted occupancy',
        'FF&E requirements'
      ]
    },
    {
      number: '02',
      title: 'Bank Matching & Financial Modeling',
      description: 'Banks hospitality projects me model-based sanction dete hain — hum ye kaam aasan kar dete hain.',
      items: [
        'Hotel revenue model',
        'Cashflow justification',
        'Pre-opening cost structure',
        'Loan amortization model',
        'Break-even & IRR study'
      ]
    },
    {
      number: '03',
      title: 'Sanction & Disbursement Roadmap',
      items: [
        'Bank does technical & legal checks',
        'Term loan sanctioned',
        'Disbursement provided on construction milestones + FF&E stages'
      ]
    }
  ];

  const hotelRequirements = [
    'Revenue depends on occupancy, ADR, RevPAR',
    'Cashflows fluctuate by season',
    'Pre-opening expenses are high',
    'FF&E (Furniture, Fixture & Equipment) costs are significant',
    'Brand/franchise agreements impact valuation'
  ];

  const benefits = [
    'Faster approvals',
    'Strong financial modeling',
    'Better loan terms from govt banks',
    'Phased construction disbursement'
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
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury hotel lobby and hospitality"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0A2740] opacity-90"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-down">
            Fast Funding for Hotel Development & Expansion
          </h1>
          <p className="text-xl md:text-2xl text-[#A4C8E1] max-w-4xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            Unlock structured finance for hotel construction, renovation, brand-franchise expansion, and pre-opening operational needs.
          </p>
          <div className="w-24 h-1 bg-[#D4A537] mx-auto animate-scale-in animation-delay-400"></div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-6">
            Tailored Financing Solutions for Hospitality Projects Across India
          </h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-[#3A3A3A] font-semibold mb-4">
              Hotels require a unique financing structure because:
            </p>
            <div className="grid md:grid-cols-2 gap-3 mb-8">
              {hotelRequirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-2 text-[#3A3A3A] text-left">
                  <CheckCircle className="w-5 h-5 text-[#D4A537] mt-1 shrink-0" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg text-[#3A3A3A] max-w-4xl mx-auto leading-relaxed mb-6">
            Amirra Finwaye specializes in structuring <span className="text-[#D4A537] font-semibold">15 Cr. and Above</span> funding for hotel developers, resort owners, and hospitality chains.
          </p>

          <div className="max-w-3xl mx-auto bg-[#F8F9FB] rounded-xl p-6 border-l-4 border-[#D4A537]">
            <p className="text-[#0A2740] font-semibold mb-4">Humari expertise se developers ko milta hai:</p>
            <div className="grid md:grid-cols-2 gap-3">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#3A3A3A]">
                  <ArrowRight className="w-4 h-4 text-[#D4A537]" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FB] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-4">
              Comprehensive Financing Coverage for Hotel Projects
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
              Why Hotels Choose Amirra Finwaye
            </h2>
            <p className="text-xl text-[#123A5A] font-semibold">
              Specialized Financial Structuring for Hospitality Cashflows
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[#F8F9FB] rounded-xl p-8 mb-8">
              <p className="text-lg text-[#3A3A3A] mb-6 text-center">
                Hotels ko general business jaise treat nahi kiya ja sakta — Bank approvals dependent hote hain:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {whyChooseUs.map((item, idx) => (
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
                <span className="text-[#D4A537] font-bold">Hum in sab ka professional model create karke banks ko present karte hain.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FB] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-4">
              Eligibility & Required Documents
            </h2>
            <p className="text-xl text-[#123A5A] font-semibold">
              Eligibility Requirements
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-[#3A3A3A] mb-8 text-center">
              Hotels typically require:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {eligibilityRequirements.map((req, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#D4A537]"
                >
                  <CheckCircle className="w-5 h-5 text-[#D4A537] mt-1 shrink-0" />
                  <span className="text-[#3A3A3A]">{req}</span>
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
              Mandatory Documentation
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
              Our Hotel Funding Process
            </h2>
            <p className="text-xl text-[#123A5A] font-semibold">
              Hospitality-Focused Financing Workflow
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
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
              <div className="text-4xl font-bold text-[#D4A537] mb-2">15 Cr. and Above</div>
              <div className="text-white text-lg">Funding Range</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <Hotel className="w-12 h-12 text-[#D4A537] mx-auto mb-3" />
              <div className="text-4xl font-bold text-[#D4A537] mb-2">All Types</div>
              <div className="text-white text-lg">Hotel Categories</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <Clock className="w-12 h-12 text-[#D4A537] mx-auto mb-3" />
              <div className="text-4xl font-bold text-[#D4A537] mb-2">Fast</div>
              <div className="text-white text-lg">Approval Process</div>
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
            Apply for Hotel Funding
          </h2>
          <p className="text-lg text-[#3A3A3A] mb-8">
            Fast-track your hotel development, expansion, and franchise-based projects with structured financing from leading government banks.
          </p>
          <NavLink 
            to="/apply"
            className="group inline-flex items-center gap-3 bg-[#D4A537] hover:bg-[#C59230] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:scale-110"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NavLink>
        </div>
      </section>
    </div>
  );
}