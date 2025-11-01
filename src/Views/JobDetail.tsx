import React, { useEffect, useState } from "react";
import AdminAPI from "../APIs/AdminAPI";
import { useParams } from "react-router-dom";
import Utils from "../Models/Utils";
import Avatar from "@mui/material/Avatar";

function JobDetail() {

    const params: any = useParams();
    const [detailPanel, setDetailPanel] = useState(false);
    const [jobDetail, setJobDetail] = useState<any>()
    useEffect(() => {
        loadJobs();
    }, []);


    const loadJobs = async () => {

        let data: any = await AdminAPI.getSingleNormal(
            "v1/job",
            params.id,
            "job"
        );

        setJobDetail(data);

    }

    const schemaMarkup = jobDetail ? {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": jobDetail.title,
        "description": jobDetail.description ? jobDetail.description.replace(/(<([^>]+)>)/gi, "") : "", 
        "identifier": {
            "@type": "PropertyValue",
            "name": jobDetail.company_name,
            "value": jobDetail._id
        },
        "hiringOrganization": {
            "@type": "Organization",
            "name": jobDetail.company_name,
            "logo": jobDetail.company_logo,
            "sameAs": jobDetail.external_link ? `https://${jobDetail.external_link}` : ""
        },
        "jobLocation": {
            "@type": "Place",
            "name": jobDetail.location
        },
        "datePosted": jobDetail.createdAt,
        "validThrough": jobDetail.deadline,
        "employmentType": jobDetail.job_type,
        "experienceRequirements": jobDetail.experience,
        "salary": jobDetail.salary,
        "workHours": jobDetail.work_mode,
        "url": jobDetail.external_link ? `https://${jobDetail.external_link}` : "",
    } : null;

    return jobDetail ? (
        <>
         {schemaMarkup && (
                <script type="application/ld+json">
                    {JSON.stringify(schemaMarkup)}
                </script>
            )}
              <div className="w-100 d-flex p-0 mb-4" style={{flexWrap: "wrap", position: "relative", zIndex: 10}}>
            <div className="col"></div>
            <div className="col-sm-12 col-md-10 col-lg-10 px-4">
                <div className="card zpanel shadow-sm mb-3 mt-4 border-0" style={{overflow: "hidden"}}>
                    {/* <img src="/images/hero_image.png" alt="logo" className="w-100" /> */}
                <div 
                    className="w-100 d-flex justify-content-center align-items-center" 
                    style={{
                        background:  "linear-gradient(135deg, #006040,   #00b377)",
                        height: "300px"  
                    }}
                >
                    <h1 className="card-title text-center" style={{color: "var(--button_color)"}}>Mirac Ethiopia <br/> Jobs</h1>
                </div>
                    <div className="card-body pt-0">
                        <div className="px-5 w-100 mb-3" style={{height: "70px"}}>
                           
                            {jobDetail.company_logo ? (
                           <img src={jobDetail.company_logo} alt="logo" className="rounded-3" style={{width: "140px", position: "relative", transform: "translateY(-50%)"}} />
                        ) : (
                            <div  style={{width: "140px", position: "relative", transform: "translateY(-50%)"}}>
                                <Avatar sx={{ width: 55, height: 55 }} className="fs-5 me-3">
                                    {jobDetail.company_name ? jobDetail.company_name.charAt(0).toUpperCase() : "?"}
                                </Avatar>
                            </div>
                        )}
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="col-6">
                            <h2 className="card-subtitle ">{jobDetail.company_name}</h2>
                                <h6 className="card-title">{jobDetail.title}</h6>
                                <div className="card-subtitle">{jobDetail.location}</div>
                            </div>
                            <div className="col-6">

                                {/* <div className="card-subtitle text-end">{jobDetail.company_name}</div> */}
                                <div className="d-flex justify-content-end">
                                    {jobDetail.external_link && (<button className="btn zbtn ms-2 rounded-5 px-4" 
                                        style={{  
                                            background: "linear-gradient(135deg, #f1af30, #e69528)", 
                                            color: "var(--button_bg)",
                                            borderRadius: "50px",
                                            padding: "12px 24px",
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                                            transition: "transform 0.2s, box-shadow 0.2s",
                                            cursor: "pointer",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "scale(1.05)";
                                            e.currentTarget.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.4)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "scale(1)";
                                            e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
                                        }}
                                        onClick={() => window.open(jobDetail.external_link, "_blank")}
                                    >Apply</button>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-7 col-lg-8 mb-3">
                        <div className="card shadow-sm rounded-2 border-0 zpanel">
                            <div className="card-body" dangerouslySetInnerHTML={{__html: jobDetail.description}} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-4">
                        <div className="card shadow-sm rounded-2 border-0 zpanel">
                            <div className="card-body">
                                <button className="btn btn-light btn-lg rounded-3 w-100 mb-3 border-0" style={{backgroundColor: "rgba(125, 125, 125, 0.074)", color: "var(--text_color)"}} >
                                    <h6 className="card-title text-center lead fs-6">Deadline</h6>
                                    <div className="card-subtitle text-center fs-6">{Utils.convertISOToDate(jobDetail.deadline)}</div>
                                </button>
                                <div className="d-flex mb-3">
                                    <div className="w-50 pe-2">
                                        <button className="btn btn-light btn-lg rounded-3 w-100 border-0" style={{backgroundColor: "rgba(125, 125, 125, 0.074)", color: "var(--text_color)"}} >
                                            <h6 className="card-title text-center lead fs-6">Work mode</h6>
                                            <div className="card-subtitle text-center fs-6">{jobDetail.work_mode}</div>
                                        </button>
                                    </div>
                                    <div className="w-50 ps-2">
                                        <button className="btn btn-light btn-lg rounded-3 w-100 border-0" style={{backgroundColor: "rgba(125, 125, 125, 0.074)", color: "var(--text_color)"}} >
                                            <h6 className="card-title text-center lead fs-6">Job Type</h6>
                                            <div className="card-subtitle text-center fs-6">{jobDetail.job_type}</div>
                                        </button>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <div className="w-50 pe-2">
                                        <button className="btn btn-light btn-lg rounded-3 w-100 border-0" style={{backgroundColor: "rgba(125, 125, 125, 0.074)", color: "var(--text_color)"}} >
                                            <h6 className="card-title text-center lead fs-6">Fields</h6>
                                            <div className="card-subtitle text-center fs-6">{jobDetail.category}</div>
                                        </button>
                                    </div>
                                    <div className="w-50 ps-2">
                                        <button className="btn btn-light btn-lg rounded-3 w-100 border-0" style={{backgroundColor: "rgba(125, 125, 125, 0.074)", color: "var(--text_color)"}} >
                                            <h6 className="card-title text-center lead fs-6">Salary</h6>
                                            <div className="card-subtitle text-center fs-6">{jobDetail.salary}</div>
                                        </button>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="w-50 pe-2">
                                        <button className="btn btn-light btn-lg rounded-3 w-100 border-0" style={{backgroundColor: "rgba(125, 125, 125, 0.074)", color: "var(--text_color)"}} >
                                            <h6 className="card-title text-center lead fs-6">Work Mode</h6>
                                            <div className="card-subtitle text-center fs-6">{jobDetail.work_mode}</div>
                                        </button>
                                    </div>
                                    <div className="w-50 ps-2">
                                        <button className="btn btn-light btn-lg rounded-3 w-100 border-0" style={{backgroundColor: "rgba(125, 125, 125, 0.074)", color: "var(--text_color)"}} >
                                            <h6 className="card-title text-center lead fs-6">Experience</h6>
                                            <div className="card-subtitle text-center fs-6">{jobDetail.experience}</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col"></div>
        </div>
        </>
      
    ) : (
        <div className="d-flex justify-content-center my-5">
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );

  
}

export default JobDetail;