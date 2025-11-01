import React from "react"
import { Navigate, useNavigate } from "react-router-dom"


export default function TeamSection({ isHome }: any) {
  const navigate = useNavigate()
  const teamMembers = [
    {
      name: "Sisay Baynesagne",
      role: "Managing partner and Co-founder",
      image: "/images/employees/sisay.png",
      isCoFounder: true,
      gridGroup: 'row1' // 2 columns
    },
    {
      name: "Haymanot Baynesagne",
      role: "General Manager and Co-founder",
      image: "/images/employees/haymanot.png",
      isCoFounder: true,
      gridGroup: 'row1' // 2 columns
    },
    {
      name: " Nuhamin Zablon ",
      role: "Senior Project Coordinator`",
      image: "/images/employees/nuhamin.png",
      isCoFounder: false,
      gridGroup: 'row2' // 3 columns
    },
    {
      name: " Feker B. ",
      role: "Senior Project Coordinator`",
      image: "/images/employees/feker.png",
      isCoFounder: false,
      gridGroup: 'row2' // 3 columns
    },
    {
      name: " Kelab Teshome ",
      role: "Senior Project Coordinator`",
      image: "/images/employees/kelabt.png",
      isCoFounder: false,
      gridGroup: 'row2' // 3 columns
    },
    {
      name: " Eyob Birhanu ",
      role: "Senior Electromechanical technician`",
      image: "/images/employees/eyob.png",
      isCoFounder: false,
      gridGroup: 'row3' // 4 columns
    },
    {
      name: " Fitsum Seyfu ",
      role: "Senior Electromechanical technician`",
      image: "/images/employees/fitsum.png",
      isCoFounder: false,
      gridGroup: 'row3' // 4 columns
    },
    {
      name: " Tilahun Lakew ",
      role: "Senior Electromechanical technician`",
      image: "/images/employees/tilahun.png",
      isCoFounder: false,
      gridGroup: 'row3' // 4 columns
    },
    {
      name: " Ermiyas Dereje ",
      role: "Senior Fire and plumber technician`",
      image: "/images/employees/ermiyas.png",
      isCoFounder: false,
      gridGroup: 'row3' // 4 columns
    },
    {
      name: " Ermiyas Gebeyehu ",
      role: "Senior Fire and plumber technician`",
      image: "/images/employees/ermiyasg.png",
      isCoFounder: false,
      gridGroup: 'row4' // 4 columns
    },
    {
      name: " Yimenu Weldemichael ",
      role: "Senior Fire and plumber technician`",
      image: "/images/employees/yimen.png",
      isCoFounder: false,
      gridGroup: 'row4' // 4 columns
    },
    {
      name: "Kalab Teshome",
      role: "Senior Electromechanic",
      image: "/images/employees/kalab.png",
      isCoFounder: false,
      gridGroup: 'row4' // 4 columns
    },
    {
      name: "Matiwos Sisay ",
      role: "Senior Electromechanic",
      image: "/images/employees/matiwos.png",
      isCoFounder: false,
      gridGroup: 'row4' // 4 columns
    },


    {
      name: " Martha Worku ",
      role: "Junior Mechanical ",
      image: "/images/employees/martha.png",
      isCoFounder: false,
      gridGroup: 'row5' // 3 columns
    },


    {
      name: " Eleni Haylemeskel ",
      role: "Junior Electrical",
      image: "/images/employees/eleni.png",
      isCoFounder: false,
      gridGroup: 'row5' // 3 columns
    },
    {
      name: " Heaven Michael ",
      role: "Junior Mechanical",
      image: "/images/employees/heaven.png",
      isCoFounder: false,
      gridGroup: 'row5' // 3 columns
    },

  ]

  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-8 lg:px-16 overflow-hidden" style={{
      backgroundColor: isHome ? '#1D1D1D' : 'white'
    }}>
      {/* Decorative Background Elements */}
      {isHome ? (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </>
      ) : (
        <>
          {/* Modern decorative elements for non-home page */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'color-mix(in srgb, var(--button_bg) 10%, transparent)' }}></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-50 rounded-full blur-2xl"></div>

          {/* Decorative shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-200 rounded-lg rotate-12 opacity-20"></div>
          <div className="absolute bottom-32 right-20 w-16 h-16 border-2 rounded-full opacity-20" style={{ borderColor: 'var(--button_bg)' }}></div>
        </>
      )}

      <div className="relative z-10 container mx-auto max-w-5xl">
        {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"> */}
        {/* Left Side - Title Section */}
        {/* <div className={`lg:col-span-4 ${!isHome ? 'lg:sticky lg:top-24 lg:self-start' : ''}`}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--button_bg)' }}></div>
              <span className="text-sm font-medium tracking-wider uppercase" style={{ color: 'var(--button_bg)' }}>Team</span>
            </div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${isHome ? 'text-white' : 'text-blue-950'}`}>
              Management
            </h2>
            <p className={`text-base md:text-lg leading-relaxed ${isHome ? 'text-gray-300' : 'text-gray-600'}`}>
              Brand Engineering is led by a strong and highly experienced Management and Investment Team
            </p>
           
          </div> */}

        {/* Right Side - Team Grid */}
        <div className="lg:col-span-8 space-y-12">
          {/* Row 1: Co-Founders - 2 columns */}
          {(!isHome || teamMembers.filter(m => m.gridGroup === 'row1').length > 0) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 ">
              {teamMembers.filter(member => member.gridGroup === 'row1').map((member, index) => (
                <div
                  key={index}
                  className={`group relative ${!isHome ? 'hover:scale-[1.02] transition-transform duration-300' : ''}`}
                >
                  {/* Card Container with Gradient Border Effect */}
                  <div className={`relative rounded-2xl mx-auto  overflow-hidden ${!isHome ? 'shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-gray-100' : ''}`}
                  style={{maxWidth: "350px", }}>
                    <div className="relative rounded-2xl overflow-hidden">
                      {/* Image */}
                      <div className="relative overflow-hidden" style={{ height: "28rem" }}>
                        <div className="absolute bg-transparent h-full w-full team_cover z-30"></div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover bg-black absolute team_image"
                        />
                        {/* BACK SIDE -> NAME & ROLE */}
                        <div
                          className="absolute inset-0 flex flex-col items-center justify-end text-black team_info p-10"
                          style={{
                            background: "linear-gradient(to top, rgba(255,210,0,0.95), rgba(255,200,0,0.75), transparent)"
                          }}
                        >
                          <h3 className="text-xl font-bold">{member.name}</h3>
                          <p className="text-sm opacity-90">{member.role}</p>
                        </div>


                        {/* <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white team_info">
                          <h3 className="text-xl font-bold">{member.name}</h3>
                          <p className="text-sm opacity-70">{member.role}</p>
                        </div> */}
                        {/* Gradient Overlay for non-home page */}
                        {!isHome && (
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={`relative mt-6 ${isHome ? 'text-white' : 'text-blue-950'}`}>
                    <h3 className={`text-xl md:text-2xl font-bold mb-1 ${!isHome ? 'group-hover:text-blue-700 transition-colors' : ''}`}>
                      {member.name}
                    </h3>
                    <p className="text-sm md:text-base font-light" style={{ color: 'gray' }}>
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          

          {/* Row 2: Senior Project Coordinators - 3 columns */}
          {!isHome && teamMembers.filter(m => m.gridGroup === 'row2').length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {teamMembers.filter(member => member.gridGroup === 'row2').map((member, index) => (
                <div
                  key={index}
                  className={`group relative ${!isHome ? 'hover:scale-[1.02] transition-transform duration-300' : ''}`}
                >
                  {/* Card Container with Gradient Border Effect */}
                  <div className={`relative rounded-2xl overflow-hidden ${!isHome ? 'shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-gray-100' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden">
                      {/* Image */}
                      <div className="relative overflow-hidden" style={{ height: "28rem" }}>
                        <div className="absolute bg-transparent h-full w-full team_cover z-30"></div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover bg-black absolute team_image"
                        />
                        <div
                          className="absolute inset-0 flex flex-col items-center justify-end text-black team_info p-10"
                          style={{
                            background: "linear-gradient(to top, rgba(255,210,0,0.95), rgba(255,200,0,0.75), transparent)"
                          }}
                        >
                          <h3 className="text-xl font-bold">{member.name}</h3>
                          <p className="text-sm opacity-90">{member.role}</p>
                        </div>
                        {/* Gradient Overlay for non-home page */}
                        {!isHome && (
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={`relative mt-6 ${isHome ? 'text-white' : 'text-blue-950'}`}>
                    <h3 className={`text-xl md:text-2xl font-bold mb-1 ${!isHome ? 'group-hover:text-blue-700 transition-colors' : ''}`}>
                      {member.name}
                    </h3>
                    <p className="text-sm md:text-base font-light" style={{ color: 'gray' }}>
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Row 3: Senior Electromechanics - 4 columns */}
          {!isHome && teamMembers.filter(m => m.gridGroup === 'row3').length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 md:gap-8">
              {teamMembers.filter(member => member.gridGroup === 'row3').map((member, index) => (
                <div
                  key={index}
                  className={`group relative ${!isHome ? 'hover:scale-[1.02] transition-transform duration-300' : ''}`}
                >
                  {/* Card Container with Gradient Border Effect */}
                  <div className={`relative rounded-2xl overflow-hidden ${!isHome ? 'shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-gray-100' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden">
                      {/* Image */}
                      <div className="relative overflow-hidden" style={{ height: "28rem" }}>
                        <div className="absolute bg-transparent h-full w-full team_cover z-30"></div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover bg-black absolute team_image"
                        />
                        <div
                          className="absolute inset-0 flex flex-col items-center justify-end text-black team_info p-10"
                          style={{
                            background: "linear-gradient(to top, rgba(255,210,0,0.95), rgba(255,200,0,0.75), transparent)"
                          }}
                        >
                          <h3 className="text-xl font-bold">{member.name}</h3>
                          <p className="text-sm opacity-90">{member.role}</p>
                        </div>
                        {/* Gradient Overlay for non-home page */}
                        {!isHome && (
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={`relative mt-6 ${isHome ? 'text-white' : 'text-blue-950'}`}>
                    <h3 className={`text-xl md:text-2xl font-bold mb-1 ${!isHome ? 'group-hover:text-blue-700 transition-colors' : ''}`}>
                      {member.name}
                    </h3>
                    <p className="text-sm md:text-base font-light" style={{ color: 'gray' }}>
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Row 4: Senior Fire and Plumber - 4 columns */}
          {!isHome && teamMembers.filter(m => m.gridGroup === 'row4').length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 md:gap-8">
              {teamMembers.filter(member => member.gridGroup === 'row4').map((member, index) => (
                <div
                  key={index}
                  className={`group relative ${!isHome ? 'hover:scale-[1.02] transition-transform duration-300' : ''}`}
                >
                  {/* Card Container with Gradient Border Effect */}
                  <div className={`relative rounded-2xl overflow-hidden ${!isHome ? 'shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-gray-100' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden">
                      {/* Image */}
                      <div className="relative overflow-hidden" style={{ height: "28rem" }}>
                        <div className="absolute bg-transparent h-full w-full team_cover z-30"></div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover bg-black absolute team_image"
                        />
                        <div
                          className="absolute inset-0 flex flex-col items-center justify-end text-black team_info p-10"
                          style={{
                            background: "linear-gradient(to top, rgba(255,210,0,0.95), rgba(255,200,0,0.75), transparent)"
                          }}
                        >
                          <h3 className="text-xl font-bold">{member.name}</h3>
                          <p className="text-sm opacity-90">{member.role}</p>
                        </div>
                        {/* Gradient Overlay for non-home page */}
                        {!isHome && (
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={`relative mt-6 ${isHome ? 'text-white' : 'text-blue-950'}`}>
                    <h3 className={`text-xl md:text-2xl font-bold mb-1 ${!isHome ? 'group-hover:text-blue-700 transition-colors' : ''}`}>
                      {member.name}
                    </h3>
                    <p className="text-sm md:text-base font-light" style={{ color: 'gray' }}>
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Row 5: Junior Staff - 3 columns */}
          {!isHome && teamMembers.filter(m => m.gridGroup === 'row5').length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {teamMembers.filter(member => member.gridGroup === 'row5').map((member, index) => (
                <div
                  key={index}
                  className={`group relative ${!isHome ? 'hover:scale-[1.02] transition-transform duration-300' : ''}`}
                >
                  {/* Card Container with Gradient Border Effect */}
                  <div className={`relative rounded-2xl overflow-hidden ${!isHome ? 'shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-gray-100' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden">
                      {/* Image */}
                      <div className="relative overflow-hidden" style={{ height: "32rem" }}>
                        <div className="absolute bg-transparent h-full w-full team_cover z-30"></div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover bg-black absolute team_image"
                        />
                        <div
                          className="absolute inset-0 flex flex-col items-center justify-end text-black team_info p-10"
                          style={{
                            background: "linear-gradient(to top, rgba(255,210,0,0.95), rgba(255,200,0,0.75), transparent)"
                          }}
                        >
                          <h3 className="text-xl font-bold">{member.name}</h3>
                          <p className="text-sm opacity-90">{member.role}</p>
                        </div>
                        {/* Gradient Overlay for non-home page */}
                        {!isHome && (
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={`relative mt-6 ${isHome ? 'text-white' : 'text-blue-950'}`}>
                    <h3 className={`text-xl md:text-2xl font-bold mb-1 ${!isHome ? 'group-hover:text-blue-700 transition-colors' : ''}`}>
                      {member.name}
                    </h3>
                    <p className="text-sm md:text-base font-light" style={{ color: 'gray' }}>
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* </div> */}
      </div>
    </section>
  )
}
