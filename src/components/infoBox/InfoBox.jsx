export default function InfoBox({image,title,author,subject,ekran}) {
  return (
    <div className='flex bg-[rgba(255,255,255,.06)] boxFild my-1'>
            <div className="overflow-hidden ml-20">
                <img src={image} className="w-64 rounded-lg " alt="photo" />
            </div>
        <div className='flex flex-col gap-10 justify-between items-start ml-40'>
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
