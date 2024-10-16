import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
import Bag from '/img/home/bag.png'
import kimage from '/img/home/kimage.png'
import { FaArrowRightLong } from "react-icons/fa6";



const KtmHero = () => {
    return (
        <>
            <Nav />
            <div className="w-full h-auto py-[100px] bg-[#021b44] px-[10px]">
                <div className="w-[1200px] m-auto">

                    <div className="w-full h-auto flex">

                        <div className="w-1/3">
                            <ul className='flex flex-col text-[#FFFFFFA6] font-aileron font-normal gap-3 text-[20px] pt-[250px]'>
                                <li><Link  className='active:border-[0.2px] active:px-2 active:py-2 active:rounded-tr-2xl'>Home</Link></li>
                                <li><Link className='active:border-[0.2px] active:px-2 active:py-2 active:rounded-tr-2xl'>Catagories</Link></li>
                                <li><Link className='active:border-[0.2px] active:px-2 active:py-2 active:rounded-tr-2xl'>Customize</Link></li>
                                <li><Link className='active:border-[0.2px] active:px-2 active:py-2 active:rounded-tr-2xl'>Why KTM Decor?</Link></li>


                            </ul>

                        </div>

                        <div className="w-2/3">

                            <div className="flex flex-col relative ml-[200px]">
                                <div className='absolute w-[12px] h-[40px] bg-[#FF904E] top-[-20px]'></div>
                                <div className='absolute w-[15px] h-[15px] bg-[#FF904E] rounded-3xl top-[30px] left-[-15px]'></div>

                                <h1 className='text-white font-aileron  text-[80px] font-bold leading-[30px]'>ktm decor</h1>
                                <h1 className='uppercase text-[#FFFFFF]'><span className='font-montecarlo text-[68px] text-[#FF904E]'>A</span>rt</h1>
                                <p className='text-white font-aileron pl-[70px] w-[60%]'>Transform any room into a vibrant, modern space with KTM Decor's neon LED light stickers.</p>
                            </div>


                            <div className="flex flex-col relative mt-[400px]">


                                <div className="absolute w-[319px]  h-[398px] bottom-0 left-[200px]">
                                    <img src={Bag} alt="bag" className='w-full h-full object-cover' />
                                </div>


                                <div className="absolute w-[272px] h-[366px]  bottom-0 left-0">
                                    <img src={kimage} alt="k" className='w-full h-full object-cover' />
                                </div>


                            </div>

                            <div className="w-fullflex justify-center">

                            <button type="button" className='bg-[#FF904E] flex gap-2 items-center pl-4 pr py-1 rounded-3xl'>
                                <p className='text-white  font-aileron text-[16px] '>Explore Now</p>
                                <div className='bg-white rounded-3xl ml-5'>
                                    <FaArrowRightLong className='m-4' />

                                </div>
                            </button>

                            </div>



                        </div>






                    </div>



                </div>

            </div>


        </>
    )
}

export default KtmHero
