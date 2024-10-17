import React from 'react'
import warrenty from '/img/home/warranty.png'
import CustomNavLink from './CustomNavLink'

const CustomizeNav = () => {
  return (
    <>
      <div className="w-full h-auto  bg-[#151a2b] pb-7">
        <div className="w-[1200px] m-auto">



          <div className="w-full h-auto">

            <ul className='flex justify-end flex-wrap text-[#FFFFFF]  md:justify-start overflow-x-auto md:hidden'>
              <CustomNavLink name='Custom Design' />
              <CustomNavLink name='Cost Effective' />
              <CustomNavLink name='Durability' />
              <CustomNavLink name='Wash Proof' />
              <CustomNavLink name='Easy Install' />
              <CustomNavLink name='Warrenty' />




            </ul>






          </div>


        </div>

      </div>

    </>
  )
}

export default CustomizeNav
