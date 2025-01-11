import img1 from "./../../assets/brands/01.svg";
import img2 from "./../../assets/brands/02.svg";
import img3 from "./../../assets/brands/03.svg";
import img4 from "./../../assets/brands/04.svg";
import img5 from "./../../assets/brands/05.svg";
const Brands = () => {
  const brandsArray = [img1, img2, img3, img4, img5];
  return (
    <div className="mt-[80px] xl:mt-[200px] relative z-20">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-12">
          {/* <img src="" alt="" /> */}
          {brandsArray.map((item) => (
            <img className="" src={item} alt="item" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
