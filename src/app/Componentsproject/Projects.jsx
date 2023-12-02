import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const Projects = () => {
    return (
        <div className="bg-[#F8F9FC] py-10 sm:py-20">
            <section className='max-w-container mx-auto px-2.5 sm:px-0'>
                <h2 className='font-pop font-semibold text-xl sm:text-[40px] text-[#101A29] mb-2 sm:mb-4 text-center sm:text-left'>All Project</h2>
                <h5 className='flex justify-center sm:justify-normal gap-x-2 items-center font-pop font-semibold text-sm sm:text-base text-[#101A29]'><Link href="/">Home</Link><FaAngleRight  className='text-sm sm:text-base'/><span className='text-[#20B15A]'>All Project</span></h5>
            </section>
            
        </div>
    );
};

export default Projects;