import { relative } from "path";
import React, { useContext, useEffect, useState } from "react";
import EventComponent from "../Components/Reusables/EventComponent";
import FooterComponent from "../Components/Reusables/FooterComponent";
import JobCard from "../Components/Reusables/JobCard";
import BlogComponent from "../Components/Reusables/BlogComponent";
import CompanyComponent from "../Components/Reusables/CompanyComponent";
import PaginationComponent from "../Components/Reusables/PaginationComponent";
import AdminAPI from "../APIs/AdminAPI";
import VerticalGap from "../Components/Reusables/VerticalGap";
import AlertContext from "../Contexts/AlertContext";
import {isMobile} from "react-device-detect";

function EventPortal() {
    const [events, setEvents] = useState([]);
    const { setWaiting, showWaiting } = useContext(AlertContext);

    const [pageNumber, setPageNumber] = useState(1);
    const [paging, setPaging] = useState({
        pageSize: 3,
        totalCount: 0
    }); 

    useEffect(() => {
        
        const fetchEvents = async () => {
            setTimeout(() => { setWaiting(true); }, 1);
            try {
                const response = await AdminAPI.getAllNormal("v1/event", "events", pageNumber, paging.pageSize);
                setPaging({...paging, totalCount: response.TotalCount})
                setEvents(response.Items);
            } catch (error) {
                console.error("Error fetching event data:", error);
            } 
            setTimeout(() => { setWaiting(false); }, 10);
        };

        fetchEvents();

    }, [pageNumber]);


  

    return (
        <div className="w-100" style={{position: "relative", zIndex: 10}} >
            {events.map((event:any) => {
                const schemaMarkup = {
                    "@context": "https://schema.org",
                    "@type": "Event",
                    "name": event.title,
                    "startDate": event.start_date,
                    "endDate": event.end_date,
                    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                    "eventStatus": "https://schema.org/EventScheduled",
                    "location": {
                        "@type": "Place",
                        "name": event.event_location,
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": event.event_location
                        }
                    },
                    "image": event.img_secure_url,
                    "description": event.description.replace(/<\/?[^>]+(>|$)/g, ""),
                    "url": event.external_link
                };

                return (
                    <script key={event._id} type="application/ld+json">
                        {JSON.stringify(schemaMarkup)}
                    </script>
                );
            })}
            <div className="row p-0 m-0">
                <div className="col"></div>
                <div className="col-sm-12 col-md-10 col-lg-9">

                    <VerticalGap size={50} />
                    <h1 className="card-title text-center" style={{color: "var(--text_color)"}}>Upcoming Events & Webinars</h1>
                    <VerticalGap size={15} />
                    <p className="text-center card-subtitle mb-5" style={{color: "var(--text_color)", width: (isMobile ? "100%" : "70%"), position: "relative", left: "50%", transform: "translateX(-50%)"}}>
                    Network, Learn, and Grow with Industry Leaders
                    </p>
                    <VerticalGap size={90} />
                    <div className="row mb-5 justify-content-start" style={{position: "relative", overflow: "auto hidden"}}>

                        {events.map((event:any) => (
                            <div className="col-sm-12 col-md-4 col-md-4 px-3 mb-5" key={event._id}>
                                <EventComponent
                                    title={event.title}                                      
                                    description={event.description.length > 100 
                                        ? `${event.description.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 100)}...` 
                                        : event.description.replace(/<\/?[^>]+(>|$)/g, "")
                                    }
                                    image={event.img_secure_url}
                                    id={event._id}
                                    location={event.event_location}
                                />
                            </div>
                        ))}
                    </div>

                    <PaginationComponent totalCount={paging.totalCount} pageSize={paging.pageSize} onChange={async (page_number: number) => {
                        setPageNumber(page_number);
                    }} />
                    <VerticalGap size={100} />

                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}

export default EventPortal;