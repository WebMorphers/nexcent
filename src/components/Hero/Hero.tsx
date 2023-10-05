import React from 'react'
import HeroImg from './HeroImg/HeroImg'

const Hero = () => {
  return (
    <div className='bg-silver'>
        <div className='flex justify-between items-stretch py-16 px-28'>
            <div className='flex-initial'>
                <div className='flex-col items-start flex gap-5	'>
                    <div className=''>
                        <div className='text-5xl flex-1'>
                            <h1 className='text-grey-40 font-normal font-inter'>Lesson and insights <br /> <span className='text-green-60'>from 8 years</span></h1>
                        </div>
                        <p className='flex-1'>Where to grow your business as a photographer: site or social media?</p>
                    </div>
                    <button className='flex-none py-2 px-3 bg-[#4CAF4F] rounded-sm'>Register</button>
                </div>
            </div>
            <div>
                <HeroImg />
            </div>
        </div>
    </div>
  )
}

export default Hero