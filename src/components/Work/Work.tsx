import React from "react";
import img1 from "./../../assets/work/01.png";
import img2 from "./../../assets/work/02.png";
import img3 from "./../../assets/work/03.png";
import img4 from "./../../assets/work/04.png";
import WorkCard from "../WorkCard/WorkCard";
const Work = () => {
  const workArray = [img1, img2, img3, img4];
  return (
    <section className="mt-[80px] xl:mt-[150px] relative z-20">
      <div className="container mx-auto xl:px-0 ">
        <div className="text-center mb-24">
          <h2 className="h1 mb-4">Follow Our Projects</h2>
          <p className=" max-w-3xl mx-auto">
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-[104px] gap-y-[56px]">
          {workArray.map((i, index) => (
            <WorkCard key={index} src={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
