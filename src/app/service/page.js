import CommonNavbar from "../Components/CommonNavbar";
import Footer from "../Components/Footer";
import Subscribe from "../Components/Subscribe";
import AllService from "../ComponentsService/AllService";
import Service from "../ComponentsService/Service";

const page = () => {
    return (
        <div>
            <CommonNavbar/>
            <Service/>
            <AllService/>
            <Subscribe/>
            <Footer/>
        </div>
    );
};

export default page;