async function worklist(){
    let res = await fetch("https://agency.teamrabbil.com/api/WorkList");
    if(!res.ok){
        throw new Error("Worklist Calling Fail")
    }
    return res.json()
}

import { IoIosArrowRoundForward } from "react-icons/io";
const Worklist = async() => {
    const data = await worklist()
    return (
        <div className="py-8 sm:py-16">
            <section className="max-w-container mx-auto px-2.5 sm:px-0">
                <h5 className="font-pop font-medium text-[18px] sm:text-xl text-[#20B15A] uppercase text-center sm:text-left">Work List</h5>
                <h3 className="w-auto sm:w-[495px] font-pop font-semibold text-xl sm:text-3xl mt-2 sm:mt-4 leading-8 sm:leading-10 text-center sm:text-left">We provide the Perfect Solution to your business growth</h3>
                <div className="sm:flex sm:justify-between mt-8 sm:mt-20 text-center sm:text-left">
                        {
                            data.map((item,i)=>{
                                return(
                                    <div key={i}>
                                        <h2 className="font-pop font-bold text-xl sm:text-2xl mb-2 sm:mb-4 mt-2 sm:mt-4">{item['step']}</h2>
                                        <h3 className="font-pop font-semibold text-base sm:text-2xl mb-2 sm:mb-4 mt-2 sm:mt-4">{item['title']}</h3>
                                        <p className="w-auto sm:w-[299px] font-pop font-regular text-sm sm:text-base mb-7">{item['des']}</p>
                                    </div>
                                )
                            })
                        }
                    
                </div>
            </section>
        </div>
    );
};

export default Worklist;