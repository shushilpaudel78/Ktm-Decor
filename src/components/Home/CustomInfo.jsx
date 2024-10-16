import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import ktmdecor from '/img/home/logo.png'
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";


const CustomInfo = () => {
    return (
        <>
            <div className="w-full h-auto bg-[#010619]">
                <div className="max-w-[1200px] m-auto ">


                    <div className="w-full h-auto py-4">


                        <div className="flex items-center flex-col py-6">
                            <div className="w-[218px] h-[165px]">
                                <img src={ktmdecor} alt="img" className='w-full h-full object-cover' />
                            </div>

                            <p className='text-white  text-center text-[16px] font-aileron font-medium w-[63%]'>Experience the perfect fusion of rustic charm, minimalist elegance, and modern craftsmanship with our
                                LED neon lights. Designed to enhance any space, our neon lights blend traditional
                                aesthetics with contemporary design, creating a striking balance of warmth and modernity.</p>

                            <div className="flex gap-2 items-center my-3">
                                <div className='p-2 rounded-2xl bg-white'>
                                    <IoIosCall className='text-red-500' />
                                </div>

                                <p className='font-aileron text-white font-normal text-[16px]'>+977-9845956700 | +977-9845926945</p>

                            </div>

                            <ul className='flex text-white text-[25px] gap-2'>
                                <li><Link><FaFacebook /></Link></li>
                                <li><Link><FaInstagram /></Link></li>
                                <li><Link><CiTwitter /></Link></li>
                                <li><Link><MdOutlineEmail /></Link></li>


                            </ul>



                        </div>



                    </div>


                </div>
            </div>



        </>
    )
}

export default CustomInfo
