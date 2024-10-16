import React from 'react'

const Custom_Number = (props) => {
    return (
        <>

            <div className="flex gap-3 font-aileron py-3 items-center">
                <p className='text-[#FF904E] bg-white px-[13px] py-[5px] rounded-[30px] text-[16px] semibold'>{props.number}</p>
                <p className='text-[14px] font-aileron'>{props.name}</p>
            </div>

        </>
    )
}

export default Custom_Number
