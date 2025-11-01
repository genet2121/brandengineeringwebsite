// import React from "react";

import React from "react";

// const teamMembers = [
//     {
//       name: "Dr. Hanna Haile Esq.",
//       role: "Partnership",
//       description:
//         "Hanna is a lawyer and a gender specialist. Her expertise and research interests lie in the fields of human rights, sustainability, climate change and migration, gender and disaster risk management.",
//       image: "/images/hanna.jpg",
//     },
//     {
//       name: "Helen Fisseha",
//       role: "Product manager",
//       description:
//         "Helen Fisseha is a legal professional with over 10 years of experience and currently working as product manager at CIPSP. She is a graduate of the University of Asmara, where she studied law.",
//       image: "/images/helen.jpg",
//     },
//   ];
  
//   const TeamSection = () => {
//     return (
//       <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
//             Meet Our Team
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             {teamMembers.map((member, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 text-center relative"
//               >
//                 <div className="flex justify-center">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md -mt-20 mb-4"
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   {member.name}
//                 </h3>
//                 <p className="text-indigo-500 font-medium mb-3">{member.role}</p>
//                 <p className="text-gray-600 text-sm">{member.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default TeamSection;
  

const teams = [
    {
      name: "Isaias Tesfalidet",
      role: "President",
      shortDescription: "BSc. Civil Engineering – Expertise in infrastructure planning and structural analysis.",
      image: "/images/Isaias.jpg",
    },
    {
      name: "Ruta Hadgu Esq.",
      role: "Director of Operations",
      shortDescription: "BSc. Electronic Engineering – Specializing in system automation and circuit design.",
      image: "/images/ruta.jpg",
    },
    {
      name: "Allo Tedla",
      role: "Regional Analyst",
      shortDescription: "BSc. Electrical Engineering – Focused on power systems and energy efficiency.",
      image: "/images/allo.jpg",
    },
    {
      name: "Dr. Hanna Haile Esq.",
      role: "Partnership",
      shortDescription: "BSc. Chemical Engineering – Skilled in process engineering and material sciences.",
      image: "/images/hanna.jpg",
    },
    {
      name: "Helen Fisseha",
      role: "Product Manager",
      shortDescription: "BSc. Chemical Engineering – Experienced in product development and industrial chemistry.",
      image: "/images/helen.jpg",
    },
  ];
  
  const TeamSection = ({teams}: any) => {
    console.log('teams', teams);
    
    return (
      <section className="py-16 px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {teams.map((member: any, index: number) => (
            <div key={index} className="space-y-3">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-white shadow-md"
              />
              <h3 className="text-lg font-bold ">{member.name}</h3>
              <p className="uppercase text-sm font-semibold ">{member.role}</p>
              {/* <p className="text-gray-600 text-sm">{member.description}</p> */}
              <div
                    className="text-gray-600 text-sm"
                    dangerouslySetInnerHTML={{ __html: member.shortDescription }}
                  />
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TeamSection;
  
  