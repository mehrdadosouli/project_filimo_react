import React from 'react'
import { CiLaptop } from "react-icons/ci";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineVideogameAsset } from "react-icons/md";

function ChildrenSection() {
  return (
    <div className=' py-14 bg-gradient-to-l from-[#05c5ff74] from-30% to-[#151515] to-100%'>
        <div className='containers flex md:flex-row flex-col md:items-center gap-5'>
          <div id='right'>
              <img src="https://www.filimo.com/assets/web/ui/img-Q6UiSiS9EH9qTbGpHN8xLQ/campaigns/nosub-v_new/bg-kids.png" className='w-[50%] mx-auto' alt="" />
          </div>
          <div id='left'>
              <h3 className='font-morabaBold'>دنیایی متنوع از فیلم و کارتون‌های کودکانه</h3>
              <p className='mt-10 text-gray-400'>ساخت فیلیمو کودک این امکان را می‌دهد که با انتخاب سن فرزندتان، یک فضای امن برای تماشای کودک بسازید؛ یعنی محتوای مخصوص سن خودش را ببیند و به بقیه فیلم و سریال‌ها دسترسی نداشته‌باشد.</p>
                  <div className='flex gap-10 mt-5'>
                      <button className='bg-white p-5 rounded-2xl text-black'>فیلیمو کودک ساز</button>           
                      <button className='bg-white p-5 rounded-2xl text-black'>تماشای فیلیمو کودک</button>           
                  </div>
          </div>
        </div>
    </div>
  )
}

export default ChildrenSection