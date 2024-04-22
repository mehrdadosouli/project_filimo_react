export default function InfoBox({image,title,author,subject,ekran}) {
  return (
    <div className='flex justify-between bg-[rgba(255,255,255,.06)] lg:boxFild boxFildsm my-1'>
            <div className="overflow-hidden lg:ml-20 md-20 ml-10">
                <img src={image} className="w-64 rounded-lg " alt="photo" />
            </div>
        <div className='flex flex-col lg:gap-10 justify-between items-start sm:ml-40'>
            <span>{title}</span>
            <span>{author}</span>
            <div className="flex gap-14">
                {
                    subject.map(i=><span key={i}>{i}</span>)
                }
            </div>
            <button>خرید بلیط</button>
        </div>
        <div>
            <span>{ekran && 'اکران'}</span>
        </div>
    </div>
  )
}
