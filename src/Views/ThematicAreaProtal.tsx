import React, { useEffect, useState } from "react";
import ServiceComponent from "../Components/Reusables/ServiceComponent";
import { isMobile } from "react-device-detect";
import { Button } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import StarsIcon from "@mui/icons-material/Stars";
import CircleIcon from "@mui/icons-material/Circle";
import VerticalGap from "../Components/Reusables/VerticalGap";
import TeamSection from "../Components/Reusables/Team";
import WhatWeDo from "../Components/Reusables/WhatWeDo";
import ThematicSection from "../Components/Reusables/ThematicSection";
import PaginationComponent from "../Components/Reusables/PaginationComponent";
import AdminAPI from "../APIs/AdminAPI";

function ThematicAreaProtal() {
   const [thematicareas, setThematicareas] = useState([]);
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

   useEffect(() => {
  
          const fetchThematicareas = async () => {
              try {
                  const response = await AdminAPI.getAllNormal("v1/thematicarea", "thematicAreas");
                  setThematicareas(response.Items);
              } catch (error) {
              }
          };
  
          fetchThematicareas();
      }, []);

  const structuredData = generateStructuredData();
      const [pageNumber, setPageNumber] = useState(1);
      const [paging, setPaging] = useState({
              pageSize: 3,
              totalCount: 0
          });

  return (
   <>
    <div className="relative z-10">
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0072ff] via-[#002c5f] to-[#00c6ff] py-24 text-center relative overflow-hidden shadow-md">
     

        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold text-white mb-4">Thematic area</h1>
          <p className="text-white text-lg leading-relaxed">
          Currently, we are focused on the following thematic areas
          </p>
        </div>
      </section>

      <div className="row ">
                <div className="col"></div>
                <div className="col-sm-12 col-md-10 col-lg-9 mt-4 px-3">
                    
                    <VerticalGap size={30} />
                    {/* <p className="text-lg  text-center">Currently, we are focused on the following thematic areas.</p>
                    <VerticalGap size={15} /> */}
                    <ThematicSection thematicareas={thematicareas}/>
                   
                    <VerticalGap size={100} />


                    <PaginationComponent totalCount={paging.totalCount} pageSize={paging.pageSize} onChange={async (page_number: number) => {
                        setPageNumber(page_number);
                    }} />
                     <VerticalGap size={150} />
                </div>
                <div className="col"></div>
            
            </div>
 
    </div>
      
    
   </>
  );
}

export default ThematicAreaProtal;
