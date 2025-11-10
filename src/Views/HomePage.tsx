
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AlertContext from "../Contexts/AlertContext";
import FooterComponent from "../Components/Reusables/FooterComponent";
import Navigation from "../Components/navigation";
import AnimationContext from "../Contexts/AnimationContext";
import { useNavigate } from "react-router-dom";
import BlogSection from "../Components/Reusables/BlogSection";
import VerticalGap from "../Components/Reusables/VerticalGap";
import AboutSection from "../Components/Reusables/AboutSection";
import ServicesSection from "../Components/Reusables/ServicesSection";
import TeamSection from "../Components/Reusables/TeamSection";
import ProjectsSection from "../Components/Reusables/ProjectsSection";
import ContactUsSection from "../Components/Reusables/ContactUsSection";
import Marquee from "react-fast-marquee";
import CompanyComponent from "../Components/Reusables/CompanyComponent";
import SEO from "../Components/SEO";
import { isMobile } from "react-device-detect";
import { title } from "process";

const companies = [
    {
        name: "Ambassader",
        image: "/images/Client_logos/ambassader.png",
    },
    {
        name: "Asharachen Consulting Architects",
        image: "/images/Client_logos/asharachen.png",
    },
    {
        name: "Bigar",
        image: "/images/Client_logos/bigar.png",
    },
    {
        name: "Deloitte",
        image: "/images/Client_logos/deloitte.png",
    },
    {
        name: "Dema Hope Real Estate",
        image: "/images/Client_logos/dema.png",
    },
    {
        name: "Top",
        image: "/images/Client_logos/top.png",
    },
    {
        name: "",
        image: "/images/Client_logos/o.png",
    },
    {
        name: "Eagle Hills",
        image: "/images/Client_logos/eagle.png",
    },
    {
        name: "Ethio Telecom",
        image: "/images/Client_logos/etho.png",
    },
    {
        name: "",
        image: "/images/Client_logos/chain.png",
    },
    {
        name: "Ethiopia",
        image: "/images/Client_logos/steel.png",
    },
    {
        name: "Ethiopian Insurance Corporation",
        image: "/images/Client_logos/1.png",
    },
    {
        name: "krismaus Real Estate",
        image: "/images/Client_logos/kirsmas.png",
    },
    {
        name: "",
        image: "/images/Client_logos/2.png",
    },
    {
        name: "MFB Engineering Consultancy",
        image: "/images/Client_logos/mfb.png"
    },
    {
        name: "",
        image: "/images/Client_logos/3.png"
    },
    {
        name: "",
        image: "/images/Client_logos/libya.png"
    },
    {
        name: "",
        image: "/images/Client_logos/4.png"
    },
    {
        name: "",
        image: "/images/Client_logos/5.png"
    },
    {
        name: "",
        image: "/images/Client_logos/6.png"
    },
    {
        name: "",
        image: "/images/Client_logos/7.png"
    },
    {
        name: "",
        image: "/images/Client_logos/8.png"
    },
    {
        name: "",
        image: "/images/Client_logos/9.png"
    },
    {
        name: "",
        image: "/images/Client_logos/a.png"
    },
    {
        name: "",
        image: "/images/Client_logos/b.png"
    },
    {
        name: "",
        image: "/images/Client_logos/c.png"
    },
    {
        name: "",
        image: "/images/Client_logos/d.png"
    },
    {
        name: "",
        image: "/images/Client_logos/e.png"
    },
    {
        name: "",
        image: "/images/Client_logos/f.png"
    },
    {
        name: "",
        image: "/images/Client_logos/g.png"
    },
    {
        name: "",
        image: "/images/Client_logos/h.png"
    },


];

const slides = [
    {
        image: "/images/HeroSection/1.png",
        imageMobile: "/images/HeroSection/mobile/1.png",
        title: "Brand Engineering ",
        title2: "MEP One-Stop Solution",
        description:
            "Kefita Appartment",
    },
    {
        image: "/images/HeroSection/2-1.png",
        imageMobile: "/images/HeroSection/mobile/2.png",
        title: "Brand Engineering ",
        title2: "MEP One-Stop Solution",
        description:
            "Kirsmos Appartment",
    },
    {
        image: "/images/HeroSection/3.png",
        imageMobile: "/images/HeroSection/mobile/3.png",
        title: "Brand Engineering ",
        title2: "MEP One-Stop Solution",
        description:
            "SGDM office complex",
    },
    {
        image: "/images/HeroSection/4-1.png",
        imageMobile: "/images/HeroSection/mobile/4.png",
        title: "Brand Engineering ",
        title2: "MEP One-Stop Solution",
        description:
            "Ethio Telecom Headquarter",
    },

    {
        image: "/images/HeroSection/5.png",
        imageMobile: "/images/HeroSection/mobile/5.png",
        title: "Brand Engineering ",
        title2: "MEP One-Stop Solution",
        description:
            "Elevation Residence",
    },

    {
        image: "/images/HeroSection/6.png",
        imageMobile: "/images/HeroSection/mobile/6.png",
        title: "Brand Engineering ",
        title2: "MEP One-Stop Solution",
        description:
            "La Gare Central Core",
    },

    {
        image: "/images/HeroSection/7-1.png",
        imageMobile: "/images/HeroSection/mobile/7.png",
        title: "Brand Engineering ",
        title2: "MEP One-Stop Solution",
        description:
            "Dema Hope Realstate",
    },

    {
        image: "/images/HeroSection/8.png",
        imageMobile: "/images/HeroSection/mobile/8.png",
        title: "Brand Engineering ",
        title2: "MEP One-Stop Solution",
        description:
            "Cure Ethiopia",
    },

];


