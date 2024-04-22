import React from "react";

export default function Footer() {
  return (
    <div className="bg-footer">
      <div className="containers py-20">
        <h4 className="text-center font-moraba text-8xl my-20">فیلیمو</h4>
        <div className="flex md:flex-row flex-col justify-center md:gap-60 gap-20 items-center [&>*]:text-2xl [&>*]:text-gray-400">
          <span className="card relative">فیلم‌های روز سینمای ایران</span>
          <span className="card relative">
            ۸ ساعت زمان برای مشاهده فیلم در هر کجا
          </span>
          <span className="card relative">
            خرید یک بلیت برای تماشا همراه با همه خانواده
          </span>
        </div>
      </div>
    </div>
  );
}
