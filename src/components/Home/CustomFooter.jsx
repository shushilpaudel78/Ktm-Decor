import React from 'react'

const CustomFooter = () => {
    return (
        <>

            <div className="w-full h-auto bg-[#1f2435] py-4 px-[10px]">
                <div className="max-w-[1200px] m-auto">

                    <div className="flex text-white ">

                        <div className="w-1/3 border-r-white border-r-[2px] px-2">
                            <p>2024 Ktm Decor. All rights reserved. </p>

                        </div>

                        <div className="w-1/3 border-r-white border-r-[2px] px-2">
                        <div className="flex gap-4 font-aileron text-[14px] font-normal">
                            <p>Privacy Policy</p>
                            <p>Refund Policy</p>
                            <p>Shipping Policy</p>
                        </div>


                        </div>

                        <div className="w-1/3 px-2">

                            <p>Powered by MarginTop Solutions</p>

                        </div>




                    </div>


                </div>



            </div>

        </>
    )
}

export default CustomFooter
