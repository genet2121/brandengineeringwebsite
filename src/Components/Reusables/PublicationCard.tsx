import React from "react";
import { useNavigate } from "react-router-dom";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import Utils from "../../Models/Utils";

interface PublicationProps {
  title: string;
  author: string;
  publication_date: string;
  img_secure_url: string;
  _id: string;
  description: string;
  publication_link: string;
}

const PublicationCard: React.FC<PublicationProps> = ({ title, author, publication_date, img_secure_url, _id, description, publication_link }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white zpanel rounded-xl border hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col md:flex-row">
    {/* Image Section */}
    <img
      src={img_secure_url}
      alt={title}
      className="w-full md:w-48 h-48 mt-7 ml-6 object-cover"
    />

    {/* Text Content */}
    <div className="p-5 flex flex-col  justify-center">
      <div>
        <h3 className="text-xl font-semibold  mb-2">{title}</h3>
     
        <div
                    className="text-sm  mb-4"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
      </div>

      {/* Meta Info */}
      <div className="flex items-center justify-between text-gray-500 text-sm">
        <span className="flex items-center gap-1">
          <PersonIcon style={{ fontSize: 18 }} />
          {author}
        </span>
        <span className="flex items-center gap-1">
          <CalendarTodayIcon style={{ fontSize: 18 }} />
          {Utils.convertISOToDate(publication_date)}
        </span>
      </div>
      <button className="btn mt-1 text-blue-900 w-25"  onClick={() => window.open(publication_link, "_blank")}>Learn More</button>
    </div>
  </div>
  );
};

export default PublicationCard;
