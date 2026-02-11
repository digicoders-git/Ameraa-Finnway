import {
  Award,
  Briefcase,
  Building2,
  CheckCircle,
  DollarSign,
  FileText,
  MapPin,
  Shield,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import React from "react";

const C1 = () => {
  return (
    <div>
      {/* Strategic Business Growth & Consulting Section */}
      <section
        // ref={(el) => (sectionRefs.current[3] = el)}
        className={`bg-[#F8F9FB] py-16 px-4 transition-all duration-1000 opacity-100 translate-y-0  `}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-4">
              Strategic Business Growth & High-Value Funding Expertise
            </h2>
            <p className="text-xl text-[#123A5A] max-w-4xl mx-auto leading-relaxed">
              At{" "}
              <span className="text-[#D4A537] font-semibold">
                AMIRRA FINWAYE
              </span>
              , we do more than arrange funding — we build, scale and transform
              businesses into high-performance, future-ready organisations.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#D4A537] mb-8">
              <p className="text-lg text-[#3A3A3A] leading-relaxed mb-6">
                With our dual strength in high-value institutional funding and
                strategic business consulting, we provide companies the
                financial power, direction, and market intelligence needed to
                accelerate long-term growth.
              </p>
              <p className="text-lg text-[#3A3A3A] leading-relaxed mb-6">
                For over two decades, AMIRRA FINWAYE has empowered businesses
                across India by securing large-ticket project finance through
                Government Banks, NBFCs, and leading private institutions.
              </p>
              <p className="text-lg text-[#3A3A3A] leading-relaxed">
                But funding is only the beginning. To help companies grow
                sustainably, we also provide strategic guidance, business
                restructuring, operational improvement, and brand enhancement —
                all driven by real data and proven frameworks.
              </p>
              <p className="text-lg text-[#0A2740] font-semibold mt-6">
                Our approach ensures that every business becomes stronger,
                smarter, and more competitive in its sector.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#0A2740] rounded-xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-10 h-10 text-[#D4A537]" />
                  <h3 className="text-2xl font-bold text-[#D4A537]">
                    OUR GOAL
                  </h3>
                </div>
                <p className="text-[#A4C8E1] leading-relaxed">
                  To transform businesses into next-generation,
                  performance-driven organisations by strengthening
                  decision-making, improving operational efficiency, and
                  elevating market presence through intelligent strategy and
                  data-driven insights.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-[#E2E2E2]">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-10 h-10 text-[#D4A537]" />
                  <h3 className="text-2xl font-bold text-[#0A2740]">
                    OUR MISSION
                  </h3>
                </div>
                <p className="text-[#123A5A] mb-4 font-semibold">
                  To build future-ready and resilient enterprises by providing:
                </p>
                <ul className="space-y-2">
                  {[
                    "Strategic direction",
                    "Robust operational systems",
                    "Financial planning & forecasting",
                    "Stronger market identity",
                    "Scalable business models",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-[#3A3A3A]"
                    >
                      <CheckCircle className="w-5 h-5 text-[#D4A537] shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[#3A3A3A]">
                  We aim to ensure that every business we work with grows
                  confidently and competitively in today's evolving economy.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A2740] text-center mb-8">
              Key Services for Business Growth
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Project Finance",
                  desc: "High-value funding for infrastructure, commercial ventures & expansion projects.",
                  icon: <Building2 className="w-8 h-8" />,
                },
                {
                  title: "Project Report & Feasibility Study",
                  desc: "DPR creation, cost analysis, revenue projections & bank-ready documentation.",
                  icon: <FileText className="w-8 h-8" />,
                },
                {
                  title: "Business Process Improvement",
                  desc: "Streamlining internal operations for efficiency, speed & productivity.",
                  icon: <TrendingUp className="w-8 h-8" />,
                },
                {
                  title: "Branding & Market Positioning",
                  desc: "Developing stronger brand identity & competitive visibility.",
                  icon: <Award className="w-8 h-8" />,
                },
                {
                  title: "Sales & Marketing Advisory",
                  desc: "Customer acquisition strategies, lead funnels & business growth planning.",
                  icon: <Users className="w-8 h-8" />,
                },
                {
                  title: "Financial Planning & Forecasting",
                  desc: "Budgets, projections, risk analysis & financial discipline building.",
                  icon: <DollarSign className="w-8 h-8" />,
                },
                {
                  title: "Operations & Supply Chain Guidance",
                  desc: "Optimizing workflows, vendor management & cost structures.",
                  icon: <Shield className="w-8 h-8" />,
                },
                {
                  title: "Investor Pitch Deck & Documentation",
                  desc: "Investor presentations, pitch strategy & funding documentation.",
                  icon: <Briefcase className="w-8 h-8" />,
                },
                {
                  title: "Compliance & Regulatory Support",
                  desc: "Ensuring smooth approvals & long-term legal/financial reliability.",
                  icon: <CheckCircle className="w-8 h-8" />,
                },
                {
                  title: "Business Expansion & Scaling Strategy",
                  desc: "Blueprints for multi-city expansion, market entry & scalable growth.",
                  icon: <MapPin className="w-8 h-8" />,
                },
                {
                  title: "Complete Business Strategy Planning",
                  desc: "End-to-end advisory to make the business organised, structured & future-focused.",
                  icon: <Target className="w-8 h-8" />,
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:border-[#D4A537] border border-transparent hover:scale-105"
                >
                  <div className="w-12 h-12 bg-[#F8F9FB] rounded-lg flex items-center justify-center mb-4 text-[#D4A537]">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[#0A2740] mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-[#3A3A3A] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default C1;
