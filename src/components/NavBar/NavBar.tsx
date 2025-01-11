import { useState } from "react";
import logo from "./../../assets/logo.svg";
import { RiMenu4Line } from "react-icons/ri";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navList = [
    "Home",
    "About",
    "Testimonials",
    "Our Works",
    "News",
    "Contact",
  ];
  const toggleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="sticky top-0 h-[90px] shadow-xl z-30 bg-white flex  items-center">
      <div className="container mx-auto flex justify-between items-center h-full">
        <a href="">
          <img src={logo} alt="logo" />
        </a>
        <nav>
          <ul
            className={`fixed h-0 p-0 w-full bg-white overflow-hidden
             border-t top-[90px] left-0 right-0
           flex ${isOpen ? "flex-col h-[365px] p-6 text-start" : ""} gap-4
           lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-1000`}
          >
            {navList.map((item, index) => (
              <li className="text-primary text-[22px] font-primary" key={index}>
                <a href="">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="cursor-pointer lg:hidden" onClick={toggleClick}>
          <RiMenu4Line className="text-primary text-[27px] font-primary" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
