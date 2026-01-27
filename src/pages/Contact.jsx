import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Building2, CheckCircle2 } from "lucide-react";

import axios from "axios";

// import "./Apply.css";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

export default function Contact() {
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

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
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
          src="https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=2070&auto=format&fit=crop"
          alt="Modern office workspace with collaboration"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0A2740] opacity-90"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-white text-5xl font-bold text-center animate-fade-in-down">
            Contact With Us.
          </h1>
          <div className="w-24 h-1 bg-[#D4A537] mx-auto mt-4 animate-scale-in animation-delay-200"></div>
          <p className="text-[#A4C8E1] text-xl max-w-3xl mx-auto text-center mt-6 animate-fade-in-up animation-delay-400">
            Whether you're building a hospital, hotel, real estate tower,
            industrial plant, or government project, our experts will help you
            secure ₹15 Cr. and Above institutional funding from top government
            banks & NBFCs.
          </p>
        </div>
      </section>
      <div
        ref={(el) => (sectionRefs.current[0] = el)}
        className={`py-16 px-4 transition-all duration-1000 ${
          isVisible[0]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#0A2740] text-3xl font-bold text-center mb-4">
            Share your project plan and we'll take care of the rest.
          </h2>
          <p className="text-[#3A3A3A] text-lg text-center max-w-3xl mx-auto leading-relaxed mb-8">
            We help businesses secure high-value project funding with complete
            advisory support — from eligibility check to sanction and
            disbursement.
          </p>
          <p className="text-[#123A5A] text-center max-w-2xl mx-auto mb-6">
            Whether you have a DPR ready or just a concept note, our team will
            guide you through:
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {[
              "Project evaluation",
              "Banking options",
              "Documentation preparation",
              "Credit presentation",
              "Loan approval roadmap",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-[#D4A537]" />
                <span className="text-[#0A2740] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={(el) => (sectionRefs.current[1] = el)}
        className={`py-12 px-4 bg-white transition-all duration-1000 ${
          isVisible[1]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-xl rounded-xl p-8 border-l-4 border-[#D4A537] hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <Phone className="w-10 h-10 text-[#D4A537] mb-4" />
            <h3 className="text-[#0A2740] font-bold text-xl mb-2">Phone</h3>
            <div className="w-16 h-1 bg-[#D4A537] my-4"></div>
            <div className="space-y-2">
              <p className="text-[#123A5A] text-lg font-semibold">
                <a href="tel:+919592171057" className="hover:text-[#D4A537] transition-colors">+91 9592171057</a>
              </p>
              <p className="text-[#123A5A] text-lg font-semibold">
                <a href="tel:+919076612555" className="hover:text-[#D4A537] transition-colors">+91 90766 12555</a>
              </p>
            </div>
            <p className="text-[#3A3A3A] text-sm mt-2">
              Available Mon–Sat, 10AM–7PM
            </p>
          </div>
          <a href="mailto:vishhal@ameraafinnway.co" className="bg-white shadow-xl rounded-xl p-8 border-l-4 border-[#D4A537] hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <Mail className="w-10 h-10 text-[#D4A537] mb-4" />
            <h3 className="text-[#0A2740] font-bold text-xl mb-2">Email</h3>
            <div className="w-16 h-1 bg-[#D4A537] my-4"></div>
            <p className="text-[#123A5A] text-lg font-semibold break-all">
              vishhal@ameraafinnway.co
            </p>
          </a>
          <div className="bg-white shadow-xl rounded-xl p-8 border-l-4 border-[#D4A537] hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <MapPin className="w-10 h-10 text-[#D4A537] mb-4" />
            <h3 className="text-[#0A2740] font-bold text-xl mb-2">
              Office Locations
            </h3>
            <div className="w-16 h-1 bg-[#D4A537] my-4"></div>
            <p className="text-[#123A5A] font-semibold mb-2">
              Head Office: Lucknow
            </p>
            <p className="text-[#0A2740] font-medium text-sm mb-2">
              PAN India Offices:
            </p>
            <div className="grid grid-cols-2 gap-2 text-[#3A3A3A] text-sm">
              {[
                "Mumbai",
                "Bangalore",
                "Pune",
                "Hyderabad",
                "Chennai",
                "Indore",
                "Ahmedabad",
              ].map((city, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1 hover:translate-x-1 transition-transform duration-300"
                >
                  <div className="w-1.5 h-1.5 bg-[#D4A537] rounded-full"></div>
                  <span>{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        ref={(el) => (sectionRefs.current[2] = el)}
        className={`py-16 px-4 transition-all duration-1000 ${
          isVisible[2]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 md:p-12 hover:shadow-3xl transition-shadow duration-500">
          <h2 className="text-[#0A2740] text-2xl font-bold mb-6">
            Tell Us About Your Project
          </h2>

          <div className="space-y-6">
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
                  3 Years ITR With Audit Report / Profit Loss Balance Sheet of
                  Company & Individual
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
                  Property Paper With Landmark - Full Address with pincode and
                  Property Owner Name
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

              <div className="flex flex-col gap-4 items-center">
                <button
                  type="submit"
                  className="bg-[#D4A537] text-white font-semibold py-4 px-8 rounded-lg text-lg w-full md:w-auto flex items-center justify-center gap-2 cursor-pointer"
                  disabled={succesLoad}
                >
                  {succesLoad && <Loader size="sm" />}
                  Submit{succesLoad && 'ing'} Project for Review
                </button>
                <div className="text-xl text-red-500 font-semibold">
                  {error && error}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        ref={(el) => (sectionRefs.current[3] = el)}
        className={`py-16 px-4 bg-white transition-all duration-1000 ${
          isVisible[3]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#0A2740] text-3xl font-bold text-center mb-12">
            Why Businesses Trust AMERAA FINNWAY
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "20+ Years Project Finance Expertise",
              "PAN India Execution Capability",
              "Strong Network of Govt Banks & NBFCs",
              "Fast Approvals With Structured Documentation",
              "Funding from ₹15 Cr. and Above",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 bg-[#F8F9FB] rounded-lg hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-[#D4A537] shrink-0 mt-1" />
                <span className="text-[#0A2740] font-medium text-lg">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
