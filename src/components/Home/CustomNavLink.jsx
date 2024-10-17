import React from 'react'
import warrenty from '/img/home/warranty.png'
import { Link } from 'react-router-dom'


const CustomNavLink = (props) => {
    return (
        <>

            <li className=' flex font-aileron  flex-row  items-center bg-[#282c3c]  px-4 py-3 gap-3 first:rounded-l-[200px] pt-5 text-[14px] font-medium'>
                <div className="w-[25px] h-[25px]"><img src={warrenty} alt="" className='w-full h-full object-contain' /></div>
                <Link>{props.name}</Link>

            </li>


        </>
    )
}

export default CustomNavLink
