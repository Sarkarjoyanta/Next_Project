async function hero(){
    let res = await fetch("https://agency.teamrabbil.com/api/HeroList");
    if(!res.ok){
        throw new Error("Hero Section Calling Fail");
    }
    return res.json();
}
const Hero = async() => {
    const data = await hero();
    return (
        <div className="bg-[#D7F5DC] pt-6 sm:pt-12 pb-14 sm:pb-[180px] sm:relative">
            <section className="max-w-container mx-auto px-2.5 sm:px-0">
                <div className="sm:flex">
                    <div className="sm:w-1/2 text-center sm:text-left flex items-center">
                        <div>
                            <h2 className="w-auto sm:w-[489px] font-pop font-bold text-3xl sm:text-5xl leading-10 sm:leading-[65px] mb-2 sm:mb-2.5">Increase Your Customers Loyalty and Satisfaction</h2>
                            <p className="w-auto sm:w-[472px] font-pop font-regular text-base  leading-6 sm:leading-7 mb-5 sm:mb-12">We help businesses like yours earn more customers, standout from competitors, make more money</p>
                            <a className="inline-block border border-solid border-[#20B15A] bg-[#20B15A] py-2.5 sm:py-5 px-4 sm:px-8 rounded-lg sm:rounded-2xl text-white" href="#">Get Started</a>
                        </div>
                    </div>
                    <div className="sm:w-1/2">
                        <div className="sm:flex sm:gap-x-7 mt-5 sm:mt-0 mb-3 sm:mb-5">
                            <div className="w-full sm:w-[35%] mb-5 sm:mb-0">
                                {
                                <img className="w-full h-full rounded-xl" src={data['image1']} alt="image" />
                                } 
                            </div>
                            <div className="w-full sm:w-[65%]">
                                {
                                <img className="w-full h-full rounded-xl" src={data['image2']} alt="image" />
                                } 
                            </div>
                        </div>
                        <div className="sm:flex sm:gap-x-7">
                            <div className="w-full sm:w-[65%] mt-5 sm:mt-0">
                                {
                                <img className="w-full h-full rounded-xl" src={data['image3']} alt="image" />
                                } 
                            </div>
                            <div className="w-full sm:w-[35%] mt-5 sm:mt-0">
                                {
                                <img className="w-full h-full rounded-xl" src={data['image4']} alt="image" />
                                } 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;