import React from 'react'

const Custom_Number = (props) => {
    return (
        <>

            <div className="flex gap-3 font-aileron py-3">
                <p className='text-[#FF904E] bg-white px-[6px] py-[2px] rounded-xl text-[16px] bold'>01</p>
                <p className='text-[14px] '>{props.name}</p>
            </div>

        </>
    )
}

export default Custom_Number
