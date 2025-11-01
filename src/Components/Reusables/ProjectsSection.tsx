import React, { useContext, useEffect } from "react"
import { ArrowUpRight, MapPin, Calendar } from "lucide-react"
import { useNavigate } from "react-router-dom"
import AnimationContext from "../../Contexts/AnimationContext";

export default function ProjectsSection() {

  const { getScrollState, setScrollAction } = useContext(AnimationContext);
  const navigate = useNavigate();

  useEffect(() => {

    setScrollAction(3500, "project_title", () => { });
    setScrollAction(2800, "project_0", () => { });
    setScrollAction(2800, "project_1", () => { });
    setScrollAction(2800, "project_2", () => { });
    setScrollAction(2800, "project_3", () => { });

  }, []);

  const projects = [
    {
      title: "Ambassador Mall",
      category: "Construction",
      location: "Addis Ababa",
      year: "2024",
      description: "A comprehensive brand engineering project focused on developing a strong, cohesive identity for Ambassador Mall. The work includes brand strategy, visual identity design, signage, and environmental branding to create an engaging and modern shopping experience that reflects the mall’s premium positioning and community appeal",
      image: "/images/projects/AmbassadorMall/3.png",
      status: "Completed"
    },
    {
      title: "Defense Hosing Apartment",
      category: "Construction",
      location: "Hawassa",
      year: "2023",
      description: "A brand engineering project dedicated to crafting a refined and trustworthy identity for the Defense Housing Apartment. The work focuses on creating a cohesive brand presence through strategic design, architectural branding, and visual communication that highlights security, comfort, and modern living standards.",
      image: "/images/projects/defense/1.jpg",
      status: "Completed"
    },
    {
      title: "Deloitte Ethiopia",
      category: "Construction",
      location: "Mekelle",
      year: "2024",
      description: "A corporate brand engineering project aimed at reinforcing Deloitte Ethiopia’s professional image through strategic design and brand alignment. The project focuses on creating a modern, consistent, and impactful brand environment that reflects the firm’s values of excellence, integrity, and innovation in the Ethiopian market.",
      image: "/images/projects/deloitte/27.png",
      status: "Completed"
    },
    {
      title: "Dema Hope realestate",
      category: "Construction",
      location: "Bahir Dar",
      year: "2023",
      description: "A brand engineering project focused on building a strong and trustworthy identity for Dema Hope Real Estate. The work emphasizes modern design, clear communication, and a cohesive visual presence that reflects the company’s commitment to quality, innovation, and helping clients find their dream homes with confidence.",
      image: "/images/projects/dema/6.jpg",
      status: "Completed"
    },
  ]

  return (
    <section className="w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-12 md:py-16 sm:ml-0 md:ml-20 lg:ml-40 xl:ml-52">
      <div className="mb-8 md:mb-12">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 md:gap-6">
          <div>
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-light text-blue-950 mb-3 md:mb-4 ${getScrollState("project_title") ? "home_slide_up" : "home_slide_down"}`} style={{ fontWeight: 500 }}>
              Our Projects
            </h1>
            <p className={`text-gray-600 text-sm sm:text-base max-w-2xl ${getScrollState("project_title") ? "home_slide_up" : "home_slide_down"}`} style={{ animationDelay: "0.1s" }}>
              Explore our portfolio of landmark projects that showcase our commitment to engineering excellence and sustainable development.
            </p>
          </div>

          <a
            href="/projects"
            className={`inline-flex items-center gap-2 text-blue-900 font-semibold border-b-2 border-blue-900 pb-2 hover:opacity-70 transition-opacity text-sm sm:text-base ${getScrollState("project_title") ? "home_slide_up" : "home_slide_down"}`}
            style={{ animationDelay: "0.15s" }}
          >
            View all projects
            <ArrowUpRight size={18} />
          </a>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300 ${getScrollState(`project_${index}`) ? "home_slide_up" : "home_slide_down"}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === "Completed"
                  ? "bg-green-100 text-green-800"
                  : "bg-blue-100 text-blue-800"
                  }`}>
                  {project.status}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            </div>

            <div className="p-6">
              {/* <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <span className="px-2 py-1 bg-blue-50 text-blue-900 rounded font-semibold">
                  {project.category}
                </span>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{project.year}</span>
                </div>
              </div> */}

              <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-blue-700 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <button
                onClick={() => navigate(`/project/${index}`)}
                className="inline-flex items-center gap-2 text-blue-900 font-semibold text-sm hover:gap-3 transition-all duration-300 bg-transparent border-0 cursor-pointer"
              >
                View project details
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
