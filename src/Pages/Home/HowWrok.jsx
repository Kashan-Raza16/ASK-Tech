import React from 'react'
import BgCircle from '../../assets/img/bg-circle.png'

const HowWrok = () => {
  return (
    <div className='bg-[#5B45CC] h-screen w-full flex items-center justify-center overflow-hidden'> 
        <div className="bg-img relative overflow-hidden flex left-[30%] justify-center">
            <img src={BgCircle} alt="" className='h-[150vh] object-contain opacity-20' /> 
        </div>
    </div>
  )
}

export default HowWrok