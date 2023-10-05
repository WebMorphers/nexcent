 import img from  '../../resources/image.png'

const unlock = () => {
  return (
    <div className='flex justify-center items-center h-96'>
        <img src={img}  alt="img" className='h-96' />
        <div className=' '>
            <h1 className='text-2xl'>The unseen of spending three years at Pixelgrade</h1>

            <p className='w-[40%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
                Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta.
                Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar,
                aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
        </div>

    </div>
  )
}

export default unlock