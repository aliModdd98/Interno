import { IoIosArrowForward } from "react-icons/io";

// Define props type
interface WorkCardProps {
  src: string; // The source URL of the image
}

const WorkCard: React.FC<WorkCardProps> = ({ src }) => {
  return (
    <div>
      <div className="w-full max-w-[548px] h-full mx-auto">
        <img src={src} alt="Work preview" />
        <div className="flex justify-between items-center mt-3">
          <div>
            <h3 className="h3">Modern Kitchen</h3>
            <p>Decor/Architecture</p>
          </div>
          <button className="text-3xl text-primary bg-accent-secondary rounded-full hover:bg-accent/20 p-3 me-2">
            <IoIosArrowForward className="font-bold text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
