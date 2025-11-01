import React from "react";

interface CompanyProps {
  image: string;
  name: string;
}

function CompanyComponent({ image, name }: CompanyProps) {
  return (
    <div className="card w-100 rounded-2 bg-transparent mb-3" style={{ overflow: "hidden", border: "none" }}>
      <div className="card-body">
        <div className="d-flex justify-content-center mb-3">
          <img src={image} className="rounded-3"   style={{ width: "200px",  height: "180px", objectFit: "cover"  }}  alt={name} />
        </div>
        {/* <h5 className="card-title text-center" style={{ color: "var(--text_color)" }}>{name}</h5> */}
      </div>
    </div>
  );

}

export default CompanyComponent;
