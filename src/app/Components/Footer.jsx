async function socialLink(){
    let res = await fetch("https://agency.teamrabbil.com/api/SocialLink");
    if(!res.ok){
        throw new Error("Social Link Calling Fail");
    }
    return res.json();
}

// import { GrFacebookOption } from "react-icons/gr";
// import { IoLogoTwitter  } from "react-icons/io";
// import { FaInstagram, FaLinkedinIn    } from "react-icons/fa";

const Footer = async() => {
    const data = await socialLink()
    return (
        <div className="bg-[#000] pt-10 sm:pt-20 pb-4 sm:pb-8">
            <footer className="max-w-container mx-auto px-2.5 sm:px-0">
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-[50%]">
                        <h2 className="font-pop font-bold text-xl sm:text-[39px] text-white text-center sm:text-left">WEB LOGO</h2>
                        <p className="w-auto sm:w-[308px] leading-6 sm:leading-8 mt-3 sm:mt-5 text-white text-sm sm:text-base font-pop font-regular text-center sm:text-left">Some footer text about the Agency. Just a little description to help people understand you better</p>
                        <div className="text-white flex justify-center sm:justify-normal gap-x-2 sm:gap-x-4 mt-3 sm:mt-5">
                                {
                                    data.map((item,i)=>{
                                        return(
                                            <div className="" key={i}>
                                                <a className="inline-block border border-solid border-[#20B15A] rounded-full p-2.5 bg-[#20B15A] text-base sm:text-2xl " href={item['link']}>{item['name']}</a> 
                                            </div>
                                        )
                                    })
                                }
                        </div>
                    </div>
                    <div className="w-full sm:w-[30%] mt-5">
                        <h2 className="font-pop font-semibold text-[18px] sm:text-xl text-white text-center sm:text-left">Quick Links</h2>
                        <ul className="font-pop font-regular text-white  text-sm sm:text-base mt-4 text-center sm:text-left">
                            <li className="mt-3 sm:mt-6">
                                <a href="#">Services</a>
                            </li>
                            <li className="mt-3 sm:mt-6">
                                <a href="#">Portfolio</a>
                            </li>
                            <li className="mt-3 sm:mt-6">
                                <a href="#">About Us</a>
                            </li>
                            <li className="mt-3 sm:mt-6">
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-[20%] mt-5">
                        <h2 className="font-pop font-semibold text-[18px] sm:text-xl text-white text-center sm:text-left">Address</h2>
                        <p className="font-pop font-regular text-sm sm:text-base text-white sm:text-left mt-4 sm:mt-6 leading-7 text-center">Design Agency Head Office.<br/> Airport Road <br/> United Arab Emirate</p>
                    </div>
                </div>
            </footer>
            <div className="py-6 sm:py-16">
                <section className="max-w-container mx-auto px-2.5 sm:px-0">
                    <p className="font-pop font-regular text-sm sm:text-xl text-white text-center sm:text-left">Copyright Design Agency 2022</p>
                </section>
            </div>
        </div>
    );
};

export default Footer;