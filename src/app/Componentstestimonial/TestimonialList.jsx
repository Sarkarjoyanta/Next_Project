async function testimonial(){
    let res = await fetch("https://agency.teamrabbil.com/api/TestimonialList");
    if(!res.ok){
        throw new Error("Testimonial Calling Fail")
    }
    return res.json()
}

const TestimonialList = async() => {
    const data = await testimonial()
    return (
        <div className='py-10 sm:py-20'>
            <section className='max-w-container mx-auto px-2.5 sm:px-0'>
            <h5 className="font-pop font-medium text-base sm:text-xl text-[#20B15A] uppercase text-center sm:text-left">Testimonial List</h5>
            <h3 className="w-auto sm:w-[470px] font-pop font-semibold text-xl sm:text-3xl sm:left-7 mt-4 sm:mt-4 leading-7 sm:leading-10 text-center sm:text-left">Better Agency/SEO Solution At Your Fingertips</h3>
            <div className='flex flex-wrap mt-6 sm:mt-12 sm:gap-x-6'>
                    {
                        data.map((item,i)=>{
                            return(
                                <div className="w-full sm:w-[32%] bg-white drop-shadow-md  py-6 sm:py-12 px-3 sm:px-6 text-center rounded-xl mb-6" key={i}>
                                    <img className='mx-auto rounded-xl' src={item['image']} alt="image" />
                                    <p className='font-pop font-regular text-sm sm:text-base text-[#9D9D9D] leading-5 sm:leading-7 mt-5 sm:mt-10  mb-3 sm:mb-6'>{item['msg']}</p>
                                    <h3 className='font-pop font-semibold text-base sm:text-[26px]'>{item['name']}</h3>
                                    <h5 className='font-pop font-regular text-sm sm:text-base mt-2'>{item['designation']}</h5>
                                </div>
                            )
                        })
                    }
            </div>
            </section>
        </div>
    );
};

export default TestimonialList;