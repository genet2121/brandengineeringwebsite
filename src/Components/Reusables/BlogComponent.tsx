// import React from "react";
// import { useNavigate } from "react-router-dom";
// interface blogProps {
//     title: string;
//     subtitle: string;
//     image: string;
//     id: string;
//     author: String
// }
// function BlogComponent({ title, subtitle, image, id, author }: blogProps) {

//     const navigate = useNavigate();

//     return (
//         <div className="card w-80  rounded-2 zpanel border-1  mb-4 " onClick={() => { navigate(`/blog/${id}`) }} style={{ overflow: "hidden" }}>
//             <img src={image} alt="Blog" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
//             <div className="card-body">
//                 <h5 className="card-title mb-0 text-sm font-bold" style={{ color: "var(--text_color)" }}>{title}</h5>
//                 <span className="card-subtitle mb-3" style={{ color: "var(--text_color)" }}>{author}</span>
//                 <div dangerouslySetInnerHTML={{ __html: subtitle }} className="w-100 text-sm" style={{ height: "65px", overflow: "hidden", }} />
//                 {/* <p style={{color: "var(--text_color)", fontSize: '14px'}}>
//                     {subtitle}
//                 </p> */}
//                 <div className="d-flex justify-content-center mt-3 mb-2">
//                     <button
//                         className="btn-see-more bg-gradient-to-r from-[#0072ff] via-[rgb(0,44,95)] to-[#00c6ff] text-white"
//                         style={{
                          
                        
//                             border: "none",
//                             padding: "10px 20px",
//                             borderRadius: "50px",
//                             boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
//                             transition: "transform 0.3s, box-shadow 0.3s",
//                             cursor: "pointer"
//                         }}
//                         onMouseEnter={(e) => {
//                             e.currentTarget.style.transform = "scale(1.05)";
//                             e.currentTarget.style.boxShadow = "0px 6px 14px rgba(0, 0, 0, 0.25)";
//                         }}
//                         onMouseLeave={(e) => {
//                             e.currentTarget.style.transform = "scale(1)";
//                             e.currentTarget.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.2)";
//                         }}
//                     >
//                         See More
//                     </button>
//                 </div>

//             </div>
//         </div>
//     );
// }
// export default BlogComponent;

import React from "react";
import { useNavigate } from "react-router-dom";

interface BlogProps {
  title: string;
  subtitle: string;
  image: string;
  id: string;
  author: string;
}

const BlogComponent: React.FC<BlogProps> = ({ title, subtitle, image, id, author }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-80 rounded-2xl  transition-transform transform hover:scale-105 bg-white overflow-hidden " style={{border: "1px #ADB1B6FF solid"}}
      onClick={() => navigate(`/blog/${id}`)}
    >
      {/* Blog Image */}
      <div className="relative h-[200px] w-full overflow-hidden">
        <img
          src={image}
          alt="Blog"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Blog Content */}
      <div className="p-4">
        <h5 className="text-lg font-bold text-gray-800">{title}</h5>
        <p className="text-sm text-gray-500 mb-2">By {author}</p>
        
        {/* Subtitle (with ellipsis for long text) */}
        <div
          className="text-gray-600 text-sm overflow-hidden"
          style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />

        {/* Read More Button */}
        <div className="flex justify-center mt-4">
          <button
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full 
            shadow-md transition-all transform hover:scale-105 hover:shadow-lg"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
