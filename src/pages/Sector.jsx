import React, { useEffect, useRef, useState } from 'react';
import { Hospital, Hotel, Building2, Factory, GraduationCap, Construction, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Sectors() {
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

  const sectors = [
    {
      id: 'education',
      icon: <GraduationCap className="w-12 h-12 text-[#D4A537]" aria-hidden="true" />,
      title: "Schools & Educational Institutions",
      shortTitle: "Education Sector",
      description: "We enable educational institutions to secure large-scale funding for campuses, hostels, academic buildings, and infrastructure enhancement.",
      bullets: [
        "School campus construction",
        "College & university infrastructure",
        "Hostel and academic facility funding",
        "Expansion of existing educational institutions"
      ],
      gradient: "from-yellow-50 to-orange-50"
    },
    {
      id: 'manufacturing',
      icon: <Factory className="w-12 h-12 text-[#D4A537]" aria-hidden="true" />,
      title: "Industrial & Manufacturing Units",
      shortTitle: "Manufacturing Sector",
      description: "Manufacturing enterprises depend on us for end-to-end funding support—covering plant setup, machinery finance, factory expansion, and industrial infrastructure projects.",
      bullets: [
        "New industrial plant setup",
        "Unit expansion & modernization",
        "Machinery procurement finance",
        "Working capital & capex loans"
      ],
      gradient: "from-green-50 to-emerald-50"
    },
    {
      id: 'healthcare',
      icon: <Hospital className="w-12 h-12 text-[#D4A537]" aria-hidden="true" />,
      title: "Healthcare & Hospitals",
      shortTitle: "Healthcare Sector",
      description: "We assist healthcare institutions in securing structured funding for new hospital setups, capacity expansion, medical equipment, diagnostic centers, and healthcare infrastructure.",
      bullets: [
        "New hospital construction & greenfield medical projects",
        "Expansion of existing hospitals & specialty wings",
        "Medical & surgical equipment funding",
        "Multi-specialty & super-specialty hospital finance"
      ],
      gradient: "from-red-50 to-pink-50"
    },
    {
      id: 'hospitality',
      icon: <Hotel className="w-12 h-12 text-[#D4A537]" aria-hidden="true" />,
      title: "Hotels & Hospitality",
      shortTitle: "Hospitality Sector",
      description: "Hotel developers and hospitality brands rely on our structured financing solutions for new builds, expansions, renovations, and acquisition-driven growth.",
      bullets: [
        "Hotel construction & new hospitality projects",
        "Resort expansion & renovation financing",
        "Commercial hospitality chains",
        "Tourism and leisure infrastructure"
      ],
      gradient: "from-orange-50 to-amber-50"
    },
    {
      id: 'infrastructure',
      icon: <Construction className="w-12 h-12 text-[#D4A537]" aria-hidden="true" />,
      title: "Infrastructure & EPC Contractors",
      shortTitle: "Infrastructure & Government Contracts",
      description: "Contractors across India trust our advisory for funding major government projects, EPC works, and infrastructure development initiatives.",
      bullets: [
        "Roads, bridges & government infrastructure",
        "EPC contractor finance",
        "Performance guarantees (PBG), advance guarantees (APG), bid bonds",
        "Machinery & working capital support"
      ],
      gradient: "from-purple-50 to-pink-50"
    },
    {
      id: 'real-estate',
      icon: <Building2 className="w-12 h-12 text-[#D4A537]" aria-hidden="true" />,
      title: "Residential & Commercial Real Estate",
      shortTitle: "Real Estate Sector",
      description: "We support real estate developers with large-ticket construction finance, commercial project funding, and structured development loans.",
      bullets: [
        "Residential towers, gated projects & townships",
        "Commercial complexes, business centers & malls",
        "Developer funding, term loans & construction finance",
        "Land acquisition & project development"
      ],
      gradient: "from-blue-50 to-cyan-50"
    },
    {
      id: 'renewable-energy',
      icon: <Zap className="w-12 h-12 text-[#D4A537]" aria-hidden="true" />,
      title: "Solar & Wind Energy",
      shortTitle: "Renewable Energy Sector",
      description: "We support renewable energy developers with project financing for solar, wind, and hybrid energy projects, ensuring sustainable and scalable growth.",
      bullets: [
        "Solar plant EPC & IPP funding",
        "Wind turbine projects",
        "Renewable energy infrastructure loans",
        "Land, machinery & grid connection finance"
      ],
      gradient: "from-teal-50 to-cyan-50"
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
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
          alt="Modern business buildings representing diverse sectors"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0A2740] opacity-90"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-down">
            Sectors We Serve
          </h1>
          <p className="text-xl md:text-2xl text-[#A4C8E1] max-w-4xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            Comprehensive Project Finance Solutions Across India's Key Industries
          </p>
          <div className="w-24 h-1 bg-[#D4A537] mx-auto animate-scale-in animation-delay-400"></div>
        </div>
      </section>

      <section className="bg-[#F8F9FB] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-6">
            Empowering India's Growth Through Specialized Funding
          </h2>
          <p className="text-lg text-[#3A3A3A] max-w-4xl mx-auto leading-relaxed">
            At Ameraa Finnway, we specialize in providing <span className="text-[#D4A537] font-semibold">₹20 Crore to ₹100 Crore+</span> project finance across diverse sectors. 
            Our deep industry expertise and strong banking relationships enable us to deliver tailored funding solutions for capital-intensive ventures nationwide.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {sectors.map((sector, idx) => (
              <article
                key={sector.id}
                ref={el => sectionRefs.current[idx] = el}
                className={`bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-[#D4A537] transition-all duration-500 overflow-hidden group ${
                  isVisible[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className={`bg-linear-to-br ${sector.gradient} p-8 group-hover:scale-105 transition-transform duration-500`}>
                  <div className="flex items-start gap-4">
                    <div className="bg-white rounded-xl p-4 shadow-md group-hover:shadow-xl transition-shadow">
                      {sector.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#0A2740] mb-2">
                        {sector.title}
                      </h3>
                      <p className="text-sm text-[#123A5A] font-semibold uppercase tracking-wide">
                        {sector.shortTitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-[#3A3A3A] leading-relaxed mb-6">
                    {sector.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-[#0A2740] font-semibold mb-3 flex items-center gap-2">
                      <span className="w-8 h-0.5 bg-[#D4A537]" aria-hidden="true"></span>
                      Key Offerings
                    </h4>
                    <ul className="space-y-3">
                      {sector.bullets.map((bullet, bulletIdx) => (
                        <li 
                          key={bulletIdx} 
                          className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300"
                        >
                          <CheckCircle className="w-5 h-5 text-[#D4A537] shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-[#3A3A3A] text-sm leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <NavLink 
                      to='/contact'
                      className="group inline-flex items-center gap-2 text-[#D4A537] font-semibold hover:gap-4 transition-all duration-300 cursor-pointer"
                      aria-label={`Learn more about ${sector.title} funding`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </NavLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-[#0A2740] to-[#123A5A] py-16 px-4" aria-label="Company statistics">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-[#D4A537] mb-2" aria-label="7 plus key sectors">7+</div>
              <div className="text-white text-lg">Key Sectors</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-[#D4A537] mb-2" aria-label="Up to 100 crore rupees maximum funding">₹100Cr+</div>
              <div className="text-white text-lg">Maximum Funding</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-[#D4A537] mb-2" aria-label="20 plus years of experience">20+</div>
              <div className="text-white text-lg">Years Experience</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-[#D4A537] mb-2">Pan-India</div>
              <div className="text-white text-lg">Coverage</div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F9FB] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-12">
            Why Industry Leaders Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16  bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <CheckCircle className="w-8 h-8 text-[#D4A537]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2740] text-center mb-4">
                Sector Expertise
              </h3>
              <p className="text-[#3A3A3A] text-center leading-relaxed">
                Deep understanding of industry-specific requirements and funding structures across all major sectors
              </p>
            </article>
            <article className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16  bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Building2 className="w-8 h-8 text-[#D4A537]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2740] text-center mb-4">
                Strong Banking Network
              </h3>
              <p className="text-[#3A3A3A] text-center leading-relaxed">
                Established relationships with government banks, NBFCs, and private financial institutions
              </p>
            </article>
            <article className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16  bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Zap className="w-8 h-8 text-[#D4A537]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2740] text-center mb-4">
                Fast Execution
              </h3>
              <p className="text-[#3A3A3A] text-center leading-relaxed">
                Streamlined processes and expert coordination ensure quick approvals and timely disbursements
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-linear-to-r from-[#0A2740] to-[#123A5A] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Fund Your Next Big Project?
          </h2>
          <p className="text-xl text-[#A4C8E1] mb-8">
            Get expert guidance and structured financing from ₹15 Cr. and Above for your industry
          </p>
          <NavLink 
            to="/apply"
            className="inline-block bg-[#D4A537] hover:bg-[#C59230] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
            aria-label="Discuss your project with Ameraa Finnway"
          >
            Discuss Your Project
          </NavLink>
        </div>
      </section>
    </div>
  );
}