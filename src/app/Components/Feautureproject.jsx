async function feautureproject(){
    let res = await fetch("https://agency.teamrabbil.com/api/FeaturedProject");
    if(!res.ok){
        throw new Error("Feautured Projects Calling Fail")
    }
    return res.json();
}
const Feautureproject = async() => {
    const data = await feautureproject()
    return (
        <div className="py-8 sm:py-16 bg-[#F0FDF4]">
            <section className="max-w-container mx-auto px-2.5 sm:px-0">
                <h2 className="font-pop font-medium text-base sm:text-xl text-[#20B15A] uppercase text-center sm:text-left">Featured Project</h2>
                <h3 className="w-auto sm:w-[495px] font-pop font-semibold text-2xl sm:text-3xl mt-2 sm:mt-4 leading-7 sm:leading-10 mb-8 sm:mb-16 text-center sm:text-left">We provide the Perfect Solution to your business growth</h3>
                <div>
                    <div className="sm:flex sm:flex-wrap sm:gap-x-5">
                        {
                            data.map((item,i)=>{
                                return(
                                    <div className="w-full sm:w-[32%] mb-5" key={i}>
                                        <img className="rounded-2xl" src={item['image']} alt="image" />
                                        <p className="font-pop font-regular text-sm text-[#2E3E5C] mt-2 sm:mt-4 mb-1.5 sm:mb-2.5">App Design - June 20, 2022</p>
                                         <h3 className="font-pop font-bold text-base sm:text-xl text-[#1E1F4B]">App Redesign</h3> 
                                    </div>
                                )
                            })
                        }
                    </div>
                        {/* <p className="font-pop font-regular text-sm text-[#2E3E5C] mt-4 mb-2.5">App Design - June 20, 2022</p>
                        <h3 className="font-pop font-bold text-2xl text-[#1E1F4B]">App Redesign</h3> */}
                    {/* <div className="w-1/2">
                        <img className="rounded-3xl" src="images/Mask (1).png" alt="Mask(1)" />
                        <p className="font-pop font-regular text-sm text-[#2E3E5C] mt-4 mb-2.5">App Design - June 20, 2022</p>
                        <h3 className="font-pop font-bold text-2xl text-[#1E1F4B]">App Redesign</h3>
                    </div> */}
                    {/* <div className="w-1/2">
                        <div className="flex gap-x-7 mb-7">
                            <div>
                                <img className="rounded-3xl" src="images/Mask (2).png" alt="Mask(2)" />
                                <p className="font-pop font-regular text-sm text-[#2E3E5C] mt-3 mb-2">App Design - June 20, 2022</p>
                                <h3 className="w-[300px] font-pop font-bold text-[18px] text-[#2E3E5C]">Redesign channel website landng page</h3>
                            </div>
                            <div>
                                <img className="rounded-3xl" src="images/Mask (3).png" alt="Mask(3)" />
                                <p className="font-pop font-regular text-sm text-[#2E3E5C] mt-3 mb-2">App Design - June 20, 2022</p>
                                <h3 className="w-[300px] font-pop font-bold text-[18px] text-[#2E3E5C]">Redesign channel website landng page</h3>
                            </div>
                        </div>
                        <div className="flex gap-x-7">
                            <div>
                                <img className="rounded-3xl" src="images/Mask (2).png" alt="Mask(2)" />
                                <p className="font-pop font-regular text-sm text-[#2E3E5C] mt-3 mb-2">App Design - June 20, 2022</p>
                                <h3 className="w-[300px] font-pop font-bold text-[18px] text-[#2E3E5C]">Redesign channel website landng page</h3>
                            </div>
                            <div>
                                <img className="rounded-3xl" src="images/Mask (3).png" alt="Mask(3)" />
                                <p className="font-pop font-regular text-sm text-[#2E3E5C] mt-3 mb-2">App Design - June 20, 2022</p>
                                <h3 className="w-[300px] font-pop font-bold text-[18px] text-[#2E3E5C]">Redesign channel website landng page</h3>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default Feautureproject;