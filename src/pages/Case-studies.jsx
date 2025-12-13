import React, { useEffect, useRef, useState } from 'react';
import { Building2, AlertCircle, Lightbulb, Trophy, CheckCircle, TrendingUp, ArrowRight, DollarSign, Calendar, Target } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function CaseStudies() {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = sectionRefs.current
      .filter(Boolean)
      .map((ref, index) => {
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [index]: true }));
            }
          },
          { threshold: 0.12 }
        );
        obs.observe(ref);
        return obs;
      });
    
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const caseStudy = {
    id: 'lucknow-hospital',
    title: 'Greenfield Multi-Specialty Hospital – Lucknow',
    sector: 'Healthcare',
    funding: '₹35 Crore',
    client: 'Confidential Healthcare Promoter',
    overview: 'A 150-bed multi-specialty greenfield hospital planned in Lucknow, featuring emergency care, diagnostics, critical care units, and advanced surgical facilities. The promoter required term loan + equipment finance + working capital to initiate construction and operations.',
    challenges: [
      'Need for structured cashflow-based funding',
      'Bank required a detailed viability & phased construction model',
      'Equipment finance & WC needed to be combined into a single structure',
      'Faster sanction timeline due to project deadlines'
    ],
    challengeDesc: 'These documentation & structuring gaps caused delays in approaching the right lender.',
    solutions: [
      {
        title: 'Matched with the suitable government bank',
        description: 'Identified a nationalised bank that supports healthcare infrastructure with higher ticket size (₹25–50 Cr+).'
      },
      {
        title: 'Structured phased disbursement model',
        description: 'Prepared timelines aligned with:',
        subPoints: [
          'Foundation & civil work',
          'Structural completion',
          'Medical equipment procurement',
          'Operational readiness'
        ]
      },
      {
        title: 'Cashflow modelling & DPR optimization',
        description: 'Enhanced project cashflow projections to meet bank appraisal criteria.'
      },
      {
        title: 'Bank liaison & documentation support',
        description: 'Coordinated end-to-end with bank officials, ensuring fast appraisal & compliance.'
      }
    ],
    results: [
      {
        icon: <DollarSign className="w-6 h-6" aria-hidden="true" />,
        label: '₹35 Cr sanction received within 45 days'
      },
      {
        icon: <CheckCircle className="w-6 h-6" aria-hidden="true" />,
        label: 'Structured financing across term loan, equipment, and WC'
      },
      {
        icon: <Building2 className="w-6 h-6" aria-hidden="true" />,
        label: 'Disbursement aligned with construction milestones'
      },
      {
        icon: <Calendar className="w-6 h-6" aria-hidden="true" />,
        label: 'Project execution on schedule'
      },
      {
        icon: <TrendingUp className="w-6 h-6" aria-hidden="true" />,
        label: 'Optimized promoter equity & improved project IRR'
      }
    ],
    conclusion: 'A complete 360-degree financing solution enabling the hospital to move from plan to execution rapidly.'
  };

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
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
          alt="Success stories in project financing"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0A2740] opacity-90"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-down">
            Success Stories
          </h1>
          <p className="text-xl md:text-2xl text-[#A4C8E1] max-w-4xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            Real Projects, Real Results – Delivering Structured Funding Solutions
          </p>
          <div className="w-24 h-1 bg-[#D4A537] mx-auto animate-scale-in animation-delay-400"></div>
        </div>
      </section>

      <section className="bg-[#F8F9FB] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-6">
            Transforming Vision into Reality
          </h2>
          <p className="text-lg text-[#3A3A3A] max-w-4xl mx-auto leading-relaxed">
            With over <span className="text-[#D4A537] font-semibold">20 years of expertise</span>, we've helped businesses across India secure 
            <span className="text-[#D4A537] font-semibold"> ₹20 Crore to ₹100 Crore+</span> in project financing. 
            Here's how we turn complex funding challenges into successful outcomes.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={el => sectionRefs.current[0] = el}
            className={`transition-all duration-1000 ${
              isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <article className="bg-white rounded-2xl shadow-2xl border-2 border-transparent hover:border-[#D4A537] transition-all duration-500 overflow-hidden">
              <div className="bg-linear-to-r from-[#0A2740] to-[#123A5A] px-8 py-10">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="bg-[#D4A537] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {caseStudy.sector}
                  </span>
                  <span className="text-[#A4C8E1] text-sm">
                    Client: {caseStudy.client}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {caseStudy.title}
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-[#A4C8E1] text-lg">Funding Sanctioned:</span>
                  <span className="text-[#D4A537] text-3xl font-bold">{caseStudy.funding}</span>
                </div>
              </div>

              <div className="p-8 bg-[#F8F9FB]">
                <div className="flex items-start gap-4 mb-4">
                  <div className=" bg-opacity-10 rounded-xl p-3 shrink-0">
                    <Building2 className="w-8 h-8 text-[#D4A537]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0A2740] mb-3">
                      Project Overview
                    </h3>
                    <p className="text-[#3A3A3A] leading-relaxed">
                      {caseStudy.overview}
                    </p>
                  </div>
                </div>
              </div>

              <div 
                ref={el => sectionRefs.current[1] = el}
                className={`p-8 border-t-2 border-gray-100 transition-all duration-1000 ${
                  isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-red-50 rounded-xl p-3 shrink-0">
                    <AlertCircle className="w-8 h-8 text-red-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2740]">
                    Challenge
                  </h3>
                </div>
                <p className="text-[#3A3A3A] mb-6 leading-relaxed">
                  Despite having land ownership and a completed DPR, the client faced:
                </p>
                <ul className="space-y-3 mb-6">
                  {caseStudy.challenges.map((challenge, idx) => (
                    <li 
                      key={idx}
                      className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 shrink-0" aria-hidden="true"></div>
                      <span className="text-[#3A3A3A]">{challenge}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#3A3A3A] italic border-l-4 border-red-600 pl-4">
                  {caseStudy.challengeDesc}
                </p>
              </div>

              <div 
                ref={el => sectionRefs.current[2] = el}
                className={`p-8 bg-[#F8F9FB] border-t-2 border-gray-100 transition-all duration-1000 ${
                  isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className=" bg-opacity-10 rounded-xl p-3 shrink-0">
                    <Lightbulb className="w-8 h-8 text-[#D4A537]" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2740]">
                    Our Solution
                  </h3>
                </div>
                <p className="text-[#3A3A3A] mb-6 leading-relaxed">
                  Ameraa Finnway designed a complete funding roadmap:
                </p>
                <div className="space-y-6">
                  {caseStudy.solutions.map((solution, idx) => (
                    <div 
                      key={idx}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#D4A537]"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle className="w-6 h-6 text-[#D4A537] shrink-0 mt-1" aria-hidden="true" />
                        <h4 className="text-lg font-bold text-[#0A2740]">
                          {solution.title}
                        </h4>
                      </div>
                      <p className="text-[#3A3A3A] ml-9 mb-3">
                        {solution.description}
                      </p>
                      {solution.subPoints && (
                        <ul className="ml-9 space-y-2">
                          {solution.subPoints.map((point, pointIdx) => (
                            <li 
                              key={pointIdx}
                              className="flex items-start gap-2 text-[#3A3A3A]"
                            >
                              <span className="text-[#D4A537] font-bold">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div 
                ref={el => sectionRefs.current[3] = el}
                className={`p-8 border-t-2 border-gray-100 transition-all duration-1000 ${
                  isVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-green-50 rounded-xl p-3 shrink-0">
                    <Trophy className="w-8 h-8 text-green-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2740]">
                    Result
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {caseStudy.results.map((result, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-4 bg-green-50 rounded-xl p-5 hover:scale-105 transition-transform duration-300"
                    >
                      <div className="bg-green-600 text-white rounded-lg p-2 shrink-0">
                        {result.icon}
                      </div>
                      <span className="text-[#3A3A3A] font-semibold">
                        {result.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-600">
                  <p className="text-[#0A2740] text-lg font-semibold">
                    {caseStudy.conclusion}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F9FB] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-12">
            Project Highlights
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-[#D4A537] mb-2">150</div>
              <div className="text-[#123A5A] font-semibold">Bed Capacity</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-[#D4A537] mb-2">₹35Cr</div>
              <div className="text-[#123A5A] font-semibold">Total Funding</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-[#D4A537] mb-2">45</div>
              <div className="text-[#123A5A] font-semibold">Days to Sanction</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-[#D4A537] mb-2">100%</div>
              <div className="text-[#123A5A] font-semibold">On Schedule</div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-linear-to-br from-[#0A2740] to-[#123A5A] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#D4A537] opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#D4A537] opacity-10 rounded-full translate-x-20 translate-y-20"></div>
            <div className="relative z-10">
              <div className="text-6xl text-[#D4A537] mb-4">"</div>
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-6 italic">
                This case study demonstrates our ability to navigate complex multi-layered funding requirements and deliver results that exceed client expectations.
              </p>
              <div className="w-24 h-1 bg-[#D4A537] mx-auto mb-4"></div>
              <p className="text-[#A4C8E1] font-semibold">
                Ameraa Finnway Team
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-linear-to-r from-[#0A2740] to-[#123A5A] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-[#A4C8E1] mb-8">
            Let us help you secure structured funding for your ambitious project
          </p>
          <NavLink 
            to="/apply"
            className="group inline-flex items-center gap-3 bg-[#D4A537] hover:bg-[#C59230] text-white font-semibold py-4 px-10 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
            aria-label="Discuss your project financing needs"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </NavLink>
        </div>
      </section>
    </div>
  );
}