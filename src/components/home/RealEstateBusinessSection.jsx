import React from "react";
import { Building2, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const RealEstateBusinessSection = () => {
  return (
    <>
      {/* Real Estate Specialized Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4A537] rounded-full mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-4">
              Real Estate – Specialised Services
            </h2>
            <p className="text-lg text-[#123A5A] font-semibold">
              (RERA-Approved Projects)
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#F8F9FB] to-white p-8 md:p-10 rounded-lg border-2 border-[#D4A537] shadow-lg scroll-animate">
              <div className="space-y-6">
                <p className="text-lg text-[#0A2740] leading-relaxed">
                  We Support Builders in Completing{" "}
                  <span className="font-bold text-[#D4A537]">
                    Stalled or Unfinished Real Estate Projects
                  </span>{" "}
                  Impacted by Funding Constraints.
                </p>

                <p className="text-lg text-[#123A5A] leading-relaxed">
                  Through{" "}
                  <span className="font-semibold">
                    Structured and Reliable Funding Solutions
                  </span>
                  , We enable{" "}
                  <span className="font-semibold text-[#0A2740]">
                    Timely Project Completion Across India
                  </span>
                  .
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  {[
                    "RERA-Approved Project Support",
                    "Stalled Project Revival",
                    "Structured Funding Solutions",
                    "PAN-India Coverage",
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                    >
                      <CheckCircle className="w-5 h-5 text-[#D4A537] shrink-0 mt-1" />
                      <span className="text-[#0A2740] font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                  <NavLink
                    to="/contact"
                    className="inline-flex items-center justify-center bg-[#D4A537] hover:bg-[#C59230] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 cursor-pointer"
                  >
                    Get Funding Support
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </NavLink>
                  <NavLink
                    to="/apply"
                    className="inline-flex items-center justify-center border-2 border-[#D4A537] text-[#D4A537] hover:bg-[#D4A537] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
                  >
                    Submit Your Project
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Transformation Section */}
      <section className="bg-gradient-to-br from-[#0A2740] to-[#123A5A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4A537] rounded-full mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4A537] mb-6">
              Business Transformation
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-lg border-2 border-[#D4A537] shadow-2xl scroll-animate">
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
                  <span className="font-bold text-[#D4A537]">
                    Amirra Finwaye
                  </span>{" "}
                  Restructures Businesses to Secure{" "}
                  <span className="font-semibold">
                    Investor and Lender approval
                  </span>
                  .
                </p>

                <p className="text-lg md:text-xl text-[#A4C8E1] leading-relaxed">
                  We Amplify{" "}
                  <span className="font-semibold text-white">
                    Growth, Financial Strength, Brand Equity, and Profitability
                  </span>
                  —Delivering Impeccable Profiles for{" "}
                  <span className="font-bold text-[#D4A537]">
                    Rapid deal Closure
                  </span>{" "}
                  and Unshakable Confidence.
                </p>

                <div className="bg-[#D4A537] p-6 rounded-lg mt-8">
                  <p className="text-2xl font-bold text-white text-center">
                    Your Transformation Awaits.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  {[
                    "Business Restructuring",
                    "Investor Readiness",
                    "Financial Optimization",
                    "Brand Enhancement",
                    "Profitability Growth",
                    "Deal Closure Support",
                  ].map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10"
                    >
                      <CheckCircle className="w-5 h-5 text-[#D4A537] shrink-0 mt-1" />
                      <span className="text-white font-medium text-sm">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                  <NavLink
                    to="/contact"
                    className="inline-flex items-center justify-center bg-[#D4A537] hover:bg-[#C59230] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 cursor-pointer"
                  >
                    Start Your Transformation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </NavLink>
                  <NavLink
                    to="/apply"
                    className="inline-flex items-center justify-center border-2 border-[#D4A537] bg-white/10 text-white hover:bg-white hover:text-[#0A2740] px-8 py-4 rounded-lg font-semibold transition-all duration-200"
                  >
                    Schedule Consultation
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RealEstateBusinessSection;