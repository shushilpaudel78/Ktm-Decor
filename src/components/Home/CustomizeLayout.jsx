import React from 'react'
import CustomizeNav from './CustomizeNav'
import twofingure from '/img/home/two_fingure.png'
import CustomFooter from './CustomFooter';
import Custom_Number from './Custom_Number';
import ktmdecor from '/img/home/logo.png'

import { CiSearch } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import KtmHero from './KtmHero';
import Partial_hero from './Partial_hero';





const CustomizeLayout = () => {
    return (
        <>

            <KtmHero />
            <Partial_hero />

            <CustomizeNav />



            <div className="w-full h-auto bg-[#151a2b] py-8">

                <div className="h-auto w-[1200px] m-auto">

                    <div className="w-full h-auto">


                        <div className="flex items-center flex-col text-[#FFFFFF] font-aileron">
                            <div className='relative flex flex-col '>
                                <div className="absolute w-[12px] h-[50px] bg-[#FF904E] top-[96px] left-[260px]"></div>
                                <h1 className='text-[80px]  font-bold w-[90%] leading-[88px] text-center text-white'>customize your Ideas</h1>
                            </div>
                            <p className='font-aileron w-[52%] text-[16px] text-[#FFFFFFD9] py-6' >Custom neon LED stickers bring your unique designs to life, adding style and energy-efficient lighting.</p>

                        </div>



                        <div className="flex">


                            <div className="w-[75%]">
                                <div className="w-full h-[678px]">
                                    <img src={twofingure} alt="image" className='w-full h-full object-fill' />

                                </div>
                            </div>




                            <div className="w-[25%] bg-[#252939] rounded-lg pt-4">
                                <div className="w-full h-auto text-[#FFFFFF]  px-[30px]">

                                    <p className=' font-aileron py-1 text-[20px] font-medium'>Customize Project</p>
                                    <hr className='mb-4' />
                                    <div className="relative  flex justify-center py-3">
                                        <input type="text" placeholder='Search' className=' w-full h-full rounded-[20px] px-9 text-[#FFFFFF] bg-[#151a2b] border-2 py-[8px] font-aileron pr-7' />
                                        <CiSearch className='absolute left-3  top-5 text-[#FFFFFF] bold text-[20px]' />


                                    </div>

                                    <p className=' py-2 font-aileron'>Choose Assets</p>
                                    <hr />

                                    <div className="flex flex-col py-3">

                                        <Custom_Number name="Select your font" number="1" />
                                        <Custom_Number name="Type your text" number="2" />
                                        <Custom_Number name="Mix your colours " number="3" />
                                        <Custom_Number name="Create your design" number="4" />


                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex justify-center my-4 font-aileron py-3 ">
                            <button type="button" className='bg-[#FF904E] flex gap-2 items-center pl-4 pr py-1 rounded-3xl'>
                                <p className='text-white  font-aileron text-[16px] '>Customize Your Design</p>
                                <div className='bg-white rounded-3xl ml-5'>
                                    <FaArrowRightLong className='m-4' />

                                </div>
                            </button>

                        </div>






                        <div className="w-full h-auto py-4 my-4">


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

            </div>



            <CustomFooter />








        </>
    )
}

export default CustomizeLayout
