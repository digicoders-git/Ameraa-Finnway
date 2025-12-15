import React, { useEffect } from "react";
import {
  CheckCircle,
  TrendingUp,
  Building2,
  Users,
  Target,
  Lightbulb,
  Award,
  Shield,
  Briefcase,
  FileText,
  BarChart3,
  GraduationCap,
  Hospital,
  Hotel,
  Factory,
  Construction,
  Zap,
} from "lucide-react";

const AboutUsC = () => {
  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".scroll-animate")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const whatWeDo = [
    {
      icon: Building2,
      text: "High-value project finance solutions for capital-intensive ventures",
    },
    {
      icon: TrendingUp,
      text: "Strategic advisory for business expansion, scaling, and restructuring",
    },
    {
      icon: BarChart3,
      text: "Financial planning and forecasting to support informed decision-making",
    },
    {
      icon: FileText,
      text: "Institutional documentation, project reports, and lender-ready proposals",
    },
    {
      icon: Target,
      text: "Advisory support that bridges the gap between vision and execution",
    },
  ];

  const objectives = [
    "Clear and actionable growth strategies",
    "Efficient and scalable operational frameworks",
    "Strong financial discipline and planning",
    "Professional brand positioning aligned with market opportunities",
  ];

  const approach = [
    "Understanding the client's business, industry, and long-term goals",
    "Structuring funding solutions aligned with project feasibility and cash flows",
    "Creating strategic roadmaps supported by data, financial models, and market insights",
    "Working closely with banks, institutions, and stakeholders to ensure smooth execution",
  ];

  const industries = [
    { icon: GraduationCap, name: "Education Institutions & Campuses" },
    { icon: Factory, name: "Manufacturing & Industrial Units" },
    { icon: Hospital, name: "Healthcare & Hospital Infrastructure" },
    { icon: Hotel, name: "Hospitality & Hotel Projects" },
    { icon: Building2, name: "Real Estate & Commercial Development" },
    { icon: Construction, name: "Infrastructure & Government Contractor Projects" },
    { icon: Zap, name: "Renewable Energy (Solar & Wind)" },
  ];

  const whyUs = [
    "Expertise in high-value funding (₹15 Cr. and above)",
    "Strong relationships with government banks and institutional lenders",
    "A structured, professional, and compliance-driven approach",
    "End-to-end support from strategy to disbursement",
    "A long-term partnership mindset, not transactional consulting",
  ];

  const commitments = [
    "Access the right capital at the right time",
    "Make informed, future-proof decisions",
    "Build resilient operational and financial foundations",
    "Scale responsibly and sustainably",
  ];

  return (
    <div className="font-sans mb-10">
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .scroll-animate {
          opacity: 0;
        }
      `}</style>

      

      

      {/* Who We Are */}
      <section className="bg-[#F8F9FB] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-8 scroll-animate">
              Who We Are
            </h2>
            <div className="bg-white p-8 md:p-12 rounded-2xl border-2 border-[#D4A537] border-opacity-20 shadow-lg scroll-animate">
              <p className="text-lg text-[#3A3A3A] leading-relaxed mb-6">
                We are a specialised Business & Financial Consulting firm focused on helping ambitious organisations scale with confidence and clarity.

At Ameraa Finnway, we work at the intersection of capital, strategy, and execution. Our core expertise lies in enabling businesses to secure high-value project funding through Government Banks and leading Private Financial Institutions, while simultaneously strengthening their strategic, operational, and financial foundations.
              </p>
              <p className="text-lg text-[#3A3A3A] leading-relaxed mb-6">
                Beyond funding, we act as a strategic growth partner, supporting
                organisations in planning expansion, improving operational
                efficiency, strengthening financial structures, and building
                resilient business models.
              </p>
              <p className="text-lg text-[#0A2740] font-semibold">
                Our approach is structured, data-driven, and aligned with
                long-term value creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-4 scroll-animate">
            What We Do
          </h2>
          <p className="text-lg text-[#123A5A] mb-12 max-w-3xl mx-auto scroll-animate">
            We arrange project finance across India through Government Banks and top Private Financiers.
Along with funding, we provide clear strategic guidance so leaders can make confident, high‑impact decisions
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whatWeDo.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8F9FB] p-6 rounded-lg border-l-4 border-[#D4A537] hover:shadow-lg transition-all duration-300 scroll-animate"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4A537] to-[#C59230] rounded-full flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-[#123A5A] font-medium pt-2">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 scroll-animate">
            <p className="text-lg text-[#0A2740] font-semibold">
              We ensure that our clients are not only funded, but also
              well-prepared, well-structured, and future-ready.
            </p>
          </div>
        </div>
      </section>

      {/* Our Objective */}
      <section className="bg-gradient-to-br from-[#0A2740] to-[#123A5A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4A537] text-center mb-8 scroll-animate">
            Our Objective
          </h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto scroll-animate">
            To build future-ready, performance-driven organisations by
            delivering:
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {objectives.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 scroll-animate"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CheckCircle className="w-6 h-6 text-[#D4A537] shrink-0 mt-1" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
          <div className="text-center scroll-animate">
            <p className="text-lg text-[#A4C8E1] font-semibold">
              Our objective is to help businesses evolve into stable, credible,
              and institutionally strong enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-8 scroll-animate">
            Our Approach
          </h2>
          <p className="text-xl text-[#123A5A] text-center mb-12 max-w-3xl mx-auto scroll-animate">
            We believe sustainable growth comes from the right balance of
            capital, strategy, and execution.
          </p>
          <div className="max-w-4xl mx-auto space-y-4">
            {approach.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8F9FB] p-6 rounded-lg border border-[#D4A537] border-opacity-20 hover:border-[#D4A537] hover:shadow-md transition-all duration-300 scroll-animate"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#D4A537] text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-[#3A3A3A] pt-1">{item}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 scroll-animate">
            <p className="text-lg text-[#0A2740] font-semibold">
              Every engagement is handled with transparency, accountability, and
              precision.
            </p>
          </div>
        </div>
      </section>

      {/* Industries We Support */}
      <section className="bg-[#F8F9FB] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-12 scroll-animate">
            Industries We Support
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg text-center border-2 border-transparent hover:border-[#D4A537] hover:shadow-xl transition-all duration-300 scroll-animate"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <industry.icon className="w-12 h-12 text-[#D4A537] mx-auto mb-4" />
                <h3 className="font-bold text-[#0A2740]">{industry.name}</h3>
              </div>
            ))}
          </div>
          <div className="text-center scroll-animate">
            <p className="text-lg text-[#123A5A] max-w-3xl mx-auto">
              Our sector-specific experience allows us to structure funding and
              advisory solutions that meet both banking norms and business
              realities.
            </p>
          </div>
        </div>
      </section>

      {/* Why Ameraa Finnway */}
      {/* <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-8 scroll-animate">
            Why Ameraa Finnway
          </h2>
          <p className="text-lg text-[#123A5A] text-center mb-12 scroll-animate">
            Clients choose Ameraa Finnway because we offer:
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {whyUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#F8F9FB] to-white p-6 rounded-lg border-l-4 border-[#D4A537] shadow-md hover:shadow-xl transition-all duration-300 scroll-animate"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-[#D4A537] shrink-0 mt-1" />
                  <p className="text-[#0A2740] font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center scroll-animate">
            <p className="text-lg text-[#0A2740] font-semibold">
              We focus on outcomes, execution quality, and long-term value
              creation.
            </p>
          </div>
        </div>
      </section> */}

      {/* Our Commitment */}
      <section className="bg-gradient-to-br from-[#0A2740] to-[#123A5A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4A537] text-center mb-8 scroll-animate">
            Our Commitment
          </h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto scroll-animate">
            At Ameraa Finnway, we are committed to helping businesses:
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {commitments.map((item, idx) => (
              <div
                key={idx}
                className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300 scroll-animate"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-[#D4A537] shrink-0 mt-1" />
                  <p className="text-lg text-black">{item}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center scroll-animate">
            <div className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl border-2 border-[#D4A537]">
              <p className="text-2xl font-bold text-[#D4A537] mb-4">
                "We don't just fund projects — we help build strong businesses"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsC;