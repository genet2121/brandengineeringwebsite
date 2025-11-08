import React, { useContext, useEffect, useState } from "react";
import ServiceComponent from "../Components/Reusables/ServiceComponent";
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
import ProjectsSection from "../Components/Reusables/ProjectsSection";
import { MapPin, Calendar, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import AnimationContext from "../Contexts/AnimationContext";



function ProjectsPage() {

    const [about, setAbout] = useState<any>([]);
    const [services, setServices] = useState<any>([]);
    const [visibleProjects, setVisibleProjects] = useState(21);
    const PROJECTS_PER_LOAD = 6;
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
    const [isHovering, setIsHovering] = useState<{ [key: number]: boolean }>({});

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

    const { getScrollState, setScrollAction } = useContext(AnimationContext);

    useEffect(() => {

        setScrollAction(3500, "project_title", () => { });
        setScrollAction(2800, "project_0", () => { });
        setScrollAction(2800, "project_1", () => { });
        setScrollAction(2800, "project_2", () => { });
        setScrollAction(2800, "project_3", () => { });

    }, []);

    // Auto-play carousel effect for all visible projects
    useEffect(() => {
        const intervals: NodeJS.Timeout[] = [];

        projects.slice(0, visibleProjects).forEach((project, index) => {
            const images = project.images || [project.image];
            if (images.length > 1 && !isHovering[index]) {
                const interval = setInterval(() => {
                    setCurrentImageIndex(prev => ({
                        ...prev,
                        [index]: ((prev[index] || 0) + 1) % images.length
                    }));
                }, 7000);
                intervals.push(interval);
            }
        });

        return () => {
            intervals.forEach(interval => clearInterval(interval));
        };
    }, [visibleProjects, isHovering]);

    const projects = [
        {
            title: "Ghana Embassy",
            category: "Infrastructure",
            location: "Bahir Dar",
            year: "2023",
            description: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            image: "/images/projects/GhanaEmbassy/1.jpg",
            images: [
                "/images/projects/GhanaEmbassy/1.jpg",
                "/images/projects/GhanaEmbassy/2.jpg",
                "/images/projects/GhanaEmbassy/3.jpg",
                "/images/projects/GhanaEmbassy/4.jpg",
                "/images/projects/GhanaEmbassy/5.jpg",
                "/images/projects/GhanaEmbassy/6.jpg",
                "/images/projects/GhanaEmbassy/7.jpg",
                "/images/projects/GhanaEmbassy/8.jpg",
                "/images/projects/GhanaEmbassy/9.jpg",



            ],
            status: "Completed"
        },
        {
            title: "U.A.E  Embassy  ",
            category: "Infrastructure",
            location: "Bahir Dar",
            year: "2023",
            description: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            image: "/images/projects/U.A.EEmbassy/1.jpg",
            images: [
                "/images/projects/U.A.EEmbassy/1.jpg",
                "/images/projects/U.A.EEmbassy/2.jpg",
                "/images/projects/U.A.EEmbassy/3.jpg",
                "/images/projects/U.A.EEmbassy/4.jpg",
                "/images/projects/U.A.EEmbassy/5.jpg",
                "/images/projects/U.A.EEmbassy/6.jpg",
                "/images/projects/U.A.EEmbassy/7.jpg",
                "/images/projects/U.A.EEmbassy/8.jpg",
                "/images/projects/U.A.EEmbassy/9.jpg",
                "/images/projects/U.A.EEmbassy/10.jpg",
                "/images/projects/U.A.EEmbassy/11.jpg",
                "/images/projects/U.A.EEmbassy/12.jpg",
                "/images/projects/U.A.EEmbassy/13.jpg",
                "/images/projects/U.A.EEmbassy/14.jpg",
                "/images/projects/U.A.EEmbassy/15.jpg",
                "/images/projects/U.A.EEmbassy/16.jpg",
                "/images/projects/U.A.EEmbassy/17.jpg",
                "/images/projects/U.A.EEmbassy/18.jpg",
                "/images/projects/U.A.EEmbassy/19.jpg",


            ],
            status: "Completed"
        },
        {
            title: "Libyan Embassy",
            category: "Infrastructure",
            location: "Bahir Dar",
            year: "2023",
            description: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            image: "/images/projects/LibyanEmbassy/1.jpg",
            images: [
                "/images/projects/LibyanEmbassy/1.jpg",
                "/images/projects/LibyanEmbassy/2.jpg",
                "/images/projects/LibyanEmbassy/3.jpg",
                "/images/projects/LibyanEmbassy/4.jpg",

            ],
            status: "Completed"
        },
        {
            title: "Mauritius Embassy ",
            category: "Infrastructure",
            location: "Bahir Dar",
            year: "2023",
            description: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            image: "/images/projects/MauritiusEmbassy /1.jpg",
            images: [
                "/images/projects/MauritiusEmbassy /1.jpg",
                "/images/projects/MauritiusEmbassy /2.jpg",
                "/images/projects/MauritiusEmbassy /3.jpg",
                "/images/projects/MauritiusEmbassy /4.jpg",
                "/images/projects/MauritiusEmbassy /5.jpg",
                "/images/projects/MauritiusEmbassy /6.jpg",
                "/images/projects/MauritiusEmbassy /7.jpg",
                "/images/projects/MauritiusEmbassy /8.jpg",
                "/images/projects/MauritiusEmbassy /9.jpg",

            ],
            status: "Completed"
        },
        {
            title: "Kefita Apartment",
            category: "Infrastructure",
            location: "Bahir Dar",
            year: "2023",
            description: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            image: "/images/projects/KefitaApartment/1.jpg",
            images: [
                "/images/projects/KefitaApartment/1.jpg",
                "/images/projects/KefitaApartment/2.jpg",
                "/images/projects/KefitaApartment/3.jpg",
                "/images/projects/KefitaApartment/4.jpg",
                "/images/projects/KefitaApartment/5.jpg",
                "/images/projects/KefitaApartment/6.jpg",
                "/images/projects/KefitaApartment/7.jpg",
                "/images/projects/KefitaApartment/8.jpg",
                "/images/projects/KefitaApartment/9.jpg",



            ],
            status: "Completed"
        },

        {
            title: "Roha Advanced Multi speciality Hospital  ",
            category: "Infrastructure",
            location: "Bahir Dar",
            year: "2023",
            description: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            image: "/images/projects/RohaAdvancedMultispecialityHospital/photo_2025-10-15_11-07-43.jpg",
            images: [
                "/images/projects/RohaAdvancedMultispecialityHospital/photo_2025-10-15_11-07-43.jpg",


            ],
            status: "Completed"
        },
        {
            title: "SGDM office complex  ",
            category: "Infrastructure",
            location: "Bahir Dar",
            year: "2023",
            description: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            image: "/images/projects/SGDMofficecomplex/1.jpg",
            images: [
                "/images/projects/SGDMofficecomplex/1.jpg",
                "/images/projects/SGDMofficecomplex/2.jpg",

                "/images/projects/SGDMofficecomplex/3.jpg",
                "/images/projects/SGDMofficecomplex/4.jpg",
                "/images/projects/SGDMofficecomplex/5.jpg",
                "/images/projects/SGDMofficecomplex/6.jpg",
                "/images/projects/SGDMofficecomplex/7.jpg",

            ],
            status: "Completed"
        },
        {
            title: "Elevation Residence",
            category: "Infrastructure",
            location: "Addis Ababa",
            year: "2024",
            description: "Design and construction of a modern bridge system connecting key metropolitan areas, improving traffic flow and urban connectivity.",
            image: "/images/projects/ElevationResidence/IMG_20210127_111728_3.jpg",
            images: [
                "/images/projects/ElevationResidence/IMG_20210127_111728_3.jpg",
                "/images/projects/ElevationResidence/IMG_20210202_111957_7.jpg",
                "/images/projects/ElevationResidence/IMG_20210212_093658_0.jpg",
                "/images/projects/ElevationResidence/IMG_20210212_093705_0.jpg",
                "/images/projects/ElevationResidence/IMG_20210212_095008_7.jpg",
                "/images/projects/ElevationResidence/IMG_20210212_095122_1.jpg",
                "/images/projects/ElevationResidence/IMG_20210212_101449_9.jpg",
                "/images/projects/ElevationResidence/IMG_20210212_120322_4.jpg",
                "/images/projects/ElevationResidence/IMG_20210212_121907_7.jpg",
                "/images/projects/ElevationResidence/IMG_20210212_123630_4.jpg",
                "/images/projects/ElevationResidence/IMG_20210212_123709_1.jpg",
                "/images/projects/ElevationResidence/IMG_20210212_124540_0.jpg",
                "/images/projects/ElevationResidence/IMG_20210212_124715_9.jpg",
                "/images/projects/ElevationResidence/IMG_20210212_145805_4.jpg",
                "/images/projects/ElevationResidence/IMG_20210311_151933_5.jpg",
                "/images/projects/ElevationResidence/IMG_20210414_091532_0.jpg",
                "/images/projects/ElevationResidence/IMG_20210414_091609_3.jpg",
                "/images/projects/ElevationResidence/IMG_20210419_152022_3.jpg",
                "/images/projects/ElevationResidence/IMG_20210420_111818_9.jpg",
                "/images/projects/ElevationResidence/IMG_20210420_111901_0.jpg",
                "/images/projects/ElevationResidence/IMG_20210420_111946_0.jpg",
                "/images/projects/ElevationResidence/IMG_20210510_151202_2.jpg",
                "/images/projects/ElevationResidence/IMG_20210616_113501_3.jpg",
                "/images/projects/ElevationResidence/IMG_20210616_113526_7.jpg",
                "/images/projects/ElevationResidence/IMG_20210616_113934_6.jpg",
                "/images/projects/ElevationResidence/IMG_20210616_114055_4.jpg",
                "/images/projects/ElevationResidence/IMG_20210619_112723_3.jpg",
                "/images/projects/ElevationResidence/IMG_20210623_105255_4.jpg",
                "/images/projects/ElevationResidence/IMG_20210806_101559_1.jpg",
                "/images/projects/ElevationResidence/IMG_20210813_100416_8.jpg",
                "/images/projects/ElevationResidence/IMG_20210813_100511_2.jpg",
                "/images/projects/ElevationResidence/IMG_20210828_115448_6.jpg",
                "/images/projects/ElevationResidence/IMG_20210921_101654_1.jpg",
                "/images/projects/ElevationResidence/IMG_20211004_101730_3.jpg",
                "/images/projects/ElevationResidence/IMG_20211011_151939_5.jpg",
                "/images/projects/ElevationResidence/IMG_20211011_151953_8.jpg",
                "/images/projects/ElevationResidence/IMG_20211012_104523_7.jpg",
                "/images/projects/ElevationResidence/IMG_20211012_110450_8.jpg",
                "/images/projects/ElevationResidence/IMG_20211012_110614_9.jpg",
                "/images/projects/ElevationResidence/IMG_20211015_165014_0.jpg",
                "/images/projects/ElevationResidence/IMG_20211016_105415_5.jpg",
                "/images/projects/ElevationResidence/IMG_20211016_105422_2.jpg",
                "/images/projects/ElevationResidence/photo_2025-10-14_16-45-42.jpg",
                "/images/projects/ElevationResidence/photo_2025-10-14_16-45-43.jpg",
                "/images/projects/ElevationResidence/photo_2025-10-15_15-16-28.jpg",
                "/images/projects/ElevationResidence/photo_2025-10-15_15-17-14.jpg"

            ],
            status: "Completed"
        },
        {
            title: "La Gare Central Core",
            category: "Infrastructure",
            location: "Bahir Dar",
            year: "2023",
            description: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            image: "/images/projects/LaGareCentralCore/65-Large.jpeg",
            images: [
                "/images/projects/LaGareCentralCore/Masterplan-1-Large-1.jpeg",
                "/images/projects/LaGareCentralCore/1.jpg",
                "/images/projects/LaGareCentralCore/2.jpg",
                "/images/projects/LaGareCentralCore/3.jpg",
                "/images/projects/LaGareCentralCore/4.jpg",
                "/images/projects/LaGareCentralCore/5.jpg",
                "/images/projects/LaGareCentralCore/6.jpg",
                "/images/projects/LaGareCentralCore/7.jpg",

            ],
            status: "Completed"
        },
        {
            title: "La Gare Hotel",
            category: "Infrastructure",
            location: "Bahir Dar",
            year: "2023",
            description: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            image: "/images/projects/LaGareHotel/4.webp",
            images: [
                "/images/projects/LaGareHotel/4.webp",

            ],
            status: "Completed"
        },
        {
            title: "Deloitte Ethiopia",
            category: "Construction",
            location: "Mekelle",
            year: "2024",
            description: "Large-scale mixed-use development featuring residential, commercial, and recreational spaces with modern amenities.",
            image: "/images/projects/deloitte/27.png",
            images: [
                "/images/projects/deloitte/1.jpg",
                "/images/projects/deloitte/2.jpg",
                "/images/projects/deloitte/3.jpg",
                "/images/projects/deloitte/4.jpg",
                "/images/projects/deloitte/5.jpg",
                "/images/projects/deloitte/6.jpg",
                "/images/projects/deloitte/7.jpg",
                "/images/projects/deloitte/8.jpg",
                "/images/projects/deloitte/9.jpg",
                "/images/projects/deloitte/10.jpg",
                "/images/projects/deloitte/11.jpg",
                "/images/projects/deloitte/16.jpg",
                "/images/projects/deloitte/15.jpg",
                "/images/projects/deloitte/14.jpg",
                "/images/projects/deloitte/13.jpg",
                "/images/projects/deloitte/12.jpg",
                "/images/projects/deloitte/11.jpg",
                "/images/projects/deloitte/10.jpg",
                "/images/projects/deloitte/11.jpg",
                "/images/projects/deloitte/12.jpg",
                "/images/projects/deloitte/13.jpg",
                "/images/projects/deloitte/14.jpg",
                "/images/projects/deloitte/15.jpg",
                "/images/projects/deloitte/16.jpg",
                "/images/projects/deloitte/17.jpg",
                "/images/projects/deloitte/18.jpg",
                "/images/projects/deloitte/19.jpg",
                "/images/projects/deloitte/20.jpg",
                "/images/projects/deloitte/21.jpg",
                "/images/projects/deloitte/22.jpg",
                "/images/projects/deloitte/23.png",
                "/images/projects/deloitte/24.png",
                "/images/projects/deloitte/25.png",
                "/images/projects/deloitte/26.png",
                "/images/projects/deloitte/27.png",
            ],
            status: "Completed"
        },
        {
            title: "Ethiotele Headquarter office",
            category: "Construction",
            location: "Mekelle",
            year: "2024",
            description: "Large-scale mixed-use development featuring residential, commercial, and recreational spaces with modern amenities.",
            image: "/images/projects/EthioteleHeadquarteroffice/photo_2025-10-14_14-53-16.jpg",
            images: [
                "/images/projects/EthioteleHeadquarteroffice/photo_2025-10-14_14-53-16.jpg",
                "/images/projects/EthioteleHeadquarteroffice/photo_2025-10-14_14-53-17.jpg",
                "/images/projects/EthioteleHeadquarteroffice/photo_2025-10-14_14-55-15.jpg",
                "/images/projects/EthioteleHeadquarteroffice/photo_2025-10-14_15-15-20.jpg",
                "/images/projects/EthioteleHeadquarteroffice/photo_2025-10-14_15-16-58.jpg",
                "/images/projects/EthioteleHeadquarteroffice/photo_2025-10-14_15-56-32.jpg",
                "/images/projects/EthioteleHeadquarteroffice/1.jpg",
                "/images/projects/EthioteleHeadquarteroffice/2.jpg",
                "/images/projects/EthioteleHeadquarteroffice/3.jpg",
                "/images/projects/EthioteleHeadquarteroffice/4.jpg",
                "/images/projects/EthioteleHeadquarteroffice/5.jpg",
                "/images/projects/EthioteleHeadquarteroffice/6.jpg",
                "/images/projects/EthioteleHeadquarteroffice/7.jpg",


            ],
            status: "Completed"
        },
        {
            title: "Dema Hope realestate",
            category: "Infrastructure",
            location: "Bahir Dar",
            year: "2023",
            description: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            image: "/images/projects/dema/6.jpg",
            images: [
                "/images/projects/dema/1.jpg",
                "/images/projects/dema/2.jpg",
                "/images/projects/dema/3.jpg",
                "/images/projects/dema/4.jpg",
                "/images/projects/dema/5.jpg",
                "/images/projects/dema/6.jpg",
            ],
            status: "Completed"
        },
        {
            title: "Kirsmos Appartment",
            category: "Infrastructure",
            location: "Bahir Dar",
            year: "2023",
            description: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            image: "/images/projects/KirsmosAppartment/1.jpg",
            images: [
                "/images/projects/KirsmosAppartment/1.jpg",
                "/images/projects/KirsmosAppartment/2.jpg",
                "/images/projects/KirsmosAppartment/3.jpg",
                "/images/projects/KirsmosAppartment/4.jpg",
                "/images/projects/KirsmosAppartment/5.jpg",
                "/images/projects/KirsmosAppartment/6.jpg",
                "/images/projects/KirsmosAppartment/7.jpg",
                "/images/projects/KirsmosAppartment/8.jpg",
                "/images/projects/KirsmosAppartment/9.jpg",
                "/images/projects/KirsmosAppartment/10.jpg",
                "/images/projects/KirsmosAppartment/11.jpg",
                "/images/projects/KirsmosAppartment/12.jpg",
                "/images/projects/KirsmosAppartment/13.jpg",
                "/images/projects/KirsmosAppartment/14.jpg",
                "/images/projects/KirsmosAppartment/15.jpg",

            ],
            status: "Completed"
        },
        {
            title: "Mulege Mixed Use Building  ",
            category: "Infrastructure",
            location: "Bahir Dar",
            year: "2023",
            description: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            image: "/images/projects/MulegeMixedUseBuilding /1.png",
            images: [
                "/images/projects/MulegeMixedUseBuilding /1.png",
                "/images/projects/MulegeMixedUseBuilding /2.png",
                "/images/projects/MulegeMixedUseBuilding /3.png",


            ],
            status: "Completed"
        },

        {
            title: "Ethiopian Steel Factory",
            category: "Energy",
            location: "Hawassa",
            year: "2023",
            description: "Development of a sustainable power generation facility with advanced energy management systems and renewable integration.",
            image: "/images/projects/EthiopianSteelFactory/photo_2025-10-14_14-01-19.jpg",
            images: [
                "/images/projects/EthiopianSteelFactory/photo_2025-10-14_14-01-19.jpg",
                "/images/projects/EthiopianSteelFactory/photo_2025-10-15_16-15-46.jpg",
                "/images/projects/EthiopianSteelFactory/photo_2025-10-15_16-17-24.jpg",

            ],
            status: "Completed"
        },
        {
            title: "Ambassador Mall",
            category: "Infrastructure",
            location: "Addis Ababa",
            year: "2024",
            description: "Design and construction of a modern bridge system connecting key metropolitan areas, improving traffic flow and urban connectivity.",
            image: "/images/projects/AmbassadorMall/3.png",
            images: [
                "/images/projects/AmbassadorMall/3.png",
                "/images/projects/AmbassadorMall/2.jpg",
                "/images/projects/AmbassadorMall/1.png",

            ],
            status: "Completed"
        },
        {
            title: "Minister of Defense ",
            category: "Infrastructure",
            location: "Bahir Dar",
            year: "2023",
            description: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            image: "/images/projects/MinisterofDefense/1.png",
            images: [
                "/images/projects/MinisterofDefense/1.png",
                "/images/projects/MinisterofDefense/2.png",
                "/images/projects/MinisterofDefense/3.png",


            ],
            status: "Completed"
        },
        {
            title: "Defense Hosing Apartment",
            category: "Energy",
            location: "Hawassa",
            year: "2023",
            description: "Development of a sustainable power generation facility with advanced energy management systems and renewable integration.",
            image: "/images/projects/defense/1.jpg",
            images: [
                "/images/projects/defense/1.jpg",
                "/images/projects/defense/2.png",
                "/images/projects/defense/3.png",

            ],
            status: "Completed"
        },



        {
            title: "Ethiopian Insurance Corporation",
            category: "Energy",
            location: "Hawassa",
            year: "2023",
            description: "Development of a sustainable power generation facility with advanced energy management systems and renewable integration.",
            image: "/images/projects/EthiopianInsuranceCorporation/EIC_Auditorium_Opt02.png",
            images: [
                "/images/projects/EthiopianInsuranceCorporation/EIC_Auditorium_Opt02.png",
                "/images/projects/EthiopianInsuranceCorporation/EIC_Auditorium_Opt02B.png",


            ],
            status: "Completed"
        },


        {
            title: "Cure Ethiopia",
            category: "Infrastructure",
            location: "Addis Ababa",
            year: "2024",
            description: "Design and construction of a modern bridge system connecting key metropolitan areas, improving traffic flow and urban connectivity.",
            image: "/images/projects/cure/cure1.jpg",
            images: [
                "/images/projects/cure/cure1.jpg",
                "/images/projects/cure/cure2.jpg",


            ],
            status: "Completed"
        },



    ];

    // useEffect(() => {

    //     const fetchservices = async () => {
    //         try {
    //             const response = await AdminAPI.getAllNormal("v1/service", "services");
    //             setServices(response.Items);
    //         } catch (error) {
    //         }
    //     };

    //     fetchservices();
    // }, []);
    // const structuredData = generateStructuredData();



    return (
        <div className="relative z-10">
            {/* {structuredData && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            )} */}

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
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">Our Projects</h1>
                    <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        Showcasing our commitment to engineering excellence and innovative solutions across diverse sectors.
                    </p>
                </div>

            </section>

            <section className="w-full sm:w-full md:w-3/4 lg:w-[79%] xl:w-[79%] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-12 md:py-16 sm:ml-0 md:ml-20 lg:ml-40 xl:ml-52">
                {/* <div className="mb-8 md:mb-12">

                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 md:gap-6">
                        <div>
                            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-light text-blue-950 mb-3 md:mb-4 ${getScrollState("project_title") ? "home_slide_up" : "home_slide_down"}`} style={{ fontWeight: 500 }}>
                                Our Projects
                            </h1>
                            <p className={`text-gray-600 text-sm sm:text-base max-w-2xl ${getScrollState("project_title") ? "home_slide_up" : "home_slide_down"}`} style={{ animationDelay: "0.1s" }}>
                                Explore our portfolio of landmark projects that showcase our commitment to engineering excellence and sustainable development.
                            </p>
                        </div>

                    </div>
                </div> */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {projects.slice(0, visibleProjects).map((project, index) => {
                        const currentIndex = currentImageIndex[index] || 0;
                        const images = project.images || [project.image];

                        const handlePrevImage = (e: React.MouseEvent) => {
                            e.stopPropagation();
                            setCurrentImageIndex(prev => ({
                                ...prev,
                                [index]: currentIndex === 0 ? images.length - 1 : currentIndex - 1
                            }));
                        };

                        const handleNextImage = (e: React.MouseEvent) => {
                            e.stopPropagation();
                            setCurrentImageIndex(prev => ({
                                ...prev,
                                [index]: currentIndex === images.length - 1 ? 0 : currentIndex + 1
                            }));
                        };

                        return (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300 ${getScrollState(`project_${index}`) ? "home_slide_up" : "home_slide_down"}`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                                onMouseEnter={() => setIsHovering(prev => ({ ...prev, [index]: true }))}
                                onMouseLeave={() => setIsHovering(prev => ({ ...prev, [index]: false }))}
                            >
                                <div className="relative h-80 overflow-hidden">
                                    {/* Carousel Images */}
                                    <img
                                        src={images[currentIndex]}
                                        alt={`${project.title} - Image ${currentIndex + 1}`}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                    />

                                    {/* Carousel Navigation - Only show if multiple images */}
                                    {images.length > 1 && (
                                        <>
                                            {/* Previous Button */}
                                            <button
                                                onClick={handlePrevImage}
                                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 opacity-70 hover:opacity-100 z-20"
                                                aria-label="Previous image"
                                            >
                                                <ChevronLeft size={20} className="text-blue-900" />
                                            </button>

                                            {/* Next Button */}
                                            <button
                                                onClick={handleNextImage}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 opacity-70 hover:opacity-100 z-20"
                                                aria-label="Next image"
                                            >
                                                <ChevronRight size={20} className="text-blue-900" />
                                            </button>

                                            {/* Image Indicators */}
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                                {images.map((_, imgIndex) => (
                                                    <button
                                                        key={imgIndex}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setCurrentImageIndex(prev => ({
                                                                ...prev,
                                                                [index]: imgIndex
                                                            }));
                                                        }}
                                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${imgIndex === currentIndex
                                                                ? 'bg-white w-6'
                                                                : 'bg-white/50 hover:bg-white/75'
                                                            }`}
                                                        aria-label={`Go to image ${imgIndex + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}

                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-blue-700 transition-colors">
                                        {project.title}
                                    </h3>

                                    <button
                                        onClick={() => navigate(`/project/${index}`)}
                                        className="inline-flex items-center gap-2 text-blue-900 font-semibold text-sm hover:gap-3 transition-all duration-300 bg-transparent border-0 cursor-pointer"
                                    >
                                        View project details
                                        <ArrowUpRight size={16} />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Load More Button */}
                {visibleProjects < projects.length && (
                    <div className="flex justify-center mt-8 md:mt-12">
                        <button
                            onClick={() => setVisibleProjects(prev => Math.min(prev + PROJECTS_PER_LOAD, projects.length))}
                            className="group relative px-8 py-4 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3"
                        >
                            <span>Load More Projects</span>
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
                                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                            </div>
                        </button>
                    </div>
                )}

                {/* Show All Loaded Message */}
                {visibleProjects >= projects.length && projects.length > PROJECTS_PER_LOAD && (
                    <div className="flex justify-center mt-8 md:mt-12">
                        {/* <p className="text-gray-600 font-medium flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            All projects  ({projects.length} total)
                        </p> */}
                    </div>
                )}

            </section>

        </div>
    );
}

export default ProjectsPage;
