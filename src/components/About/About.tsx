import { Fade } from "react-awesome-reveal";
import about from "./../../assets/about/img.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
const About = () => {
  return (
    <section className="mt-[80px] xl:mt-[200px] relative z-20">
      <div className="container mx-auto xl:px-0">
        <div
          className="flex flex-col xl:flex-row text-center xl:text-left justify-between items-center
          gap-8 xl:gap-[74p]"
        >
          <Fade delay={600} duration={1500} direction="left">
            <div className=" flex-1 order-2 xl:order-none max-w-screen-xl xl:max-w-[410px] flex flex-col items-center xl:items-start gap-8">
              <h2 className="h2">
                We Create The Art Of Stylish Living Stylishly
              </h2>
              <p className="">
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using that it has a more-or-less normal.
              </p>
              <div className="flex items-center justify-center xl:justify-start gap-4">
                <div className="bg-accent/15 w-[93px] h-[93px] rounded-full flex items-center justify-center">
                  <FaPhoneAlt className="text-accent text-4xl" />
                </div>
                <div className="text-left ">
                  <div className="text-2xl font-bold">+92 333 9639</div>
                  <div>Call Us Any Time </div>
                </div>
              </div>
              <button className="btn btn-primary flex gap-4 items-center justify-center ">
                Get Free estimation{" "}
                <IoIosArrowRoundForward className="text-accent text-4xl" />
              </button>
            </div>
          </Fade>
          <Fade delay={600} duration={1500} direction="right">
            <div className="bg-pink-200  max-w-[435px]  mx-auto xl:max-w-none xl:mx-0">
              <img src={about} alt="about" />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
