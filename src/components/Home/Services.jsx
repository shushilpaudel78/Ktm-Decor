import React from 'react'
import warrenty from '/img/home/warranty.png'


const Services = (props) => {
    return (
        <>
            <div className="flex gap-[10px] items-center py-6 bg-[#161e30] px-4 first:rounded-l-lg last:rounded-r-lg ">
                <div className="w-[36px] h-[36px]"><img src={warrenty} alt="services" className='w-full h-full object-fill' /></div>
                <p className='max-w-[130px] text-[#ffff] text-[16px] leading-5 font-normal'>{props.service}</p>

            </div>

        </>
    )
}

export default Services
