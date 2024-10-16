import React from 'react'
import ktmdecor from '/img/home/logo.png'
import { IoReorderThreeOutline } from "react-icons/io5";

const Nav = () => {
  return (
    <>
      <div className="w-full h-auto py-[20px] px-[10px] bg-[#151a2b]">
        <div className="max-w-[1200px] m-auto">

          <div className="flex justify-between">


            <div className="flex gap-0">

              <div className="flex flex-col">
                <hr  className='rotate-[270deg] border-t-2 border-dotted'/>
                <h1 className='uppercase text-[#ffff] mt-[40px] font-medium font-aileron pt-0 pr-5 rotate-[270deg]'>Slides</h1>
              </div>

              <div className="flex flex-col font-aileron text-[#ffff]  font-medium mt-[22px] ">
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
