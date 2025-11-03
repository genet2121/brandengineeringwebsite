
import React, { useContext, useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";
import AdminAPI from "../../APIs/AdminAPI";
import AlertContext from "../../Contexts/AlertContext";
import { Facebook, Twitter, Instagram, YouTube, Phone, Email } from "@mui/icons-material";
import Subscribe from "./Subscribe";


function FooterComponent() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const { setAlert } = useContext(AlertContext);

  const handleLinkClick = (path: any) => {
    window.scrollTo({ top: 0 });
    navigate(path);
  };

  const handleSubscription = async () => {
    try {
      const response = await AdminAPI.createNormal("/v1/subscription", { email });
      // console.log(response);

      setAlert(response.message, "success");
      setEmail("");
      // if (response.success) {
      // } else {
      // }
    } catch (error: any) {
      // setAlert("Something went wrong. Please try again.", "error");
      setAlert(error.message || "An unexpected error occurred.", "error");
    }
  }
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "M.I.R.A.C. is a medical recruitment agency",
    "url": "https://mirac.et",
    "logo": "https://mirac.et/images/mirac_logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Addis Ababa",
      "addressCountry": "ET",
      "addressLocality": "Addis Ababa",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+251-903-373937",
      "email": "info@mirac.et",
      "contactType": "Customer Service",
    },
    "sameAs": [
      "https://www.facebook.com/miracethiopia",
      "https://t.me/MIRACEthiopia",
      "https://linkedin.com",
      "https://twitter.com"
    ]
  }

  return (

    <>
      <div className="relative">
        {/* Subscribe Component */}
        {/* <div className="absolute left-0 right-0 z-10 flex justify-center">
    <div className=" shadow-xl px-6 py-1 rounded-md w-full max-w-5xl h-36 transform translate-y-[-50%]">
      <Subscribe />
    </div>
  </div> */}
        {/* bg-gradient-to-b from-[#002c5f] via-[#1a7de7] to-[#1c83f9]  */}
        {/* Footer */}
        <footer className=" pt-4 pb-14 px-6 md:px-12 " style={{ backgroundColor: "#1D1D1D" }}>

          {/* Footer Content */}
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 pt-14 mt-12 md:mt-0">

            {/* About */}
            <div className="lg:col-span-2">
              <h2 className="font-bold text-xl mb-4 text-yellow-500">Who Are We?</h2>
              <p className="text-sm text-white leading-relaxed">
                MEP One-Stop Solution—Design, Supply, and Installation, All Under One Roof. approach to Mechanical, Electrical, and Plumbing (MEP) systems—from concept design to material supply and on-site installation. all coordinated seamlessly under one.
              </p>
            </div>


            {/* Links */}
            <div>
              <h2 className="font-bold text-xl mb-4 text-yellow-500">Quick Links</h2>
              <ul className="space-y-3 text-sm text-white">
                <li><a href="/" className="hover:text-blue-300 hover:underline">Home</a></li>
                <li><a href="/about_us" className="hover:text-blue-300 hover:underline">About</a></li>
                <li><a href="/services" className="hover:text-blue-300 hover:underline">Services</a></li>
                <li><a href="/projects" className="hover:text-blue-300 hover:underline">Projects</a></li>
                {/* <li><a href="/departments" className="hover:text-blue-300 hover:underline">Departments</a></li> */}
              </ul>
            </div>

            {/* Address */}
            <div>
              <h2 className="font-bold text-xl mb-4 text-yellow-500">Get In Touch</h2>
              <p className="flex items-center gap-2 text-sm text-white">
                <Phone fontSize="small" /> +251 911 000 236
              </p>
              <p className="flex items-center gap-2 text-sm text-white mt-3">
                <Email fontSize="small" />
                <a href="mailto:isaiasyt@ipspcenter.org" className="hover:text-blue-300 hover:underline">
                 info@brandengineeringplc.com
                </a>
              </p>
            </div>
            {/* Social Media */}
            <div>
              <h2 className="font-bold text-xl mb-4 text-yellow-500">Follow Us</h2>
              <div className="flex gap-5 text-white text-2xl">
                <Facebook className="hover:text-blue-400 cursor-pointer transition-all duration-300" />
                <Twitter className="hover:text-sky-400 cursor-pointer transition-all duration-300" />
                <Instagram className="hover:text-pink-400 cursor-pointer transition-all duration-300" />
                <YouTube className="hover:text-red-500 cursor-pointer transition-all duration-300" />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white" >
            <a href="https://brandengineering.org/" className="text-yellow-500 font-semibold hover:underline" target="blank"> </a>
            <p> <sup>&copy;</sup> {new Date().getFullYear()}</p>
          </div>
        </footer>
      </div>




    </>
  );
}

export default FooterComponent;
