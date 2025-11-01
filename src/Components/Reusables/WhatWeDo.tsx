import React from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PolicyIcon from "@mui/icons-material/Policy";
import GroupsIcon from "@mui/icons-material/Groups";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const services = [
  {
    title: "Program Design",
    description:
      "We provide research and program design services to civil society organizations, international organizations, governmental and other non-governmental actors seeking to innovate for peace, security, and prosperity.",
    icon: <BusinessCenterIcon className="text-yellow-500 text-4xl" />,
  },
  {
    title: "Policy Analysis",
    description:
      "We conduct research to inform public policy on utilizing innovation and entrepreneurship to promote peace, security, and prosperity in areas affected by conflict, displacement, and poverty.",
    icon: <PolicyIcon className="text-yellow-500 text-4xl" />,
  },
  {
    title: "Capacity Building",
    description:
      "We provide training and capacity building to civil society organizations, SMEs, and public institutions that serve marginalized and disadvantaged communities.",
    icon: <GroupsIcon className="text-yellow-500 text-4xl" />,
  },
  {
    title: "Entrepreneurship",
    description:
      "We connect entrepreneurs and innovators with resources including funding, education, training, and mentoring opportunities.",
    icon: <LightbulbIcon className="text-yellow-500 text-4xl" />,
  },
];

const WhatWeDo = () => {
  return (
    <div className="zpanel py-16 px-6 md:px-16 lg:px-32 text-center">
      <h2 className="text-3xl md:text-4xl font-bold ">What We Do </h2>
      <p className=" max-w-2xl mx-auto mt-4">
        Empowering communities through research, policy, and entrepreneurship.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 text-left">
        {services.map((service: any, index: number) => (
          <div
            key={index}
            className="zpanel shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center gap-4">
            <RadioButtonUncheckedIcon className="text-yellow-500 text-5xl" />
              <h3 className="text-xl font-semibold ">{service.title}</h3>
            </div>
            <div className="border-b-2 border-yellow-500 w-16 my-3"></div>
          
            <div
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
