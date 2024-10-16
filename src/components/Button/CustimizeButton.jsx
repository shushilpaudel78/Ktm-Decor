import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const CustimizeButton = (props) => {
    return (
        <>
            <button type="button" className='bg-[#FF904E] flex gap-2 items-center pl-4 pr py-1 rounded-3xl pr-[2px]'>
                <p className='text-white  font-aileron text-[16px] font-semibold leading-[22px]'>{props.name} </p>
                <div className='bg-white rounded-3xl ml-2'>
                    <FaArrowRightLong className='m-2 text-[#FF904E] font-bold text-[22px]' />

                </div>
            </button>

        </>
    )
}

export default CustimizeButton
