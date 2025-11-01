
// import React, { useEffect, useState } from "react";
// import { isMobile } from "react-device-detect";

// function ServiceComponent() {
//     const [loading, setLoading] = useState(true);
//     const [services, setServices] = useState<any[]>([]);

//     useEffect(() => {
//         setTimeout(() => {
//             setServices(staticServices);
//             setLoading(false);
//         }, 800);
//     }, []);

//     // ---- STATIC DATA ----
//     const staticServices = [
//         {
//             id: 1,
//             title: "HVAC",
//             content: `
//         <h4 class="font-semibold text-lg mt-4 mb-2">Scope of Duct Works:</h4>
//         <ul class="list-disc pl-6 leading-relaxed">
//           <li>Fabrication of GI Duct</li>
//           <li>Installation & Insulation</li>
//           <li>Fixing of Duct</li>
//           <li>Air outlets</li>
//           <li>Machine connection</li>
//           <li>VCD, FD</li>
//           <li>Sound Attenuates</li>
//           <li>Fans</li>
//           <li>Splitter Damper with all accessories</li>
//           <li>Access Door fixing</li>
//         </ul>

//         <h4 class="font-semibold text-lg mt-6 mb-2">Scope of Machine Unit Works:</h4>
//         <ul class="list-disc pl-6 leading-relaxed">
//           <li>Installing of indoor machine</li>
//           <li>Installing of outdoor machine</li>
//           <li>DX Machines works (FCU's)</li>
//           <li>DX Machines works (CU's)</li>
//           <li>Copper Piping</li>
//           <li>Testing commissioning</li>
//         </ul>

//         <h4 class="font-semibold text-lg mt-6 mb-2">Scope of Child Water Pipe Works:</h4>
//         <ul class="list-disc pl-6 leading-relaxed">
//           <li>Chilled Water Pipe installation</li>
//           <li>Supports</li>
//           <li>MI threaded fittings</li>
//           <li>Butt weld fitting with insulation including Canvas cloth vapor barrier, including all fittings, accessories, Valves</li>
//           <li>Testing Commissioning</li>
//         </ul>
//       `,
//             img_secure_url: "/images/ser1.png",
//         },
//         {
//             id: 2,
//             title: "Electrical Work",
//             content: `
//         <ul class="list-disc pl-6 leading-relaxed">
//           <li>LV Panels / Room</li>
//           <li>Bus Bar Risers</li>
//           <li>Cables and Wires</li>
//           <li>Low Current system</li>
//           <li>CCTV System</li>
//           <li>SMTV System - Isolators</li>
//           <li>Wiring Accessories</li>
//           <li>Fire Alarm System</li>
//           <li>Fire Fighting</li>
//           <li>Lighting Control System</li>
//         </ul>
//       `,
//             img_secure_url: "/images/ser2.png",
//         },
//     ];

//     return (
//         <div className="container mx-auto px-6 md:px-16 py-16">
//             <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
//             <p className="text-center text-gray-600 mb-10">
//                 Delivering high-quality MEP and engineering solutions
//             </p>

//             {loading ? (
//                 <div className="flex justify-center py-10">
//                     <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-gray-400"></div>
//                 </div>
//             ) : (
//                 services.map((service, index) => (
//                     <div
//                         key={service.id}
//                         className={`grid md:grid-cols-2 gap-8 items-center mb-20 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
//                             }`}
//                     >
//                         <div className="w-full flex justify-center">
//                             <img
//                                 src={service.img_secure_url}
//                                 alt={service.title}
//                                 className="rounded-2xl shadow-md w-full md:w-[85%] object-cover"
//                             />
//                         </div>

//                         <div>
//                             <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
//                             <div
//                                 className="text-gray-700 text-base leading-relaxed"
//                                 dangerouslySetInnerHTML={{ __html: service.content }}
//                             />
//                         </div>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// }

// export default ServiceComponent;




import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

