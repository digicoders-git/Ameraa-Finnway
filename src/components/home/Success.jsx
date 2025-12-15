import React from "react";
import { CheckCircle, TrendingUp, Building2, Zap } from "lucide-react";
import { NavLink } from "react-router-dom";

const SuccessStories = () => {
  const recentProjects = [
    { amount: "120", project: "Power Plant", location: "Tamil Nadu" },
    { amount: "100", project: "Real Estate Project", location: "Pune" },
    { amount: "30", project: "Hotel Construction", location: "Ayodhya" },
    { amount: "70", project: "Hotel Project", location: "Mumbai" },
    { amount: "35", project: "Rice Mill", location: "Hyderabad" },
    { amount: "35", project: "School Project", location: "Lucknow" },
    { amount: "100", project: "Oil Manufacturing Plant", location: "Indore" },
    { amount: "22", project: "Hotel Project", location: "Motihari, Bihar" },
    { amount: "85", project: "Real Estate Project", location: "Bangalore" },
    { amount: "35", project: "Real Estate Project", location: "Ranchi" },
  ];

  const ongoingProjects = [
    { amount: "500", project: "Integrated Project", location: "Bangalore" },
    { amount: "200", project: "Infrastructure Project", location: "Agra" },
  ];

  const industries = [
    "Education",
    "Energy",
    "Hospitality & Hotels",
    "Infrastructure",
    "Real Estate",
  ];

  return (
    <section className="bg-[#F8F9FB] py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0A2740] mb-3 md:mb-4">
            🌟 Our Success Stories Across Key Industries
          </h2>
          <p className="text-sm md:text-lg text-[#3A3A3A] max-w-4xl mx-auto leading-relaxed">
            We have successfully structured and enabled funding for high-value
            projects across India, delivering measurable outcomes for promoters
            and enterprises.
          </p>
        </div>

        {/* Industries Served */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-lg md:text-xl font-semibold text-[#123A5A] mb-4 text-center">
            Industries Served:
          </h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="px-3 md:px-4 py-2 bg-[rgba(212,165,55,0.12)] text-[#0A2740] text-xs md:text-sm font-semibold rounded-full border border-[#D4A537] hover:bg-[#D4A537] hover:text-white transition-all duration-300"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Recent Funded Projects */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 md:w-12 h-1 bg-[#D4A537] rounded-full"></div>
            <h3 className="text-xl md:text-2xl font-bold text-[#0A2740]">
              💼 Recent Funded & Executed Projects
            </h3>
            <div className="flex-1 h-1 bg-[#D4A537] bg-opacity-20 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {recentProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-3 md:p-4 rounded-lg border border-[#E2E2E2] hover:border-[#D4A537] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#D4A537] flex-shrink-0 mt-1" />
                  <div className="min-w-0 flex-1">
                    <p className="text-base md:text-lg font-bold text-[#0A2740] mb-1">
                      ₹{project.amount} Cr
                    </p>
                    <p className="text-sm md:text-base text-[#3A3A3A]">
                      {project.project} | {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ongoing Projects */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 md:w-12 h-1 bg-[#D4A537] rounded-full"></div>
            <h3 className="text-xl md:text-2xl font-bold text-[#0A2740]">
              🚧 Ongoing High-Value Projects
            </h3>
            <div className="flex-1 h-1 bg-[#D4A537] bg-opacity-20 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {ongoingProjects.map((project, index) => (
              <div
                key={index}
                className="bg-[rgba(10,39,64,0.05)] p-4 md:p-6 rounded-xl border-l-4 border-[#D4A537] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-[#D4A537] flex-shrink-0 mt-1" />
                  <div className="min-w-0 flex-1">
                    <p className="text-2xl md:text-3xl font-bold text-[#D4A537] mb-2">
                      ₹{project.amount} Cr
                    </p>
                    <p className="text-sm md:text-base font-semibold text-[#0A2740] mb-1">
                      {project.project}
                    </p>
                    <p className="text-xs md:text-sm text-[#3A3A3A]">
                      📍 {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <NavLink to='/apply' className="bg-[#D4A537] hover:bg-[#C59230] text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Discuss Your Project
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;