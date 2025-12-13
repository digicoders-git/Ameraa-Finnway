import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Building2,
  Hospital,
  Hotel,
  GraduationCap,
  Factory,
  Construction,
  Zap,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Clock,
  FileText,
  BadgeCheck,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
} from "lucide-react";
import axios from "axios";

// import { useState, useEffect,  } from "react";
// import "./Apply.css";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import BusinessTransformation from "../components/home/BusinessTransformation";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [errors, setErrors] = useState({});
  // const [formData, setFormData] = useState({
  //   name: '', phone: '', email: '', company: '', category: '', loan: '', location: '', message: ''
  // });

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

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  //   if (errors[name]) {
  //     setErrors({ ...errors, [name]: '' });
  //   }
  // };
  // console.log(formData)

  // const validateForm = () => {
  //   const newErrors = {};
  //   if (!formData.name.trim()) newErrors.name = 'Name is required';
  //   if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
  //   else if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Enter valid 10-digit number';
  //   if (!formData.email.trim()) newErrors.email = 'Email is required';
  //   else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter valid email';
  //   if (!formData.company.trim()) newErrors.company = 'Company name is required';
  //   if (!formData.category) newErrors.category = 'Please select a category';
  //   if (!formData.loan.trim()) newErrors.loan = 'Loan requirement is required';
  //   if (!formData.location.trim()) newErrors.location = 'Location is required';
  //   return newErrors;
  // };

  // const handleSubmit = async () => {
  //   const newErrors = validateForm();
  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //     return;
  //   }

  //   setIsSubmitting(true);
  //   try {
  //     await new Promise(resolve => setTimeout(resolve, 1500));
  //     console.log('Form submitted:', formData);
  //     alert('Thank you! We will contact you within 24 hours.');
  //     setFormData({ name: '', phone: '', email: '', company: '', category: '', loan: '', location: '', message: '' });
  //   } catch (error) {
  //     alert('Something went wrong. Please try again.');
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    city: "",
    projectType: "",
    loanRequirement: "",
    message: "",

    dpr: null,
    projectReport: null,
    companyProfile: null,
    itr: null,
    bankStatement: null,
    gstr: null,
    // gstLatest: null,
    businessProof: null,
    electricityBill: null,
    pan: null,
    adhar: null,
    photo: null,
    loadStatement: null,
    propertyPaper: null,
  });

  const [isVisible, setIsVisible] = useState({});
  const [succesLoad, setsuccesLoad] = useState(false);
  const [error, setError] = useState("");
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    sectionRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [idx]: true }));
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(ref);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0] || null,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    try {
      setsuccesLoad(true);
      setError("");
      console.log(import.meta.env.VITE_BASE_URL);
      const abhay = await axios.post(
        import.meta.env.VITE_BASE_URL + "/project/create",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setsuccesLoad(false);
      toast("Project Submited...");
      // console.log(abhay.data);
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        city: "",
        projectType: "",
        loanRequirement: "",
        message: "",

        dpr: null,
        projectReport: null,
        companyProfile: null,
        itr: null,
        bankStatement: null,
        gstr: null,
        // gstLatest: null,
        businessProof: null,
        electricityBill: null,
        pan: null,
        adhar: null,
        photo: null,
        loadStatement: null,
        propertyPaper: null,
      });
    } catch (error) {
      setsuccesLoad(false);
      // console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  };

  const stats = [
    { icon: Award, label: "20+ Years", sublabel: "Expertise" },
    { icon: MapPin, label: "PAN-India", sublabel: "Presence" },
    { icon: DollarSign, label: "₹20 Cr - ₹100 Cr+", sublabel: "Funding" },
    { icon: Users, label: "40+ Institutional", sublabel: "Partners" },
  ];

  const services = [
    {
      icon: Building2,
      title: "Project Finance from Govt Banks",
      desc: "High-value funding for capital-intensive projects",
    },
    {
      icon: TrendingUp,
      title: "Working Capital for Contractors",
      desc: "Smooth cash flow for ongoing operations",
    },
    {
      icon: BadgeCheck,
      title: "Bank Guarantees & Support",
      desc: "Institutional backing for your projects",
    },
    {
      icon: FileText,
      title: "Advisory & Execution",
      desc: "End-to-end guidance from docs to disbursement",
    },
  ];

  const sectors = [
    { icon: GraduationCap, name: "Education", desc: "Schools & Colleges" },
    { icon: Factory, name: "Manufacturing", desc: "Industrial Units & Plants" },
    {
      icon: Hospital,
      name: "Healthcare",
      desc: "Hospital Construction & Expansion",
    },
    { icon: Hotel, name: "Hospitality", desc: "Hotels & Resort Development" },
    {
      icon: Construction,
      name: "Infrastructure",
      desc: "Roads & Government Contracts",
    },
    {
      icon: Building2,
      name: "Real Estate",
      desc: "Residential / Commercial Towers",
    },
    { icon: Zap, name: "Renewable Energy", desc: "Solar & Wind Projects" },
    { icon: Building2, name: "Commercial", desc: "Office Spaces & Malls" },
  ];

  const usps = [
    "20+ Years of Financing Expertise",
    "Strong Network of Govt Banks, NBFCs & Private Financiers",
    "Fast Approvals & Expert Structuring",
    "PAN-India Presence & On-ground Support",
    "High-Value Funding: ₹20 Cr to ₹100 Cr+",
    "End-to-End Advisory: From Documentation to Disbursement",
    "Customized Funding Solutions for Each Sector",
  ];

  const process = [
    {
      step: "1",
      title: "Share Your Project Plan",
      desc: "Upload DPR, company details, expansion plan",
    },
    {
      step: "2",
      title: "Eligibility Assessment",
      desc: "We evaluate project viability & funding options",
    },
    {
      step: "3",
      title: "Document Preparation",
      desc: "We structure the file as per bank norms",
    },
    {
      step: "4",
      title: "Bank Coordination",
      desc: "We present your proposal to bank partners",
    },
    {
      step: "5",
      title: "Loan Sanction",
      desc: "Fast approval through institutional network",
    },
    {
      step: "6",
      title: "Disbursement",
      desc: "Funds released & project execution begins",
    },
  ];

  const caseStudies = [
  {
    title: "Hotel Construction – Premium Hospitality Project",
    amount: "₹30 Cr Sanctioned",
    location: "Ayodhya",
    desc: "Structured funding for a new hotel project with phased construction-linked disbursement."
  },
  {
    title: "Hotel Development – High-End Urban Property",
    amount: "₹70 Cr Approved",
    location: "Mumbai",
    desc: "Large-ticket hospitality finance with blended structure for construction & pre-opening expenses."
  },
  {
    title: "Rice Mill – Industrial Processing Unit",
    amount: "₹35 Cr Funding",
    location: "Hyderabad",
    desc: "CAPEX financing for machinery, plant setup and operational working capital."
  },
  {
    title: "Education Campus – New School Infrastructure",
    amount: "₹35 Cr Approved",
    location: "Lucknow",
    desc: "Funding for academic blocks, labs, student facilities and long-tenure repayment structure."
  },
  {
    title: "Oil Manufacturing Plant – Large Industrial Unit",
    amount: "₹100 Cr Sanctioned",
    location: "Indore",
    desc: "End-to-end financing including machinery procurement, plant construction and utilities setup."
  },
  {
    title: "Hotel Project – Hospitality Expansion",
    amount: "₹22 Cr Funding",
    location: "Motihari, Bihar",
    desc: "Construction finance for mid-scale hotel with revenue-backed repayment modeling."
  },
  {
    title: "Real Estate – Commercial/Residential Development",
    amount: "₹85 Cr Sanctioned",
    location: "Bangalore",
    desc: "High-value real estate development funding with milestone-based disbursement."
  },
  {
    title: "Real Estate – Mixed-Use Development",
    amount: "₹35 Cr Approved",
    location: "Ranchi",
    desc: "Construction-linked term loan with structured financial planning for timely execution."
  },
  {
    title: "Mega Infrastructure Project",
    amount: "₹500 Cr (Ongoing)",
    location: "Bangalore",
    desc: "Large-scale infra financing including EPC, working capital & BG support under execution."
  },
  {
    title: "Commercial Infrastructure Development",
    amount: "₹200 Cr (Ongoing)",
    location: "Agra",
    desc: "Structured project finance for multi-phase commercial development with on-ground support."
  }
];



  const testimonials = [
    {
      name: "Rajesh Kumar",
      sector: "Real Estate Developer",
      text: "Ameraa Finnway helped us secure ₹60 Cr for our hotel expansion with quick approval and professional coordination.",
    },
    {
      name: "Dr. Priya Sharma",
      sector: "Healthcare",
      text: "The team provided exceptional support throughout our hospital funding process. Highly recommended!",
    },
    {
      name: "Amit Patel",
      sector: "Manufacturing",
      text: "Fast, reliable, and professional. They made the complex funding process incredibly smooth.",
    },
  ];

  const faqs = [
    {
      q: "What is the minimum loan amount?",
      a: "We provide project funding starting from ₹20 Crores up to ₹100 Crores and above for eligible high-value projects.",
    },
    {
      q: "Which industries are eligible?",
      a: "Real Estate, Hospitals, Hotels, Educational Institutions, Manufacturing, Infrastructure, and Government Contractor projects are eligible.",
    },
    {
      q: "How much time does approval take?",
      a: "Typically 2–4 months, subject to project complexity and documentation readiness.",
    },
    {
      q: "Which documents are required?",
      a: "Project DPR, Company Registration, Financial Statements (2-3 years), Land Documents, GST & IT Returns, and KYC documents.",
    },
    {
      q: "Does Amera Finway provide funding from Govt Bank?",
      a: "Yes, we have strong partnerships with leading Government Banks, NBFCs, and Private Financial Institutions.",
    },
    {
      q: "What is the fee structure?",
      a: "Our fee structure is transparent and project-specific. Contact us for detailed discussion.",
    },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
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
      `}</style>

      <main>
        <section
          id="hero"
          className="-mt-15 relative bg-linear-to-br from-[#0A2740] to-[#123A5A] text-white py-20 lg:py-32 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920')] bg-cover bg-center"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl scroll-animate">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                High-Value Project Finance from Leading Government Banks and
                Private Finance
              </h1>
              <p className="text-lg md:text-xl text-[#A4C8E1] mb-8">
                Project funding starting at ₹20 Crores for Education, Manufacturing, Healthcare, Hospitality, Infrastructure Real Estate,
                Renewable Energy, Hotels
                Projects — with fast approvals and seamless processing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("#apply")}
                  className="inline-flex items-center justify-center bg-[#D4A537] hover:bg-[#C59230] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                >
                  Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollToSection("#apply")}
                  className="inline-flex items-center justify-center border-2 border-[#D4A537] text-[#D4A537] hover:bg-[#D4A537] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
                >
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-8 border-b border-[#E2E2E2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center scroll-animate"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <stat.icon className="w-10 h-10 text-[#D4A537] mx-auto mb-2" />
                  <div className="text-xl font-bold text-[#0A2740]">
                    {stat.label}
                  </div>
                  <div className="text-sm text-[#123A5A]">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="services" className="bg-[#F8F9FB] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-12 scroll-animate">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 scroll-animate"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <service.icon className="w-12 h-12 text-[#D4A537] mb-4" />
                  <h3 className="text-xl font-bold text-[#0A2740] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#3A3A3A] mb-4">{service.desc}</p>
                  <button className="text-[#D4A537] hover:text-[#C59230] font-semibold inline-flex items-center transition-all">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Growth Section */}
        <section className="bg-gradient-to-r from-[#F8F9FB] to-white py-16 scroll-animate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-[#0A2740] text-3xl md:text-4xl font-bold mb-4">
                Your Partner for Sustainable Business Growth
              </h2>
              <p className="text-lg text-[#123A5A] max-w-3xl mx-auto">
                We help businesses scale with high-value funding, intelligent
                strategy, and data-driven decision-making.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#123A5A] text-lg leading-relaxed mb-6">
                  At{" "}
                  <span className="text-[#D4A537] font-semibold">
                    Ameraa Finnway
                  </span>
                  , we combine strategic business consulting with high-value
                  project funding to accelerate your company's growth. From
                  securing institutional capital to building future-ready
                  business strategies, we ensure you have the financial
                  strength, clarity, and direction needed to win and retain
                  customers—consistently and confidently.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "High-value institutional funding across India",
                    "Business strategy & data intelligence for expansion",
                    "Customer acquisition & performance-driven growth",
                    "Future-ready planning powered by expert insights",
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#D4A537] shrink-0 mt-1" />
                      <span className="text-[#0A2740]">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection("#services")}
                    className="inline-flex items-center justify-center bg-[#D4A537] hover:bg-[#C59230] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                  >
                    Explore Growth Advisory
                  </button>
                  <button
                    onClick={() => scrollToSection("#apply")}
                    className="inline-flex items-center justify-center border-2 border-[#D4A537] text-[#D4A537] hover:bg-[#D4A537] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                  >
                    Schedule a Consultation
                  </button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-[#E2E2E2]">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      icon: DollarSign,
                      title: "Funding Range",
                      value: "₹20 Cr - ₹100 Cr+",
                      desc: "High-value institutional capital",
                    },
                    {
                      icon: TrendingUp,
                      title: "Growth Focus",
                      value: "Strategic Scaling",
                      desc: "Beyond just funding",
                    },
                    {
                      icon: Users,
                      title: "Customer Success",
                      value: "Data-Driven",
                      desc: "Win & retain customers",
                    },
                    {
                      icon: Award,
                      title: "Expertise",
                      value: "20+ Years",
                      desc: "Pan-India experience",
                    },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F8F9FB] p-4 rounded-lg text-center"
                    >
                      <stat.icon className="w-8 h-8 text-[#D4A537] mx-auto mb-2" />
                      <h4 className="font-bold text-[#0A2740] text-sm mb-1">
                        {stat.title}
                      </h4>
                      <p className="text-[#D4A537] font-semibold mb-1">
                        {stat.value}
                      </p>
                      <p className="text-xs text-[#123A5A]">{stat.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-[#E2E2E2]">
                  <div className="flex items-center justify-center gap-2 text-[#0A2740]">
                    <MapPin className="w-5 h-5 text-[#D4A537]" />
                    <span className="font-semibold">Pan-India Presence</span>
                    <span className="text-[#123A5A]">•</span>
                    <span>40+ Institutional Partners</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sectors" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-12 scroll-animate">
              Sectors We Serve
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {sectors.map((sector, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8F9FB] p-6 rounded-lg border border-[#E2E2E2] hover:border-[#D4A537] transition-all duration-300 hover:scale-105 text-center scroll-animate"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <sector.icon className="w-12 h-12 text-[#D4A537] mx-auto mb-3" />
                  <h3 className="font-bold text-[#0A2740] mb-1">
                    {sector.name}
                  </h3>
                  <p className="text-sm text-[#3A3A3A]">{sector.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="why-us" className="bg-[#0A2740] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4A537] text-center mb-12 scroll-animate">
              Why Ameraa Finnway?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {usps.map((usp, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 scroll-animate"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-[#D4A537] shrink-0 mt-1" />
                  <p className="text-lg">{usp}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
<BusinessTransformation />
        <section id="process" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-12 scroll-animate">
              Our Funding Process
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {process.map((step, idx) => (
                <div
                  key={idx}
                  className="relative scroll-animate"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#D4A537] text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {step.step}
                    </div>
                    {idx < process.length - 1 && (
                      <div className="hidden md:block flex-1 h-0.5 bg-[#D4A537] ml-4"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2740] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#123A5A]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#F8F9FB] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-8 scroll-animate">
              Loan Size & Eligibility
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-lg border-2 border-[#D4A537] mb-6 scroll-animate">
                <h3 className="text-2xl font-bold text-[#0A2740] mb-4">
                  ₹20 Cr – ₹100 Cr+ Project Funding
                </h3>
                <ul className="space-y-3">
                  {[
                    "Registered Company/Entity",
                    "Valid Project Report / Expansion Blueprint",
                    "Land documents (Real Estate / Hospital Projects)",
                    "Financial statements (2–3 years)",
                    "GST, IT returns, KYC",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#D4A537] shrink-0 mt-1" />
                      <span className="text-[#3A3A3A]">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[#D4A537] font-semibold text-center">
                  We focus on high-value, capital-intensive projects
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="case-studies" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-12 scroll-animate">
              Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {caseStudies.map((study, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg border-2 border-[#123A5A] hover:shadow-xl transition-all duration-300 hover:scale-105 scroll-animate"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <DollarSign className="w-10 h-10 text-[#D4A537] mb-3" />
                  <h3 className="text-xl font-bold text-[#0A2740] mb-2">
                    {study.title}
                  </h3>
                  <p className="text-[#D4A537] font-semibold mb-2">{study.amount}</p>
                  {/* <p className="text-[#3A3A3A]">{study.desc}</p> */}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="bg-linear-to-br from-[#0A2740] to-[#123A5A] text-white py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4A537] text-center mb-12 scroll-animate">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((test, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300 scroll-animate"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#D4A537]">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mb-4 italic">"{test.text}"</p>
                  <div className="border-t border-white/20 pt-4">
                    <p className="font-bold">{test.name}</p>
                    <p className="text-sm text-[#A4C8E1]">{test.sector}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="faq" className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2740] text-center mb-12 scroll-animate">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8F9FB] rounded-lg border border-[#D4A537] overflow-hidden scroll-animate"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F8F9FB]/80 transition-colors"
                    aria-expanded={openFaq === idx}
                    aria-label={`Toggle answer for: ${faq.q}`}
                  >
                    <span className="font-bold text-[#0A2740]">{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp
                        className="w-5 h-5 text-[#D4A537]"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDown
                        className="w-5 h-5 text-[#D4A537]"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === idx ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="px-6 pb-6 text-[#3A3A3A]">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="apply" className="bg-[#F8F9FB] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#D4A537] text-center py-3 rounded-t-lg">
              <h2 className="text-2xl font-bold text-white">
                Apply for Project Funding
              </h2>
            </div>
            <div className="bg-white p-8 rounded-b-lg shadow-lg scroll-animate">
              <div className="">
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[#0A2740] font-semibold mb-2"
                      >
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A537] focus:ring-2 focus:ring-[#D4A537] focus:ring-opacity-20 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-[#0A2740] font-semibold mb-2"
                      >
                        Company / Organization *
                      </label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A537] focus:ring-2 focus:ring-[#D4A537] focus:ring-opacity-20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[#0A2740] font-semibold mb-2"
                      >
                        Phone *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[#0A2740] font-semibold mb-2"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-[#0A2740] font-semibold mb-2"
                      >
                        City / Project Location *
                      </label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-[#0A2740] font-semibold mb-2"
                      >
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      >
                        <option value="">Select Project Type</option>
                        <option value="education">Education</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="infrastructure">Infrastructure</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="renewable">Renewable Energy</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="loanRequirement"
                      className="block text-[#0A2740] font-semibold mb-2"
                    >
                      Est. Loan Requirement (₹ Cr) *
                    </label>
                    <input
                      id="loanRequirement"
                      type="text"
                      name="loanRequirement"
                      value={formData.loanRequirement}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  {/* FILE INPUTS */}

                  <div>
                    <label className="block text-[#0A2740] font-semibold mb-2">
                      Attach DPR / Project Report / LOI
                    </label>
                    <input
                      type="file"
                      name="dpr"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0A2740] font-semibold mb-2">
                      Project Report
                    </label>
                    <input
                      type="file"
                      name="projectReport"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0A2740] font-semibold mb-2">
                      Company Profile
                    </label>
                    <input
                      type="file"
                      name="companyProfile"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0A2740] font-semibold mb-2">
                      3 Years ITR With Audit Report / Profit Loss Balance Sheet
                      of Company & Individual
                    </label>
                    <input
                      type="file"
                      name="itr"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0A2740] font-semibold mb-2">
                      12 Month Latest Bank Statement of Company
                    </label>
                    <input
                      type="file"
                      name="bankStatement"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0A2740] font-semibold mb-2">
                      12 Month GSTR
                    </label>
                    <input
                      type="file"
                      name="gstr"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  {/* <div>
              <label className="block text-[#0A2740] font-semibold mb-2">
                12 Month GST Latest
              </label>
              <input
                type="file"
                name="gstLatest"
                onChange={handleFileChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
            </div> */}

                  <div>
                    <label className="block text-[#0A2740] font-semibold mb-2">
                      Business Registration Proof
                    </label>
                    <input
                      type="file"
                      name="businessProof"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0A2740] font-semibold mb-2">
                      Electricity Bill Of Office & House
                    </label>
                    <input
                      type="file"
                      name="electricityBill"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0A2740] font-semibold mb-2">
                      Pan
                    </label>
                    <input
                      type="file"
                      name="pan"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0A2740] font-semibold mb-2">
                      Adhar
                    </label>
                    <input
                      type="file"
                      name="adhar"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0A2740] font-semibold mb-2">
                      Photo
                    </label>
                    <input
                      type="file"
                      name="photo"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0A2740] font-semibold mb-2">
                      All Running Load Sanction Letter & Load Statement
                    </label>
                    <input
                      type="file"
                      name="loadStatement"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0A2740] font-semibold mb-2">
                      Property Paper With Landmark - Full Address with pincode
                      and Property Owner Name
                    </label>
                    <input
                      type="file"
                      name="propertyPaper"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0A2740] font-semibold mb-2">
                      Message / Project Summary
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    ></textarea>
                  </div>

                  <div className="flex gap-4 items-center">
                    <button
                      type="submit"
                      className="bg-[#D4A537] text-white font-semibold py-4 px-8 rounded-lg text-lg w-full md:w-auto flex items-center justify-center gap-2"
                      disabled={succesLoad}
                    >
                      {succesLoad && <Loader size="sm" />}
                      Submit Project for Review
                    </button>
                    <div className="text-xl text-red-500 font-semibold">
                      {error && error}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
