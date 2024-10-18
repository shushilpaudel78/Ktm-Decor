import React from 'react'
import warrenty from '/img/home/warranty.png'
import CustomNavLink from './CustomNavLink'
import { DiSnapSvg } from 'react-icons/di'

const CustomizeNav = () => {
  return (
    <>
      <div className="w-full h-auto  bg-[#151a2b] pb-7 sm:pb-0">
        <div className="max-w-[1200px] m-auto">


          <div className="flex justify-end items-center w-full overflow-hidden lg:justify-start ">

            <div className=' w-[65%]  lg:w-[100%]  flex  flex-wrap text-[#FFFFFF]  rounded-l-[500px]'>

              <CustomNavLink name='Custom Design' />
              <CustomNavLink name='Cost Effective' />
              <CustomNavLink name='Durability' />
              <CustomNavLink name='Wash Proof' />
              <CustomNavLink name='Easy Install' />
              <CustomNavLink name='Warrenty' />

            </div>

          </div>




        </div>

      </div>

    </>
  )
}

export default CustomizeNav
