async function team(){
    let res = await fetch("https://agency.teamrabbil.com/api/TeamList");
    if(!res.ok){
        throw new Error("Team List Calling Fail")
    }
    return res.json()
}

import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTwitter  } from "react-icons/io";
import { FaInstagram    } from "react-icons/fa";

const TeamMember = async() => {
    const data = await team()
    return (
        <div className="py-10 sm:py-20">
            <section className="max-w-container mx-auto px-2.5 sm:px-0">
                <h5 className="font-pop font-medium text-base sm:text-xl text-[#20B15A] uppercase text-center sm:text-left">Our Team Member</h5>
                <h3 className="w-auto sm:w-[406px] font-pop font-semibold text-xl sm:text-3xl sm:left-7 mt-2 sm:mt-4 text-center sm:text-left">Check our awesome team members</h3>
                <div className="sm:flex sm:gap-x-8 mt-8 sm:mt-16">
                            {
                                data.map((item,i)=>{
                                    return(
                                        <div className="bg-white rounded-b-2xl drop-shadow-md mb-6 sm:mb-0" key={i}>
                                            <div className="relative">
                                            <img className="rounded-t-2xl w-full sm:w-auto" src={item['image']} alt="team-1" />
                                            <div className="bg-white flex gap-x-6 sm:gap-x-8 p-4 rounded-3xl absolute bottom-7 left-[50%] translate-x-[-50%]">
                                                <a href="#"><GrFacebookOption className=" text-base text-[#737588] border-r bor 9`der-solid border-[#E3E3E3]"/></a>
                                                <a href="#"><IoLogoTwitter className=" text-base text-[#737588] border-r border-solid border-[#E3E3E3]"/></a>
                                                <a href="#"><FaInstagram className="text-base text-[#737588]"/></a>
                                            </div>
                                        </div>
                                        <div className="p-3 sm:p-5">
                                            <h3 className="font-pop font-semibold text-xl sm:text-3xl text-center">{item['name']}</h3>
                                            <p className="mt-2 font-pop font-semibold  text-sm sm:text-base text-center">{item['bio']}</p>
                                        </div>
                                        
                                        </div>
                                    )
                                })
                            }
                </div>
            </section>
        </div>
    );
};

export default TeamMember;