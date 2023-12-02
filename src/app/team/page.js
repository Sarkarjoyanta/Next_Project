import CommonNavbar from "../Components/CommonNavbar";
import Footer from "../Components/Footer";
import Subscribe from "../Components/Subscribe";
import Team from "../ComponentsTeam/Team";
import TeamMember from "../ComponentsTeam/TeamMember";

const page = () => {
    return (
        <div>
            <CommonNavbar/>
            <Team/>
            <TeamMember/>
            <Subscribe/>
            <Footer/>
        </div>
    );
};

export default page;