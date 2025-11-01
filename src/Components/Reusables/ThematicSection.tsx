
import React from "react";

const content = [
  {
    title: 'Migration',
    text: `Support migrants, refugees and displaced persons’ improved access to protection services, opportunities, and (re)integration in origin, transit and destination locations. `,
   
    image: "/images/thematic1.jpg",
  },

  {
    title: 'Social Inclusion',
    text: `Support better access to resources for vulnerable and marginalized communities and individuals to enable their meaningful participation in social and economic life. Promote innovation and entrepreneurship as catalysts for social inclusion by reducing barriers to inclusion including structural (policy/legal frameworks).`,

    image: "/images/thematic2.jpg"
  },
  {
    title: 'Access to justice',
    text: `Support communities' access to justice through research, rights education, and improving legal aid services through capacity building for organizations serving the communities such as CSOs and legal clinics.`,
 
    image: "/images/thematic3.jpg"
  },
];

const ThematicSection = ({thematicareas}: any) => {
 

  return (
    <div className="space-y-20 px-4 py-16 max-w-6xl mx-auto">
      {thematicareas?.map((item: any, idx: number) => {
        const showTextFirst = idx === 0 || idx === 2;

        return (
          <div
            key={item._id || idx}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            {showTextFirst ? (
              <>
                {/* Text First */}
                <div className="md:w-1/2 space-y-4">
                  <h2 className="text-2xl font-bold ">{item.title}</h2>
                  <div
                    className=""
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
                {item.img_secure_url && (
                  <img
                    src={item.img_secure_url}
                    alt={item.title}
                    className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
                  />
                )}
              </>
            ) : (
              <>
                {/* Image First */}
                {item.img_secure_url && (
                  <img
                    src={item.img_secure_url}
                    alt={item.title}
                    className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
                  />
                )}
                <div className="md:w-1/2 space-y-4">
                  <h2 className="text-2xl font-bold ">{item.title}</h2>
                  <div
                    className=""
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );

  // return (
  //   <div className="space-y-20 px-4 py-16 max-w-6xl mx-auto ">
  //     {content.map((item, idx) => {
  //       const showTextFirst = idx === 0 || idx === 2;

  //       return (
  //         <div
  //           key={idx}
  //           className="flex flex-col md:flex-row items-center gap-10"
  //         >
  //           {showTextFirst ? (
  //             <>
  //               {/* Text First */}
  //               <div className="md:w-1/2 space-y-4">
  //                 <h2 className="text-2xl font-bold ">{item.title}</h2>
  //                 <p className="">{item.text}</p>
                 
  //               </div>
  //               {item.image && (
  //                 <img
  //                   src={item.image}
  //                   alt="Team working"
  //                   className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
  //                 />
  //               )}
  //             </>
  //           ) : (
  //             <>
  //               {/* Image First */}
  //               {item.image && (
  //                 <img
  //                   src={item.image}
  //                   alt="Team working"
  //                   className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
  //                 />
  //               )}
  //               <div className="md:w-1/2 space-y-4">
  //                 <h2 className="text-2xl font-bold ">{item.title}</h2>
  //                 <p className="">{item.text}</p>
                 
  //               </div>
  //             </>
  //           )}
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
};

export default ThematicSection;
