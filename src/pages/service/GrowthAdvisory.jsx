import React from 'react';
import { Target, TrendingUp, BarChart3, FileText, Settings, Megaphone, DollarSign, Package, FileCheck, Rocket, Lightbulb, CheckCircle, Award } from 'lucide-react';
import BusinessTransformation from '../../components/home/BusinessTransformation';
import { NavLink } from 'react-router-dom';

const GrowthAdvisory = () => {
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Business Strategy & Planning",
      desc: "Strategic planning that gives your business a solid direction and a clear structured roadmap for scaling."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Project Report & Feasibility Study",
      desc: "Bank-ready DPR, cost analysis, revenue projections, market research and end-to-end feasibility modelling."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Business Process Improvement",
      desc: "We streamline your internal processes so you get: Faster operations, Lower costs, Higher productivity, Better team outcomes"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Branding & Market Positioning",
      desc: "We strengthen your brand identity to attract and retain customers. Includes: Brand messaging, Market differentiation, Reputation building"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Sales & Marketing Advisory",
      desc: "We build systems that generate consistent leads and predictable revenue. Includes: Sales funnel planning, Market segmentation, Customer acquisition strategy"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Financial Planning & Forecasting",
      desc: "Professional financial models with: Budgeting, Forecasts, Cash flow planning, Profit optimisation, Cost restructuring"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Operations & Supply Chain Guidance",
      desc: "Improve stability & reduce operational risks through better workflows, vendor strategy, and supply chain mapping."
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Investor Pitch Decks & Documentation",
      desc: "Professional investor deck preparation with market insights, projections, and investment-story framing."
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Compliance & Regulatory Support",
      desc: "Ensuring your business stays aligned with required policies for bank approvals, government tenders and expansion."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Business Expansion & Scaling Strategy",
      desc: "We craft strategies for entering new markets, adding new business units, and scaling operations with long-term stability."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Complete Business Strategy Consultancy",
      desc: "A 360° transformation advisory improving: Vision & planning, Team productivity, Workflow efficiency, Market strength, Finance discipline"
    }
  ];

  const whyChoose = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Strategic Direction",
      desc: "Most businesses struggle not because of lack of opportunity — but due to lack of clarity, system, and structured direction. We provide a roadmap that aligns your goals, finances, team and operations."
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Data-Backed Decisions",
      desc: "Our advisory framework uses: Revenue modelling, Market insights, Customer analytics, Cost efficiency studies. So businesses make decisions confidently, backed by numbers."
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Sustainable Expansion",
      desc: "We help you expand into new cities, new verticals, new customer segments with calculated clarity and financial safety."
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Brand & Market Strengthening",
      desc: "Customers buy from brands they trust. We position your business to attract, win & retain customers."
    }
  ];

  const approach = [
    { number: "1", title: "Diagnose the Business", desc: "Deep understanding of current operations, team, finances & market position." },
    { number: "2", title: "Identify Gaps & Opportunities", desc: "We detect improvement areas and growth points using structured analysis." },
    { number: "3", title: "Create a Growth Blueprint", desc: "A practical, implementable plan tailored for the business." },
    { number: "4", title: "Implement & Monitor Progress", desc: "We support execution with milestones, KPIs, and monthly reviews." }
  ];

  const outcomes = [
    "Improved profitability", "Better customer acquisition", "Organised operational systems", "Stronger team & workflow",
    "Improved brand value", "Higher financial stability", "Faster decision-making", "Expansion-ready structure"
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scaleX(0); } to { opacity: 1; transform: scaleX(1); } }
        .animate-fade-in-down { animation: fadeInDown 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        .animate-scale-in { animation: scaleIn 0.6s ease-out forwards; opacity: 0; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
      `}</style>

      <section className="relative py-20 px-4 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="Business strategy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0A2740] opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-white text-5xl font-bold animate-fade-in-down">Strategic Growth Advisory for Future-Ready Businesses</h1>
          <div className="w-24 h-1 bg-[#D4A537] mx-auto mt-4 animate-scale-in animation-delay-200"></div>
          <p className="text-[#A4C8E1] text-xl max-w-3xl mx-auto mt-6 animate-fade-in-up animation-delay-400">
            Transform your business into a high-performance, scalable and future-ready organisation with Amirra Finwaye's expert Growth Advisory services. We combine funding + strategy + intelligence to build stronger, smarter, and more competitive companies.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F8F9FB]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-6">We Don't Just Finance. We Build & Scale Businesses.</h2>
          <p className="text-lg text-[#3A3A3A] mb-8 max-w-4xl mx-auto">At Amirra Finwaye, our Growth Advisory practice helps companies grow sustainably, improve profitability, strengthen operations, and expand confidently across India.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
            {["Strategic clarity", "Business restructuring", "Market expansion", "Brand positioning", "Data-driven decision making", "Long-term financial stability"].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#D4A537] rounded-full"></div>
                <span className="text-[#3A3A3A]">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-[#0A2740] font-semibold mt-8">Our advisory ensures your business becomes future-proof, competitive and performance-led.</p>
        </div>
      </section>
<BusinessTransformation />
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-12">Why Businesses Choose Our Growth Advisory</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="bg-[#F8F9FB] p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-[#D4A537] mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#0A2740] mb-3">{item.title}</h3>
                <p className="text-[#3A3A3A] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-12">Our Growth Advisory Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-[#D4A537] mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-[#0A2740] mb-3">{service.title}</h3>
                <p className="text-[#3A3A3A] text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-12">Our Advisory Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-[#D4A537] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{step.number}</div>
                <h3 className="text-lg font-bold text-[#0A2740] mb-2">{step.title}</h3>
                <p className="text-[#3A3A3A] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F8F9FB]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-12">Outcomes You Can Expect</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {outcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-[#D4A537] flex-shrink-0" />
                <span className="text-[#3A3A3A]">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-[#0A2740] to-[#123A5A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 text-gray-200">Talk to our Growth Advisory experts and start building a future-ready, scalable and performance-driven company.</p>
          <NavLink to='/apply' className="bg-[#D4A537] hover:bg-[#C59230] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors">👉 Book Strategy Session</NavLink>
        </div>
      </section>
    </div>
  );
};

export default GrowthAdvisory;