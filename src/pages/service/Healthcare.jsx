import React, { useEffect, useRef, useState } from 'react';
import { Hospital, Activity, Stethoscope, Building2, Wrench, TestTube, Wallet, TrendingUp, FileText, User, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Healthcare = () => {
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((section) => {
      observerRef.current.observe(section);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const fundingOptions = [
    {
      icon: <Hospital className="w-12 h-12" />,
      title: "New Hospital Construction",
      items: [
        "Greenfield multi-specialty & super-specialty hospitals",
        "Day-care surgical centers",
        "50–500+ bed setups"
      ]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Hospital Expansion & Renovation",
      items: [
        "Adding ICU, NICU, OT theatres",
        "New wings, beds, or specialty departments",
        "Facility modernisation & compliance upgrades"
      ]
    },
    {
      icon: <TestTube className="w-12 h-12" />,
      title: "Equipment Finance",
      items: [
        "MRI, CT, X-Ray, Cath Labs",
        "Surgical & anesthesia equipment",
        "Diagnostic & laboratory machinery"
      ]
    },
    {
      icon: <Wallet className="w-12 h-12" />,
      title: "Working Capital for Healthcare Operations",
      items: [
        "Staff salaries & onboarding",
        "Pharmacy & consumables",
        "Operational expenses until breakeven"
      ]
    }
  ];

  const differentiators = [
    "We model OPD/IPD patient projections",
    "Specialty-wise revenue and ARPOB calculations",
    "Equipment utilization & payback modelling",
    "Break-even analysis & IRR calculations",
    "Bed occupancy forecasts",
    "Long-term cash flow mapping for 7–10 years"
  ];

  const documents = [
    {
      category: "Project Documentation",
      icon: <FileText className="w-8 h-8" />,
      items: [
        "Detailed DPR with patient projection model",
        "Feasibility study (if available)",
        "Equipment list + vendor quotations",
        "Clinical service mix plan"
      ]
    },
    {
      category: "Promoter / Management Documents",
      icon: <User className="w-8 h-8" />,
      items: [
        "Promoter CVs / doctor profile summary",
        "Past experience in healthcare",
        "Private practice records (if applicable)",
        "Company registration & financials (3 years)"
      ]
    },
    {
      category: "Land & Statutory Approvals",
      icon: <MapPin className="w-8 h-8" />,
      items: [
        "Land title documents",
        "Conversion / NA / land use permissions",
        "Local building approvals",
        "AERB approval (for radiology), Fire NOC, Pollution NOC (as applicable)",
        "Health department approval (if required in the state)"
      ]
    },
    {
      category: "Financial Documents",
      icon: <TrendingUp className="w-8 h-8" />,
      items: [
        "ITR / Balance Sheet (3 years)",
        "GST filings",
        "Net worth statement",
        "Cashflow projections"
      ]
    }
  ];

  const processSteps = [
    {
      step: "STEP 1",
      title: "Project Assessment",
      description: "We evaluate DPR, revenue model, location demand, equipment requirements, and promoter expertise."
    },
    {
      step: "STEP 2",
      title: "Bank Matching",
      description: "Hospitals require strong credit justification — we match your project to banks with healthcare-friendly lending guidelines."
    },
    {
      step: "STEP 3",
      title: "Credit Proposal Preparation",
      description: "Includes: DPR optimization, Equipment justification, Revenue modelling, Department viability mapping, Cashflow structuring"
    },
    {
      step: "STEP 4",
      title: "Sanction & Term Loan Issue",
      description: "Bank issues the financial sanction after technical & legal checks."
    },
    {
      step: "STEP 5",
      title: "Phased Disbursement",
      description: "Funds are released based on construction and equipment procurement milestones."
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
          src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop"
          alt="Modern hospital and healthcare facility"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0A2740] opacity-90"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-down">
            Fund New Hospitals, Diagnostic Centers & Medical Equipment
          </h1>
          <p className="text-xl md:text-2xl text-[#A4C8E1] max-w-4xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            Premium hospital project finance for greenfield setups, expansions, equipment purchase, and working capital.
          </p>
          <div className="w-24 h-1 bg-[#D4A537] mx-auto animate-scale-in animation-delay-400"></div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-6">
            Specialized Financing for Hospitals & Healthcare Infrastructure
          </h2>
          <p className="text-lg text-[#3A3A3A] max-w-4xl mx-auto leading-relaxed mb-4">
            Healthcare is a capital-intensive sector that requires structured financing, strong documentation, and accurate revenue modelling.
            AMIRRA FINWAYE provides 15 cr. and Above hospital project finance tailored to operational and regulatory requirements.
          </p>
          <p className="text-lg text-[#3A3A3A] max-w-4xl mx-auto leading-relaxed">
            We support healthcare providers through every stage — planning, documentation, bank evaluation, credit appraisal, and disbursement.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F9FB] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-4">
              Comprehensive Funding for Healthcare Projects
            </h2>
            <p className="text-lg text-[#3A3A3A]">We structure financing for:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {fundingOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-[#D4A537] transition-all duration-500 hover:scale-105"
              >
                <div className="text-[#D4A537] mb-4">{option.icon}</div>
                <h3 className="text-xl font-bold text-[#0A2740] mb-4">{option.title}</h3>
                <ul className="space-y-3">
                  {option.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-[#3A3A3A]">
                      <CheckCircle className="w-5 h-5 text-[#D4A537] mr-3 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 shadow-md border-l-4 border-[#D4A537]">
            <p className="text-[#0A2740] text-lg font-semibold mb-4">Each solution is structured as per:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {["projected patient inflow", "revenue cycle", "specialty mix", "local demand", "equipment utilisation"].map((item, idx) => (
                <div key={idx} className="flex items-center text-[#3A3A3A]">
                  <ArrowRight className="w-5 h-5 text-[#D4A537] mr-2" />
                  <span>{item}</span>
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
              WHY HEALTHCARE PROJECTS CHOOSE US
            </h2>
            <p className="text-xl text-[#123A5A] font-semibold mb-4">
              Deep Understanding of Hospital Cashflows & Revenue Models
            </p>
            <p className="text-lg text-[#3A3A3A] max-w-3xl mx-auto">
              Banks evaluate hospitals on very specific metrics. Humari strength yahi hai ki hum complete financial modelling + viability justification prepare karte hain.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-[#3A3A3A] mb-8 text-center">
              We help developers get faster approvals because:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-[#F8F9FB] p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#D4A537]"
                >
                  <div className="w-3 h-3 bg-[#D4A537] rounded-full mt-2 shrink-0"></div>
                  <span className="text-[#3A3A3A] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-linear-to-r from-[#0A2740] to-[#123A5A] rounded-2xl p-8 text-center">
              <p className="text-white text-lg leading-relaxed">
                <span className="text-[#D4A537] font-bold">This gives confidence to the bank and multiplies the approval speed.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F9FB] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-4">
              Documents Required
            </h2>
            <p className="text-xl text-[#123A5A] font-semibold">
              Healthcare Projects Must Provide the Following:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#D4A537]"
              >
                <div className="flex items-center mb-6">
                  <div className="text-[#D4A537] mr-4">{doc.icon}</div>
                  <h3 className="text-[#0A2740] font-bold text-xl">{doc.category}</h3>
                </div>
                <ul className="space-y-3">
                  {doc.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-[#3A3A3A]">
                      <CheckCircle className="w-5 h-5 text-[#D4A537] mr-3 mt-1 shrink-0" />
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
              Our Funding Process
            </h2>
            <p className="text-xl text-[#123A5A] font-semibold">
              A Bank-Ready Framework Designed for Hospital Projects
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-[#F8F9FB] rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 border-transparent hover:border-[#D4A537]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#D4A537] text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2740]">
                    {step.step}
                  </h3>
                </div>
                <h4 className="text-[#0A2740] font-semibold mb-3">{step.title}</h4>
                <p className="text-[#3A3A3A] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FB] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-6">
            Talk to Our Healthcare Funding Specialist
          </h2>
          <p className="text-lg text-[#3A3A3A] mb-8">
            Get expert support for hospital construction, expansion, machinery finance, and working capital planning.
          </p>
          <a 
            href="#contact"
            className="group inline-flex items-center gap-3 bg-[#D4A537] hover:bg-[#C59230] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:scale-110"
          >
            <NavLink to='/apply'>Start Your Healthcare Funding Journey</NavLink>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
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
    </div>
  );
};

export default Healthcare;