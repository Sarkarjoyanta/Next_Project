"use client"
import Link from 'next/link'
import { useState } from 'react';
import { FaBars } from "react-icons/fa";

const CommonNavbar = () => {
    let [show, setShow] = useState('true')

    return (
        <div className="bg-[#F8F9FC]">
        <nav className="max-w-container mx-auto px-2.5 sm:px-0">
            <div className="sm:flex sm:jutify-between relative">
                <div className="sm:w-[20%] pt-4">
                    <img src='images/Logo.png' alt="Logo" />
                </div>
                <div className="sm:w-[60%]">
                    <FaBars onClick={()=>setShow(!show)} className='absolute top-7 right-0 text-2xl block sm:hidden cursor-pointer' />
                    {
                        show
                        &&
                    <ul className="sm:flex sm:justify-end sm:gap-x-7 sm:leading-[80px] font-pop font-medium text-base sm:mr-4">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/team">Team</Link>
                        </li>
                        <li>
                            <Link href="/service">Service</Link>
                        </li>
                        <li>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link href="/testimonials">Testimonials</Link>
                        </li>
                    </ul>
                    }
                </div>
                <div className="sm:w-[20%]">
                <FaBars onClick={()=>setShow(!show)} className='absolute top-7 right-0 text-2xl block sm:hidden cursor-pointer' />
                    {
                        show
                        &&
                    <div className="flex sm:justify-end gap-x-4 sm:gap-x-7 mt-4 font-pop font-medium text-base"> 
                        <button className="inline-block border border-solid border-[#20B15A] py-2 sm:py-2.5 px-4 sm:px-6 rounded-sm sm:rounded-lg">Login</button>
                        <button className="inline-block border border-solid border-[#20B15A] bg-[#20B15A] py-2 sm:py-2.5 px-4 sm:px-6 rounded-sm sm:rounded-lg text-white">Register</button>
                    </div>
                    }
                </div>
            </div>
        </nav>
        </div>
    );
};

export default CommonNavbar;