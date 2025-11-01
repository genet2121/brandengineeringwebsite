

import { relative } from "path";
import React, { useEffect, useState } from "react";
import EventComponent from "../Components/Reusables/EventComponent";
import FooterComponent from "../Components/Reusables/FooterComponent";
import JobCard from "../Components/Reusables/JobCard";
import BlogComponent from "../Components/Reusables/BlogComponent";
import CompanyComponent from "../Components/Reusables/CompanyComponent";
import { useNavigate } from "react-router-dom";
import AdminAPI from "../APIs/AdminAPI";
import VerticalGap from "../Components/Reusables/VerticalGap";
import { isMobile } from "react-device-detect";
import Marquee from "react-fast-marquee";
import StartIcon from '@mui/icons-material/Start';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import { Button, IconButton } from "@mui/material";
import BlogSection from "../Components/Reusables/BlogSection";
import AboutSection from "../Components/Reusables/AboutSection";
import ThematicSection from "../Components/Reusables/ThematicSection";
import TeamSection from "../Components/Reusables/Team";
import ContactUsSection from "../Components/Reusables/ContactUsSection";

function Home() {
    const navigate = useNavigate();
    const [thematicareas, setThematicareas] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [events, setEvents] = useState([]);
    const [detailPanel, setDetailPanel] = useState(false);
    const [about, setAbout] = useState<any>([]);
    const [teams, setTeams] = useState<any>([]);

    useEffect(() => {
        loadAbout();
    }, []);

    const loadAbout = async () => {
        let data: any = await AdminAPI.getAllNormal("v1/about", "about");
        setAbout(data.Items);
    }

    const closeDetail = () => {
        setDetailPanel(false);
    }

    useEffect(() => {
        const fetchThematicareas = async () => {
            try {
                const response = await AdminAPI.getAllNormal("v1/thematicarea", "thematicAreas");
                setThematicareas(response.Items.slice(0, 3));
            } catch (error) {
            }
        };
        fetchThematicareas();
    }, []);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await AdminAPI.getAllNormal("v1/team", "teamMembers");
                setTeams(response.Items);
            } catch (error) {
            }
        };
        fetchTeams();
    }, []);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await AdminAPI.getAllNormal("v1/blog", "blogs");
                setBlogs(response.Items.slice(0, 5));
            } catch (error) {
            }
        };
        fetchBlogs();
    }, []);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await AdminAPI.getAllNormal("v1/event", "events");
                setEvents(response.Items);
            } catch (error) {
            }
        };
        fetchEvents();
    }, []);

    const horizontalScroller = (component: ("event" | "job" | "blog"), direction: ("left" | "right")) => {
        let element: any;
        if (component == "event") {
            element = document.getElementById("event_scrollpy");
        } else if (component == "blog") {
            element = document.getElementById("blog_scrollpy");
        } else if (component == "job") {
            element = document.getElementById("job_scrollpy");
        }

        if (direction == "right") {
            element.scrollLeft += (isMobile ? 300 : 600);
        } else {
            element.scrollLeft -= (isMobile ? 300 : 600);
        }
    }



    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "M.I.R.A.C.",
        "url": "https://mirac.et",
        "logo": "https://mirac.et/images/mirac_logo.png",
        "sameAs": [
            "https://www.facebook.com/miracethiopia",
            "https://t.me/MIRACEthiopia",
            "https://linkedin.com",
            "https://twitter.com"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+123-456-7890",
            "contactType": "Customer Service"
        },
        "description": "Connecting Healthcare Excellence with Top Talent."
    };

    return (
        <div className="w-full" style={{ position: "relative", zIndex: 10 }} >
            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

            {/* Hero Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 zpanel">
                        <p className="text-sm md:text-base font-semibold mb-2" style={{ color: "var(--text_color)" }}>
                            The Center for Innovation in Peace, Security, and Prosperity
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 md:mb-6" style={{ color: "var(--text_color)" }}>
                            For An Improved <br className="hidden md:block" /> Peace and <br className="hidden md:block" /> Prosperity!
                        </h1>
                        <p className="text-sm md:text-base mb-4 md:mb-6" style={{ color: "var(--text_color)" }}>
                            Driving Innovation for Global Peace and Prosperity
                            The Center for Innovation in Peace, Security, and Prosperity (CIPSP) empowers
                            communities and organizations through innovative research, programs, and
                            partnerships that foster stability and sustainable development in fragile regions.
                        </p>
                        <button className="btn zbtn rounded-1 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base" onClick={() => navigate("/contact_us")}>
                            Contact Us
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="/images/heroanimate.svg"
                            className="w-full max-w-md"
                            alt="Hero Image"
                        />
                    </div>
                </div>
            </div>

            {/* Blog Section */}
            <div className="w-full zpanel bg-white">
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                    <div className="mb-8 md:mb-10 text-center">
                        <div className="h-1 w-20 bg-[#002c5f] mb-4 md:mb-6 rounded mx-auto md:mx-0 md:ml-[calc(50%-160px)]"></div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Latest Blogs</h2>
                        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
                            Dive into our latest thoughts and expert advice.
                        </p>
                    </div>
                    <BlogSection blogs={blogs} />
                </section>
            </div>

            {/* About Section */}
            <div className="container mx-auto px-4 sm:px-6">
                <div className="mt-4">
                    <VerticalGap size={15} />
                    <AboutSection about={about} />
                    <VerticalGap size={50} />
                </div>
            </div>

            {/* CTA Section 1 */}
            <section className="w-full bg-gradient-to-r from-[#0072ff] via-[#002c5f] to-[#00c6ff] text-white py-16 md:py-24 text-center px-4">
                <div className="container mx-auto">
                    <p className="text-base md:text-lg font-semibold mb-4">Send us a message</p>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-6">
                        We are here to help you drive change!  Together, we will shape the future!

                    </h2>
                    <button className="bg-white text-black font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-200 transition duration-300 text-sm md:text-base" onClick={() => navigate("/contact_us")}>
                        Contact Us
                    </button>
                </div>
            </section>

            {/* Thematic Area Section */}
            <div className="container mx-auto px-4 sm:px-6 mt-8 md:mt-12">
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold">Thematic area</h2>
                    <VerticalGap size={15} />
                    <p className="text-sm md:text-lg max-w-2xl mx-auto">
                        Currently, we are focused on the following thematic areas.
                    </p>
                    <VerticalGap size={15} />
                    <ThematicSection thematicareas={thematicareas} />
                    <VerticalGap size={50} />
                </div>
            </div>

            {/* Team Section */}
            {teams.length > 0 && (
                <div className="w-full bg-[#FBF9F9] zpanel">
                    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                        <div className="mb-8 md:mb-10 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold">Our Company Team</h2>
                            <p className="text-gray-500 mt-2 md:mt-4 text-sm md:text-base">
                                Meet our beloved team.
                            </p>
                        </div>
                        <TeamSection teams={teams} />
                    </section>
                </div>
            )}


            {/* Publications CTA */}
            <section className="w-full bg-gradient-to-r from-[#0072ff] via-[#002c5f] to-[#00c6ff] text-white py-8 md:py-12 px-4 text-center relative">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 container mx-auto max-w-3xl">
                    <p className="text-2xl md:text-3xl font-bold tracking-wide mb-2 md:mb-4">Publications</p>
                    <h2 className="text-sm md:text-lg font-medium mb-4 md:mb-6">
                        Explore our latest insights and research. Click below to read more.
                    </h2>
                    <button className="bg-white text-[#002c5f] font-semibold px-6 md:px-8 py-2 md:py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:bg-gray-100 hover:scale-105 hover:shadow-xl text-sm md:text-base" onClick={() => navigate("/publications")}>
                        Learn More
                    </button>
                </div>
            </section>

            {/* Contact Section */}
            <div className="container mx-auto px-4 sm:px-6 mt-8 md:mt-12">
                <div className="max-w-4xl mx-auto text-center zpanel">
                    <h2 className="text-2xl md:text-3xl font-bold">Contact us</h2>
                    <p className="text-gray-600 mt-2 text-sm md:text-base max-w-2xl mx-auto">
                        Reach out anytime — we’re here to help.

                    </p>
                </div>
                <VerticalGap size={15} />
                <ContactUsSection />
                <VerticalGap size={50} />
            </div>
        </div>
    );
}

export default Home;