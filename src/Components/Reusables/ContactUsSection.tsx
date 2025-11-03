
import React, { useEffect, useState } from "react";
import AdminAPI from "../../APIs/AdminAPI";
import { CheckCircle, AlertCircle, Mail, Phone, User, MessageSquare, Send } from "lucide-react";
import emailjs from "emailjs-com";

const MESSAGE_TIMEOUT = 3000;

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState<{
    status: string;
    message: string;
  } | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        "service_gd2dl2f",   
        "template_1w2f4du",   
        {
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          phone_number: formData.phone_number,
          message: formData.message,
        },
        "QiPWILCDAGezoddA1"
      );

      console.log(result.text);
      setResponseData({ status: "SUCCESS", message: "Message sent successfully!" });
      setFormData({ first_name: "", last_name: "", email: "", phone_number: "", message: "" });
    } catch (error: any) {
      console.error(error.text);
      setResponseData({ status: "ERROR", message: "Failed to send message. Try again later." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .contact-input:focus {
          border-color: var(--button_bg) !important;
          box-shadow: 0 0 0 4px color-mix(in srgb, var(--button_bg) 20%, transparent) !important;
        }
      `}</style>
      <div className="max-w-8xl mx-auto mt-10">
        {/* Message or Form */}
        {responseData ? (
          <div
            className={`flex items-center justify-center gap-3 ${responseData.status === "SUCCESS"
                ? "bg-green-50 text-green-800 border-2 border-green-200"
                : "bg-red-50 text-red-800 border-2 border-red-200"
              } px-6 py-4 rounded-2xl shadow-lg animate-fadeIn`}
          >
            {responseData.status === "SUCCESS" ? (
              <CheckCircle size={24} className="flex-shrink-0" />
            ) : (
              <AlertCircle size={24} className="flex-shrink-0" />
            )}
            <span className="text-base font-semibold">{responseData.message}</span>
          </div>
        ) : (
            // <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="w-full flex justify-center">
            {/* Left Side - Contact Info */}
            <div className="rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden" style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
            }}>
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-32 translate-x-32" style={{ backgroundColor: 'var(--button_bg)', opacity: 0.05 }}></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full translate-y-24 -translate-x-24" style={{ backgroundColor: 'var(--button_bg)', opacity: 0.05 }}></div>

              <div className="relative z-10">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--button_bg)' }}></div>
                    <span className="text-sm font-medium uppercase tracking-wider" style={{ color: 'var(--button_bg)' }}>Contact Information</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4">Let's Start a Conversation</h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Have a project in mind or need expert consultation? We're here to help bring your vision to life.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors" style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }}>
                      <Mail size={24} style={{ color: 'var(--button_bg)' }} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email Us</p>
                        <a href="mailto:info@company.com" className="text-lg font-semibold hover:underline">info@brandengineeringplc.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                      <Phone size={24} style={{ color: 'var(--button_bg)' }} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Call Us</p>
                        <a href="tel:+1234567890" className="text-lg font-semibold hover:underline">+251 911 000 236</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                      <MessageSquare size={24} style={{ color: 'var(--button_bg)' }} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Office Hours</p>
                      <p className="text-lg font-semibold">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/20">
                  <p className="text-gray-300 text-sm">
                    We typically respond within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            {/* <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        placeholder="John"
                        className="contact-input w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none transition-all text-gray-900 placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="contact-input w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none transition-all text-gray-900 placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="contact-input w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none transition-all text-gray-900 placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        placeholder="+123 456 7890"
                        className="contact-input w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none transition-all text-gray-900 placeholder-gray-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                  <div className="relative">
                    <MessageSquare size={18} className="absolute left-4 top-4 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      className="contact-input w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none transition-all text-gray-900 placeholder-gray-400 h-36 resize-none"
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group w-full font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base flex items-center justify-center gap-3 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: 'var(--button_bg)',
                    color: 'var(--button_color)'
                  }}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default ContactUsSection;
