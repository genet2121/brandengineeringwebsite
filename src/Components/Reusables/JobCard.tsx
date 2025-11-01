
import Avatar from "@mui/material/Avatar";
import React from "react";
import { useNavigate } from "react-router-dom";

function JobCard({ job }: { job: any }) {
    const navigate = useNavigate();
    const description =  (job.description && job.description.length > 100)  
        ? job.description.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 200) 
        : (job.description ?? "");
    const ellipsis = (job.description && job.description.length > 100) ? "..." : "";

    return (
        <div 
            className="card w-100 shadow-sm rounded-2 zpanel" 
            onClick={() => navigate(`/job/${job._id}`)} 
            style={{ overflow: "hidden", display: "flex", flexDirection: "column", minHeight: "300px" }}
        >
            <div className="card-body" style={{ flexGrow: 1 }}>
                <div className="d-flex pb-3 border-bottom mb-3">
                    {/* <div>
                        <img src={job.company_logo } className="me-3 rounded-3" style={{ width: "70px" }} />
                    </div> */}
                    <div>
                        {job.company_logo ? (
                            <img
                            src={job.company_logo}
                            className="me-3 rounded-3"
                            style={{ width: "70px" }}
                            />
                        ) : (
                            <Avatar sx={{ width: 55, height: 55 }} className="fs-5 me-3">
                            {job.company_name ? job.company_name.charAt(0).toUpperCase() : "?"}
                            </Avatar>
                        )}
                        </div>
                    <div className="col">
                        <h5 className="card-title">{job.title}</h5>
                        <span className="card-subtitle">{job.location}</span>
                    </div>
                </div>
                <div 
                    dangerouslySetInnerHTML={{ __html: description + ellipsis }} 
                    style={{ color: "var(--text_color)", fontSize: '14px', height: "80px", overflow: "hidden" }}
                />
                <div className="d-flex justify-content-center mt-3">
                    <button 
                        className="btn-see-more"
                        style={{
                            
                            background: "#edb852", 
                            color: "#006040",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "50px",
                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                            transition: "transform 0.3s, box-shadow 0.3s",
                            cursor: "pointer"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.boxShadow = "0px 6px 14px rgba(0, 0, 0, 0.25)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.2)";
                        }}
                    >
                        See More
                    </button>
                </div>
            </div>

        </div>
    );
}

export default JobCard;
