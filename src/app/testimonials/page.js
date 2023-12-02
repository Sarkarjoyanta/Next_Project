import CommonNavbar from "../Components/CommonNavbar";
import Footer from "../Components/Footer";
import Subscribe from "../Components/Subscribe";
import Testimonial from "../Componentstestimonial/Testimonial";
import TestimonialList from "../Componentstestimonial/TestimonialList";

const page = () => {
    return (
        <div>
            <CommonNavbar/>
            <Testimonial/>
            <TestimonialList/>
            <Subscribe/>
            <Footer/>
        </div>
    );
};

export default page;