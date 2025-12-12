import React, { useState, useEffect, useRef } from "react";

const Apply = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    console.log("Final FormData:", formData);
  };

  return (
    <div>
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
                3 Years ITR With Audit Report / Profit Loss Balance Sheet of Company & Individual
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
                Property Paper With Landmark - Full Address with pincode and Property Owner Name
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

            <button
              type="submit"
              className="bg-[#D4A537] text-white font-semibold py-4 px-8 rounded-lg text-lg w-full md:w-auto"
            >
              Submit Project for Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;
