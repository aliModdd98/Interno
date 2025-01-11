import React from "react";

// Define props type
interface TestimonialCardProps {
  src: string; // The source URL of the image
  name: string; // Name of the person giving the testimonial
  location: string; // Location of the person
  description: string; // Testimonial description
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  src,
  name,
  location,
  description,
}) => {
  return (
    <div className="w-full max-w-[378px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
      <div className="flex gap-4 mb-6">
        <img src={src} alt={`${name}'s picture`} />
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
