import React from 'react'
import warrenty from '/img/home/warranty.png'

const CustomizeNav = () => {
  return (
    <>
    <div className="w-full h-auto  bg-[#151a2b] pb-7">
        <div className="w-[1200px] m-auto">



            <div className="w-full h-auto">

                <ul className='flex justify-end  text-[#FFFFFF] '>

                    <li className='flex font-aileron  flex-row items-center bg-[#282c3c]  px-4 py-3 gap-3 rounded-l-[100px] pt-5'>
                        <div className="w-[25px] h-[25px]"><img src={warrenty} alt="" className='w-full h-full object-contain' /></div>
                        <p >Custom Design</p>

                    </li>

                    <li className='flex font-aileron  bg-[#282c3c]  px-4 py-3 gap-3 pt-5'>
                        <div className="w-[25px] h-[25px]"><img src={warrenty} alt="" className='w-full h-full object-contain' /></div>
                        <p >Cost Effective</p>

                    </li>

                    <li className='flex font-aileron  bg-[#282c3c]  px-4 py-3 gap-3 pt-5'>
                        <div className="w-[25px] h-[25px]"><img src={warrenty} alt="" className='w-full h-full object-contain' /></div>
                        <p >Durability</p>

                    </li>

                    <li className='flex font-aileron  bg-[#282c3c]  px-4 py-3 gap-3 pt-5'>
                        <div className="w-[25px] h-[25px]"><img src={warrenty} alt="" className='w-full h-full object-contain' /></div>
                        <p >Warrenty</p>

                    </li>
                    
                    <li className='flex font-aileron  bg-[#282c3c]  px-4 py-3 gap-3 pt-5'>
                        <div className="w-[25px] h-[25px]"><img src={warrenty} alt="" className='w-full h-full object-contain' /></div>
                        <p >Wash Proof</p>

                    </li>

                    <li className='flex font-aileron  bg-[#282c3c]  px-4 py-3 gap-3 pt-5'>
                        <div className="w-[25px] h-[25px]"><img src={warrenty} alt="" className='w-full h-full object-contain' /></div>
                        <p >Easy Install</p>

                    </li>
                    
                    
                    


                </ul>

                




            </div>


        </div>

    </div>
      
    </>
  )
}

export default CustomizeNav
