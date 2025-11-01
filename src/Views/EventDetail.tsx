import React, { useContext, useEffect, useState } from "react";
import EventDate from "../Components/Reusables/EventDate";
import { useParams } from "react-router-dom";
import AdminAPI from "../APIs/AdminAPI";
import AlertContext from "../Contexts/AlertContext";

interface EventData {
    title: string;
    start_date: string;
    end_date: string;
    description: string;
    img_secure_url: string;
    event_location: string;
    external_link: string;
  }
function EventDetail() {
  const { id } = useParams<{ id: string }>(); 
  const [eventData, setEventData] = useState<EventData | null>(null);
  const { setWaiting, showWaiting } = useContext(AlertContext);

  useEffect(() => {
    if (id) {  
      const fetchEventData = async () => {
        try {
          setTimeout(() => { setWaiting(true); }, 1);
          const response = await AdminAPI.getSingleNormal("v1/event", id, 'event'); 
          setEventData(response);
        } catch (error) {
          console.error("Error fetching event data:", error);
        } 
        setTimeout(() => { setWaiting(false); }, 1);
      };

      fetchEventData();
    } else {
      console.error("ID is undefined");
      setWaiting(false); 
    }
  }, [id]);

  

 

    return eventData ? (
        <div className="w-100" style={{flexWrap: "wrap", position: "relative", zIndex: 10, }} >
          <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": eventData.title,
            "startDate": eventData.start_date,
            "endDate": eventData.end_date,
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "location": {
                "@type": "Place",
                "name": eventData.event_location,
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": eventData.event_location
                }
            },
            "image": eventData.img_secure_url,
            "description": eventData.description.replace(/<\/?[^>]+(>|$)/g, ""),
            "url": eventData.external_link
          })}
        </script>

            <div className="w-100" style={{position: "relative"}}>
                <img src={eventData.img_secure_url} alt="blog image" className="w-100" style={{height: '750px', objectFit: 'cover'}}/>
                <div className="w-100 h-100 row p-0 m-0" style={{position: "absolute", top: 0, left: 0, background: "#00000060"}}>
                    <div className="col-sm-12 col-md-5 col-lg-6 h-lg-100 d-flex">
                        <div className="text-center my-auto w-100 text-white" style={{position:'relative'}}>
                            <h1 className="card-title fs-1">{eventData.title}</h1>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-7 col-lg-6 h-lg-100 d-flex pe-lg-5 pe-sm-3 ">
                        <EventDate start_date={eventData.start_date} end_date={eventData.end_date} />
                    </div>
                </div>
            </div>
            <div className="d-flex">
                <div className="col"></div>
                <div className="col-sm-12 col-md-10 col-lg-8 mt-4 px-4">                

                    <div className="text-start my-5" dangerouslySetInnerHTML={{__html: eventData.description}}></div>
                   

                </div>
                <div className="col"></div>
            </div>
        </div>
    ) : (
      <div className="d-flex justify-content-center my-5" style={{ minHeight: "100vh",height: "max-content" }}>
        <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
    );
}

export default EventDetail;