function HomePage() {

    const { getScrollState, setScrollAction } = useContext(AnimationContext);
    const navigate = useNavigate();
    useEffect(() => {
        setScrollAction(400, "hero_title", () => { });
        // setScrollAction(0, "hero_image_anm", () => {
        //     document.querySelector("#hero_image_anm")?.classList.add("home_zoom_out");
        // });
        // setScrollAction(700, "hero_image_anm", () => {
        //     // document.querySelector("#hero_image_anm")?.classList.add("home_zoom_out");
        // }, "before");
        // setScrollAction(200, "hero_image_anm_2", () => {
        //     document.querySelector("#hero_image_anm")?.classList.add("home_zoom_out");
        // });
    }, []);

    const images = [
        "/images/projects/cure/cure1.jpg",
        "/images/projects/LaGareHotel/4.webp",
        "/images/projects/EthiopianInsuranceCorporation/EIC_Auditorium_Opt02B.png",
        "/images/projects/ElevationResidence/photo_2025-10-15_15-17-14.jpg",
        "/images/projects/EthioteleHeadquarteroffice/6.jpg",
        "/images/projects/GhanaEmbassy/8.jpg",
    ];


    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const currentSlide = slides[current];


    return (
        <div className="w-full">
            <SEO
                title="Brand Engineering - Professional Brand Strategy & Design Services"
                description="Leading provider of brand strategy, design, and implementation services. We help businesses build strong, recognizable brands that drive growth."
                keywords="brand engineering, brand strategy, brand design, brand implementation, branding services, corporate branding"
                canonical="/"
            />
            {/* Background Image - Only Screen Height */}
            {/* <div
                id="hero_image_anm"
                className="home_zoom_out"
              
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "80vh",
                    backgroundImage: "url('/images/hero.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    zIndex: -1
                }}
            /> */}
            {/* Background Image */}


            <div
                id="hero_image_anm"
                className="home_zoom_out"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "90vh",
                    backgroundImage: `url(${isMobile ? currentSlide.imageMobile : currentSlide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    zIndex: -1
                }}
            />

            {/* Carousel Dots */}
            <div className="absolute top-[70vh] left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${current === i ? "bg-white scale-110" : "bg-yellow-300 opacity-80"
                            }`}
                    />
                ))}
            </div>

            {/* Text Section */}
            <div className="flex items-start justify-center h-[70vh] pt-32">
                <div className="flex flex-col items-center text-center transition-opacity duration-700 ease-in-out">
                    <p
                        key={currentSlide.title}
                        className="text-white mt-4 font-bold text-xl home_slide_up transition-opacity duration-700 delay-100 mb-2"
                    >
                        {currentSlide.title}
                    </p>
                    <p
                        key={currentSlide.title2}
                        className="text-[#FFD800] mt-4 font-bold text-xl home_slide_up transition-opacity duration-700 delay-100 mb-10"
                    >
                        {currentSlide.title2}
                    </p>
                    <h1
                        key={currentSlide.description.toUpperCase()}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight home_slide_up uppercase"
                    >
                        {currentSlide.description}
                    </h1>
                </div>
            </div>


            {/* <div className="  flex items-center justify-center h-[70vh] ">
                <div className="justify-center items-center flex flex-col sm:mx-auto md:ml-20 lg:ml-40 xl:ml-52  transition-opacity duration-700 ease-in-out">

                    <p
                        key={currentSlide.title}
                        className="text-white mt-4 font-bold  text-xl  home_slide_up transition-opacity duration-700 delay-100"
                    >
                        {currentSlide.title}
                    </p>
                    <h1
                        key={ (currentSlide.description).toUpperCase()}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight home_slide_up"
                    >
                        {currentSlide.description}
                    </h1>
                    <button
                        className="mt-6 btn zbtn rounded-lg px-6 py-3 md:px-8 md:py-4 text-sm md:text-base home_hero_btn_animation transition-all duration-500"
                        onClick={() => navigate("/contact_us")}
                    >
                        Contact Us
                    </button>
                </div>
            </div> */}


            {/* Additional content to make page scrollable */}
            <div className=" zpanel w-full bg-white pt-20" style={{}}>
                {/* <AboutSection /> */}




                {/* CTA Section 1 - Enhanced */}
                {/* <section className="relative w-full text-white py-20 md:py-28 text-center px-4 overflow-hidden" style={{
                    background: `linear-gradient(135deg, var(--button_color) 0%, color-mix(in srgb, var(--button_color) 70%, black) 100%)`
                }}>
                  
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48"></div>

                    <div className="container mx-auto relative z-10">
                       
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-8 max-w-3xl mx-auto leading-tight" style={{ color: 'var(--button_bg)' }}>
                            We are here to help you drive change! Together, we will shape the future!
                        </h2>
                        <button
                            className="font-bold px-10 py-4 rounded-lg shadow-2xl hover:scale-105 transition-all duration-300 text-base md:text-lg"
                            style={{
                                backgroundColor: 'var(--button_bg)',
                                color: 'var(--button_color)',
                                border: '2px solid var(--button_color)'
                            }}
                            onClick={() => navigate("/contact_us")}
                        >
                            Contact Us Today
                        </button>
                    </div>
                </section> */}
                {/* Services Section */}
                {/* <ServicesSection /> */}
                {/* Team Section */}
                {/* <TeamSection isHome={true} /> */}
                {/* Projects Section */}
                {/* <ProjectsSection /> */}
                {/* Department of Public Works - Enhanced Section */}
                {/* <section className="relative w-full text-white py-20 md:py-32 px-4 overflow-hidden" style={{ backgroundColor: '#1D1D1D' }}>
                    
                    <div className="absolute inset-0 bg-black/20"></div>

                    
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
                    <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl"></div>

                    
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,.05) 2px, transparent 2px)',
                        backgroundSize: '60px 60px'
                    }}></div>

                    
                    <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
                        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent transform rotate-12"></div>
                        <div className="absolute top-0 right-20 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent transform rotate-12"></div>
                        <div className="absolute top-0 right-40 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent transform rotate-12"></div>
                    </div>

                    <div className="relative z-10 container mx-auto max-w-7xl text-center">
                        
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--button_bg)' }}></div>
                            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--button_bg)' }}>Excellence in Public Service</span>
                        </div>

                        
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 md:mb-8">
                            <span className="block mb-2">Department of</span>
                            <span className="text-transparent bg-clip-text" style={{
                                backgroundImage: `linear-gradient(to right, var(--button_bg), #ffffff)`,
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text'
                            }}>
                                Public Works
                            </span>
                        </h2>

                        
                        <p className="text-base md:text-xl lg:text-2xl font-light mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed text-gray-300">
                            Our department is committed to delivering <span className="font-semibold text-white">innovative, reliable, and sustainable solutions</span> across diverse sectors, building infrastructure that shapes communities and drives progress.
                        </p>

                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 md:mb-12 max-w-4xl mx-auto">
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--button_bg)' }}>500+</div>
                                <div className="text-sm md:text-base text-gray-300">Projects Completed</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--button_bg)' }}>25+</div>
                                <div className="text-sm md:text-base text-gray-300">Years of Excellence</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--button_bg)' }}>100%</div>
                                <div className="text-sm md:text-base text-gray-300">Client Satisfaction</div>
                            </div>
                        </div>

                        
                        <button
                            className="group relative font-bold px-10 md:px-14 py-4 md:py-5 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 text-base md:text-lg overflow-hidden"
                            style={{
                                backgroundColor: 'var(--button_bg)',
                                color: 'var(--button_color)',
                                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
                            }}
                            onClick={() => navigate("/departments")}
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                Explore Our Department
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </section> */}
                {/* Partners Section */}

                {/* <VerticalGap size={100} /> */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">Our Clients</h2>
                    <p className="text-gray-600 text-base md:text-lg">Trusted by industry leaders worldwide</p>
                </div>
                <Marquee pauseOnHover speed={40} gradient={false} >
                    {companies.map((company: any, index) => (
                        <div key={index} className="mx-3" style={{ minWidth: "250px" }}>
                            <CompanyComponent image={company.image} name={company.name} />
                        </div>
                    ))}
                </Marquee>



                {/* Contact Section */}
                {/* <div className="container mx-auto px-4 sm:px-6 mt-8 md:mt-12">
                    <div className="max-w-4xl mx-auto text-center zpanel">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--button_bg)' }}></div>
                            <h3 className="font-medium uppercase tracking-wider" style={{ color: 'var(--button_bg)' }}>Get In Touch</h3>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold">Contact us</h2>
                        <p className="text-gray-600 mt-2 text-sm md:text-base max-w-2xl mx-auto">
                            Reach out anytime — we're here to help.
                        </p>
                    </div>
                    <VerticalGap size={15} />
                    <ContactUsSection />
                    <VerticalGap size={50} />
                </div> */}
            </div>


        </div>

    );
}

export default HomePage;
