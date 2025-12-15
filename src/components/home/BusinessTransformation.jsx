import React from "react";
import Graphic from '../../assets/Graphic.png'
import Square from '../../assets/Square.png'
import Ngr from '../../assets/Ngr.png'

const BusinessTransformation = () => {
  return (
    <div>
      {/* Business Transformation Framework Section */}
      <section className="bg-[#F8F9FB] py-20 scroll-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          {/* <div className="text-center mb-16">
            <h2 className="text-[#0A2740] text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down">
              Integrated Framework for Business Transformation
            </h2>
            <p className="text-xl text-[#123A5A] max-w-3xl mx-auto mb-6 animate-fade-in-up animation-delay-200">
              A strategic model designed to accelerate enterprise value —
              through structured consulting, capital enablement, and operational
              excellence.
            </p>
            <div className="w-24 h-1 bg-[#D4A537] mx-auto animate-scale-in animation-delay-400"></div>
          </div> */}

          {/* Main Overview */}
          {/* <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-[#D4A537] animate-fade-in animation-delay-600">
              <p className="text-lg text-[#3A3A3A] leading-relaxed mb-4">
                At Ameraa Finnway, we follow a deeply integrated approach that
                strengthens every pillar of an organisation — strategy, capital,
                and operations. Our framework ensures that businesses not only
                secure the right funding but also evolve into scalable,
                resilient, and high-performance enterprises.
              </p>
              <p className="text-lg text-[#3A3A3A] leading-relaxed">
                Through this model, we help founders and management teams shift
                from reactive decision-making to data-backed, future-proof
                growth.
              </p>
            </div>
          </div> */}

          {/* Main Graphic Container */}
          <div className="relative mb-16">
            <div className="flex justify-center">
              <div className="relative w-full max-w-4xl">
                {/* Graphic Image with proper styling */}
                <div className="flex justify-center">
                  <div className="relative w-full max-w lg:max-w-xl">
                    <img 
                      src={Ngr} 
                      alt="Business Transformation Framework Graphic showing the three pillars of Strategic Consulting, Capital Formation, and Operational Excellence converging to create Accelerated Enterprise Value"
                      className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: '1rem',
                        border: '2px solid rgba(212, 165, 55, 0.2)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        backgroundColor: 'white',
                        padding: '1rem'
                      }}
                    />
                    
                    {/* Optional: Add decorative elements around the image */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#D4A537] rounded-tl-lg"></div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#D4A537] rounded-tr-lg"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#D4A537] rounded-bl-lg"></div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#D4A537] rounded-br-lg"></div>
                  </div>
                </div>
                
                {/* Optional: Add caption text below image */}
                <div className="text-center mt-6">
                  <p className="text-sm text-[#123A5A] italic">
                    Our integrated framework connects Strategy, Capital & Operations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Pillars of Transformation */}
          {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in animation-delay-800">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                      Pillar 01
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A2740]">
                      Strategic Consulting
                    </h3>
                  </div>
                </div>

                <p className="text-[#3A3A3A] mb-6">
                  We work closely with leadership teams to define clear business
                  direction and unlock competitive advantage.
                </p>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-bold text-blue-700 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    What we deliver:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Business Strategy Planning – Clear roadmap to scale operations, revenue and market footprint",
                      "Market Positioning & Differentiation – Build a winning brand presence in competitive markets",
                      "Expansion, Scaling & Growth Architecture – Structured plan to grow profitably across new regions or categories",
                      "Strategic Advisory for High-Value Decisions – Backed by data intelligence and industry-led insights",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-blue-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in animation-delay-1000">
              <div className="h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                      Pillar 02
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A2740]">
                      Capital Formation
                    </h3>
                  </div>
                </div>

                <p className="text-[#3A3A3A] mb-6">
                  Our expertise lies in securing high-value funding from
                  Government Banks, NBFCs, and private financial institutions.
                </p>

                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    What we deliver:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Project Funding & Large-Term Loans (₹20 Cr – ₹100 Cr+) – For Real Estate, Hospitals, Education, Manufacturing & Infrastructure",
                      "Financial Modeling & Feasibility – Bank-ready projections, cash flow mapping, and viability assessments",
                      "Investor Relations & Capital Structuring – Support for blended finance, equity-debt strategies, and institutional partnerships",
                      "Investment Enablement – Connecting businesses with the right funding partners",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-green-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in animation-delay-1200">
              <div className="h-2 bg-gradient-to-r from-gray-500 to-gray-600"></div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                      Pillar 03
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A2740]">
                      Operational Excellence
                    </h3>
                  </div>
                </div>

                <p className="text-[#3A3A3A] mb-6">
                  Strengthening internal processes so the organisation performs
                  with consistency and efficiency.
                </p>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    What we deliver:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Process Improvement & System Optimisation – Reduce leakages, improve delivery, and streamline workflow",
                      "Supply Chain Design & Operational Control – Boost performance across production, logistics & vendor systems",
                      "Compliance, Governance & Controls – Ensure risk-free, structured, and audit-ready operations",
                      "Performance Optimization – Driving measurable improvement in business output",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          {/* CTA Section */}
          <div className="text-center animate-fade-in animation-delay-1400">
            <h3 className="text-2xl font-bold text-[#0A2740] mb-6">
              Ready to Transform Your Business?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/growth-advisory"
                className="inline-flex items-center justify-center bg-[#D4A537] hover:bg-[#C59230] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Explore Growth Advisory
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-[#D4A537] text-[#D4A537] hover:bg-[#D4A537] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Book Strategy Session
              </a>
            </div>
          </div>
        </div>

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

          @keyframes pulse {
            0%,
            100% {
              opacity: 0.3;
            }
            50% {
              opacity: 0.5;
            }
          }

          @keyframes pulseSlow {
            0%,
            100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.02);
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

          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
            opacity: 0;
          }

          .animate-pulse {
            animation: pulse 2s ease-in-out infinite;
          }

          .animate-pulse-slow {
            animation: pulseSlow 3s ease-in-out infinite;
          }

          .animation-delay-200 {
            animation-delay: 0.2s;
          }

          .animation-delay-400 {
            animation-delay: 0.4s;
          }

          .animation-delay-600 {
            animation-delay: 0.6s;
          }

          .animation-delay-800 {
            animation-delay: 0.8s;
          }

          .animation-delay-1000 {
            animation-delay: 1s;
          }

          .animation-delay-1200 {
            animation-delay: 1.2s;
          }

          .animation-delay-1400 {
            animation-delay: 1.4s;
          }

          @media (max-width: 768px) {
            .animate-fade-in-up,
            .animate-scale-in,
            .animate-fade-in {
              animation: none;
              opacity: 1;
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default BusinessTransformation;