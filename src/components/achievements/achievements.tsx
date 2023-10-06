import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'


const achievements = () => {
  return (
    <div className='bg-silver '>
        <div className='grid lg:grid-cols-2 py-9 lg:mx-28 mx-6 items-center'>
          <div className=' ' >
            <h1 className='text-2xl font-semibold text-grey-40'>Helping a local <br /> <span className='text-[#4CAF4F]'> business reinvent itself</span></h1>
            <p className='text-xs'>We reached here with our hard work and dedication</p>
          </div>
          <div className="grid grid-cols-2 gap-y-3">
            <div className="flex gap-2 items-center">
                <div className='w-[34px] h-[34px]'>
                  <img src={img1} alt="members" />
              </div>
              <div className='flex-col justify-center flex'>
                <span className="text-xl font-semibold text-grey-40">2,245,341</span>
                <span className="text-xs font-light text-grey-30 text">Members</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
            <div className='w-[34px] h-[34px]'>
              <img src={img2} alt="clubs" />
              </div>
              <div className=' justify-center flex-col flex'>
                <span className="text-xl font-semibold text-grey-40">46,328</span>
                <span className="text-sm font-light text-grey-30 text">Clubs</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
            <div className='w-[34px] h-[34px]'>
                <img src={img3} alt="Event Bookings" />
              </div>
              <div className='flex-col justify-center flex'>
                <span className="text-xl font-semibold text-grey-40">828,867</span>
                <span className="text-sm font-light text-grey-30 text">Event Bookings</span>
              </div>
            </div>
            <div className="flex gap-2 items-center ">
            <div className='w-[34px] h-[34px]'>
              <img src={img4} alt="Payments" />
              </div>
              <div className='flex-col justify-center flex'>
                <span className="text-xl font-semibold text-grey-40">1,926,436</span> 
                <span className="text-sm font-light text-grey-30 text">Payments</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default achievements