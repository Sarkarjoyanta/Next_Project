async function statlist(){
    let res = await fetch("https://agency.teamrabbil.com/api/StatList");
    if(!res.ok){
        throw new Error("StatList Callig Fail")
    }
    return res.json()
}
const Statlist = async() => {
    const data = await statlist()
    return (
        <div className="py-8 sm:py-16">
            <section className="max-w-container mx-auto px-2.5 sm:px-0">
                <div className="sm:flex sm:justify-between">
                    <div className="bg-white drop-shadow-md py-6 sm:py-12 px-8 sm:px-20 rounded-xl text-center ">
                        <img className="mx-auto" src="images/icon-1.png" alt="icon-1" />
                        <h2 className="font-pop font-bold text-3xl mt-5 mb-2">
                            {
                                data['customers']
                            }
                        </h2>
                        <h5 className="font-pop font-medium text-base">Customers</h5>
                    </div>
                    <div className="bg-white drop-shadow-md py-6 sm:py-12 px-8 sm:px-20 rounded-xl text-center mt-5 sm:mt-0">
                        <img className="mx-auto" src="images/icon-2.png" alt="icon-2" />
                        <h2 className="font-pop font-bold text-3xl mt-5 mb-2">
                            {
                                data['followers']
                            }
                        </h2>
                        <h5 className="font-pop font-medium text-base">Followers</h5>
                    </div>
                    <div className="bg-white drop-shadow-md py-6 sm:py-12 px-8 sm:px-20 rounded-xl text-center mt-5 sm:mt-0">
                        <img className="mx-auto" src="images/icon-3.png" alt="icon-3" />
                        <h2 className="font-pop font-bold text-3xl mt-5 mb-2">
                            {
                                data['solved']
                            }
                        </h2>
                        <h5 className="font-pop font-medium text-base">solved</h5>
                    </div>
                    <div className="bg-white drop-shadow-md py-6 sm:py-12 px-8 sm:px-20 mt-5 sm:mt-0 rounded-xl text-center">
                        <img className="mx-auto" src="images/icon-4.png" alt="icon-4" />
                        <h2 className="font-pop font-bold text-3xl mt-5 mb-2">
                            {
                                data['projects']
                            }
                        </h2>
                        <h5 className="font-pop font-medium text-base">Projects</h5>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Statlist;