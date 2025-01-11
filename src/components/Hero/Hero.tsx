import { Fade } from "react-awesome-reveal";
import { FaArrowRight } from "react-icons/fa6";
import heroBgImage from "./../../assets/hero/bg.jpg";
const Hero = () => {
  return (
    <main className="max-w-[1920px] mx-auto bg-white overflow-hidden">
      <div
        className="xl:bg-center xl:bg-repeat-y fixed top-0 left-0 bottom-0 right-0 z-10"
        style={{ backgroundImage: "url(./src/assets/grid.png)" }}
      ></div>
      <section
        className="h-[640px] xl:h-[840px] bg-center lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="container mx-auto h-full flex items-center justify-center xl:justify-start ">
          <div className="w-[567px] flex flex-col items-center xl:text-left lg:items-start">
            {" "}
            <Fade delay={600} duration={1500} direction="left">
              {" "}
              <h1 className="h1 mb-8">Let Your Home Be Unique</h1>
              <p className="mb-8">
                There are many variations of the passages of lorem Ipsum from
                available,variations of the passages.
              </p>
              <button className="btn btn-primary mx-auto xl:mx-0 flex items-center">
                Get free estimation <FaArrowRight />
              </button>
            </Fade>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
