const Navbar = () => {
  return ( 
    <div className=" flex justify-center items-center px-4 mx-auto h-24 top-0 min-w-full"> 
    
      <div className="flex gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 35 24" fill="none">
  <path d="M18.7863 13.134L13.3954 22.3669L8.00448 13.134H18.7863ZM20.2305 12.3088H6.55444L13.3954 24L20.2305 12.3088Z" fill="#263238"/>
  <path d="M28.1591 1.65038L33.55 10.8833H22.7681L28.1591 1.65038ZM28.1591 0L21.3181 11.6912H35L28.1591 0Z" fill="#263238"/>
  <path d="M0 0L5.7359 10.3409L12.0038 0.259661L0 0Z" fill="#4CAF4F"/>
  <path d="M13.3955 0.905884L19.4121 11.189H7.36728L13.3955 0.905884Z" fill="#4CAF4F"/>
  <path d="M20.9615 13.434L26.9839 24H14.6526L20.7744 13.434H20.9615Z" fill="#4CAF4F"/>
  <path d="M22.2653 12.7935L28.1591 23.1978L34.1347 12.7935H22.2653Z" fill="#4CAF4F"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="112" height="22" viewBox="0 0 112 22" fill="none">
  <path d="M17.0327 0.669006V21.0326H13.3139L4.45455 8.21588H4.3054V21.0326H0V0.669006H3.77841L12.5682 13.4758H12.7472V0.669006H17.0327Z" fill="#263238"/>
  <path d="M27.4705 21.3309C25.8995 21.3309 24.5472 21.0128 23.4137 20.3764C22.2868 19.7334 21.4184 18.8253 20.8086 17.652C20.1987 16.472 19.8938 15.0767 19.8938 13.4659C19.8938 11.8949 20.1987 10.5161 20.8086 9.32952C21.4184 8.14297 22.2769 7.21825 23.3839 6.55537C24.4975 5.89249 25.8034 5.56105 27.3015 5.56105C28.3091 5.56105 29.247 5.72346 30.1154 6.04827C30.9904 6.36645 31.7527 6.84704 32.4023 7.49003C33.0586 8.13302 33.569 8.94173 33.9336 9.91617C34.2982 10.884 34.4805 12.0175 34.4805 13.3167V14.4801H21.5842V11.8551H30.4933C30.4933 11.2452 30.3607 10.705 30.0955 10.2343C29.8304 9.7637 29.4625 9.39581 28.9918 9.13065C28.5278 8.85887 27.9876 8.72298 27.3711 8.72298C26.7281 8.72298 26.158 8.87213 25.6609 9.17043C25.1703 9.46209 24.7859 9.85651 24.5075 10.3537C24.229 10.8442 24.0865 11.3911 24.0799 11.9943V14.49C24.0799 15.2457 24.2191 15.8986 24.4975 16.4488C24.7826 16.999 25.1836 17.4233 25.7006 17.7216C26.2177 18.0199 26.8308 18.169 27.5401 18.169C28.0108 18.169 28.4416 18.1027 28.8327 17.9701C29.2238 17.8376 29.5586 17.6387 29.837 17.3736C30.1154 17.1084 30.3275 16.7836 30.4734 16.3991L34.391 16.6576C34.1921 17.5989 33.7844 18.4209 33.168 19.1236C32.5581 19.8196 31.7693 20.3631 30.8015 20.7542C29.8403 21.1387 28.73 21.3309 27.4705 21.3309Z" fill="#263238"/>
  <path d="M40.511 5.75992L43.315 11.0994L46.1886 5.75992H50.5337L46.109 13.3963L50.6531 21.0326H46.3278L43.315 15.7528L40.3519 21.0326H35.9769L40.511 13.3963L36.136 5.75992H40.511Z" fill="#263238"/>
  <path d="M59.4031 21.3309C57.8387 21.3309 56.493 20.9995 55.3661 20.3366C54.2459 19.6671 53.3841 18.7391 52.7809 17.5525C52.1843 16.366 51.886 15.0004 51.886 13.4559C51.886 11.8915 52.1876 10.5194 52.7908 9.33946C53.4007 8.15291 54.2657 7.22819 55.386 6.56531C56.5063 5.89581 57.8387 5.56105 59.3832 5.56105C60.7156 5.56105 61.8822 5.803 62.8832 6.2869C63.8841 6.77081 64.6762 7.45026 65.2596 8.32526C65.8429 9.20026 66.1644 10.2277 66.2241 11.4076H62.2269C62.1142 10.6453 61.8159 10.0322 61.332 9.56815C60.8548 9.09751 60.2283 8.86219 59.4528 8.86219C58.7965 8.86219 58.2231 9.04117 57.7326 9.39912C57.2487 9.75045 56.8709 10.2642 56.5991 10.9403C56.3273 11.6165 56.1914 12.4351 56.1914 13.3963C56.1914 14.3707 56.324 15.1993 56.5891 15.8821C56.8609 16.5648 57.2421 17.0852 57.7326 17.4432C58.2231 17.8011 58.7965 17.9801 59.4528 17.9801C59.9367 17.9801 60.3709 17.8807 60.7553 17.6818C61.1464 17.4829 61.4679 17.1946 61.7198 16.8167C61.9783 16.4323 62.1474 15.9716 62.2269 15.4346H66.2241C66.1578 16.6013 65.8396 17.6288 65.2695 18.517C64.7061 19.3986 63.9272 20.088 62.9329 20.5852C61.9386 21.0824 60.762 21.3309 59.4031 21.3309Z" fill="#263238"/>
  <path d="M75.8963 21.3309C74.3253 21.3309 72.973 21.0128 71.8395 20.3764C70.7126 19.7334 69.8442 18.8253 69.2344 17.652C68.6245 16.472 68.3196 15.0767 68.3196 13.4659C68.3196 11.8949 68.6245 10.5161 69.2344 9.32952C69.8442 8.14297 70.7026 7.21825 71.8097 6.55537C72.9233 5.89249 74.2292 5.56105 75.7273 5.56105C76.7348 5.56105 77.6728 5.72346 78.5412 6.04827C79.4162 6.36645 80.1785 6.84704 80.8281 7.49003C81.4844 8.13302 81.9948 8.94173 82.3594 9.91617C82.724 10.884 82.9062 12.0175 82.9062 13.3167V14.4801H70.0099V11.8551H78.919C78.919 11.2452 78.7865 10.705 78.5213 10.2343C78.2561 9.7637 77.8883 9.39581 77.4176 9.13065C76.9536 8.85887 76.4134 8.72298 75.7969 8.72298C75.1539 8.72298 74.5838 8.87213 74.0866 9.17043C73.5961 9.46209 73.2116 9.85651 72.9332 10.3537C72.6548 10.8442 72.5123 11.3911 72.5057 11.9943V14.49C72.5057 15.2457 72.6449 15.8986 72.9233 16.4488C73.2083 16.999 73.6094 17.4233 74.1264 17.7216C74.6435 18.0199 75.2566 18.169 75.9659 18.169C76.4365 18.169 76.8674 18.1027 77.2585 17.9701C77.6496 17.8376 77.9844 17.6387 78.2628 17.3736C78.5412 17.1084 78.7533 16.7836 78.8991 16.3991L82.8168 16.6576C82.6179 17.5989 82.2102 18.4209 81.5938 19.1236C80.9839 19.8196 80.1951 20.3631 79.2273 20.7542C78.2661 21.1387 77.1558 21.3309 75.8963 21.3309Z" fill="#263238"/>
  <path d="M89.9062 12.2031V21.0326H85.6704V5.75992H89.7074V8.45452H89.8864C90.2244 7.56626 90.7912 6.86361 91.5866 6.34656C92.3821 5.82289 93.3466 5.56105 94.4801 5.56105C95.5407 5.56105 96.4654 5.79306 97.2543 6.25708C98.0431 6.72109 98.6562 7.38397 99.0938 8.24571C99.5312 9.10083 99.75 10.1217 99.75 11.3082V21.0326H95.5142V12.0639C95.5208 11.1292 95.2822 10.4001 94.7983 9.87639C94.3144 9.34609 93.6482 9.08094 92.7997 9.08094C92.2296 9.08094 91.7258 9.20357 91.2883 9.44884C90.8575 9.6941 90.5194 10.0521 90.2741 10.5227C90.0355 10.9867 89.9129 11.5468 89.9062 12.2031Z" fill="#263238"/>
  <path d="M111.212 5.75992V8.94173H102.015V5.75992H111.212ZM104.103 2.10083H108.338V16.3395C108.338 16.7306 108.398 17.0355 108.517 17.2542C108.637 17.4664 108.802 17.6155 109.015 17.7017C109.233 17.7879 109.485 17.8309 109.77 17.8309C109.969 17.8309 110.168 17.8144 110.367 17.7812C110.566 17.7415 110.718 17.7116 110.824 17.6917L111.49 20.8437C111.278 20.91 110.98 20.9862 110.596 21.0724C110.211 21.1652 109.744 21.2216 109.194 21.2415C108.173 21.2812 107.278 21.1453 106.509 20.8338C105.747 20.5222 105.153 20.0383 104.729 19.3821C104.305 18.7258 104.096 17.8972 104.103 16.8963V2.10083Z" fill="#263238"/>
</svg>
</div>

<div className="pl-[40%] w-[70%]  ">
  <ul className=" flex gap-[5%] items-center  h-[50px]">
    <li>Home</li>
    <li>Features</li>
    <li>Community</li>
    <li>Pricing</li>
    <li>
     <button className="flex bg-[#4CAF4F] text-white justify-center w-[30] items-center gap-2 h-[100%] borde" >register now <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
  <path d="M6.52563 5.47021L8.24474 3.75111C8.44862 3.54723 8.44862 3.21667 8.24474 3.0128L6.52563 1.29369M8.09183 3.38195L0.434875 3.38195" stroke="white" stroke-width="0.765676" stroke-linecap="round"/>
</svg></button>
    </li>
  </ul>
</div>
</div> 
  )
}

export default Navbar