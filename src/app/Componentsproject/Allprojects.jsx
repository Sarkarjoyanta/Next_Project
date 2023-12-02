async function allproject(){
    let res = await fetch("https://agency.teamrabbil.com/api/AllProject");
    if(!res.ok){
        throw new Error("Allproject Calling Fail")
    }
    return res.json()
}
const Allprojects = async() => {
    const data = await allproject()
    return (
        <div className="py-10 sm:py-20">
            <section className="max-w-container mx-auto px-2.5 sm:px-0">
            <h5 className="font-pop font-medium text-base sm:text-xl text-[#20B15A] uppercase text-center sm:text-left">All Project</h5>
            <h3 className="w-auto sm:w-[470px] font-pop font-semibold text-xl sm:text-3xl sm:left-7 mt-2 sm:mt-4 leading-7 sm:leading-10 text-center sm:text-left">Better Agency/SEO Solution At Your Fingertips</h3>
            <div className="mt-6 sm:mt-12 flex flex-wrap sm:gap-x-6">
                {data.map((item,i)=>{
                    return(
                        <div className="bg-white drop-shadow-md p-4 sm:p-8 rounded-xl w-full sm:w-[32%] mb-5 sm:mb-6" key={i}>
                            <img className="rounded-2xl" src={item['image']} alt="project-1" />
                            <h3 className="font-pop font-semibold text-base sm:text-xl uppercase text-center mt-4 sm:mt-7">{item['title']}</h3>
                        </div>
                    )
                })}
            </div>
            </section>
        </div>
    );
};

export default Allprojects;