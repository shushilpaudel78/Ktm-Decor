import React from 'react'
import CustomizeNav from './CustomizeNav'
import twofingure from '/img/home/two_fingure.png'
import { CiSearch } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import Custom_Number from './Custom_Number';
import ktmdecor from '/img/home/logo.png'
import { IoIosCall } from "react-icons/io";


const CustomizeLayout = () => {
    return (
        <>
            <CustomizeNav />

            <div className="w-full h-auto bg-[#151a2b] py-8">

                <div className="h-auto w-[1200px] m-auto">

                    <div className="w-full h-auto">


                        <div className="flex items-center flex-col text-[#FFFFFF] font-aileron">
                            <div className='relative'>
                                <div className="absolute w-[10px] h-[40px] bg-[#FF904E] top-[91px] left-[199px]"></div>
                                <h1 className='text-[80px]  font-bold w-[50%] leading-[88px] text-center text-white'>customize your Ideas</h1>
                            </div>
                            <p className='font-aileron w-[50%] text-[16px] text-[#FFFFFFD9] py-4' >Custom neon LED stickers bring your unique designs to life, adding style and energy-efficient lighting.</p>

                        </div>



                        <div className="flex">


                            <div className="w-[75%]">
                                <div className="w-full h-[432px]">
                                    <img src={twofingure} alt="image" className='w-full h-full object-cover' />

                                </div>
                            </div>




                            <div className="w-[25%]">
                                <div className="w-full h-auto text-[#FFFFFF]  px-[10px]">

                                    <p className='text-center font-aileron py-2 text-[20px] font-normal border-white border-b-[1px]'>Customize Project</p>
                                    <div className="relative  flex justify-center py-2">
                                        <input type="text" placeholder='Search' className=' w-full h-full rounded-[20px] px-9 text-[#FFFFFF] bg-[#151a2b] border-2 py-[8px] font-aileron pr-7' />
                                        <CiSearch className='absolute left-3  top-4 text-[#FFFFFF] bold text-[20px]' />


                                    </div>

                                    <p className='border-b-2 py-2 font-aileron'>Choose Assets</p>


                                    <div className="flex flex-col py-3">

                                        <Custom_Number name="Select your font" />
                                        <Custom_Number name="Type your text" />
                                        <Custom_Number name="Mix your colours" />
                                        <Custom_Number name="Create your design" />


                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex justify-center my-4 font-aileron ">
                            <button type="button" className='bg-[#FF904E] flex gap-2 items-center pl-4 pr py-1 rounded-3xl'>
                                <p className='text-white  font-aileron text-[16px] '>Customize Your Design</p>
                                <div className='bg-white rounded-3xl ml-5'>
                                    <FaArrowRightLong className='m-4' />

                                </div>
                            </button>

                        </div>






                        <div className="w-full h-auto py-4 my-4">


                            <div className="flex items-center flex-col">
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


                            </div>



                        </div>





                    </div>





                </div>

            </div>





        </>
    )
}

export default CustomizeLayout
