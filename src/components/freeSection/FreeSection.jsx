import React from 'react'
import Slider from 'react-slick';

export default function FreeSection() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1250,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 860,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false,
                arrows: false,
              }
            }
          ]
        };


  return (
    <div className='bg-slate-900'>
        <div className='containers'>
        <h2 className='text-white pt-10 pr-10'>فیلم های رایگان</h2>
        <Slider {...settings} className='py-16'>
            <div className="[&>*]:rounded-xl">
                <img src="https://static.cdn.asset.filimo.com/flmt/mov_srl_41017_932-b.jpg?width=165&quality=85&secret=iCCdAosM5VpIaQc_eFKHAA" alt="" />
            </div>
            <div className="[&>*]:rounded-xl">
                <img src="https://static.cdn.asset.filimo.com/flmt/mov_16676_331-b.jpg?width=165&quality=85&secret=4Q0sOKsHPQtVOTLs4kEvgQ" alt="" />
            </div>
            <div className="[&>*]:rounded-xl">
                <img src="https://static.cdn.asset.filimo.com/flmt/mov_srl_82690_962-b.jpg?width=165&quality=85&secret=zzPDwF-hvHdgEpy62Nqxog" alt="" />
            </div>
            <div className="[&>*]:rounded-xl">
                <img src="https://static.cdn.asset.filimo.com/flmt/mov_17637_916-b.jpg?width=165&quality=85&secret=Y1OuacY3TaQCzdi43YaqzA" alt="" />
            </div>
            <div className="[&>*]:rounded-xl">
                <img src="https://static.cdn.asset.filimo.com/flmt/mov_16676_331-b.jpg?width=165&quality=85&secret=4Q0sOKsHPQtVOTLs4kEvgQ" alt="" />
            </div>
            <div className="[&>*]:rounded-xl">
                <img src="https://static.cdn.asset.filimo.com/flmt/mov_srl_27147_1-b.jpg?width=165&quality=85&secret=mh6bu29O5sqgMmlrraVIUA" alt="" />
            </div>
        </Slider>
        </div>
    </div>
  )
}
