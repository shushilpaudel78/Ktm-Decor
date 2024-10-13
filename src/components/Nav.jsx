import React from 'react'
import ktmdecor from '/img/ktm-decor.png'

const Nav = () => {
  return (
    <>
      <div className="w-full h-auto py-[20px] px-[10px] bg-[#010f2c]">
        <div className="max-w-[1200px] m-auto">

          <div className="flex">

            <div className="slide">
              <h1 className="rotate-[270deg] font-poppins  font-semibold text-[16px] uppercase text-white" >slides</h1>


            </div>

            <div className="flex flex-col font-poppins  font-semibold text-[16px] text-white">
              <h1>1</h1>
              <h1>/</h1>
              <h1>3</h1>
            </div>

            <div className="w h-auto">
              <img src={ktmdecor} alt="logo" />

            </div>




          </div>




        </div>

      </div>



    </>
  )
}

export default Nav
