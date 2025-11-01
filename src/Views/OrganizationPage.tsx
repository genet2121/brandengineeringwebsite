import React from "react";
import { Building2, TrendingUp, Calculator, UserCheck, Briefcase, ClipboardList, ShoppingCart, CheckCircle2, Shield, Wrench, Users } from "lucide-react";
import "./org_structure.css";

function OrganizationPage() {

    // Department Card Component
    const DepartmentCard = ({ title, icon: Icon }: { title: string, icon: any }) => (
        <div className="flex flex-col items-center group">
            <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 overflow-hidden shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl"
                    style={{ borderColor: 'var(--button_color)' }}>
                    <img
                        src="/images/thematic1.jpg"
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 p-2 rounded-full shadow-lg transition-all duration-300"
                    style={{ backgroundColor: 'var(--button_color)' }}>
                    <Icon size={20} className="text-white" />
                </div>
            </div>
            <h3 className="mt-6 text-sm font-bold text-center text-gray-800 max-w-[140px]">
                {title}
            </h3>
        </div>
    );

    // Connection Line Component
    const VerticalLine = ({ height = "h-12" }: { height?: string }) => (
        <div className={`w-0.5 ${height} mx-auto`} style={{ backgroundColor: 'var(--button_color)' }}></div>
    );

    const HorizontalLine = ({ width = "w-full" }: { width?: string }) => (
        <div className={`${width} h-0.5`} style={{ backgroundColor: 'var(--button_color)' }}></div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Hero Section */}
            <section className="relative py-24 text-center overflow-hidden shadow-md" style={{
                background: `linear-gradient(135deg, var(--button_color) 0%, color-mix(in srgb, var(--button_color) 80%, black) 50%, color-mix(in srgb, var(--button_color) 60%, black) 100%)`
            }}>
                <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ backgroundColor: 'var(--button_bg)' }}></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

                <div className="max-w-3xl mx-auto px-6 relative z-10">
                    <div className="inline-block mb-4 bg-white/20 backdrop-blur-sm p-4 rounded-full">
                        <Building2 size={32} className="text-white inline" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Department Overview
                    </h1>
                    <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        Discover our  dedicated teams driving our success
                    </p>
                </div>
            </section>

            {/* Organization Chart */}
            <section className="w-full px-4 py-6 md:py-10">

                {/* Department Legend */}
                <div className="max-w-7xl mx-auto bg-white rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-center mb-8" style={{ color: 'var(--button_color)' }}>
                        Department Overview
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            [
                                {
                                    title: "General Manager",
                                    icon: Building2,
                                    desc: "Oversees all company operations and strategic direction",
                                    details: "Responsible for overall company performance, strategic planning, stakeholder management, and resource allocation across all departments."
                                },
                                {
                                    title: "Financial Manager",
                                    icon: TrendingUp,
                                    desc: "Manages financial operations and reporting",
                                    details: "Handles financial planning, budget management, financial reporting, risk management, and ensures fiscal responsibility."
                                },
                                {
                                    title: "Senior Manager",
                                    icon: Users,
                                    desc: "Leads operational departments and teams",
                                    details: "Coordinates department activities, monitors performance, provides team leadership, and drives strategic initiatives."
                                },
                                {
                                    title: "Accounts",
                                    icon: Calculator,
                                    desc: "Handles accounting and financial transactions",
                                    details: "Manages accounts payable/receivable, maintains financial records, ensures tax compliance, and provides audit support."
                                },
                                {
                                    title: "HR Executive",
                                    icon: UserCheck,
                                    desc: "Manages human resources and employee relations",
                                    details: "Oversees recruitment, onboarding, employee relations, training and development, and HR policy implementation."
                                },
                                {
                                    title: "Manager Business Development",
                                    icon: Briefcase,
                                    desc: "Drives business growth and client relationships",
                                    details: "Develops business strategy, acquires new clients, conducts market analysis, and builds strategic partnerships."
                                },
                                {
                                    title: "Design",
                                    icon: ClipboardList,
                                    desc: "Creates technical designs and specifications",
                                    details: "Develops engineering designs, technical drawings, specifications, and ensures compliance with standards and regulations."
                                },
                                {
                                    title: "Estimation",
                                    icon: Calculator,
                                    desc: "Prepares project cost estimates and proposals",
                                    details: "Analyzes project requirements, calculates costs, prepares detailed estimates, and develops competitive proposals."
                                },
                                {
                                    title: "Projects",
                                    icon: Briefcase,
                                    desc: "Manages project execution and delivery",
                                    details: "Oversees project implementation, coordinates resources, ensures timely delivery, and maintains quality standards."
                                },
                                {
                                    title: "Purchase",
                                    icon: ShoppingCart,
                                    desc: "Handles procurement and vendor management",
                                    details: "Manages supplier relationships, negotiates contracts, ensures timely procurement, and optimizes purchasing costs."
                                },
                                {
                                    title: "Quality Control",
                                    icon: CheckCircle2,
                                    desc: "Ensures quality standards and compliance",
                                    details: "Conducts quality inspections, implements quality assurance processes, and ensures adherence to industry standards."
                                },
                                {
                                    title: "Safety",
                                    icon: Shield,
                                    desc: "Manages workplace safety and regulations",
                                    details: "Implements safety protocols, conducts safety training, ensures regulatory compliance, and maintains safe work environment."
                                },
                                {
                                    title: "Sales",
                                    icon: TrendingUp,
                                    desc: "Drives sales and revenue generation",
                                    details: "Develops sales strategies, manages client relationships, achieves revenue targets, and expands market presence."
                                },
                                {
                                    title: "Project Coordinator",
                                    icon: ClipboardList,
                                    desc: "Coordinates project activities and communication",
                                    details: "Facilitates project communication, schedules activities, tracks progress, and ensures smooth project coordination."
                                },
                                {
                                    title: "Engineers | Technicians",
                                    icon: Wrench,
                                    desc: "Executes technical work and installations",
                                    details: "Performs technical installations, conducts maintenance, troubleshoots issues, and ensures quality workmanship."
                                },
                            ].map((dept, idx) => {
                                const IconComponent = dept.icon;
                                return (
                                    <div key={idx} className="relative group  ">
                                        <div className="flex items-start gap-4 p-5 rounded-xl border-2 border-transparent hover:border-opacity-100 transition-all duration-300 cursor-pointer h-full department_item"
                                            style={{
                                                backgroundColor: 'color-mix(in srgb, var(--button_color) 5%, white)',
                                                borderColor: 'transparent'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderColor = 'var(--button_color)';
                                                e.currentTarget.style.boxShadow = '0 10px 30px -10px color-mix(in srgb, var(--button_color) 40%, transparent)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.borderColor = 'transparent';
                                                e.currentTarget.style.boxShadow = 'none';
                                            }}>
                                            <div className="flex-shrink-0 p-3 rounded-xl shadow-md transition-all duration-300 group-hover:scale-110"
                                                style={{ backgroundColor: 'var(--button_color)' }}>
                                                <IconComponent size={24} className="text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-gray-800 text-base mb-2 group-hover:text-opacity-90 transition-colors"
                                                    style={{ color: 'var(--button_color)' }}>
                                                    {dept.title}
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed">{dept.desc}</p>
                                            </div>
                                        </div>

                                        {/* Tooltip Popup Card */}
                                        <div className="absolute left-full ml-4 top-0 w-80 bg-white rounded-xl shadow-2xl transition-all duration-300 z-[100] pointer-events-none border-2 overflow-hidden department_details home_slide_right"
                                            style={{
                                                borderColor: 'var(--button_color)',
                                            }}>
                                            {/* Header with gradient */}
                                            <div className="p-4 text-white" style={{
                                                background: `linear-gradient(135deg, var(--button_color) 0%, color-mix(in srgb, var(--button_color) 80%, black) 100%)`
                                            }}>
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-shrink-0 p-2.5 rounded-lg bg-white/20 backdrop-blur-sm">
                                                        <IconComponent size={22} className="text-white" />
                                                    </div>
                                                    <h5 className="font-bold text-base text-white">{dept.title}</h5>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-4 bg-white">
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                                    <span className="font-semibold text-gray-900">Overview: </span>
                                                    {dept.desc}
                                                </p>
                                                <div className="pt-3 border-t border-gray-200">
                                                    <p className="text-xs font-semibold text-gray-500 mb-2">Key Responsibilities:</p>
                                                    <p className="text-xs text-gray-600 leading-relaxed">{dept.details}</p>
                                                </div>
                                            </div>

                                            {/* Arrow pointing left */}
                                            <div className="absolute right-full top-6 w-0 h-0 border-t-[10px] border-b-[10px] border-r-[10px] border-t-transparent border-b-transparent"
                                                style={{ borderRightColor: 'var(--button_color)' }}></div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OrganizationPage;
