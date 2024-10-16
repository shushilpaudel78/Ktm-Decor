import React from 'react'
import Girl from '/img/home/girls.png'
import PurchaseButton from '../Button/PurchaseButton'

const Partial_hero = () => {
    return (
        <>
            <div className="w-full h-auto  bg-[#151a2b] py-10">

                <div className="max-w-[1200px] m-auto">


                    <div className="w-full h-auto flex">



                        <div className="w-2/3">


                            <div className="w-[581px] h-[720px]"><img src={Girl} alt="image" className='w-full h-full object-cover' /></div>


                        </div>



                        <div className="w-1/3">
                            <div className="w-full h-auto text-white">

                                <h1>Neon Glowstickers</h1>
                                <p>Eye-catching neon LED stickers that are easy to apply,
                                    energy-efficient, and add stylish lighting anywhere.</p>

                                <div className=''>

                                    <PurchaseButton />

                                </div>


                            </div>

                        </div>

                    </div>


                </div>

            </div>



        </>
    )
}

export default Partial_hero

