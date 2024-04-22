import InfoBox from '../infoBox/InfoBox'
import img1 from '../../photo/ok.png'
export default function OnlineCinema() {
    const films=[
        {id:1,image:'https://static.cdn.asset.filimo.com/flmt/mov_145651_153960.jpg?width=165&quality=85&secret=JtAKLUZifkEz-Q3q0pR5Nw',title:'گیجگاه',author:'گارگردان : عادل تبریزی',subject:['کمدی','عاشقانه'],ekran:true},
        {id:2,image:'https://static.cdn.asset.filimo.com/flmt/mov_145103_152533.jpg?width=165&quality=85&secret=G95_wAj3uUVsDAveZMBp3w',title:'گیجگاه',author:'گارگردان : عادل تبریزی',subject:['کمدی','عاشقانه'],ekran:false},
        {id:3,image:'https://static.cdn.asset.filimo.com/flmt/mov_144428_153502.jpg?width=165&quality=85&secret=0UrlXum_7lpjQYj_30sg4w',title:'گیجگاه',author:'گارگردان : عادل تبریزی',subject:['کمدی','عاشقانه'],ekran:true},
        {id:4,image:'https://static.cdn.asset.filimo.com/flmt/mov_145894_154677.jpg?width=165&quality=85&secret=mba5KX_Lyr0cqvY0m_vx3wmg1',title:'گیجگاه',author:'گارگردان : عادل تبریزی',subject:['کمدی','عاشقانه'],ekran:true},
        {id:5,image:'https://static.cdn.asset.filimo.com/flmt/mov_145894_154677.jpg?width=165&quality=85&secret=mba5KX_Lyr0cqvY0m_vx3wmg1',title:'گیجگاه',author:'گارگردان : عادل تبریزی',subject:['کمدی','عاشقانه'],ekran:true},
    ]
  return (
    <div className='py-10 bg-box'>
        <div className='containers flex flex-col gap-10'>
            <h3 className='text-center my-5 font-morabaBold'>سینما آنلاین فیلیمو</h3>
            <div className='flex justify-center gap-60 items-center [&>*]:text-2xl [&>*]:text-gray-400'>
                <span className='card relative'>فیلم‌های روز سینمای ایران</span>
                <span className='card relative'>۸ ساعت زمان برای مشاهده فیلم در هر کجا</span>
                <span className='card relative'>خرید یک بلیت برای تماشا همراه با همه خانواده</span>
            </div>
            {
                films.length && <div className='flex flex-wrap justify-center max-h-[70rem] overflow-y-scroll gap-10'>{films.map(elem=><InfoBox key={elem.id} image={elem.image} title={elem.title} author={elem.author} subject={elem.subject} ekran={elem.ekran} />) }</div>
            }
        </div>
    </div>
  )
}
