import React from 'react'
import warrenty from '/img/home/warranty.png'
import { Link } from 'react-router-dom'


const CustomNavLink = (props) => {
    return (
        <>

            <div className=' bg-[#282c3c] w-1/7 lg:w-1/3 sm:w-1/2 flex font-aileron  flex-row  items-cente py-4 first:rounded-l-[30px] lg:first:rounded-none  px-[11px] gap-2 pt-5 text-[14px] font-medium items-center' >
                <div className="w-[25px] h-[25px]"><img src={warrenty} alt="" className='w-full h-full object-contain' /></div>
                <Link>{props.name}</Link>

            </div>


        </>
    )
}

export default CustomNavLink
