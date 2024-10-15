import React from 'react'
import { Link } from 'react-router-dom'

const CustomFooter = () => {
    return (
        <>

            <div className="w-full h-auto bg-[#1f2435] py-4 px-[10px]">
                <div className="max-w-[1200px] m-auto">

                    <div className="flex text-white ">

                        <div className="w-1/3 border-r-[#FF904E] border-r-[2px] px-2">
                        
                            <div className="flex justify-center  font-aileron text-[14px] font-normal">
                                <p>2024 Ktm Decor. All rights reserved. </p>


                            </div>


                        </div>

                        <div className="w-1/3 border-r-[#FF904E] border-r-[2px] px-2">
                            <div className="flex gap-4 font-aileron text-[14px] font-normal justify-center">
                                <Link>Privacy Policy</Link>
                                <Link>Refund Policy</Link>
                                <Link>Shipping Policy</Link>
                            </div>


                        </div>

                        <div className="w-1/3 px-2">
                            <div className="flex justify-center  font-aileron text-[14px] font-normal">
                                <p>Powered by MarginTop Solutions</p>


                            </div>


                        </div>




                    </div>


                </div>



            </div>

        </>
    )
}

export default CustomFooter
