import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import logo3 from "../assets/logo3.png";
import logo from '../assets/logo.jpg'
import { NavLink } from "react-router-dom";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    // { name: 'Services', path: '/services' },
    { name: "Sectors", path: "/sectors" },
    { name: "Funding Process", path: "/process" },
    { name: "Case Studies", path: "/case-studies" },
    // { name: 'Testimonials', path: '/testimonials' },
    // { name: 'FAQ', path: '/faq' },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    {
      name: "Education Finance",
      path: "/education-finance",
    },
    {
      name: "Manufacturing & Industrial Finance",
      path: "/manufacturing-&-industrial-finance",
    },
    { name: "Healthcare Finance", path: "/healthcare-finance" },
    { name: "Hospitality Finance", path: "/hospitality-finance" },
    {
      name: "Government Contractor Funding",
      path: "/government-contractors-&-bank-guarantees",
    },
    { name: "Project Finance", path: "/project-finance" },
    {
      name: "Construction & Real Estate Finance",
      path: "/construction-&-real-estate-finance",
    },
    // { name: 'Bank Guarantees (PBG, APG, Bid Bonds)', path: '/bank-guarantees' },
    // { name: 'Renewable Energy Project Finance', path: '/renewable-energy-finance' }
  ];

  const offices = [
    "Mumbai",
    "Bangalore",
    "Pune",
    "Hyderabad",
    "Chennai",
    "Indore",
    "Ahmedabad",
  ];

  return (
    <footer className="bg-[#0A2740] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-[#D4A537] mb-4">
              Amirra Finwaye
            </h3>
            <p className=" text-gray-300 mb-6 leading-relaxed">
              A premier project finance advisory specializing in 15 Cr. and Above government bank funding for Real Estate, Hospitals, Hotels,
              Education Institutions, Infrastructure & Industrial projects.
              PAN-India presence with 20+ years of financial expertise.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/vishal-s-kumar-4272725a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#D4A537] hover:bg-[#D4A537] hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#D4A537] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.path}
                    className=" text-white hover:text-[#A4C8E1] transition-colors duration-200 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#D4A537] mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href={service.path}
                    className=" text-white hover:text-[#A4C8E1] transition-colors duration-200 inline-block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#D4A537] mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <Phone className="w-5 h-5 text-[#D4A537] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div>
                    <a href="tel:+919076612555" className="hover:text-[#A4C8E1] transition-colors duration-200 block">+91 90766 12555</a>
                    <a href="tel:+919592171057" className="hover:text-[#A4C8E1] transition-colors duration-200 block">+91 9592171057</a>
                  </div>
                </div>
              </div>

              <a
                href="mailto:Vishal@amirrafinwaye.com"
                className="flex items-start gap-2 text-sm hover:text-[#A4C8E1] transition-colors duration-200"
              >
                <Mail className="w-5 h-5 text-[#D4A537] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div>Vishal@amirrafinwaye.com</div>
                </div>
              </a>

              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-5 h-5 text-[#D4A537] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Head Office</div>
                  <div>Lucknow, India</div>
                </div>
              </div>

              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-5 h-5 text-[#D4A537] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold mb-1">PAN India Presence</div>
                  <div className="text-xs text-gray-300">
                    {offices.map((city, idx) => (
                      <span key={idx}>
                        {city}
                        {idx < offices.length - 1 && " • "}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2 text-sm">
                <Clock className="w-5 h-5 text-[#D4A537] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Office Timings</div>
                  <div>Mon–Sat: 10:00 AM – 7:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(212,165,55,0.25)]"></div>

      <div className="bg-linear-to-r from-[#0A2740] to-[#123A5A] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold text-white mb-2">
                Looking for High-Value Project Funding?
              </h4>
              <p className="text-[#A4C8E1]">
                Get expert guidance on government bank funding for your next
                project.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D4A537] hover:bg-[#C59230] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 whitespace-nowrap"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#123A5A] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-gray-300">
              © 2025 Designed & Developed by{" "}
              <a
                className="hover:text-yellow-500"
                target="_blank"
                href="https://digicoders.in/"
              >
                #TeamDigiCoders
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <NavLink
                to="/PrivacyAndPolicy"
                className="text-white hover:text-[#D4A537] transition-colors duration-200"
              >
                Privacy Policy
              </NavLink>
              <NavLink
                to="/terms-conditions"
                className="text-white hover:text-[#D4A537] transition-colors duration-200"
              >
                Terms & Conditions
              </NavLink>
              <NavLink
                to="/disclaimer"
                className="text-white hover:text-[#D4A537] transition-colors duration-200"
              >
                Disclaimer
              </NavLink>
              <NavLink to='/'>
                <img
                src={logo}
                alt="Amirra Finwaye Logo"
                className="h-10 w-auto mb-4 object-contain shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
