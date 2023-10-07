 import img from  '../../resources/image.png'

const unlock = () => {
  return (
    <div className='grid lg:grid-cols-3 gap-9 mt-8 p-3 sm:px-16 lg:px-28 w-[100%]  mx-23 '>
        <img src={img}  alt="img"  />
         <div className='flex-col items-center col-span-2'>

            <h1 className='text-3xl w-[100%] mb-[10%]   '>The unseen of spending three years at Pixelgrade</h1>

            <p className='w-[100%] text-[#717171] mb-[10%] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
                Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta.
                Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar,
                aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <svg className='cursor-pointer' width="107" height="37" viewBox="0 0 107 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.700165" y="0.313721" width="105.548" height="36.4899" rx="2.78428" fill="#4CAF4F"/>
<path d="M24.194 22.0586V13.9589H25.4161V21.0066H29.0862V22.0586H24.194ZM33.0036 22.1812C32.4051 22.1812 31.8896 22.0533 31.4572 21.7976C31.0275 21.5392 30.6953 21.1766 30.4606 20.71C30.2286 20.2406 30.1126 19.6909 30.1126 19.0607C30.1126 18.4385 30.2286 17.8901 30.4606 17.4155C30.6953 16.9409 31.0222 16.5705 31.4414 16.3042C31.8633 16.0379 32.3563 15.9047 32.9206 15.9047C33.2633 15.9047 33.5955 15.9614 33.9172 16.0748C34.2389 16.1881 34.5276 16.3661 34.7833 16.6087C35.0391 16.8513 35.2408 17.1663 35.3884 17.5539C35.5361 17.9389 35.6099 18.4069 35.6099 18.9579V19.3771H30.7809V18.4912H34.4511C34.4511 18.1801 34.3878 17.9046 34.2613 17.6647C34.1347 17.4221 33.9568 17.2309 33.7274 17.0912C33.5006 16.9514 33.2343 16.8816 32.9285 16.8816C32.5963 16.8816 32.3062 16.9633 32.0584 17.1268C31.8132 17.2876 31.6233 17.4985 31.4889 17.7596C31.357 18.018 31.2911 18.2988 31.2911 18.602V19.2941C31.2911 19.7001 31.3623 20.0455 31.5047 20.3303C31.6497 20.615 31.8514 20.8326 32.1098 20.9828C32.3682 21.1305 32.6701 21.2043 33.0155 21.2043C33.2396 21.2043 33.4439 21.1727 33.6285 21.1094C33.8131 21.0435 33.9726 20.9459 34.107 20.8167C34.2415 20.6875 34.3443 20.528 34.4155 20.3382L35.5348 20.5399C35.4451 20.8695 35.2843 21.1582 35.0523 21.406C34.8229 21.6512 34.5342 21.8424 34.1861 21.9795C33.8407 22.114 33.4466 22.1812 33.0036 22.1812ZM38.6898 22.1931C38.3049 22.1931 37.9569 22.1219 37.6457 21.9795C37.3346 21.8345 37.0881 21.6249 36.9062 21.3507C36.7269 21.0765 36.6372 20.7403 36.6372 20.3421C36.6372 19.9994 36.7031 19.7173 36.835 19.4958C36.9668 19.2743 37.1448 19.099 37.3689 18.9698C37.593 18.8406 37.8435 18.743 38.1203 18.6771C38.3972 18.6112 38.6793 18.5611 38.9667 18.5268C39.3305 18.4846 39.6258 18.4504 39.8526 18.424C40.0793 18.395 40.2441 18.3489 40.347 18.2856C40.4498 18.2223 40.5012 18.1195 40.5012 17.9771V17.9494C40.5012 17.604 40.4036 17.3364 40.2085 17.1466C40.0161 16.9567 39.7287 16.8618 39.3464 16.8618C38.9482 16.8618 38.6345 16.9501 38.4051 17.1268C38.1783 17.3008 38.0214 17.4946 37.9344 17.7082L36.8231 17.455C36.9549 17.0859 37.1474 16.788 37.4005 16.5612C37.6563 16.3318 37.9503 16.1657 38.2825 16.0629C38.6147 15.9574 38.964 15.9047 39.3305 15.9047C39.5731 15.9047 39.8302 15.9337 40.1017 15.9917C40.376 16.0471 40.6317 16.1499 40.869 16.3002C41.1089 16.4505 41.3054 16.6654 41.4583 16.9449C41.6112 17.2217 41.6877 17.5816 41.6877 18.0246V22.0586H40.5328V21.2281H40.4854C40.4089 21.381 40.2942 21.5313 40.1413 21.6789C39.9884 21.8266 39.7919 21.9492 39.552 22.0467C39.3121 22.1443 39.0247 22.1931 38.6898 22.1931ZM38.9469 21.2439C39.2738 21.2439 39.5533 21.1793 39.7854 21.0501C40.02 20.9209 40.198 20.7521 40.3193 20.5439C40.4432 20.3329 40.5052 20.1075 40.5052 19.8676V19.0845C40.463 19.1267 40.3812 19.1662 40.2599 19.2031C40.1413 19.2374 40.0055 19.2677 39.8526 19.2941C39.6997 19.3178 39.5507 19.3402 39.4057 19.3613C39.2607 19.3798 39.1394 19.3956 39.0418 19.4088C38.8124 19.4378 38.6028 19.4866 38.413 19.5551C38.2258 19.6237 38.0755 19.7225 37.9621 19.8517C37.8514 19.9783 37.796 20.147 37.796 20.358C37.796 20.6506 37.9041 20.8721 38.1203 21.0224C38.3365 21.1701 38.6121 21.2439 38.9469 21.2439ZM43.2627 22.0586V15.9838H44.4057V16.9488H44.469C44.5797 16.6219 44.7748 16.3648 45.0543 16.1776C45.3364 15.9878 45.6555 15.8928 46.0114 15.8928C46.0852 15.8928 46.1722 15.8955 46.2724 15.9008C46.3753 15.906 46.4557 15.9126 46.5137 15.9205V17.0516C46.4662 17.0385 46.3819 17.024 46.2606 17.0081C46.1393 16.9897 46.018 16.9805 45.8967 16.9805C45.6172 16.9805 45.3681 17.0398 45.1492 17.1584C44.933 17.2744 44.7617 17.4366 44.6351 17.6449C44.5085 17.8505 44.4453 18.0852 44.4453 18.3489V22.0586H43.2627ZM48.7196 18.4517V22.0586H47.537V15.9838H48.6721V16.9725H48.7472C48.887 16.6509 49.1058 16.3925 49.4038 16.1974C49.7043 16.0023 50.0827 15.9047 50.5388 15.9047C50.9528 15.9047 51.3153 15.9917 51.6264 16.1657C51.9376 16.3371 52.1788 16.5929 52.3502 16.933C52.5216 17.2731 52.6073 17.6937 52.6073 18.1946V22.0586H51.4247V18.337C51.4247 17.8967 51.31 17.5526 51.0807 17.3048C50.8513 17.0543 50.5362 16.929 50.1354 16.929C49.8612 16.929 49.6173 16.9884 49.4038 17.107C49.1928 17.2257 49.0254 17.3997 48.9015 17.6291C48.7802 17.8558 48.7196 18.13 48.7196 18.4517ZM57.2355 13.9589H58.7186L61.2973 20.2551H61.3922L63.9708 13.9589H65.4539V22.0586H64.2912V16.1974H64.216L61.8272 22.0467H60.8622L58.4734 16.1934H58.3983V22.0586H57.2355V13.9589ZM69.6946 22.1812C69.1251 22.1812 68.6281 22.0507 68.2036 21.7897C67.7791 21.5286 67.4495 21.1635 67.2148 20.6941C66.9802 20.2248 66.8628 19.6764 66.8628 19.0489C66.8628 18.4187 66.9802 17.8677 67.2148 17.3957C67.4495 16.9238 67.7791 16.5573 68.2036 16.2962C68.6281 16.0352 69.1251 15.9047 69.6946 15.9047C70.2641 15.9047 70.7611 16.0352 71.1856 16.2962C71.6101 16.5573 71.9397 16.9238 72.1743 17.3957C72.409 17.8677 72.5263 18.4187 72.5263 19.0489C72.5263 19.6764 72.409 20.2248 72.1743 20.6941C71.9397 21.1635 71.6101 21.5286 71.1856 21.7897C70.7611 22.0507 70.2641 22.1812 69.6946 22.1812ZM69.6985 21.1885C70.0677 21.1885 70.3735 21.091 70.6161 20.8958C70.8587 20.7007 71.0379 20.441 71.154 20.1167C71.2726 19.7924 71.3319 19.4351 71.3319 19.0449C71.3319 18.6573 71.2726 18.3014 71.154 17.9771C71.0379 17.6502 70.8587 17.3878 70.6161 17.1901C70.3735 16.9923 70.0677 16.8934 69.6985 16.8934C69.3268 16.8934 69.0183 16.9923 68.7731 17.1901C68.5305 17.3878 68.3499 17.6502 68.2313 17.9771C68.1152 18.3014 68.0572 18.6573 68.0572 19.0449C68.0572 19.4351 68.1152 19.7924 68.2313 20.1167C68.3499 20.441 68.5305 20.7007 68.7731 20.8958C69.0183 21.091 69.3268 21.1885 69.6985 21.1885ZM73.8463 22.0586V15.9838H74.9893V16.9488H75.0525C75.1633 16.6219 75.3584 16.3648 75.6379 16.1776C75.92 15.9878 76.239 15.8928 76.595 15.8928C76.6688 15.8928 76.7558 15.8955 76.856 15.9008C76.9588 15.906 77.0392 15.9126 77.0972 15.9205V17.0516C77.0498 17.0385 76.9654 17.024 76.8441 17.0081C76.7228 16.9897 76.6016 16.9805 76.4803 16.9805C76.2008 16.9805 75.9516 17.0398 75.7328 17.1584C75.5166 17.2744 75.3452 17.4366 75.2186 17.6449C75.0921 17.8505 75.0288 18.0852 75.0288 18.3489V22.0586H73.8463ZM80.5212 22.1812C79.9227 22.1812 79.4073 22.0533 78.9749 21.7976C78.5451 21.5392 78.2129 21.1766 77.9782 20.71C77.7462 20.2406 77.6302 19.6909 77.6302 19.0607C77.6302 18.4385 77.7462 17.8901 77.9782 17.4155C78.2129 16.9409 78.5398 16.5705 78.959 16.3042C79.3809 16.0379 79.8739 15.9047 80.4382 15.9047C80.7809 15.9047 81.1132 15.9614 81.4348 16.0748C81.7565 16.1881 82.0452 16.3661 82.301 16.6087C82.5567 16.8513 82.7584 17.1663 82.9061 17.5539C83.0537 17.9389 83.1275 18.4069 83.1275 18.9579V19.3771H78.2986V18.4912H81.9687C81.9687 18.1801 81.9055 17.9046 81.7789 17.6647C81.6523 17.4221 81.4744 17.2309 81.245 17.0912C81.0182 16.9514 80.7519 16.8816 80.4461 16.8816C80.1139 16.8816 79.8238 16.9633 79.576 17.1268C79.3308 17.2876 79.141 17.4985 79.0065 17.7596C78.8747 18.018 78.8087 18.2988 78.8087 18.602V19.2941C78.8087 19.7001 78.8799 20.0455 79.0223 20.3303C79.1673 20.615 79.369 20.8326 79.6274 20.9828C79.8858 21.1305 80.1877 21.2043 80.5331 21.2043C80.7572 21.2043 80.9616 21.1727 81.1461 21.1094C81.3307 21.0435 81.4902 20.9459 81.6247 20.8167C81.7591 20.6875 81.862 20.528 81.9331 20.3382L83.0524 20.5399C82.9627 20.8695 82.8019 21.1582 82.5699 21.406C82.3405 21.6512 82.0518 21.8424 81.7038 21.9795C81.3584 22.114 80.9642 22.1812 80.5212 22.1812Z" fill="white"/>
</svg>

         </div>

    </div>
  )
}

export default unlock