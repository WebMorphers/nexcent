import img1 from '../../resources/com.png';
import img2 from '../../resources/comm2.png';
import img3 from '../../resources/comm3.png';

const community = () => {
  return (
    <div className='lg:px-28 px-6 mb-20'>
    <div className='flex flex-col justify-center items-center text-center px-0 lg:px-[25%] md:px-[15%]'>  
      <h1 className='text-[#4D4D4D] font-bold mt-9'>Caring is the new marketing</h1>
      <p className='text-[#717171] mt-3'>
        The Nextcent blog is the best place to read about the latest membership insights,
        trends and more. See who's joining the community, read about how our community is
        increasing their membership income and lots more.
      </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-24  mt-3'>
      <div className='relative flex flex-row justify-center '>
          <img src={img1} alt="img1" className='z-1  h-auto' />
          <div className='z-2 absolute left-[10%] top-[70%] p-2 2xl:top-[90%]  w-[80%]  bg-silver rounded-lg shadow-2xl '>
            <div className='py-1'>
              <div className='flex flex-col gap-3'>
                <div className='text-center text-grey-30 font-semibold leading-[140%]'>
                  <h1>Creating Streamlined Safeguarding Processes with OneRen</h1>
                </div> 
                <div className="pt-0 flex flex-row justify-center items-center">
                <button className="text-[#4CAF4F] text-l bg-[#F5F7FA] font-semibold">ReadMore</button>
                  <div><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9346 11.8659L14.2267 9.57384C14.4985 9.302 14.4985 8.86128 14.2267 8.58945L11.9346 6.29736M14.0228 9.08164L4.27783 9.08164" stroke="#4CAF4F" stroke-width="1.0441" stroke-linecap="round"/>
                  </svg></div> 
               </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative flex flex-row justify-center '>
          <img src={img2} alt="img2" className='z-1  h-auto' />
          <div className='z-2 absolute left-[10%] right-[10%] top-[70%] w-[80%] p-2 bg-silver rounded-lg shadow-2xl '>
            <div className='py-1'>
              <div className='flex flex-col gap-3'>
                <div className='text-center text-grey-30 font-semibold leading-[140%]'>
                  <h1>What are your safeguarding responsibilities and how can you manage them?</h1>
                </div> 
                <div className="pt-0 flex flex-row justify-center items-center">
                <button className="text-[#4CAF4F] text-l bg-[#F5F7FA] font-semibold">ReadMore</button>
                  <div><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9346 11.8659L14.2267 9.57384C14.4985 9.302 14.4985 8.86128 14.2267 8.58945L11.9346 6.29736M14.0228 9.08164L4.27783 9.08164" stroke="#4CAF4F" stroke-width="1.0441" stroke-linecap="round"/>
                  </svg></div> 
               </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative flex flex-row justify-center '>
          <img src={img3} alt="img3" className='z-1  h-auto' />
          <div className='z-2 absolute left-[10%] right-[10%] top-[70%] 2xl:top-[90%] p-2 bg-silver rounded-lg shadow-2xl '>
            <div className='py-1'>
              <div className='flex flex-col gap-3'>
                <div className='text-center text-grey-30 font-semibold leading-[140%]'>
                  <h1>Revamping the Membership Model with Triathlon Australia </h1>
                </div> 
                <div className="pt-0 flex flex-row justify-center items-center">
                <button className="text-[#4CAF4F] text-l bg-[#F5F7FA] font-semibold">ReadMore</button>
                  <div><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9346 11.8659L14.2267 9.57384C14.4985 9.302 14.4985 8.86128 14.2267 8.58945L11.9346 6.29736M14.0228 9.08164L4.27783 9.08164" stroke="#4CAF4F" stroke-width="1.0441" stroke-linecap="round"/>
                  </svg></div> 
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>          
    </div>
  );
}

export default community;