function ServiceComponentPage() {
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState<any[]>([]);

    useEffect(() => {
        // Simulate API loading delay
        setTimeout(() => {
            setServices(staticServices);
            setLoading(false);
        }, 800);
    }, []);

    // ---- STATIC DATA ----
    const staticServices = [
        {
            id: 1,
            title: "HVAC",
            content: `
        <h4 class="font-semibold text-lg mt-4 mb-2">Scope of Duct Works:</h4>
        <ul class="list-disc pl-6 leading-relaxed">
          <li>Fabrication of GI Duct</li>
          <li>Installation & Insulation</li>
          <li>Fixing of Duct</li>
          <li>Air outlets</li>
          <li>Machine connection</li>
          <li>VCD, FD</li>
          <li>Sound Attenuates</li>
          <li>Fans</li>
          <li>Splitter Damper with all accessories</li>
          <li>Access Door fixing</li>
        </ul>

        <h4 class="font-semibold text-lg mt-6 mb-2">Scope of Machine Unit Works:</h4>
        <ul class="list-disc pl-6 leading-relaxed">
          <li>Installing of indoor machine</li>
          <li>Installing of outdoor machine</li>
          <li>DX Machines works (FCU's)</li>
          <li>DX Machines works (CU's)</li>
          <li>Copper Piping</li>
          <li>Testing commissioning</li>
        </ul>

        <h4 class="font-semibold text-lg mt-6 mb-2">Scope of Child Water Pipe Works:</h4>
        <ul class="list-disc pl-6 leading-relaxed">
          <li>Chilled Water Pipe installation</li>
          <li>Supports</li>
          <li>MI threaded fittings</li>
          <li>Butt weld fitting with insulation including Canvas cloth vapor barrier, including all fittings, accessories, Valves</li>
          <li>Testing Commissioning</li>
        </ul>
      `,
            img_secure_url: "/images/ser1.png",
        },
        {
            id: 2,
            title: "Electrical Work",
            content: `
        <ul class="list-disc pl-6 leading-relaxed">
          <li>LV Panels / Room</li>
          <li>Bus Bar Risers</li>
          <li>Cables and Wires</li>
          <li>Low Current system</li>
          <li>CCTV System</li>
          <li>SMTV System - Isolators</li>
          <li>Wiring Accessories</li>
          <li>Fire Alarm System</li>
          <li>Fire Fighting</li>
          <li>Lighting Control System</li>
          <li>Central Battery System</li>
          <li>Generator Set</li>
          <li>Earthling System</li>
          <li>Lightning Protection</li>
          <li>Cable Tray and Trucking</li>
          <li>Structured Cabling</li>
          <li>Central Battery System</li>
          <li>Aircraft warning Lights</li>
          <li>Lighting Control System</li>
          <li>Earthling System</li>
          <li>Lightning Protection</li>
          <li>Under floor Trucking</li>
        </ul>
      `,
            img_secure_url: "/images/ser2.png",
        },
        {
            id: 3,
            title: "Plumbing",
            content: `
        <p class="leading-relaxed mb-4">
          Our highly skilled plumber’s team is experienced in home and commercial plumbing, 
          with excellent knowledge of kitchen plumbing, bathroom plumbing, and radiator installation.
        </p>

        <h4 class="font-semibold text-lg mt-6 mb-2">Our Services:</h4>
        <ul class="list-disc pl-6 leading-relaxed">
          <li>We provide complete mechanical services for all types of large and small projects.</li>
          <li>Assist and Design-build Mechanical installations</li>
          <li>New and renovations in institutional mechanical installations</li>
          <li>New and renovations to mechanical systems in commercial buildings</li>
          <li>High rise residential heating, ventilation, air conditioning and plumbing</li>
          <li>Light industrial and specialty piping mechanical installation</li>
          <li>Specialty piping systems of med gas, pure water, radioactive waste, process, etc.</li>
          <li>Mechanical service and preventative maintenance</li>
        </ul>
      `,
            img_secure_url: "/images/ser3.png",
        },
        {
            id: 4,
            title: "Fire Fighting",
            content: `Brand Engineering offers total solution in Fire Detection, Fire Alarm and Fire Extinguishing System for the protection of entire range of Industries and Applications such as – power plant, office building, residential buildings and factory sheds, etc.

One of our main functions is Design, Supply and Installation of Fire Fighting System. We provide total fire-fighting solution in most prestigious developments around Ethiopia.

We are well managed by a team of qualified and experienced fire officers, engineers, skilled technicians and mechanics ready to take on any job of whatsoever nature and volume.

Quality Management System and the organization endeavors to continually and effectively improve the Quality of Service to meet our Client’s requirements in accordance to the international standards like BSI, UL, FM and NFPA, Local Ethiopian Standards.

It is our honor to supply services for the last five years to a number of prestigious Clients.`,
            img_secure_url: "/images/ser4.png", 
        },
        {
            id: 5,
            title: "Infrastructure",
            content: ` <p> Providing technical support for all phases of system planning and design through deployment to ensure that solutions enable their internal and external users to meet their mission, goals, and objectives. These efforts include the full range of infrastructure engineering design, enterprise architecture standards, prototyping, integration, including, but not limited to, concept development, planning, requirements definition and analysis, systems design, integration, and deployment.

Successful development is largely dependent upon the collective efforts of a staff of diverse technical specialists able to respond quickly to the many variables and conditions that accompany a design and deployment effort of this proportion. There is a need for specialized areas of expertise especially in rapidly changing or evolving technologies. It is neither practical nor cost-effective, however, to fully staff all of these specialties in-house on a permanent, long-term basis because the need may be intermittent and short-term.

Infrastructure

Providing secure design and implementation of changes to the infrastructure, as well as, research, technical and systems engineering advice, support in the development of advanced technologies for information dissemination and exchange, and support of information technology security.</p>


<h2>Design</h2>
<p>Advising and assist in the design of systems that support emerging enterprise architectures for areas such as IT infrastructure, security, networks, application integration, application architecture, data architecture and distributed computing.</p>`,
            img_secure_url: "/images/ser5.jpg",
        },
    ];

    return (
        <div className="container mx-auto px-6 md:px-16 py-16 ">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
                Our Services
            </h2>
            <p className="text-center text-gray-600 mb-10">
                Delivering high-quality MEP and engineering solutions
            </p>

            {loading ? (
                <div className="flex justify-center py-10">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-gray-400"></div>
                </div>
            ) : (
                staticServices.map((service, index) => (
                    <div
                        key={service.id}
                        className={`grid md:grid-cols-2 gap-10 items-center mb-20 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Image on left for even index, right for odd index */}
                        <div
                            className={`${index % 2 !== 0 && !isMobile ? "md:order-2" : "md:order-1"
                                } flex justify-center`}
                        >
                            <img
                                src={service.img_secure_url}
                                alt={service.title}
                                className="rounded-2xl shadow-md w-full md:w-[85%] object-cover"
                            />
                        </div>

                        {/* Text on right for even index, left for odd index */}
                        <div
                            className={`${index % 2 !== 0 && !isMobile ? "md:order-1" : "md:order-2"
                                }`}
                        >
                            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                            <div
                                className="text-gray-700 text-base leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: service.content }}
                            />
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default ServiceComponentPage;
