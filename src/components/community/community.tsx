import Card from './cardd';
import img1 from '../../resources/com.png';
import img2 from '../../resources/comm2.png';
import img3 from '../../resources/comm3.png';

const community = () => {
  return (
    <div className='flex flex-col justify-center items-center'>  
      <h1 className='text-[#4D4D4D] font-bold mt-9'>Caring is the new marketing</h1>
      <p className='text-[#717171] w-[30%] mt-3'>
        The Nextcent blog is the best place to read about the latest membership insights,
        trends and more. See who's joining the community, read about how our community is
        increasing their membership income and lots more.
      </p>

      <div className='flex flex-row gap-5 mt-3'>
        <div className='relative '>
          <img src={img1} alt="img1" className='z-1 w-[80%] h-auto' />
          <div className='z-2 absolute  top-0 left-0'>
            <Card description='Creating Streamlined Safeguarding Processes with OneRen' />
          </div>
        </div>
        <div className='relative  '>
          <img src={img2} alt="img2" className='z-1 w-[80%] h-auto' />
          <div className='z-2 absolute top-0 left-0  '>
            <Card description='What are your safeguarding responsibilities and how can you manage them?' />
          </div>
        </div>
        <div className='relative'>
          <img src={img3} alt="img3" className='z-1 w-[80%]    h-auto' />
          <div className='z-2 absolute top-0 left-0  '>
            <Card description='Revamping the Membership Model with Triathlon Australia' />
          </div>
        </div>
      </div>
    </div> 
  );
}

export default community;
