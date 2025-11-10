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
import SEO from "../Components/SEO";



function AboutUs() {

  const [about, setAbout] = useState<any>([]);
  const [services, setServices] = useState<any>([]);
  const navigate = useNavigate();

 
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
 

  return (
    <>
      <SEO 
        title="About Us - Brand Engineering | Our Story & Mission"
        description="Learn about Brand Engineering's mission to deliver exceptional brand strategy and design services. Discover our team, values, and commitment to excellence."
        keywords="about brand engineering, our mission, brand strategy team, design experts, company values"
        canonical="/about_us"
      />

      <div className="relative z-10">
     
      

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
           
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">About Us</h1>
            <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Mechanical, Electrical and Fire fighting design and installation.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <div className="container mt-12 mx-auto px-6 lg:px-20 ">
          <section className="py-10 ">
            <div className="max-w-8xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-extrabold mb-4 ">
                Our Mission
              </h2>
{/* 
              <div
                className="text-lg"
                dangerouslySetInnerHTML={{ __html: about?.objectives?.mission }}
              /> */}
              <p className="leading-relaxed text-lg">
                Brand Engineering is dedicated to delivering high-quality, cost-effective projects through a skilled and motivated team.
                We build lasting relationships with clients and partners based on integrity, safety, quality, and timely service, while fostering fairness and continuous improvement among our employees.
            </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src="/images/about1.jpg"
                  alt="Team collaboration"
                  className="rounded-2xl  transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="md:w-1/2 space-y-6 text-left">
                <h2 className="text-2xl font-bold ">Who We Are</h2>
                <p className=" leading-relaxed">
                  We at BRAND ENGINEERING are equipped with the technical
                  and organizational efficiencies
                  needed to help construction companies fulfill
                  their ambitious electro- mechanical and infrastructure
                  engineering requirements.With our workforce including
                  senior engineers, project managers, assistant managers,
                  project coordinators, technicians and helpers,
                  Brand Engineering instills quality in every aspect of its work.
                  And with a meticulous approach to project planning,
                  Brand Engineering ensures that all projects are completed on time…every time!
                  Since its inception in 2016 Brand Engineering has operated
                  along the principles of Modulating Management.
                  As per the need of the hour, we have adapted and excelled
                  for the benefit of our customers. The phenomenal growth the company has experienced
                  and the height it has scaled within such a short period is testament to
                  the company’s dedication in providing the best of services and achieving higher levels of customer satisfaction with every project complete
                </p>


                {/* Vision and Values Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-9">
                  {/* Vision */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                    <p
                      className="leading-relaxed"
                     
                    >
                      To be the market leader in MEP contracting and related services by earning our customers’ trust through continuous improvement, integrity, teamwork, innovation, and strong leadership. Our vision guides every aspect of our business to achieve sustainable quality and growth.

                    </p>
                  </div>

                  {/* Values */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                    <p
                      className="leading-relaxed"
                      
                    >
                      At Brand Engineering, we value integrity, quality, teamwork, and safety in all we do. We strive for innovation and continuous improvement while building lasting relationships with our clients. Guided by sustainability and responsibility, we aim to deliver excellence and create a positive impact on every project
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  variant="contained"
                  startIcon={<InfoOutlinedIcon />}
                  className="btn zbtn mt-4 !rounded-xl  hover:!bg-yellow-600  " style={{ color: "var(--button_bg)" }} onClick={() => navigate("/contact_us")}>
                  Get in Touch
                </Button>
              </div>
            </div>
          </section>
        </div>
       
      </div>


    </>
  );
}

export default AboutUs;
