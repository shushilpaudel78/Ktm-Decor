import React from 'react'
import ktmdecor from '/img/home/logo.png'
import { IoReorderThreeOutline } from "react-icons/io5";

const Nav = () => {
  return (
    <>
      <div className="w-full h-auto py-[20px] px-[10px] bg-[#021b44]">
        <div className="max-w-[1200px] m-auto">

          <div className="flex justify-between">

            <div className="slide  flex px-9 gap-0">
              <h1 className="rotate-[270deg] font-poppins  font-semibold uppercase text-white text-[12px]" >slides</h1>

              <div className="flex flex-col font-poppins  font-semibold text-[16px] text-white relative">
                <hr className='border-dotted rotate-[270deg] mr-10 w-[100px] absolute right-[-23px]' />
                <h1>1</h1>
                <h1>/</h1>
                <h1>3</h1>
              

              </div>

            </div>



            <div className="w-[128px] h-[97px]">
              <img src={ktmdecor} alt="logo" className='w-full h-full object-cover' />

            </div>


            <div className="flex  items-center text-[16px] gap-2 text-[#FFFFFF] font-normal uppercase">
              <p>Menu</p>
              <IoReorderThreeOutline className='text-[25px]' />

            </div>


          </div>

        </div>

      </div>



    </>
  )
}

export default Nav
