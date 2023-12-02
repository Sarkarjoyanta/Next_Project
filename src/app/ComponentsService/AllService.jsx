async function allservice(){
    let res = await fetch("https://agency.teamrabbil.com/api/AllService");
    if(!res.ok){
        throw new Error("Allservice Calling Fail")
    }
    return res.json()
}
const AllService = async() => {
    const data = await allservice()
    return (
        <div className="py-10 sm:py-20">
            <section className="max-w-container mx-auto px-2.5 sm:px-0">
            <h5 className="font-pop font-medium text-base sm:text-xl text-[#20B15A] uppercase text-center sm:text-left">Our All Services</h5>
            <h3 className="w-auto sm:w-[430px] font-pop font-semibold text-xl sm:text-3xl sm:left-7 mt-2 sm:mt-4 leading-7 sm:leading-10 text-center sm:text-left">We Provide BestWeb design services</h3>
            <div className="flex flex-wrap sm:gap-x-6 mt-6 sm:mt-12 ">
                {
                    data.map((item,i)=>{
                        return(
                            <div key={i} className="bg-white drop-shadow-md w-full sm:w-[49%] rounded-xl mb-6 ">
                    <h3 className="px-4 sm:px-8 pt-4 sm:pt-8 font-pop font-semibold text-base sm:text-[26px] uppercase">{item['title']}</h3>
                    <p className="px-4 sm:px-8 font-pop font-regular text-sm sm:text-base text-[#9D9D9D] mt-3 sm:mt-5 mb-5 sm:mb-10 text-center sm:text-left">{item['des']}</p>
                    <div className="flex gap-x-3 sm:gap-x-6 p-3 sm:p-6">
                        <div className="w-[35%]">
                            <img className="w-full h-full rounded-xl" src={item['image1']} alt="image" />
                        </div>
                        <div className="w-[65%]">
                            <img className="w-full h-full rounded-xl" src={item['image2']} alt="image" />
                        </div>
                    </div>
                    <div className="flex gap-x-3 sm:gap-x-6 p-3 sm:p-6">
                        <div className="w-[65%]">
                            <img className="w-full h-full rounded-xl" src={item['image3']} alt="image" />
                        </div>
                        <div className="w-[35%]">
                            <img className="w-full h-full rounded-xl" src={item['image4']} alt="image" />
                        </div>
                    </div>
                </div>
                        )
                    })
                }
            </div>
            {/* <div className="flex mt-8 gap-x-8">
                <div className="bg-white drop-shadow-sm w-[50%] rounded-xl">
                    <h3 className="px-8 pt-8 font-pop font-semibold text-[26px] uppercase">Build & Launch without problems</h3>
                    <p className=" px-8 font-pop font-regular text-base text-[#9D9D9D] mt-5 mb-10">Increase your team’s productivity and save time with a bot that answers and fields customer inquiries</p>
                    <div className="flex">
                        <div>
                            <img className="w-full h-full" src="images/service-1.png" alt="service-1" />
                        </div>
                        <div>
                            <img className="w-full h-full" src="images/service-2.png" alt="service-2" />
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <img className="w-full h-full" src="images/service-3.png" alt="service-3" />
                        </div>
                        <div>
                            <img className="w-full h-full" src="images/service-4.png" alt="service-4" />
                        </div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-sm w-[50%] rounded-xl">
                    <h3 className="px-8 pt-8 font-pop font-semibold text-[26px] uppercase">Build & Launch without problems</h3>
                    <p className=" px-8 font-pop font-regular text-base text-[#9D9D9D] mt-5 mb-10">Increase your team’s productivity and save time with a bot that answers and fields customer inquiries</p>
                    <div className="flex">
                        <div>
                            <img className="w-full h-full" src="images/service-1.png" alt="service-1" />
                        </div>
                        <div>
                            <img className="w-full h-full" src="images/service-2.png" alt="service-2" />
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <img className="w-full h-full" src="images/service-3.png" alt="service-3" />
                        </div>
                        <div>
                            <img className="w-full h-full" src="images/service-4.png" alt="service-4" />
                        </div>
                    </div>
                </div>
            </div> */}
            </section>
        </div>
    );
};

export default AllService;