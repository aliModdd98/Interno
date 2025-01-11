import logo from "./../../assets/logo.svg";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  const socials = [
    {
      id: 0,
      icon: <FaFacebookF />,
    },
    {
      id: 1,
      icon: <FaInstagram />,
    },
    {
      id: 2,
      icon: <FaTwitter />,
    },
    {
      id: 3,
      icon: <FaYoutube />,
    },
  ];
  const links = ["About Us", "Testimonials", "Our Work", "News", "Contact"];
  const services = ["Kitchen", "Living Area", "Bathroom", "Bedroom"];
  return (
    <section className="mt-[80px] xl:mt-[150px] relative z-20">
      <div className="container mx-auto xl:px-0 ">
        <div className="flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[180px]">
          <div className="w-full max-w-[400px] mx-auto  mb-8 xl:text-left ">
            <a href="" className="flex justify-center xl:justify-start mb-8">
              {" "}
              <img src={logo} alt="" className="" />
            </a>
            <p className="mb-8 text-xl">
              It is a long established fact that a reader will be distracted
              lookings. Socials
            </p>
            <ul className="flex text-primary gap-[54px] justify-center xl:justify-start">
              {socials.map((i) => (
                <li key={i.id}>{i.icon}</li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex flex-col xl:flex-row text-center xl:text-left gap-12 xl:gap-[100px] xl:justify-end">
            <div>
              {" "}
              <h3 className="h3 mb-'">Pages</h3>
              <ul className="flex flex-col gap-4">
                {links.map((i, index) => (
                  <li key={index}>{i}</li>
                ))}
              </ul>
            </div>
            <div>
              {" "}
              <h3 className="h3 mb-'">Services</h3>
              <ul className="flex flex-col gap-4">
                {services.map((i, index) => (
                  <li key={index}>{i}</li>
                ))}
              </ul>
            </div>
            <div className="max-w-[260px] mx-auto xl:mx-0">
              <h3 className="h3">Contact</h3>
              <div className="flex flex-col gap-6 text-[20px]">
                {" "}
                <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
                <p>contact@interno.com</p>
                <p>(123) 456 - 7890</p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div>
          <p className=" text-center text-lg py-10 bg-white xl:border-t ">
            Copyright © Interno 2024. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
