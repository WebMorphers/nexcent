import HeroImg from './HeroImg/HeroImg'

const Hero = () => {
  return (
    <div className='bg-silver'>
        <div className='flex justify-between py-16 lg:px-28 px-6 flex-wrap items-center	'>
            <div className='flex-none max-sm:flex-1 md:flex-1 items-center shrink'>
                <div className='flex-col items-start flex gap-5	'>
                    <div className='flex-col gap-2'>
                        <div className='sm:text-5xl  text-3xl flex-1 py-3 self-stretch line leading-tight'>
                            <h1 className='text-grey-40 font-normal font-inter  '>Lesson and insights <br /> <span className='text-green-60'>from 8 years</span></h1>
                        </div>
                        <p className='flex-1 text-xs text-grey-30'>Where to grow your business as a photographer: site or social media?</p>
                    </div>
                    <button className='flex-none py-2 px-5 bg-[#4CAF4F] rounded-sm text text-white text-xs'>Register</button>
                </div>
            </div>
            <div className='flex-none'>
                <HeroImg />
            </div>
        </div>
    </div>
    
  )
}

export default Hero