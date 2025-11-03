import { useState } from "react";
import { Mail, Phone, LocationOn } from "@mui/icons-material";
import React from "react";
import ContactUsSection from "../Components/Reusables/ContactUsSection";
import VerticalGap from "../Components/Reusables/VerticalGap";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <>
      {/* Header Section */}
      <section
        className="relative py-24 text-center overflow-hidden shadow-md"
        style={{
          background: `linear-gradient(135deg, var(--button_color) 0%, color-mix(in srgb, var(--button_color) 80%, black) 50%, color-mix(in srgb, var(--button_color) 60%, black) 100%)`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: "var(--button_bg)" }}
        ></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Reach out anytime — we're here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex bg-white justify-center items-start py-12 min-h-screen">
        <section className="p-2 rounded-lg flex flex-wrap max-w-8xl w-full sm:ml-0 md:ml-24 lg:ml-44 xl:ml-44">
          {/* Left Section */}
          <div className="w-full md:w-1/3 p-6 space-y-4">
            <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-600 mb-4">
              Your message is important to us. Simply email or call us, and we’ll make sure the right person gets back to you soon.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <LocationOn className="text-orange-500" />
                <span>Ethiopia, Addis Ababa</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-orange-500" />
                <span>+251 911 000 236</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-orange-500" />
                <span>info@brandengineeringplc.com</span>
              </div>
            </div>

            <div className="mt-6 flex space-x-4">
              <i className="fab fa-facebook text-orange-500 text-2xl"></i>
              <i className="fab fa-twitter text-orange-500 text-2xl"></i>
              <i className="fab fa-youtube text-orange-500 text-2xl"></i>
              <i className="fab fa-instagram text-orange-500 text-2xl"></i>
            </div>

            {/* Embedded Google Map */}
            <div className="mt-6 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.768267325617!2d38.7661804!3d8.993458699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85ad46190043%3A0x7f60f8d3f6df296e!2zQnJhbmQgRW5naW5lZXJpbmcgUExDIHwg4Yml4Yir4YqV4Yu1IOGKouGKleGMguGKkOGIquGKleGMjSDhioVc4Yuo4YmwXOGLqOGMjVzhiJvhioXhiaDhiK0!5e0!3m2!1sen!2set!4v1761358196550!5m2!1sen!2set"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/3 p-6">
            <ContactUsSection />
          </div>
        </section>
      </div>

      <VerticalGap size={50} />
    </>
  );
};

export default ContactUs;
