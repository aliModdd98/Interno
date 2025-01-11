import "./App.css";
import About from "./components/About/About";
import Brands from "./components/Brands/Brands";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Stats from "./components/Stats/Stats";
import Steps from "./components/Steps/Steps";
import Testimonial from "./components/Testimonial/Testimonial";
import Work from "./components/Work/Work";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Steps />
      <About />
      <Testimonial />
      <Brands />
      <Work />
      <Stats />
      <News />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
