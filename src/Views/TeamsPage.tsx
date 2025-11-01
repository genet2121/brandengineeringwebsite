import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { Button } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import StarsIcon from "@mui/icons-material/Stars";
import CircleIcon from "@mui/icons-material/Circle";
import VerticalGap from "../Components/Reusables/VerticalGap";
import TeamSection from "../Components/Reusables/TeamSection";
import WhatWeDo from "../Components/Reusables/WhatWeDo";
import AdminAPI from "../APIs/AdminAPI";
import { useNavigate } from "react-router-dom";
import TeamUp from "../Components/Reusables/teamUp";



function Teams() {

  const [about, setAbout] = useState<any>([]);
  const [services, setServices] = useState<any>([]);
  const navigate = useNavigate();

  const generateStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "M.I.R.A.C.",
    "url": "http://mirac.et/",
    "logo": "https://mirac.et/images/mirac_logo.png",
    "description":
      "M.I.R.A.C. is a medical recruitment agency dedicated to connecting healthcare providers with exceptional talent.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": { "@type": "Country", "name": "Ethiopia" },
      "addressLocality": "Addis Ababa",
    },
    "sameAs": [
      "https://www.facebook.com/miracethiopia?mibextid=ZbWKwL",
      "https://twitter.com/",
      "https://www.linkedin.com/company/yourcompany",
    ],
    "foundingDate": "2022-01-01",
    "founders": [{ "@type": "Person", "name": "Dr Dawit Eshetu" }],
  });
  const teams = [
    {
      name: "Isaias Tesfalidet",
      role: "President",
      shortDescription: "BSc. Civil Engineering – Expertise in infrastructure planning and structural analysis.",
      image: "/images/Isaias.jpg",
    },
    {
      name: "Ruta Hadgu Esq.",
      role: "Director of Operations",
      shortDescription: "BSc. Electronic Engineering – Specializing in system automation and circuit design.",
      image: "/images/ruta.jpg",
    },
    {
      name: "Allo Tedla",
      role: "Regional Analyst",
      shortDescription: "BSc. Electrical Engineering – Focused on power systems and energy efficiency.",
      image: "/images/allo.jpg",
    },
    {
      name: "Dr. Hanna Haile Esq.",
      role: "Partnership",
      shortDescription: "BSc. Chemical Engineering – Skilled in process engineering and material sciences.",
      image: "/images/hanna.jpg",
    },
    {
      name: "Helen Fisseha",
      role: "Product Manager",
      shortDescription: "BSc. Chemical Engineering – Experienced in product development and industrial chemistry.",
      image: "/images/helen.jpg",
    },
  ];

  const loadAbout = async () => {

    let data: any = await AdminAPI.getAllNormal("v1/about", "about");

    setAbout(data.Items);


  }

  useEffect(() => {

    const fetchservices = async () => {
      try {
        const response = await AdminAPI.getAllNormal("v1/service", "services");
        setServices(response.Items);
      } catch (error) {
      }
    };

    fetchservices();
  }, []);
  const structuredData = generateStructuredData();

  return (
    <>

      <div className="relative z-10">
        {structuredData && (
          <script
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        )}

        {/* Hero Section */}
        <section className="relative py-24 text-center overflow-hidden shadow-md" style={{
          background: `linear-gradient(135deg, var(--button_color) 0%, color-mix(in srgb, var(--button_color) 80%, black) 50%, color-mix(in srgb, var(--button_color) 60%, black) 100%)`
        }}>
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ backgroundColor: 'var(--button_bg)' }}></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10">
            <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white/30 rounded-full"></div>
            <div className="absolute bottom-32 left-32 w-24 h-24 border-2 border-white/20 rounded-lg rotate-45"></div>
          </div>

          <div className="max-w-3xl mx-auto px-6 relative z-10">
           
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">Team</h1>
            <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Mechanical, Electrical and Fire fighting design and installation.
            </p>
          </div>
        </section>

      
        <div className="w-full  zpanel">
          
            <section className="w-full zpanel">
           
            <TeamUp/>
              {/* <TeamSection isHome={false} /> */}
            </section>
         

        </div>
      </div>


    </>
  );
}

export default Teams;
