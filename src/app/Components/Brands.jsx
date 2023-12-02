async function brands(){
    let res = await fetch("https://agency.teamrabbil.com/api/BrandList");
    if(!res.ok){
        throw new Error("Brands Calling Fail");
    }
    return res.json();
}
const Brands = async() => {
    const data = await brands()
    return (
        <div className="bg-[#F8FFF9] py-[24px] sm:absolute sm:bottom-[-240px] sm:left-0 sm:w-full">
            <section className="max-w-container mx-auto px-2.5 sm:px-0">
                <div className="flex flex-wrap justify-between ">
                        {
                            data.map((item,i)=>{
                                return(
                                    <div className=" w-full sm:w-auto mb-4 sm:mb-0" key={i}>
                                        <img className="mx-auto"  src={item['image']} alt="image" />
                                    </div>
                                )
                            })
                        }
                </div>
            </section>
        </div>
    );
};

export default Brands;