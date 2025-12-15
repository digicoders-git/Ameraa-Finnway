import React from "react";
import owner from "../../assets/owner.png";
import ownerr from "../../assets/ownerr.jpg";
import { Award, CheckCircle, Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="mt-10">
      <section className="bg-[#F8F9FB] py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl p-3 sm:p-5 md:p-12 border-2 border-[#D4A537] border-opacity-20 shadow-xl hover:shadow-2xl transition-all duration-500 scroll-animate">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              {/* Profile Image */}
              <div className="relative mx-auto md:mx-0">
                <div className="w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-[#D4A537] to-[#C59230] rounded-full flex items-center justify-center shrink-0 p-1">
                  <img
                    src={ownerr}
                    className="rounded-full w-full h-full object-cover"
                    alt="Vishhal S. Kumar"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 md:w-16 md:h-16 bg-[#D4A537] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <h3 className="text-xl md:text-4xl font-bold text-[#0A2740] mb-2">
                  Vishhal S. Kumar
                </h3>
                <p className="text-base md:text-xl text-[#D4A537] font-semibold mb-4">
                  Founder, Ameraa Finnway – Lucknow, India
                </p>
                <p className="text-sm md:text-base text-[#3A3A3A] leading-relaxed mb-6">
                  With more than 20 years of financial expertise, Vishhal S. Kumar
                  is a recognized advisor in the space of project funding,
                  construction finance, institutional lending, and government
                  bank loan structuring.
                </p>

               
                {/* Contact Details - Enhanced */}
                <div className="bg-gradient-to-br from-[#F8F9FB] to-white p-3 md:p-6 rounded-xl border-2 border-[#D4A537] border-opacity-30 shadow-lg mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 md:w-8 h-1 bg-[#D4A537] rounded-full"></div>
                    <h4 className="text-base md:text-lg font-bold text-[#0A2740]">
                      Get in Touch
                    </h4>
                    <div className="flex-1 h-1 bg-[#D4A537] bg-opacity-20 rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {/* Phone */}
                    <a
                      href="tel:+919592171057"
                      className="bg-white p-3 md:p-4 rounded-lg border border-[#D4A537] border-opacity-20 hover:border-[#D4A537] hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#D4A537] to-[#C59230] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-[#3A3A3A] mb-1">
                            Call Direct
                          </p>
                          <p className="font-bold text-sm md:text-base text-[#0A2740] group-hover:text-[#D4A537] transition-colors break-all">
                            +91 9592171057
                          </p>
                        </div>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:vishhal@ameraafinnway.co"
                      className="bg-white p-3 md:p-4 rounded-lg border border-[#D4A537] border-opacity-20 hover:border-[#D4A537] hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#D4A537] to-[#C59230] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="min-w-0 overflow-hidden">
                          <p className="text-xs text-[#3A3A3A] mb-1">
                            Email Us
                          </p>
                          <p className="font-bold text-sm md:text-base text-[#0A2740] group-hover:text-[#D4A537] transition-colors truncate">
                            vishhal@ameraafinnway.co 
                          </p>
                        </div>
                      </div>
                    </a>

                    {/* Location - Full Width */}
                    <div className="sm:col-span-2 bg-white p-3 md:p-4 rounded-lg border border-[#D4A537] border-opacity-20">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#D4A537] to-[#C59230] rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-[#3A3A3A] mb-1">
                            Office Location
                          </p>
                          <p className="font-bold text-sm md:text-base text-[#0A2740]">
                            Lucknow, Uttar Pradesh, India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick CTA */}
                  {/* <div className="mt-4 pt-4 border-t border-[#D4A537] border-opacity-20 text-center">
                    <p className="text-sm text-[#123A5A] mb-2">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                      Available for consultation
                    </p>
                    <p className="text-xs text-[#3A3A3A]">
                      Mon - Sat: 9:00 AM - 7:00 PM IST
                    </p>
                  </div> */}
                </div>

                {/* Quote */}
                <div className="pt-4 md:pt-6 border-t-2 border-[#D4A537] border-opacity-30">
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="text-2xl md:text-4xl text-[#D4A537] leading-none flex-shrink-0">
                      "
                    </div>
                    <p className="text-[#D4A537] font-semibold text-sm md:text-lg italic pt-1 md:pt-2">
                      To empower ambitious businesses by making large-scale
                      funding accessible, reliable, and growth-driven.
                      <span className="text-2xl md:text-4xl text-[#D4A537] leading-none ml-1">
                      "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;