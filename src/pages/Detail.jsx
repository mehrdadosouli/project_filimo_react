import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FreeSection from "../components/freeSection/FreeSection";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";

export default function Detail() {
  const { id } = useParams();
  const select = useSelector((state) => state.detailFilmSlice.detail);
  const res = select.find((i) => i.id === +id);

  const {
    title,
    description,
    src,
    subject,
    year,
    country,
    time,
    actor,
    creator,
    bg
  } = res;
 
  return (
    <div style={{backgroundColor:'rgb(21, 21, 21)',color:'white'}}>
      <Menu />
    <div className={`flex gap-10 p-32 detail `} style={{backgroundImage:`url(${bg})`}} >
      <div className="right lg:block hidden ">
        <img src={src} alt="" />
      </div>
      <div className="left flex flex-col gap-12 items-start p-10 md:min-h-[40rem]" style={{background:'linear-gradient(to bottom, rgba(51, 52, 52,0.4) 70%,rgb(51, 52, 52) 100%)'}}>
        <h1>{title}</h1>
        <div className="flex gap-10">
          <div className="flex gap-2">
            <span className="span">icon</span>
            <span className="span">{year}</span>
          </div>
          <div className="flex gap-2">
            <span className="span">icon</span>
            <span className="span">فارسی</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 [&>*]:span">
          <span>کشور سازنده</span>
          <span>{country}</span>
          <span>کارگردان</span>
          <span>{creator}</span>
          <span>زمان</span>
          <span>{time}</span>
          <span>بازیگران</span>
          <span>{actor}</span>
        </div>
        <div>
          <span className="span">{subject}</span>
        </div>
        <p className="p hidden md:block">{description}</p>
        <button className="button bg-green-600 py-3 px-8 rounded-lg">پخش</button>
      </div>

    </div>
      <FreeSection />
      <Footer />
    </div>
  );
}
