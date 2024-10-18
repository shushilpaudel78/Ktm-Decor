import React from 'react'
import CustomizeNav from './CustomizeNav'
import twofingure from '/img/home/sp.png'
import CustomFooter from './CustomFooter';
import Custom_Number from './Custom_Number';
import CustimizeButton from '../Button/CustimizeButton';
import CustomInfo from './CustomInfo';
import { CiSearch } from "react-icons/ci";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useState } from 'react';


// import KtmHero from './KtmHero';
// import Partial_hero from './Partial_hero';








const CustomizeLayout = () => {


    const [inputvalue, setInputvalue] = useState()


    const inputChange = (event) => {
        setInputvalue(event.target.value)

    }



    const [dtext] = useTypewriter({
        words:['Good Morning Everybody', ' I am  Designer', 'I am Developer'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:40,
    })




    return (
        <>

            {/* <KtmHero /> */}
            {/* <Partial_hero /> */}


            <CustomizeNav />

            <div className="w-full  h-auto bg-[#010619] ">
                <div className="w-full h-auto bg-[#151a2b]  py-8 rounded-b-[350px] md:rounded-none ">
                    <div className=" max-w-[1200px] m-auto">




                        <div className="w-full h-auto lg:px-[10px]">

                            <div className="flex items-center flex-col text-[#FFFFFF] font-aileron ">
                                <div className='flex justify-center relative '>
                                    <div className="absolute w-[12px] h-[40px] bg-[#FF904E] top-[96px] left-[302px] lg:hidden "></div>
                                    <h1 className='text-[80px] md:text-[70px] text-wrap  font-bold w-[90%] lg:w-full leading-[88px] text-center text-[#FFFFFF]'>customize your Ideas</h1>
                                </div>

                                <p className='font-aileron w-[52%] sm:w-full text-[16px] text-[#FFFFFFD9] text-center py-4' >Custom neon LED stickers bring your unique designs to life, adding style and energy-efficient lighting.</p>

                            </div>





                            <div className="flex mb-6 flex-wrap ">

                                <div className="w-[75%] lg:w-[100%]">
                                    <div className="w-full h-auto relative">
                                        <p className='absolute  inset-0 m-auto w-1/3 h-1/2 text-[40px]  text-[#ffff] font-aileron font-bold uppercase'>
                                           <span>{inputvalue}</span>
                                           <span style={{color:'red'}}> {dtext}</span>
                                            <span><Cursor /></span>
                                           
                                        </p>

                                        <div className="w-full h-[678px] sm:h-[300px] md:h-[500px] overflow-hidden rounded-bl-[250px] ">
                                            <img src={twofingure} alt="image" className='w-full h-full object-fill' />
                                        </div>

                                    </div>

                                </div>

                                <div className="w-[25%]  lg:w-[100%] bg-gradient-to-b from-[#252939] to-[#151a2b] rounded-tr-[10px] pt-4 rounded-b-[140px]">
                                    <div className="w-full h-auto text-[#FFFFFF]  px-[30px]">

                                        <p className=' font-aileron py-1 text-[20px] font-medium'>Customize Project</p>
                                        <hr className='mb-4 border-t w-[80%]' />

                                        {/* <div className="relative  flex justify-center py-3 sm:w-[80%]">
                                            <input type="text" placeholder='Search' className=' w-full h-full  rounded-[20px] px-9 text-[#FFFFFF] bg-[#151a2b] border-2 py-[8px] font-aileron pr-7' />
                                            <CiSearch className='absolute left-3  top-5 text-[#FFFFFF] bold text-[20px]' />
                                        </div> */}

                                        <div className='flex justify-start items-center rounded-[20px] text-white bg-[#151a2b] border-2'>
                                            <div className='pl-2'>
                                                <CiSearch className=' text-[#FFFFFF] bold text-[20px]' />
                                            </div>
                                            <div className=' w-full sm:w-[80%]'>
                                                <input type="text" value={inputvalue} onChange={inputChange} placeholder='Search' className=' w-full h-full outline-none  rounded-[20px] px-2 text-[#FFFFFF] bg-transparent  py-[8px] font-aileron pr-7' />

                                            </div>


                                        </div>

                                        <p className=' py-2 font-aileron'>Choose Assets</p>
                                        <hr className='border-t w-[70%]' />

                                        <div className="flex flex-col py-3">
                                            <Custom_Number name="Select your font" number="1" />
                                            <Custom_Number name="Type your text" number="2" />
                                            <Custom_Number name="Mix your colours " number="3" />
                                            <Custom_Number name="Create your design" number="4" />

                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div className="flex justify-center  mb-[-62px] font-aileron py-3 ">
                                <CustimizeButton name="Customize Your Design" />
                            </div>


                        </div>







                    </div>
                </div>
            </div>


            <CustomInfo />
            <CustomFooter />



        </>
    )
}

export default CustomizeLayout
