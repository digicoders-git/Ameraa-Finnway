import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  GraduationCap,
  Building2,
  Home,
  Wrench,
  Briefcase,
  CheckCircle,
  TrendingDown,
  Clock,
  Shield,
  Award,
  FileText,
  Users,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function EducationFinance() {
  const [openFaq, setOpenFaq] = useState(null);

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

  const fundingAreas = [
    {
      icon: GraduationCap,
      title: "School Campus Construction",
      desc: "CBSE / ICSE / State Board Schools, New greenfield campuses",
    },
    {
      icon: Building2,
      title: "College & University Infrastructure",
      desc: "Degree colleges, universities, technical institutes",
    },
    {
      icon: Home,
      title: "Academic Buildings & Hostels",
      desc: "Classrooms, labs, libraries, hostels",
    },
    {
      icon: Wrench,
      title: "Modernisation & Expansion",
      desc: "Smart classrooms, digital labs, capacity expansion",
    },
    {
      icon: Briefcase,
      title: "Working Capital Support",
      desc: "Staff onboarding, operational expenses",
    },
  ];

  const whyGovtBanks = [
    "Lower interest rates compared to private lenders",
    "Long repayment tenure (10–15 years)",
    "Moratorium options during construction phase",
    "Stable & regulated institutional funding",
    "Better suitability for trust/society structures",
  ];

  const documents = [
    "Land documents / Lease deed",
    "DPR with student capacity & revenue projections",
    "Trust deed / Society registration / Company documents",
    "Promoter / trustee KYC & profiles",
    "Past financials (if existing institution)",
    "Approvals from education authorities (where applicable)",
  ];

  const process = [
    {
      step: "1",
      title: "Project Discussion & DPR Review",
      icon: FileText,
    },
    {
      step: "2",
      title: "Eligibility Assessment & Bank Matching",
      icon: CheckCircle,
    },
    {
      step: "3",
      title: "File Structuring as per Bank Norms",
      icon: Award,
    },
    {
      step: "4",
      title: "Sanction from Govt Bank / NBFC",
      icon: Shield,
    },
    {
      step: "5",
      title: "Phased Disbursement Linked to Construction",
      icon: TrendingDown,
    },
  ];

  const usps = [
    "Specialized experience in education infrastructure funding",
    "Strong relationships with nationalised banks",
    "Faster approvals through structured documentation",
    "Pan-India presence & on-ground coordination",
    "Transparent & compliance-driven advisory",
  ];

  const scrollToApply = () => {
    const element = document.getElementById("apply");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans">
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
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop"
          alt="Modern hospital and healthcare facility"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0A2740] opacity-90"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 scroll-animate">
            Education Infrastructure & Campus Finance
          </h1>
          <p
            className="text-xl md:text-2xl text-[#A4C8E1] max-w-4xl mx-auto mb-8 scroll-animate"
            style={{ animationDelay: "0.2s" }}
          >
            Structured Funding for Schools, Colleges & Educational Institutions
            through Government Banks & Institutional Lenders
          </p>
          <div
            className="w-24 h-1 bg-[#D4A537] mx-auto mb-8 scroll-animate"
            style={{ animationDelay: "0.4s" }}
          ></div>
          <NavLink
            to="/apply"
            // onClick={scrollToApply}
            className="inline-flex items-center justify-center bg-[#D4A537] hover:bg-[#C59230] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 scroll-animate"
            style={{ animationDelay: "0.6s" }}
          >
            Apply for Education Project Funding
            <ArrowRight className="ml-2 w-5 h-5" />
          </NavLink>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-6">
              Funding the Future of Education
            </h2>
            <p className="text-lg text-[#3A3A3A] mb-6 leading-relaxed">
              Amirra Finwaye provides large-ticket project finance solutions for
              educational institutions across India. We support schools,
              colleges, universities, training institutes, and education trusts
              in securing structured funding from Government Banks and reputed
              NBFCs.
            </p>
            <p className="text-lg text-[#3A3A3A] mb-8 leading-relaxed">
              With deep experience in education project cash flows, approvals,
              and compliance, we help institutions expand infrastructure,
              modernize campuses, and scale operations sustainably.
            </p>
            <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
              {/* <div className="bg-[#F8F9FB] p-6 rounded-lg border-2 border-[#D4A537]">
                <p className="text-sm text-[#0A2740] font-semibold mb-2">
                  Typical Funding Size
                </p>
                <p className="text-2xl font-bold text-[#D4A537]">
                  ₹5 Cr – ₹100 Cr+
                </p>
              </div> */}
              <div className="bg-[#F8F9FB] p-6 rounded-lg border-2 border-[#D4A537]">
                <p className="text-sm text-[#0A2740] font-semibold mb-2">
                  Core Focus
                </p>
                <p className="text-2xl font-bold text-[#D4A537]">
                  ₹15 Cr+ Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Fund */}
      <section className="bg-[#F8F9FB] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-12 scroll-animate">
            What We Fund in Education Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fundingAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 scroll-animate"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <area.icon className="w-12 h-12 text-[#D4A537] mb-4" />
                <h3 className="text-xl font-bold text-[#0A2740] mb-2">
                  {area.title}
                </h3>
                <p className="text-[#3A3A3A]">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Government Banks */}
      <section className="bg-[#0A2740] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4A537] text-center mb-12 scroll-animate">
            Why Education Finance via Government Banks
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyGovtBanks.map((reason, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 scroll-animate"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CheckCircle className="w-6 h-6 text-[#D4A537] shrink-0 mt-1" />
                <p className="text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-8">
              Eligibility for Education Project Funding
            </h2>
            <p className="text-lg text-[#3A3A3A] mb-6 text-center">
              Funding eligibility is evaluated based on:
            </p>
            <div className="bg-[#F8F9FB] p-8 rounded-lg border-2 border-[#D4A537]">
              <ul className="space-y-4">
                {[
                  "Clear land ownership or long-term lease",
                  "Approved DPR (Detailed Project Report)",
                  "Trust / Society / Company registration",
                  "Promoter / trustee background & experience",
                  "Project feasibility & demand assessment",
                  "Required statutory approvals",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D4A537] shrink-0 mt-1" />
                    <span className="text-[#0A2740] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-[#F8F9FB] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-12 scroll-animate">
            Documents Required
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {documents.map((doc, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 scroll-animate"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#D4A537] shrink-0 mt-1" />
                  <p className="text-[#0A2740] font-medium">{doc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Process */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-12 scroll-animate">
            Our Funding Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {process.map((step, idx) => (
              <div
                key={idx}
                className="relative scroll-animate"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#D4A537] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 relative z-10">
                    <step.icon className="w-8 h-8" />
                  </div>
                  {/* Connecting line - only visible on desktop and not for last item */}
                  {idx < process.length - 1 && (
                    <div className="absolute top-8 left-1/2 w-full h-0.5 bg-[#D4A537] hidden lg:block"></div>
                  )}
                  <h3 className="text-sm font-bold text-[#0A2740] mb-2">
                    Step {step.step}
                  </h3>
                  <p className="text-sm text-[#123A5A]">{step.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Amirra Finwaye */}
      <section className="bg-[#F8F9FB] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-12 scroll-animate">
            Why Amirra Finwaye for Education Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {usps.map((usp, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-4 scroll-animate"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Award className="w-8 h-8 text-[#D4A537] shrink-0" />
                <p className="text-[#0A2740] font-medium">{usp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="apply"
        className="relative bg-gradient-to-br from-[#0A2740] to-[#123A5A] text-white py-20 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planning to Build or Expand an Educational Institution?
          </h2>
          <p className="text-lg md:text-xl text-[#A4C8E1] mb-8">
            Get structured funding guidance for your education project from
            trusted banking partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink
              to="/apply"
              className="inline-flex items-center justify-center bg-[#D4A537] hover:bg-[#C59230] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              Talk to Our Education Finance Expert
              <ArrowRight className="ml-2 w-5 h-5" />
            </NavLink>
            <div className="flex gap-2">
              <a
                href="tel:+919592171057"
                className="inline-flex items-center justify-center border-2 border-[#D4A537] text-[#D4A537] hover:bg-[#D4A537] hover:text-white px-4 py-4 rounded-lg font-semibold transition-all duration-200"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
              <a
                href="tel:+919076612555"
                className="inline-flex items-center justify-center border-2 border-[#D4A537] text-[#D4A537] hover:bg-[#D4A537] hover:text-white px-4 py-4 rounded-lg font-semibold transition-all duration-200"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
