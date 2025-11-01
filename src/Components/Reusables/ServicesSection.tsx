import React, { useContext, useEffect } from "react"
import { Building2, Zap, Wrench, Factory, ArrowUpRight } from "lucide-react"
import AnimationContext from "../../Contexts/AnimationContext";

export default function ServicesSection() {

  const { getScrollState, setScrollAction } = useContext(AnimationContext);
  useEffect(() => {
    setScrollAction(1700, "line_animation", () => { });
    setScrollAction(1700, "service_main_title", () => { });
    setScrollAction(1800, "service_title_0", () => { });
    setScrollAction(1800, "service_title_1", () => { });
    setScrollAction(2000, "service_title_2", () => { });
    setScrollAction(2000, "service_title_3", () => { });
  }, []);

  const services = [
    {
      icon: <Building2 size={32} />,
      title: "Infrastructure Development",
      description: "Comprehensive infrastructure solutions including roads, bridges, and urban development projects that connect communities and drive economic growth."
    },
    {
      icon: <Zap size={32} />,
      title: "Energy Solutions",
      description: "Sustainable energy systems and power infrastructure designed to meet growing demands while minimizing environmental impact."
    },
    {
      icon: <Wrench size={32} />,
      title: "Industrial Engineering",
      description: "Advanced industrial solutions from plant design to process optimization, ensuring efficiency and reliability in manufacturing operations."
    },
    {
      icon: <Factory size={32} />,
      title: "Construction Management",
      description: "End-to-end project management services delivering complex construction projects on time, within budget, and to the highest quality standards."
    }
  ]

  return (
    <section className="w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-12 md:py-16 sm:ml-0 md:ml-20 lg:ml-40 xl:ml-52" style={{ position: "relative" }}>
      <div className="hidden lg:flex justify-end p-0" style={{ position: "absolute", right: 0, top: 0, width: "640px", transform: "translateX(350px)", overflow: "hidden", backgroundColor: "transparent" }}>
        <div className={`flex justify-end p-0 relative ${getScrollState("line_animation") ? "home_widen" : "home_narrow"} `} style={{ width: "50%", overflow: "hidden" }} >
          <img className="relative" src="/images/blue_line.png" alt="blue_line" style={{ minWidth: "640px" }} />
        </div>
      </div>
      <div className="mb-8 md:mb-12">
        {/* <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-blue-950 rounded-full"></div>
          <h2 className="text-gray-700 font-medium">Our Services</h2>
        </div> */}
        <h1 className={`text-3xl sm:text-4xl lg:text-5xl text-blue-950 mb-4 ${getScrollState("service_main_title") ? "home_slide_up" : "home_move_down"}`} style={{ fontWeight: 500 }}>
          Our Services
        </h1>
        {/* <p className="text-gray-600 text-base max-w-2xl">
          From concept to completion, we deliver comprehensive engineering services across multiple disciplines, backed by decades of expertise and innovation.
        </p> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-transparent p-4 sm:p-6 md:p-8"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start mb-4 gap-3 sm:gap-4">
              <div className={`text-blue-900 p-3 rounded-2xl bg-gray-200 ${getScrollState(`service_title_${index}`) ? "home_slide_up" : "home_move_down"}`} >
                {service.icon}
              </div>
              <h3 className={`text-xl sm:text-2xl md:text-3xl font-light text-blue-950 ${getScrollState(`service_title_${index}`) ? "home_slide_up" : "home_move_down"}`} > {/* style={{ animationDelay: `${index * 0.1 + 0.05}s` }} style={{ animationDelay: `${index * 0.1 + 0.1}s` }} */}
                {service.title}
              </h3>
            </div>
            <p className={`text-gray-600 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-4 ${getScrollState(`service_title_${index}`) ? "home_slide_up" : "home_move_down"}`} >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
