import React from "react";
import owner from "../../assets/owner.png";
import { Award, CheckCircle, Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <div>
      <section className="bg-[#F8F9FB] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 md:p-12 border-2 border-[#D4A537] border-opacity-20 shadow-xl hover:shadow-2xl transition-all duration-500 scroll-animate">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Profile Image */}
              <div className="relative mx-auto md:mx-0">
                <div className=" w-48 h-48 bg-gradient-to-br from-[#D4A537] to-[#C59230] rounded-full flex items-center justify-center shrink-0 p-1">
                  <img
                    src={owner}
                    className="rounded-full w-full h-full object-cover"
                    alt="Vishhal S. Kumar"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-[#D4A537] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-[#0A2740] mb-2">
                  Vishhal S. Kumar
                </h3>
                <p className="text-xl text-[#D4A537] font-semibold mb-4">
                  Founder, Ameraa Finnway – Lucknow, India
                </p>
                <p className="text-[#3A3A3A] leading-relaxed mb-6">
                  With more than 20 years of financial expertise, Vishal S Kumar
                  is a recognized advisor in the space of project funding,
                  construction finance, institutional lending, and government
                  bank loan structuring.
                </p>

               
                {/* Contact Details - Enhanced */}
                <div className="bg-gradient-to-br from-[#F8F9FB] to-white p-6 rounded-xl border-2 border-[#D4A537] border-opacity-30 shadow-lg mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-1 bg-[#D4A537] rounded-full"></div>
                    <h4 className="text-lg font-bold text-[#0A2740]">
                      Get in Touch
                    </h4>
                    <div className="flex-1 h-1 bg-[#D4A537] bg-opacity-20 rounded-full"></div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <a
                      href="tel:+919592171057"
                      className="bg-white p-4 rounded-lg border border-[#D4A537] border-opacity-20 hover:border-[#D4A537] hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#D4A537] to-[#C59230] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-[#3A3A3A] mb-1">
                            Call Direct
                          </p>
                          <p className="font-bold text-[#0A2740] group-hover:text-[#D4A537] transition-colors">
                            +91 9592171057
                          </p>
                        </div>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:VISHHAL@ameraafinnone"
                      className="bg-white p-4 rounded-lg border border-[#D4A537] border-opacity-20 hover:border-[#D4A537] hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#D4A537] to-[#C59230] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-xs text-[#3A3A3A] mb-1">
                            Email Us
                          </p>
                          <p className="font-bold text-[#0A2740] group-hover:text-[#D4A537] transition-colors truncate">
                            VISHHAL@ameraafinnone
                          </p>
                        </div>
                      </div>
                    </a>

                    {/* Location - Full Width */}
                    <div className="sm:col-span-2 bg-white p-4 rounded-lg border border-[#D4A537] border-opacity-20">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#D4A537] to-[#C59230] rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-[#3A3A3A] mb-1">
                            Office Location
                          </p>
                          <p className="font-bold text-[#0A2740]">
                            Lucknow, Uttar Pradesh, India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick CTA */}
                  <div className="mt-4 pt-4 border-t border-[#D4A537] border-opacity-20 text-center">
                    <p className="text-sm text-[#123A5A] mb-2">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                      Available for consultation
                    </p>
                    <p className="text-xs text-[#3A3A3A]">
                      Mon - Sat: 9:00 AM - 7:00 PM IST
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="pt-6 border-t-2 border-[#D4A537] border-opacity-30">
                  <div className="flex items-start gap-3">
                    <div className="text-4xl text-[#D4A537] leading-none">
                      "
                    </div>
                    <p className="text-[#D4A537] font-semibold text-lg italic pt-2">
                      To empower ambitious businesses by making large-scale
                      funding accessible, reliable, and growth-driven.
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
