import React from 'react'
import warrenty from '/img/home/warranty.png'


const CustomNavLink = (props) => {
    return (
        <>

            <li className='flex font-aileron  flex-row items-center bg-[#282c3c]  px-4 py-3 gap-3 first:rounded-l-[100px] pt-5'>
                <div className="w-[25px] h-[25px]"><img src={warrenty} alt="" className='w-full h-full object-contain' /></div>
                <p >{props.name}</p>

            </li>


        </>
    )
}

export default CustomNavLink
