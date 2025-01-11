import React from "react";

const TestimonialCard = ({ src, name, location, description }) => {
  return (
    <div className="w-full max-w-[378px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
      <div className="flex gap-4 mb-6">
        <img src={src} alt="" />
        <div>
          <h3 className="h3">{name}</h3>
          <div>{location}</div>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default TestimonialCard;
