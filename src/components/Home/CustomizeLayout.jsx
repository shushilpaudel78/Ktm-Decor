import React from 'react'
import CustomizeNav from './CustomizeNav'
import twofingure from '/img/home/two_fingure.png'
import { CiSearch } from "react-icons/ci";

const CustomizeLayout = () => {
    return (
        <>
            <CustomizeNav />

            <div className="w-full h-auto bg-[#151a2b] py-8">

                <div className="h-auto w-[1200px] m-auto">

                    <div className="w-full h-auto">

                        <div className="flex items-center flex-col text-[#FFFFFF] font-aileron">
                            <h1 className='text-[80px]  font-bold w-[50%] leading-[88px] text-center text-white'>customize your Ideas</h1>
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
                                        <input type="text" placeholder='Search' className=' w-full h-full rounded-[20px] px-9 text-[#FFFFFF] bg-[#151a2b] border-2 py-[8px] font-aileron pr-7'/>
                                        <CiSearch className='absolute left-3  top-4 text-[#FFFFFF] bold text-[20px]' />


                                    </div>

                                    <p className='border-b-2 py-2'>Choose Assets</p>
                                    

                                    <div className="flex">


                                    </div>


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
