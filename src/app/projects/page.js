import CommonNavbar from "../Components/CommonNavbar";
import Footer from "../Components/Footer";
import Subscribe from "../Components/Subscribe";
import Allprojects from "../Componentsproject/Allprojects";
import Project from "../Componentsproject/project";

const page = () => {
    return (
        <div>
            <CommonNavbar/>
            <Project/>
            <Allprojects/>
            <Subscribe/>
            <Footer/>
        </div>
    );
};

export default page;