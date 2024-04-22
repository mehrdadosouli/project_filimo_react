import React from 'react'
import styles from "./Main.module.css"
import { Fade  } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useEffect } from 'react';
export default function Main() {
    useEffect(()=>{
        document.querySelectorAll('.react-slideshow-container>button').forEach(elem=>{
            elem.style.display='none'
        })
    },[])
    const fadeImages = [
        {
          url: 'https://static.cdn.asset.filimo.com/ct/ukx6o_desktop_1_v1.jpeg',
        },
        {
          url: 'https://static.cdn.asset.filimo.com/ct/n06tm_desktop_1_v1.jpeg',
        },
        {
          url:'https://static.cdn.asset.filimo.com/ct/145904_desktop_1_v1.jpeg?width=1920&quality=85&secret=QTAtt-bRaGvhPU1on9xC2Q&quot'
         }
      ];
  return (
    <>
      <Fade>
        {fadeImages.map((item,index) => (
          <div key={index} className={styles.container} style={{backgroundImage: `url(${item.url})`}}>
            <div className={styles.contain}>
                 <span className={styles.header}>با فیلیمو بیوقفه فیلم ببین</span>
                 <h1>کنترل همیشه دست توست</h1>
                 <div className={styles.description}>
                     <span>۸۵ هزار اپیزود فیلم و سریال برای تماشا داری</span>
                     <span>با فیلیمو بیوقفه فیلم ببین</span>
                     <span>۸۵ هزار اپیزود فیلم و سریال برای تماشا داری</span>
                 </div>
                 <span className={styles.btn}> خرید اشتراک و تماشا</span>
             </div>
         </div>
        ))}
      </Fade>
    </>
  )
}
