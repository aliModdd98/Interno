import React from "react";
import Step from "../Step/Step";
import { RiCompasses2Fill } from "react-icons/ri";
import { SlMagicWand } from "react-icons/sl";
import { FaTools } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
const Steps = () => {
  const StepsArray = [
    {
      id: 0,
      title: "Project Planning",
      description:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
      icon: <RiCompasses2Fill className="text-5xl text-accent size-10" />,
    },
    {
      id: 1,
      title: "Gaining Materials",
      description:
        "There are many variations of the passages of lorem Ipsum from available, majority.",

      icon: <SlMagicWand className="text-5xl text-accent size-10" />,
    },
    {
      id: 2,
      title: "Project Execution",
      description:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
      icon: <FaTools className="text-5xl text-accent size-10" />,
    },
  ];
  return (
    <section className="steps mt-[80px] xl:mt-[200px] relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
          <Slide direction="up" cascade damping={0.2} triggerOnce>
            {" "}
            {StepsArray.map((item) => (
              <Step
                key={item.id}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}{" "}
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default Steps;
