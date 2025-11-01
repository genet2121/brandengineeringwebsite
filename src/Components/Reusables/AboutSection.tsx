import { ArrowUpRight } from "lucide-react"
import React, { useContext, useEffect } from "react"
import AnimationContext from "../../Contexts/AnimationContext";

export default function AboutSection() {

  const { getScrollState, setScrollAction } = useContext(AnimationContext);
  useEffect(() => {
    setScrollAction(300, "about_title", () => { });
    setScrollAction(360, "about_content_text", () => { });
    setScrollAction(700, "about_image", () => { });
  }, []);

  return (
    <div className="w-full sm:w-full  md:w-3/4 lg:w-3/4 xl:w-3/4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 sm:ml-0 md:ml-44 lg:ml-44 xl:ml-44">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-8 lg:mb-12">
              <div className="w-2 h-2 bg-blue-950 rounded-full"></div>
              <h2 className="text-gray-700 font-medium text-sm sm:text-base">About Us</h2>
            </div>

            <div className="mt-8 lg:mt-16">
              <h3 className="text-blue-950 text-xs sm:text-sm font-semibold mb-3 md:mb-4">CORE VALUES:</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Excellence, Integrity, Teamwork, Innovation, Dedication.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-between">
          {/* Header Section */}
          <div>
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-950 mb-6 md:mb-8 leading-tight ${getScrollState("about_title") ? "home_slide_up" : "home_move_down"}`} style={{fontWeight: 500}}>
              Building a Sustainable Future Through Engineering Excellence
            </h1>

            <p className={`text-gray-600 text-sm sm:text-base leading-relaxed mb-6 md:mb-8 max-w-2xl ${getScrollState("about_content_text") ? "home_slide_left" : "home_move_right"}`}>
              Brand Engineering PLC is a multidisciplinary engineering and construction company dedicated to delivering innovative, reliable, and sustainable solutions across diverse sectors. Since our establishment, we have been at the forefront of engineering excellence — designing, building, and managing projects that shape the future of infrastructure and industry.
            </p>

            <a
              href="/about_us"
              className="inline-flex items-center gap-2 text-blue-900 font-semibold border-b-2 border-blue-900 pb-2 hover:opacity-70 transition-opacity text-sm sm:text-base"
            >
              Discover more about us
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Images Section */}

        </div>

      </div>
      <div className="my-8 md:my-12 lg:mt-16">
        <div className="rounded-2xl overflow-hidden bg-gray-200">
          <img src="/images/ab.webp" alt="Office building 1" className={`w-full h-full object-cover ${getScrollState("about_image") ? "home_zoom_out" : "home_z_in"}`} />
        </div>
      </div>
    </div>
  )
}


// import React from 'react';


// const AboutSection = ({about}:any) => {
//   return (
//     <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
//     {/* Left Text Section */}
//     <div>
//       <div className="h-1 w-10 bg-[#002c5f] mb-6 rounded"></div>
//       <h2 className="text-3xl font-bold leading-snug mb-4 " >
//       About us
//       </h2>

      
//       {/* <p className="text-gray-600 mb-6">
//             CIPSP fosters innovation and entrepreneurship to build a peaceful, secure, and prosperous world, supporting communities 
//             through research, training, and capacity building.
//             </p>

//             <p className="text-gray-600 mb-6">
//             We empower individuals, CSOs, SMEs, and NGOs by providing resources, funding, and mentorship for lasting impact.
//             </p> */}
//         <div
//                    className="text-gray-600 mb-6"
//                     dangerouslySetInnerHTML={{ __html: about?.description }}
//                   />
             

//       <a href="/about_us" className="text-purple-950 font-medium flex items-center gap-2 hover:underline">
//       More <span className="ml-1">&#8594;</span>
//       </a>

//       <div className="h-1 w-10 bg-[#002c5f] mt-10 rounded"></div>
//     </div>

//     {/* Right Image Section */}
//     <div className="w-full  ">
//       <img
//         src="/images/aboutanimate.svg"
//         alt="Team working"
//         className="w-full max-w-xl"
//       />
//     </div>
//   </section>
//   );
// };

// export default AboutSection;
