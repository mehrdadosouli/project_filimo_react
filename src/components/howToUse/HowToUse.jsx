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
            <h4 className='my-5'>تماشای فیلیمو با همه دستگاه‌ها</h4>
            <p className='mb-10'>می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل، تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید.</p>
            <div className='flex items-center gap-5'>
                <CiLaptop />
                <div className='flex flex-col gap-5'>
                    <p>کامپیوتر و لپ‌تاپ</p>
                    <span className='text-green-600'>windows PC - MacOS - Chorom OS</span>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <MdOutlinePhoneIphone />
                <div className='flex flex-col gap-5'>
                    <p>کامپیوتر و لپ‌تاپ</p>
                    <span>windows PC - MacOS - Chorom OS</span>
                </div>
            </div>
            <div className='flex items-center gap-5'>
               <MdOutlineVideogameAsset />
                <div className='flex flex-col gap-5'>
                    <p className='text-red-500'>کامپیوتر و لپ‌تاپ</p>
                    <span>windows PC - MacOS - Chorom OS</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowToUse