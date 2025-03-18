import React from "react";

const ServiceSection = ({ service }) => {
  return (
    <div className="card bg-base-200 w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          loading="lazy"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service}</h2>
        
        <div className="card-actions justify-end">
          <button className="btn btn-primary mx-auto">Start now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
