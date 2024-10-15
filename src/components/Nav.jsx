import React from 'react'
import ktmdecor from '/img/home/ktm-decor.png'
import { IoReorderThreeOutline } from "react-icons/io5";

const Nav = () => {
  return (
    <>
      <div className="w-full h-auto py-[20px] px-[10px] bg-[#010f2c]">
        <div className="max-w-[1200px] m-auto">

          <div className="flex justify-between">

            <div className="slide  flex">
              <h1 className="rotate-[270deg] font-poppins  font-semibold uppercase text-white text-[12px]" >slides</h1>

              <div className="flex flex-col font-poppins  font-semibold text-[16px] text-white relative">
                <hr className='border-dotted rotate-[270deg] mr-10 w-[100px] absolute right-[-20px]' />
                <h1>1</h1>
                <h1>/</h1>
                <h1>3</h1>
              

              </div>

            </div>



            <div className="w-[128px] h-[97px]">
              <img src={ktmdecor} alt="logo" className='w-full h-full object-contain' />

            </div>


            <div className="flex text-white">
              <p>Menu</p>
              <IoReorderThreeOutline />

            </div>


          </div>

        </div>

      </div>



    </>
  )
}

export default Nav
