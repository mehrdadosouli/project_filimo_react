import React from 'react'
import { CiLaptop } from "react-icons/ci";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineVideogameAsset } from "react-icons/md";

function HowToUse() {
  return (
    <div className='containers flex items-center'>
        <div id='right'>
            <img src="https://www.filimo.com/assets/web/ui/img-snIH220AZFWoROnY2Yl1tA/campaigns/nosub-v_new/deviceYaghi.png" alt="" />
        </div>
        <div id='left'>
            <h4 className='my-5 font-poppinBold'>تماشای فیلیمو با همه دستگاه‌ها</h4>
            <p className='mb-10'>می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل، تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید.</p>
            <div className='flex gap-5 mb-5'>
                <CiLaptop className='text-5xl' />
                <div className='flex flex-col gap-5'>
                    <p className='font-extrabold text-4xl font-morabaBold'>کامپیوتر و لپ‌تاپ</p>
                    <span className='text-black'>windows PC - MacOS - Chorom OS</span>
                </div>
            </div>
            <div className='flex gap-5 mb-5'>
                <MdOutlinePhoneIphone className='text-5xl' />
                <div className='flex flex-col gap-5'>
                    <p className='font-extrabold text-4xl font-morabaBold'>کامپیوتر و لپ‌تاپ</p>
                    <span className='text-black font-morabaBbold'>windows PC - MacOS - Chorom OS</span>
                </div>
            </div>
            <div className='flex gap-5 mb-5'>
               <MdOutlineVideogameAsset className='text-5xl' />
                <div className='flex flex-col gap-5'>
                    <p className='font-extrabold text-4xl font-morabaBold'>کامپیوتر و لپ‌تاپ</p>
                    <span className='text-black'>windows PC - MacOS - Chorom OS</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowToUse