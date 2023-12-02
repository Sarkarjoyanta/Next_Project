import Brands from "./Components/Brands";
import Feautureproject from "./Components/Feautureproject";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Statlist from "./Components/Statlist";
import Subscribe from "./Components/Subscribe";
import Worklist from "./Components/Worklist";

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Brands/>
      <Worklist/>
      <Statlist/>
      <Feautureproject/>
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default page;