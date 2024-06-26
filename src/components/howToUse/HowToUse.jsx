import React from 'react'
import { CiLaptop } from "react-icons/ci";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineVideogameAsset } from "react-icons/md";

function HowToUse() {
  return (
    <div className='containers flex md:flex-row flex-col md:items-center gap-5 py-14'>
        <div id='right'>
            <div className='md:hidden'>
                <h4 className='my-5 font-poppinBold'>تماشای فیلیمو با همه دستگاه‌ها</h4>
                <p className='mb-10'>می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل، تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید.</p>
            </div>
            <img src="https://www.filimo.com/assets/web/ui/img-snIH220AZFWoROnY2Yl1tA/campaigns/nosub-v_new/deviceYaghi.png" alt="" />
        </div>
        <div id='left'>
        <div className='md:flex flex-col hidden'>
                <h4 className='my-5 font-poppinBold'>تماشای فیلیمو با همه دستگاه‌ها</h4>
                <p className='mb-10'>می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل، تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید.</p>
            </div>
            <div className='flex gap-5 mb-5'>
                <CiLaptop className='text-5xl' />
                <div className='flex flex-col gap-5'>
                    <p className='font-extrabold'>کامپیوتر و لپ‌تاپ</p>
                    <p className='text-lg'>windows PC - MacOS - Chorom OS</p>
                </div>
            </div>
            <div className='flex gap-5 mb-5'>
                <MdOutlinePhoneIphone className='text-5xl' />
                <div className='flex flex-col gap-5'>
                    <p className='font-extrabold'>کامپیوتر و لپ‌تاپ</p>
                    <p className='text-lg'>windows PC - MacOS - Chorom OS</p>
                </div>
            </div>
            <div className='flex gap-5 mb-5'>
               <MdOutlineVideogameAsset className='text-5xl' />
                <div className='flex flex-col gap-5'>
                    <p className='font-extrabold'>کامپیوتر و لپ‌تاپ</p>
                    <p className='text-lg'>windows PC - MacOS - Chorom OS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowToUse