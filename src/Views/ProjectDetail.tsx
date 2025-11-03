import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MapPin, Calendar, ArrowLeft, CheckCircle2, Clock, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import AnimationContext from "../Contexts/AnimationContext";

interface ProjectData {
    title: string;
    category: string;
    location: string;
    year: string;
    description: string;
    image: string;
    images?: string[]; // Multiple images for gallery
    status: string;
    fullDescription?: string;
    client?: string;
    duration?: string;
    budget?: string;
    team?: string;
    challenges?: string;
    solutions?: string;
    results?: string;
}

function ProjectDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { getScrollState, setScrollAction } = useContext(AnimationContext);
    const [projectData, setProjectData] = useState<ProjectData | null>(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Static project data - replace with API call later

    const allProjects: ProjectData[] = [
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
            status: "Completed",
            fullDescription: "A comprehensive water treatment and distribution infrastructure project designed to provide clean, safe drinking water to over 500,000 residents. The facility incorporates advanced filtration technology and automated monitoring systems.",
            client: "Bahir Dar Water Supply Authority",
            duration: "30 months",
            budget: "$85 Million",
            team: "180+ Engineers and Technicians",
            challenges: "Meeting WHO water quality standards, ensuring continuous operation during construction, and integrating with existing infrastructure.",
            solutions: "Implemented multi-stage filtration system, installed redundant systems for reliability, and utilized smart monitoring technology for real-time quality control.",
            results: "Facility now processes 200,000 cubic meters daily, achieving 99.9% water quality compliance, and reducing waterborne diseases by 75% in the service area."
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

            status: "Completed",
            fullDescription: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            client: "Bahir Dar Water Supply Authority",
            duration: "30 months",
            budget: "$85 Million",
            team: "180+ Engineers and Technicians",
            challenges: "Meeting WHO water quality standards, ensuring continuous operation during construction, and integrating with existing infrastructure.",
            solutions: "Implemented multi-stage filtration system, installed redundant systems for reliability, and utilized smart monitoring technology for real-time quality control.",
            results: "Facility now processes 200,000 cubic meters daily, achieving 99.9% water quality compliance, and reducing waterborne diseases by 75% in the service area."
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

            status: "Completed",
            fullDescription: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            client: "Bahir Dar Water Supply Authority",
            duration: "30 months",
            budget: "$85 Million",
            team: "180+ Engineers and Technicians",
            challenges: "Meeting WHO water quality standards, ensuring continuous operation during construction, and integrating with existing infrastructure.",
            solutions: "Implemented multi-stage filtration system, installed redundant systems for reliability, and utilized smart monitoring technology for real-time quality control.",
            results: "Facility now processes 200,000 cubic meters daily, achieving 99.9% water quality compliance, and reducing waterborne diseases by 75% in the service area."
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

            status: "Completed",
            fullDescription: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            client: "Bahir Dar Water Supply Authority",
            duration: "30 months",
            budget: "$85 Million",
            team: "180+ Engineers and Technicians",
            challenges: "Meeting WHO water quality standards, ensuring continuous operation during construction, and integrating with existing infrastructure.",
            solutions: "Implemented multi-stage filtration system, installed redundant systems for reliability, and utilized smart monitoring technology for real-time quality control.",
            results: "Facility now processes 200,000 cubic meters daily, achieving 99.9% water quality compliance, and reducing waterborne diseases by 75% in the service area."
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
            status: "Completed",
            fullDescription: "A comprehensive water treatment and distribution infrastructure project designed to provide clean, safe drinking water to over 500,000 residents. The facility incorporates advanced filtration technology and automated monitoring systems.",
            client: "Bahir Dar Water Supply Authority",
            duration: "30 months",
            budget: "$85 Million",
            team: "180+ Engineers and Technicians",
            challenges: "Meeting WHO water quality standards, ensuring continuous operation during construction, and integrating with existing infrastructure.",
            solutions: "Implemented multi-stage filtration system, installed redundant systems for reliability, and utilized smart monitoring technology for real-time quality control.",
            results: "Facility now processes 200,000 cubic meters daily, achieving 99.9% water quality compliance, and reducing waterborne diseases by 75% in the service area."
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

            status: "Completed",
            fullDescription: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            client: "Bahir Dar Water Supply Authority",
            duration: "30 months",
            budget: "$85 Million",
            team: "180+ Engineers and Technicians",
            challenges: "Meeting WHO water quality standards, ensuring continuous operation during construction, and integrating with existing infrastructure.",
            solutions: "Implemented multi-stage filtration system, installed redundant systems for reliability, and utilized smart monitoring technology for real-time quality control.",
            results: "Facility now processes 200,000 cubic meters daily, achieving 99.9% water quality compliance, and reducing waterborne diseases by 75% in the service area."
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

            status: "Completed",
            fullDescription: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            client: "Bahir Dar Water Supply Authority",
            duration: "30 months",
            budget: "$85 Million",
            team: "180+ Engineers and Technicians",
            challenges: "Meeting WHO water quality standards, ensuring continuous operation during construction, and integrating with existing infrastructure.",
            solutions: "Implemented multi-stage filtration system, installed redundant systems for reliability, and utilized smart monitoring technology for real-time quality control.",
            results: "Facility now processes 200,000 cubic meters daily, achieving 99.9% water quality compliance, and reducing waterborne diseases by 75% in the service area."
        },
        {
            title: "Elevation Residence",
            category: "Energy",
            location: "Hawassa",
            year: "2023",
            description: "Development of a sustainable power generation facility with advanced energy management systems and renewable integration.",
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
            status: "Completed",
            fullDescription: "A comprehensive power generation facility designed to provide reliable electricity to the industrial zone while incorporating renewable energy sources. The plant features advanced energy management systems and smart grid technology.",
            client: "Ethiopian Electric Power",
            duration: "36 months",
            budget: "$120 Million",
            team: "200+ Specialists",
            challenges: "Integration of renewable energy sources with traditional power generation, ensuring grid stability, and meeting strict environmental regulations.",
            solutions: "Implemented hybrid power generation system with intelligent load balancing, installed advanced monitoring systems, and utilized eco-friendly technologies throughout the facility.",
            results: "Successfully generating 150MW of power with 30% from renewable sources, serving over 500 industrial clients with 99.8% uptime reliability."
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

            status: "Completed",
            fullDescription: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            client: "Bahir Dar Water Supply Authority",
            duration: "30 months",
            budget: "$85 Million",
            team: "180+ Engineers and Technicians",
            challenges: "Meeting WHO water quality standards, ensuring continuous operation during construction, and integrating with existing infrastructure.",
            solutions: "Implemented multi-stage filtration system, installed redundant systems for reliability, and utilized smart monitoring technology for real-time quality control.",
            results: "Facility now processes 200,000 cubic meters daily, achieving 99.9% water quality compliance, and reducing waterborne diseases by 75% in the service area."
        },
        {
            title: "Deloitte Ethiopia",
            category: "Construction",
            location: "Mekelle",
            year: "2024",
            description: "Large-scale mixed-use development featuring residential, commercial, and recreational spaces with modern amenities.",
            image: "/images/projects/deloitte/1.jpg",
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
            status: "In Progress",
            fullDescription: "A transformative urban development project creating a modern mixed-use complex that combines residential towers, commercial spaces, recreational facilities, and green areas. The project emphasizes sustainable urban living and community integration.",
            client: "Mekelle Urban Development Corporation",
            duration: "48 months (Ongoing)",
            budget: "$200 Million",
            team: "300+ Construction and Design Professionals",
            challenges: "Coordinating multiple construction phases, integrating diverse building types, ensuring sustainable design principles, and maintaining construction timeline.",
            solutions: "Utilizing BIM technology for coordination, implementing green building standards, phased construction approach, and regular stakeholder engagement.",
            results: "Phase 1 completed with 500 residential units occupied, commercial spaces 80% leased, and community facilities operational. Expected full completion in 2025."
        },
        {
            title: "Ethiotele Headquarter office",
            category: "Infrastructure",
            location: "Bahir Dar",
            year: "2023",
            description: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
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
            status: "Completed",
            fullDescription: "A comprehensive water treatment and distribution infrastructure project designed to provide clean, safe drinking water to over 500,000 residents. The facility incorporates advanced filtration technology and automated monitoring systems.",
            client: "Bahir Dar Water Supply Authority",
            duration: "30 months",
            budget: "$85 Million",
            team: "180+ Engineers and Technicians",
            challenges: "Meeting WHO water quality standards, ensuring continuous operation during construction, and integrating with existing infrastructure.",
            solutions: "Implemented multi-stage filtration system, installed redundant systems for reliability, and utilized smart monitoring technology for real-time quality control.",
            results: "Facility now processes 200,000 cubic meters daily, achieving 99.9% water quality compliance, and reducing waterborne diseases by 75% in the service area."
        },
        {
            title: "Dema Hope realestate",
            category: "Infrastructure",
            location: "Bahir Dar",
            year: "2023",
            description: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            image: "/images/projects/dema/1.jpg",
            images: [
                "/images/projects/dema/1.jpg",
                "/images/projects/dema/2.jpg",
                "/images/projects/dema/3.jpg",
                "/images/projects/dema/4.jpg",
                "/images/projects/dema/5.jpg",
                "/images/projects/dema/6.jpg",
            ],
            status: "Completed",
            fullDescription: "A comprehensive water treatment and distribution infrastructure project designed to provide clean, safe drinking water to over 500,000 residents. The facility incorporates advanced filtration technology and automated monitoring systems.",
            client: "Bahir Dar Water Supply Authority",
            duration: "30 months",
            budget: "$85 Million",
            team: "180+ Engineers and Technicians",
            challenges: "Meeting WHO water quality standards, ensuring continuous operation during construction, and integrating with existing infrastructure.",
            solutions: "Implemented multi-stage filtration system, installed redundant systems for reliability, and utilized smart monitoring technology for real-time quality control.",
            results: "Facility now processes 200,000 cubic meters daily, achieving 99.9% water quality compliance, and reducing waterborne diseases by 75% in the service area."
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
            status: "Completed",
            fullDescription: "A comprehensive water treatment and distribution infrastructure project designed to provide clean, safe drinking water to over 500,000 residents. The facility incorporates advanced filtration technology and automated monitoring systems.",
            client: "Bahir Dar Water Supply Authority",
            duration: "30 months",
            budget: "$85 Million",
            team: "180+ Engineers and Technicians",
            challenges: "Meeting WHO water quality standards, ensuring continuous operation during construction, and integrating with existing infrastructure.",
            solutions: "Implemented multi-stage filtration system, installed redundant systems for reliability, and utilized smart monitoring technology for real-time quality control.",
            results: "Facility now processes 200,000 cubic meters daily, achieving 99.9% water quality compliance, and reducing waterborne diseases by 75% in the service area."
        },
        {
            title: "Mulege Mixed Use Building ",
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

            status: "Completed",
            fullDescription: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            client: "Bahir Dar Water Supply Authority",
            duration: "30 months",
            budget: "$85 Million",
            team: "180+ Engineers and Technicians",
            challenges: "Meeting WHO water quality standards, ensuring continuous operation during construction, and integrating with existing infrastructure.",
            solutions: "Implemented multi-stage filtration system, installed redundant systems for reliability, and utilized smart monitoring technology for real-time quality control.",
            results: "Facility now processes 200,000 cubic meters daily, achieving 99.9% water quality compliance, and reducing waterborne diseases by 75% in the service area."
        },
        {
            title: "Ethiopian Steel Factory",
            category: "Infrastructure",
            location: "Bahir Dar",
            year: "2023",
            description: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            image: "/images/projects/EthiopianSteelFactory/photo_2025-10-14_14-01-19.jpg",
            images: [
                "/images/projects/EthiopianSteelFactory/photo_2025-10-14_14-01-19.jpg",
                "/images/projects/EthiopianSteelFactory/photo_2025-10-15_16-15-46.jpg",
                "/images/projects/EthiopianSteelFactory/photo_2025-10-15_16-17-24.jpg",

            ],
            status: "Completed",
            fullDescription: "A comprehensive water treatment and distribution infrastructure project designed to provide clean, safe drinking water to over 500,000 residents. The facility incorporates advanced filtration technology and automated monitoring systems.",
            client: "Bahir Dar Water Supply Authority",
            duration: "30 months",
            budget: "$85 Million",
            team: "180+ Engineers and Technicians",
            challenges: "Meeting WHO water quality standards, ensuring continuous operation during construction, and integrating with existing infrastructure.",
            solutions: "Implemented multi-stage filtration system, installed redundant systems for reliability, and utilized smart monitoring technology for real-time quality control.",
            results: "Facility now processes 200,000 cubic meters daily, achieving 99.9% water quality compliance, and reducing waterborne diseases by 75% in the service area."
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
            status: "Completed",
            fullDescription: "This landmark infrastructure project involved the design and construction of a state-of-the-art bridge system spanning 2.5 kilometers across the metropolitan area. The project aimed to significantly reduce traffic congestion and improve connectivity between key business districts and residential areas.",
            client: "Addis Ababa City Administration",
            duration: "24 months",
            budget: "$45 Million",
            team: "150+ Engineers and Construction Workers",
            challenges: "The project faced several challenges including working in a densely populated urban area, managing traffic flow during construction, and ensuring minimal disruption to daily activities. The geological conditions also required specialized foundation work.",
            solutions: "We implemented a phased construction approach, utilizing advanced prefabrication techniques to minimize on-site work time. Night shifts were scheduled for critical operations, and temporary bypass routes were established. Our team employed cutting-edge foundation technology to address geological challenges.",
            results: "The bridge was completed 2 months ahead of schedule, reducing commute times by 40% and improving traffic flow significantly. The project received recognition for its innovative construction methods and minimal environmental impact."
        },

        {
            title: "Minister of Defense ",
            category: "Infrastructure",
            location: "Bahir Dar",
            year: "2023",
            description: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            image: "/images/projects/MinisterofDefense/4.jpg",
            images: [
                "/images/projects/MinisterofDefense/1.png",
                "/images/projects/MinisterofDefense/2.png",
                "/images/projects/MinisterofDefense/3.png",


            ],

            status: "Completed",
            fullDescription: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            client: "Bahir Dar Water Supply Authority",
            duration: "30 months",
            budget: "$85 Million",
            team: "180+ Engineers and Technicians",
            challenges: "Meeting WHO water quality standards, ensuring continuous operation during construction, and integrating with existing infrastructure.",
            solutions: "Implemented multi-stage filtration system, installed redundant systems for reliability, and utilized smart monitoring technology for real-time quality control.",
            results: "Facility now processes 200,000 cubic meters daily, achieving 99.9% water quality compliance, and reducing waterborne diseases by 75% in the service area."
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
            status: "Completed",
            fullDescription: "A comprehensive power generation facility designed to provide reliable electricity to the industrial zone while incorporating renewable energy sources. The plant features advanced energy management systems and smart grid technology.",
            client: "Ethiopian Electric Power",
            duration: "36 months",
            budget: "$120 Million",
            team: "200+ Specialists",
            challenges: "Integration of renewable energy sources with traditional power generation, ensuring grid stability, and meeting strict environmental regulations.",
            solutions: "Implemented hybrid power generation system with intelligent load balancing, installed advanced monitoring systems, and utilized eco-friendly technologies throughout the facility.",
            results: "Successfully generating 150MW of power with 30% from renewable sources, serving over 500 industrial clients with 99.8% uptime reliability."
        },


        {
            title: "Ethiopian Insurance Corporation",
            category: "Infrastructure",
            location: "Bahir Dar",
            year: "2023",
            description: "State-of-the-art water treatment and distribution system serving over 500,000 residents with clean, safe water.",
            image: "/images/projects/EthiopianInsuranceCorporation/EIC_Auditorium_Opt02.png",
            images: [
                "/images/projects/EthiopianInsuranceCorporation/EIC_Auditorium_Opt02.png",
                "/images/projects/EthiopianInsuranceCorporation/EIC_Auditorium_Opt02B.png",


            ],
            status: "Completed",
            fullDescription: "A comprehensive water treatment and distribution infrastructure project designed to provide clean, safe drinking water to over 500,000 residents. The facility incorporates advanced filtration technology and automated monitoring systems.",
            client: "Bahir Dar Water Supply Authority",
            duration: "30 months",
            budget: "$85 Million",
            team: "180+ Engineers and Technicians",
            challenges: "Meeting WHO water quality standards, ensuring continuous operation during construction, and integrating with existing infrastructure.",
            solutions: "Implemented multi-stage filtration system, installed redundant systems for reliability, and utilized smart monitoring technology for real-time quality control.",
            results: "Facility now processes 200,000 cubic meters daily, achieving 99.9% water quality compliance, and reducing waterborne diseases by 75% in the service area."
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
            status: "Completed",
            fullDescription: "This landmark infrastructure project involved the design and construction of a state-of-the-art bridge system spanning 2.5 kilometers across the metropolitan area. The project aimed to significantly reduce traffic congestion and improve connectivity between key business districts and residential areas.",
            client: "Addis Ababa City Administration",
            duration: "24 months",
            budget: "$45 Million",
            team: "150+ Engineers and Construction Workers",
            challenges: "The project faced several challenges including working in a densely populated urban area, managing traffic flow during construction, and ensuring minimal disruption to daily activities. The geological conditions also required specialized foundation work.",
            solutions: "We implemented a phased construction approach, utilizing advanced prefabrication techniques to minimize on-site work time. Night shifts were scheduled for critical operations, and temporary bypass routes were established. Our team employed cutting-edge foundation technology to address geological challenges.",
            results: "The bridge was completed 2 months ahead of schedule, reducing commute times by 40% and improving traffic flow significantly. The project received recognition for its innovative construction methods and minimal environmental impact."
        },
















    ];

    useEffect(() => {
        setScrollAction(3500, "project_detail_hero", () => { });
        setScrollAction(2800, "project_detail_content", () => { });
    }, []);

    useEffect(() => {
        if (id) {
            const projectIndex = parseInt(id);
            if (projectIndex >= 0 && projectIndex < allProjects.length) {
                setProjectData(allProjects[projectIndex]);
                setSelectedImageIndex(0); // Reset to first image when project changes
                setIsAutoPlaying(true); // Reset autoplay when project changes
            }
        }
    }, [id]);

    // Auto-play carousel
    useEffect(() => {
        if (!isAutoPlaying || !projectData?.images || projectData.images.length <= 1) return;

        const interval = setInterval(() => {
            setSelectedImageIndex(prev =>
                prev === projectData.images!.length - 1 ? 0 : prev + 1
            );
        }, 1000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, projectData, selectedImageIndex]);

    const handlePrevImage = () => {
        setSelectedImageIndex(prev =>
            prev === 0 ? projectData!.images!.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setSelectedImageIndex(prev =>
            prev === projectData!.images!.length - 1 ? 0 : prev + 1
        );
    };

    const handleThumbnailClick = (index: number) => {
        setSelectedImageIndex(index);
    };

    const schemaData = projectData ? {
        "@context": "https://schema.org",
        "@type": "Project",
        "name": projectData.title,
        "description": projectData.description,
        "image": projectData.image,
        "location": {
            "@type": "Place",
            "name": projectData.location
        },
        "startDate": projectData.year,
        "status": projectData.status
    } : null;

    if (!projectData) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Project not found</h2>
                    <button
                        onClick={() => navigate('/projects')}
                        className="px-6 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-all"
                    >
                        Back to Projects
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="relative z-10">
            {schemaData && (
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            )}

            {/* Hero Section */}
            <section className="relative py-24 text-center overflow-hidden shadow-md" style={{
                background: `linear-gradient(135deg, var(--button_color) 0%, color-mix(in srgb, var(--button_color) 80%, black) 50%, color-mix(in srgb, var(--button_color) 60%, black) 100%)`
            }}>
                <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ backgroundColor: 'var(--button_bg)' }}></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <button
                        onClick={() => navigate('/projects')}
                        className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span>Back to Projects</span>
                    </button>

                    {/* <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-blue-50 text-blue-900 rounded-full font-semibold text-sm">
                            {projectData.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2 ${projectData.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                            }`}>
                            {projectData.status === "Completed" ? <CheckCircle2 size={16} /> : <Clock size={16} />}
                            {projectData.status}
                        </span>
                    </div> */}

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                        {projectData.title}
                    </h1>

                    {/* <div className="flex items-center justify-center gap-6 text-white/90 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                            <MapPin size={18} />
                            <span>{projectData.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span>{projectData.year}</span>
                        </div>
                    </div> */}
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-12 md:py-16 sm:ml-0 md:ml-20 lg:ml-40 xl:ml-52">

                {/* Project Image Carousel */}
                <div className="mb-12">
                    {/* Main Carousel */}
                    <div
                        className="relative rounded-2xl overflow-hidden shadow-2xl mb-4 group"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        <img
                            src={projectData.images && projectData.images.length > 0
                                ? projectData.images[selectedImageIndex]
                                : projectData.image}
                            alt={`${projectData.title} - Image ${selectedImageIndex + 1}`}
                            className="w-full h-96 md:h-[500px] object-cover rounded-lg transition-all duration-700 ease-in-out hover:scale-105"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>

                        {/* Navigation Arrows */}
                        {projectData.images && projectData.images.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 p-3 rounded-full shadow-lg transition-all hover:scale-110"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={handleNextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 p-3 rounded-full shadow-lg transition-all hover:scale-110"
                                    aria-label="Next image"
                                >
                                    <ChevronRight size={24} />
                                </button>

                                {/* Image Counter & Progress */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                                    <div className="bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                                        {selectedImageIndex + 1} / {projectData.images.length}
                                    </div>
                                    {/* Progress Dots */}
                                    <div className="flex gap-2">
                                        {projectData.images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleThumbnailClick(index)}
                                                className={`transition-all duration-300 rounded-full ${selectedImageIndex === index
                                                    ? 'w-8 h-2 bg-white'
                                                    : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                                                    }`}
                                                aria-label={`Go to image ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Thumbnail Gallery */}
                    {projectData.images && projectData.images.length > 1 && (
                        <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                            {projectData.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleThumbnailClick(index)}
                                    className={`relative rounded-lg overflow-hidden h-20 md:h-24 transition-all duration-300 ${selectedImageIndex === index
                                        ? 'ring-4 ring-blue-900 scale-105'
                                        : 'hover:ring-2 hover:ring-blue-400 opacity-70 hover:opacity-100'
                                        }`}
                                    aria-label={`View image ${index + 1}`}
                                >
                                    <img
                                        src={img}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Active Indicator */}
                                    {selectedImageIndex === index && (
                                        <div className="absolute inset-0 bg-blue-900/20 border-2 border-blue-900"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Project Overview */}
                {/* <div className="mb-12">
                    <h2 className="text-3xl font-bold text-blue-950 mb-6">Project Overview</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {projectData.fullDescription}
                    </p>
                </div> */}

                {/* Project Details Grid */}
                /

                {/* Challenges */}
                {/* <div className="mb-12">
                    <h2 className="text-3xl font-bold text-blue-950 mb-6">Challenges</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        {projectData.challenges}
                    </p>
                </div> */}

                {/* Solutions */}
                {/* <div className="mb-12">
                    <h2 className="text-3xl font-bold text-blue-950 mb-6">Our Solutions</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        {projectData.solutions}
                    </p>
                </div> */}

                {/* Results */}
                {/* <div className="mb-12">
                    <h2 className="text-3xl font-bold text-blue-950 mb-6">Results & Impact</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        {projectData.results}
                    </p>
                </div> */}

                {/* Back Button */}
                <div className="text-center mt-12">
                    <button
                        onClick={() => navigate('/projects')}
                        className="px-8 py-4 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-3"
                    >
                        <ArrowLeft size={20} />
                        <span>Back to All Projects</span>
                    </button>
                </div>
            </section>
        </div>
    );
}

export default ProjectDetail;
