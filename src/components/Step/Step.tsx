import { IoIosArrowRoundForward } from "react-icons/io";

// Define the props type
interface StepProps {
  title: string; // The title of the step
  description: string; // The description of the step
  icon: React.ReactNode; // The icon, typically a JSX element
}

// Use the props type in the component
const Step: React.FC<StepProps> = ({ title, description, icon }) => {
  return (
    <div className="">
      <div className="mb-4 flex items-center justify-center">{icon}</div>
      <h3 className="h3 mb-5">{title}</h3>
      <p className="mb-5 max-w-md mx-auto">{description}</p>
      <a
        href="#"
        className="flex font-medium justify-center items-center gap-2"
      >
        Read More <IoIosArrowRoundForward className="text-accent size-10" />
      </a>
    </div>
  );
};

export default Step;
