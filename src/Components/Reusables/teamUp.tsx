import React from "react"
import { useState } from "react"
import { Mail, Phone } from "lucide-react"

export default function TeamUp() {
    const [hoveredId, setHoveredId] = useState(null)

    const teamMembers = [
        {
            id: 1,
            name: "Haymanot Baynesagne",
            role: "General Manager and Co-founder",
            image: "/images/employees/haymanot.png",
            isCoFounder: true,
            gridGroup: "row1",
        },
        {
            id: 2,
            name: "Sisay Baynesagne",
            role: "Managing partner and Co-founder",
            image: "/images/employees/sisay.png",
            isCoFounder: true,
            gridGroup: "row1",
        },
       
        {
            id: 3,
            name: " Nuhamin Zablon ",
            role: "Senior Project Coordinator",
            image: "/images/employees/nuhamin.png",
            isCoFounder: false,
            gridGroup: "row2",
        },
        {
            id: 4,
            name: " Feker B. ",
            role: "Senior Project Coordinator",
            image: "/images/employees/feker.png",
            isCoFounder: false,
            gridGroup: "row2",
        },
        {
            id: 5,
            name: " Kelab Teshome ",
            role: "Senior Project Coordinator",
            image: "/images/employees/kelabt.png",
            isCoFounder: false,
            gridGroup: "row2",
        },
        {
            id: 6,
            name: " Eyob Birhanu ",
            role: "Senior Electromechanical technician",
            image: "/images/employees/eyob.png",
            isCoFounder: false,
            gridGroup: "row3",
        },
        {
            id: 7,
            name: " Martha Worku ",
            role: "Junior Mechanical ",
            image: "/images/employees/martha.png",
            isCoFounder: false,
            gridGroup: "row3",
        },
     
        {
            id: 8,
            name: " Tilahun Lakew ",
            role: "Senior Electromechanical technician",
            image: "/images/employees/tilahun.png",
            isCoFounder: false,
            gridGroup: "row3",
        },
        {
            id: 9,
            name: " Heaven Michael ",
            role: "Junior Mechanical",
            image: "/images/employees/heaven.png",
            isCoFounder: false,
            gridGroup: "row3",
        },
       
       
        {
            id: 10,
            name: " Eleni Haylemeskel ",
            role: "Junior Electrical",
            image: "/images/employees/eleni.png",
            isCoFounder: false,
            gridGroup: "row4",
        },
        {
            id: 11,
            name: " Yimenu Weldemichael ",
            role: "Senior Fire and plumber technician",
            image: "/images/employees/yimen.png",
            isCoFounder: false,
            gridGroup: "row4",
        },
        {
            id: 12,
            name: "Kalab Teshome",
            role: "Senior Electromechanic",
            image: "/images/employees/kalab.png",
            isCoFounder: false,
            gridGroup: "row4",
        },
        {
            id: 13,
            name: "Matiwos Sisay ",
            role: "Senior Electromechanic",
            image: "/images/employees/matiwos.png",
            isCoFounder: false,
            gridGroup: "row4",
        },

        {
            id: 14,
            name: " Ermiyas Gebeyehu ",
            role: "Senior Fire and plumber technician",
            image: "/images/employees/ermiyasg.png",
            isCoFounder: false,
            gridGroup: "row4",
        },
        {
            id: 15,
            name: " Ermiyas Dereje ",
            role: "Senior Fire and plumber technician",
            image: "/images/employees/ermiyas.png",
            isCoFounder: false,
            gridGroup: "row4",
        },

        {
            id: 16,
            name: " Fitsum Seyfu ",
            role: "Senior Electromechanical technician",
            image: "/images/employees/fitsum.png",
            isCoFounder: false,
            gridGroup: "row4",
        },
        
      
       
      
    ]

    return (
        <main className="min-h-screen bg-white p-8 md:p-12">
            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-light text-center mb-16 text-gray-900">Co-Founders</h1>

            {/* Partners Grid */}
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
                    {teamMembers.filter((member: any) => member.isCoFounder).map((member: any) => (
                        <div
                            key={member.id}
                            className="h-[475px] relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
                            onMouseEnter={() => setHoveredId(member.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <img
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                className={`w-full h-full object-cover transition-all duration-300 ${hoveredId === member.id ? "grayscale-0" : ""
                                    }`}
                            />
                            <div
                                className={`absolute inset-0 flex flex-col justify-between p-6 text-white transition-all duration-300 ${hoveredId === member.id ? "bg-black/60 opacity-100" : "bg-black/0 opacity-0 pointer-events-none"
                                    }`}
                            >
                                <div className="flex flex-col gap-3">
                                    <h2 className="font-semibold text-base leading-tight">{member.name}</h2>
                                    <p className="text-xs font-light">{member.role}</p>
                                </div>
                                {/* <div className="flex gap-4">
                                    <button className="hover:opacity-80 transition-opacity">
                                        <Phone size={18} />
                                    </button>
                                    <button className="hover:opacity-80 transition-opacity">
                                        <Mail size={18} />
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <h1 className="text-2xl md:text-3xl mt-20 font-light text-center mb-16 text-gray-900">Brand Engineering Teams</h1>

            {/* Partners Grid */}
            <div className="max-w-4xl mx-auto mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.filter((member: any) => !member.isCoFounder && member.gridGroup === "row2").map((partner: any) => (
                        <div
                            key={partner.id}
                            className="h-80 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
                            onMouseEnter={() => setHoveredId(partner.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <img
                                src={partner.image || "/placeholder.svg"}
                                alt={partner.name}
                                className={`w-full h-full object-cover transition-all duration-300 ${hoveredId === partner.id ? "grayscale-0" : ""
                                    }`}
                            />
                            <div
                                className={`absolute inset-0 flex flex-col justify-between p-6 text-white transition-all duration-300 ${hoveredId === partner.id ? "bg-black/60 opacity-100" : "bg-black/0 opacity-0 pointer-events-none"
                                    }`}
                            >
                                <div className="flex flex-col gap-3">
                                    <h2 className="font-semibold text-base leading-tight">{partner.name}</h2>
                                    <p className="text-xs font-light">{partner.role}</p>
                                </div>
                                {/* <div className="flex gap-4">
                                    <button className="hover:opacity-80 transition-opacity">
                                        <Phone size={18} />
                                    </button>
                                    <button className="hover:opacity-80 transition-opacity">
                                        <Mail size={18} />
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.filter((member: any) => !member.isCoFounder && member.gridGroup === "row3").map((partner: any) => (
                        <div
                            key={partner.id}
                            className="h-80 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
                            onMouseEnter={() => setHoveredId(partner.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <img
                                src={partner.image || "/placeholder.svg"}
                                alt={partner.name}
                                className={`w-full h-full object-cover transition-all duration-300 ${hoveredId === partner.id ? "grayscale-0" : ""
                                    }`}
                            />
                            <div
                                className={`absolute inset-0 flex flex-col justify-between p-6 text-white transition-all duration-300 ${hoveredId === partner.id ? "bg-black/60 opacity-100" : "bg-black/0 opacity-0 pointer-events-none"
                                    }`}
                            >
                                <div className="flex flex-col gap-3">
                                    <h2 className="font-semibold text-base leading-tight">{partner.name}</h2>
                                    <p className="text-xs font-light">{partner.role}</p>
                                </div>
                                {/* <div className="flex gap-4">
                                    <button className="hover:opacity-80 transition-opacity">
                                        <Phone size={18} />
                                    </button>
                                    <button className="hover:opacity-80 transition-opacity">
                                        <Mail size={18} />
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.filter((member: any) => !member.isCoFounder && member.gridGroup === "row4").map((partner: any) => (
                        <div
                            key={partner.id}
                            className="h-80 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
                            onMouseEnter={() => setHoveredId(partner.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <img
                                src={partner.image || "/placeholder.svg"}
                                alt={partner.name}
                                className={`w-full h-full object-cover transition-all duration-300 ${hoveredId === partner.id ? "grayscale-0" : ""
                                    }`}
                            />
                            <div
                                className={`absolute inset-0 flex flex-col justify-between p-6 text-white transition-all duration-300 ${hoveredId === partner.id ? "bg-black/60 opacity-100" : "bg-black/0 opacity-0 pointer-events-none"
                                    }`}
                            >
                                <div className="flex flex-col gap-3">
                                    <h2 className="font-semibold text-base leading-tight">{partner.name}</h2>
                                    <p className="text-xs font-light">{partner.role}</p>
                                </div>
                                {/* <div className="flex gap-4">
                                    <button className="hover:opacity-80 transition-opacity">
                                        <Phone size={18} />
                                    </button>
                                    <button className="hover:opacity-80 transition-opacity">
                                        <Mail size={18} />
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-3xl mx-auto mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.filter((member: any) => !member.isCoFounder && member.gridGroup === "row5").map((partner: any) => (
                        <div
                            key={partner.id}
                            className="h-80 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
                            onMouseEnter={() => setHoveredId(partner.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <img
                                src={partner.image || "/placeholder.svg"}
                                alt={partner.name}
                                className={`w-full h-full object-cover transition-all duration-300 ${hoveredId === partner.id ? "grayscale-0" : ""
                                    }`}
                            />
                            <div
                                className={`absolute inset-0 flex flex-col justify-between p-6 text-white transition-all duration-300 ${hoveredId === partner.id ? "bg-black/60 opacity-100" : "bg-black/0 opacity-0 pointer-events-none"
                                    }`}
                            >
                                <div className="flex flex-col gap-3">
                                    <h2 className="font-semibold text-base leading-tight">{partner.name}</h2>
                                    <p className="text-xs font-light">{partner.role}</p>
                                </div>
                                {/* <div className="flex gap-4">
                                    <button className="hover:opacity-80 transition-opacity">
                                        <Phone size={18} />
                                    </button>
                                    <button className="hover:opacity-80 transition-opacity">
                                        <Mail size={18} />
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
