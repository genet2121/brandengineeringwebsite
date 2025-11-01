import React, { useContext, useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import JobComponent from "../Components/Reusables/JobComponent";
import FooterComponent from "../Components/Reusables/FooterComponent";
import AdminAPI from "../APIs/AdminAPI";
import AuthContext from "../Contexts/AuthContext";
import { isMobile } from "react-device-detect";
import VerticalGap from "../Components/Reusables/VerticalGap";

function JobPortal() {

    const [detailPanel, setDetailPanel] = useState(false);
    const [jobList, setJobList] = useState<any>([]);
    const [title, setTitle] = useState<string>("");
    const [skill, setSkill] = useState<string>("");
    const [company_name, setCompany] = useState<string>("");
    const [createdAt, setDatePosted] = useState<string>("");
    const [job_type, setScheduleTypes] = useState<string[]>([]);
    const [work_mode, setPlaceOptions] = useState<string[]>([]);

    useEffect(() => {
        loadJobs();
    }, []);


    const loadJobs = async (searchParams: {
        title?: string;
        skill?: string;
        company_name?: string;
        createdAt?: string;
        job_type?: string[];
        work_mode?: string[]
    } = {}) => {
        const { title, skill, company_name, createdAt, job_type = [], work_mode = [] } = searchParams;

        let query = `v1/job?is_active=true&is_draft=false&is_deadline_passed=false`;
        if (title) query += `&title=${encodeURIComponent(title)}`;
        if (skill) query += `&skill=${encodeURIComponent(skill)}`;
        if (company_name) query += `&company_name=${encodeURIComponent(company_name)}`;
        if (createdAt) query += `&createdAt=${encodeURIComponent(createdAt)}`;
        // 
        if (job_type && job_type.length > 0) {
            job_type.forEach(type => {
                query += `&job_type=${encodeURIComponent(type)}`;
            });
        }
        if (work_mode && work_mode.length > 0) {
            work_mode.forEach(mode => {
                query += `&work_mode=${encodeURIComponent(mode)}`;
            });
        }

        const data: any = await AdminAPI.getAllNormal(query, "jobs");
        setJobList(data.Items);
    };
   

    const handleSearch = () => {
        loadJobs({ title, skill, company_name });
    };

    const handleCheckboxChange = (value: string, setter: React.Dispatch<React.SetStateAction<string[]>>, filterKey: 'job_type' | 'work_mode') => {
        setter((prev) => {
            const updated = prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value];

            // Call the API with updated filters
            loadJobs({
                title,
                skill,
                company_name,
                createdAt,
                job_type: filterKey === 'job_type' ? updated : job_type,
                work_mode: filterKey === 'work_mode' ? updated : work_mode,
            });

            return updated;
        });
    };

  
    const closeDetail = () => {
        setDetailPanel(false);
    }
    const TheStructuredData = () => {
        const jobPostings = jobList.map((job: any) => ({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: job.title,
            description: job.description,
            datePosted: job.createdAt,
            employmentType: Array.isArray(job.job_type) ? job.job_type.join(", ") : job.job_type, 
            hiringOrganization: {
                "@type": "Organization",
                name: job.company_name,
            },
            jobLocation: {
                "@type": "Place",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: job.location,
                },
            },
        }));
    
        return JSON.stringify(jobPostings, null, 2);
    };
    

    return (
        <div className="w-100" style={{ position: "relative", zIndex: 10 }}>
            <script type="application/ld+json">
                {TheStructuredData()}
            </script>

            {/* {!isMobile && (<img src="./images/original-hero.png" alt="logo" className="w-100" />)} */}
            <div className="w-100 mt-3">
                <h1 className="card-title text-center" style={{ color: "var(--text_color)" }}>Browse Jobs</h1>
                <VerticalGap size={15} />

                <p className="text-center card-subtitle mb-4" style={{ color: "var(--text_color)", width: "80%", position: "relative", left: "50%", transform: "translateX(-50%)" }}>
                    Explore the Latest Opportunities in Healthcare
                </p>
            </div>
            <div className="w-100 px-md-4 px-sm-3 row m-0">
                <div className="col-sm-12 col-md-4 col-lg-4 py-1">
                    <div className="card zpanel border-0 shadow-sm" >
                        <div className="card-header">
                            Filter
                        </div>
                        <div className="card-body">
                            <h6 className="card-title">Date Posted</h6>
                            <input type="date" className="form-control form-control-sm zinput"
                                value={createdAt}
                                onChange={(e) => {
                                    const selectedDate = e.target.value;
                                    setDatePosted(selectedDate);
                                    loadJobs({
                                        title,
                                        skill,
                                        company_name,
                                        createdAt: selectedDate,
                                        job_type,
                                        work_mode
                                    });
                                }}
                            />
                            <hr />
                            <h6 className="card-title">Schedule Type</h6>
                            <div className="d-flex justify-content-between">
                                <div className="col">
                                    <div className="form-check">
                                        {/* <input className="form-check-input zcheck_box" type="checkbox" value="" id="flexCheckDefault" onChange={() => handleCheckboxChange("Full-Time", setScheduleTypes)}/> */}
                                        <input className="form-check-input zcheck_box" type="checkbox" onChange={() => handleCheckboxChange("Full time", setScheduleTypes, 'job_type')} />

                                        <label className="form-check-label" >
                                            Full-Time
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        {/* <input className="form-check-input zcheck_box" type="checkbox" value="" id="flexCheckDefault" onChange={() => handleCheckboxChange("Freelance", setScheduleTypes)}/> */}
                                        <input className="form-check-input zcheck_box" type="checkbox" onChange={() => handleCheckboxChange("Freelance", setScheduleTypes, 'job_type')} />

                                        <label className="form-check-label" >
                                            Freelance
                                        </label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-check">
                                        {/* <input className="form-check-input zcheck_box" type="checkbox" value="" id="flexCheckDefault"  onChange={() => handleCheckboxChange("Internship", setScheduleTypes)} /> */}
                                        <input className="form-check-input zcheck_box" type="checkbox" onChange={() => handleCheckboxChange("Internship", setScheduleTypes, 'job_type')} />

                                        <label className="form-check-label" >
                                            Internship
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input zcheck_box" type="checkbox" onChange={() => handleCheckboxChange("Volunteer", setScheduleTypes, 'job_type')} />

                                        {/* <input className="form-check-input zcheck_box" type="checkbox" value="" id="flexCheckDefault" onChange={() => handleCheckboxChange("Volunteer", setScheduleTypes)}/> */}
                                        <label className="form-check-label" >
                                            Volunteer
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <h6 className="card-title">Place</h6>
                            <div className="d-flex justify-content-between">
                                <div className="col">
                                    <div className="form-check">
                                        <input className="form-check-input zcheck_box" type="checkbox" onChange={() => handleCheckboxChange("On-site", setPlaceOptions, 'work_mode')} />

                                        {/* <input className="form-check-input zcheck_box" type="checkbox" value="" id="flexCheckDefault" onChange={() => handleCheckboxChange("On-Site", setPlaceOptions)}/> */}
                                        <label className="form-check-label" >
                                            On-Site
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input zcheck_box" type="checkbox" onChange={() => handleCheckboxChange("Remote", setPlaceOptions, 'work_mode')} />

                                        {/* <input className="form-check-input zcheck_box" type="checkbox" value="" id="flexCheckDefault"  onChange={() => handleCheckboxChange("Remote", setPlaceOptions)}/> */}
                                        <label className="form-check-label" >
                                            Remote
                                        </label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-check">
                                        <input className="form-check-input zcheck_box" type="checkbox" onChange={() => handleCheckboxChange("Hybrid", setPlaceOptions, 'work_mode')} />

                                        {/* <input className="form-check-input zcheck_box" type="checkbox" value="" id="flexCheckDefault"  onChange={() => handleCheckboxChange("Hybrid", setPlaceOptions)}/> */}
                                        <label className="form-check-label" >
                                            Hybrid
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-8 p-2">
                    <div className="card zpanel shadow-sm mb-3">
                        <div className="card-body p-2 d-flex justify-content-center">
                            <input type="text" className="form-control zinput mx-2" placeholder={isMobile ? "Title" : "Search by Title"} value={title}
                                onChange={(e) => setTitle(e.target.value)} style={{ border: "none" }} />
                            {/* <input type="text" className="form-control zinput mx-2" placeholder="Search by Skill" value={skill}
                                onChange={(e) => setSkill(e.target.value)} style={{border: "none"}} /> */}
                            <input type="text" className="form-control zinput mx-2" placeholder={isMobile ? "Company" : "Search by Company"} value={company_name}
                                onChange={(e) => setCompany(e.target.value)} style={{ border: "none" }} />
                            <button className="btn zbtn ms-2" onClick={handleSearch} style={{background: "#edb852", color: "#006040"}}>Search</button>
                        </div>
                    </div>
                    {
                        jobList.length > 0 ? jobList.map((jl: any) => (<JobComponent job={jl} />)) : (
                            <div className="d-flex justify-content-center my-5">
                                <div className="spinner-border text-danger" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default JobPortal;