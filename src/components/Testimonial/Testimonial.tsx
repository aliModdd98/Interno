import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import t1 from "./../../assets/testimonial/01.png";
import t2 from "./../../assets/testimonial/02.png";
import t3 from "./../../assets/testimonial/03.png";
import t4 from "./../../assets/testimonial/04.png";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { Slide } from "react-awesome-reveal";
const Testimonial = () => {
  const testArray = [
    {
      id: 0,
      name: "Nattasha Mith",
      location: "Greenville, USA",
      description:
        "Lorem Ipsum is simply dummy text of the typesetting industry.Ipsum has been.",
      src: t1,
    },
    {
      id: 1,
      name: "Jessica White",
      location: "Oak Ridge, USA",
      description:
        "Lorem Ipsum is simply dummy text of the typesetting industry.Ipsum has been.",
      src: t2,
    },
    {
      id: 2,
      name: "Mike Davis",
      location: "Berlin, Germany",
      description:
        "Lorem Ipsum is simply dummy text of the typesetting industry.Ipsum has been.",
      src: t3,
    },
    {
      id: 3,
      name: "Olivia Wilson",
      location: "Blue Ridge, France",
      description:
        "Lorem Ipsum is simply dummy text of the typesetting industry.Ipsum has been.",
      src: t4,
    },
  ];
  return (
    <div className="mt-[80px] xl:mt-[200px] relative z-20">
      <div className="container mx-auto bg-accent-secondary rounded-[70px] px-6">
        <h1 className="h1 py-4">What clients say</h1>
        <div className="w-full">
          <Swiper
            loop
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              1225: { slidesPerView: 3, spaceBetween: 30 },
              780: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true }}
            className="h-[400px]"
          >
            <Slide direction="up" cascade damping={0.4} triggerOnce>
              {testArray.map((item) => (
                <SwiperSlide key={item.id}>
                  <TestimonialCard
                    name={item.name}
                    description={item.description}
                    location={item.location}
                    src={item.src}
                  />
                </SwiperSlide>
              ))}{" "}
            </Slide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
