import React from "react";
import { useNavigate } from "react-router-dom";

interface blogProps {
    title: string;
    description: string;
    image: string;
    id: string;
    location: string;
  }
function EventComponent({ title, description, image, id, location }: blogProps) {
    const navigate = useNavigate();

    return (
        <div className="card w-100 shadow rounded-3 zpanel border-0 mb-4" onClick={() => {navigate(`/event/${id}`)}} style={{overflow: "hidden", height:"500px"}}>
            {/* <img src="./images/card_image.png" alt="event image" style={{width: "100%"}} /> */}
            <img src={image} alt="Blog"  style={{ width: "100%",  height: "250px", objectFit: "cover"  }} />

            <div className="card-body">
                <div><h5  className="card-title mb-0" style={{color: "var(--text_color)"}}>{title}</h5></div>
                <span className="card-subtitle mb-3" style={{color: "var(--text_color)"}}>{location}</span>
                <div dangerouslySetInnerHTML={{__html: description}} className="w-100" style={{ height: "70px", overflow: "hidden"}}/>

                {/* <p style={{color: "var(--text_color)",  fontSize: '14px'}}>
                    {description}
                </p> */}
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
export default EventComponent;