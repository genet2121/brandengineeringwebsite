

import Avatar from "@mui/material/Avatar";
import React from "react";
import { useNavigate } from "react-router-dom";

function JobComponent({job}: {job: any}) {
    const navigate = useNavigate();

    const jobPostingSchema = {
        "@context": "https://schema.org/",
        "@type": "JobPosting",
        title: job.title,
        description: job.description ? job.description.replace(/<\/?[^>]+(>|$)/g, ""): "", 
        datePosted: job.datePosted || new Date().toISOString(),
        employmentType: job.job_type,
        hiringOrganization: {
            "@type": "Organization",
            name: job.company_name,
            logo: job.company_logo,
        },
        jobLocation: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                addressLocality: job.location,
                addressCountry: "Ethiopia", 
            },
        },
        workHours: job.work_mode || "Full-time", 
    };

    return (
        <div
            className="card w-100 shadow-sm rounded-2 zpanel mb-3 job_list_item"
            onClick={() => {
                navigate(`/job/${job._id}`);
            }}
            style={{ overflow: "hidden", border: "none" }}
        >
            <div className="card-body">
                <div className="d-flex mb-3 flex-wrap">
                    <div className="me-3">
                       
                         {job.company_logo ? (
                            <img
                            src={job.company_logo}
                            alt="company logo"
                            className="rounded-3"
                            style={{ width: "70px" }}
                        />
                        ) : (
                            <Avatar sx={{ width: 55, height: 55 }} className="fs-5 me-3">
                            {job.company_name ? job.company_name.charAt(0).toUpperCase() : "?"}
                            </Avatar>
                        )}
                    </div>
                    <div className="flex-grow-1 d-flex flex-column flex-md-row justify-content-between">
                        <div>
                            <h5 className="card-title">{job.title}</h5>
                            <span
                                className="badge rounded-pill mx-2 py-2"
                                style={{
                                    fontSize: "13px",
                                    background: "#edb852", 
                                    color: "#006040",
                                }}
                            >
                                {job.job_type}
                            </span>
                            <span
                                className="badge rounded-pill mx-2 py-2"
                                style={{
                                    fontSize: "13px",
                                    color: "var(--button_color)",
                                    background: "var(--button_bg)",
                                }}
                            >
                                {job.work_mode}
                            </span>
                            <span
                                className="badge rounded-pill mx-2 py-2"
                                style={{
                                    fontSize: "13px",
                                    color: "var(--button_color)",
                                    background: "var(--button_bg)",
                                }}
                            >
                                {job.category}
                            </span>
                        </div>
                        <div className="text-md-end mt-3 mt-md-0">
                            <h5 className="card-title">{job.company_name}</h5>
                            <div className="card-subtitle">{job.location}</div>
                        </div>
                    </div>
                </div>
                <div 
                    dangerouslySetInnerHTML={{ __html:(job.description && job.description.length > 100) 
                        ? job.description.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 200)
                        : (job.description ?? "") }} 
                    style={{ color: "var(--text_color)", fontSize: '14px', height: "80px", overflow: "hidden" }}
                />
                {/* <p style={{ color: "var(--text_color)" }}>
                    {(job.description && job.description.length > 100) 
                        ? job.description.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 200)
                        : (job.description ?? "")}
                    {job.description && job.description.length > 100 ? "..." : ""}
                </p> */}
                <script type="application/ld+json">
                    {JSON.stringify(jobPostingSchema)}
                </script>
            </div>
        </div>
    );
}

export default JobComponent;