import CommonNavbar from "../Components/CommonNavbar";
import Footer from "../Components/Footer";
import Subscribe from "../Components/Subscribe";
import Allprojects from "../Componentsproject/Allprojects";
import Projects from "../Componentsproject/Projects";

const page = () => {
    return (
        <div>
            <CommonNavbar/>
            <Projects/>
            <Allprojects/>
            <Subscribe/>
            <Footer/>
        </div>
    );
};

export default page;