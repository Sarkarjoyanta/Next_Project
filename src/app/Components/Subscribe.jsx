"use client"
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const Subscribe = () => {

    let [FormValue,SetFormValue]=useState({email:""})

    const inputOnChange = (name,value) => {
        SetFormValue(
            FormValue=>({
                ...FormValue,
                [name]:value
            })
        )
    }

    const FormSubmit = async (e) => {
        e.preventDefault();
        if (FormValue.email.length === 0) {
            toast.error('Email Required');
        }else {
            const rawResponse = await axios.post('/api/contact',FormValue);
        }
    }




    return (
        <div className="py-10 sm:py-20">
            <section className="max-w-container mx-auto px-2.5 sm:px-0">
                <div className="text-center">
                    <h5 className="font-pop font-medium uppercase text-base sm:text-xl text-[#20B15A]">SUBSCRIBE</h5>
                    <h3 className="w-auto sm:w-[400px] mx-auto font-pop font-semibold text-xl sm:text-3xl capitalize mt-3 sm:mt-5 mb-2 sm:mb-3">Subscribe to get the latest news about us</h3>
                    <p className="font-pop font-regular text-sm sm:text-base text-[#8B8B8B]">Please drop your email below to get daily update about what we do</p>
                    <div className="relative w-auto sm:w-[596px] mx-auto mt-5 sm:mt-10">
                        <form onSubmit={FormSubmit} action="">
                            <input  value={FormValue.email} onChange={(e)=>{inputOnChange('email',e.target.value)}} className="w-full py-3 sm:py-5 px-2 sm:px-4 rounded-xl sm:rounded-2xl border border-solid border-[#8B8B8B] placeholder:font-pop placeholder:font-regular placeholder:text-base" type="email" placeholder="hello@example.com"/>
                            <button type={"submit"} className="absolute right-1 top-1 border border-solid border-[#F55F1D] py-2 sm:py-4 px-3 sm:px-6 rounded-xl bg-[#F55F1D] font-pop font-medium text-base text-white">Subscribe</button>
                        </form>
                    </div>
                </div>
                <Toaster position="bottom-center"/>
            </section>
        </div>
    );
};

export default Subscribe;