import React, { useEffect, useState } from "react";
import styles from "../popular/popular.module.css";
import Box from "../box/Box";
function Popular() {
  const [swich, setSwitch] = useState("سریال");
  const [width, setWidth] = useState(window.innerWidth);
  const [removed, setRemoved] = useState(0);
  const [item,setItem]=useState([
    {id:1,src:'https://static.cdn.asset.filimo.com/flmt/mov_146023_155520.jpg?width=165&quality=85&secret=1uLHimMWMoHrt1cgKWNahQ'},
    {id:2,src:'https://static.cdn.asset.filimo.com/flmt/mov_145330_155524.jpg?width=165&quality=85&secret=AgvUvdyi5NsspaRE0LX6hg'},
    {id:3,src:'https://static.cdn.asset.filimo.com/flmt/mov_146003_154687.jpg?width=165&quality=85&secret=D9K8G-n2jjfp8eGNy01YDw'},
    {id:4,src:'https://static.cdn.asset.filimo.com/flmt/mov_146020_155522.jpg?width=165&quality=85&secret=pPOjr2zW0w3B4SIqTMdHDg'},
    {id:5,src:'https://static.cdn.asset.filimo.com/flmt/mov_146022_155498.jpg?width=165&quality=85&secret=C0D2Dpb_nk39oS4_gJF8WQ'},
    {id:6,src:'https://static.cdn.asset.filimo.com/flmt/mov_146014_154959.jpg?width=165&quality=85&secret=M1mahNLUrLmCXNXn6XzwVQ'},
  ])
  useEffect(() => {
      let array=[...item]
    function handleResize() {
        setWidth(window.innerWidth)
      if (width < 1200 && removed < 1) {
        setItem(prev => prev.slice(1));
        setRemoved(1);
      }
      if(width > 1200){
          setItem(array)
        }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [item, removed,width]);

  return (
    <div className='containers'>
        <div className={styles.populatHeader}>
            <h2 className="font-morabaBold">محبوب ترین های فیلیمو</h2>
            <div className={styles.swich_card}>
              <button className={`${styles.btn} ${swich=='سریال' ? styles.active : ''}`} onClick={(e) =>setSwitch(e.target.innerText)}>سریال</button>
              <button className={`${styles.btn} ${swich=='فیلم' ? styles.active : ''}`} onClick={(e) => setSwitch(e.target.innerText)}>فیلم</button>
            </div>
        </div>
      <div className={`${styles.image} ${styles.popular}`}>
        {
            swich =='سریال' ?
            <Box item={item} /> :
            ""
        }
      </div>
    </div>
  );
}

export default Popular;
