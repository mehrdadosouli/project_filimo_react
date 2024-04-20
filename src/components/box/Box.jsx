import React from "react";
import styles from "../popular/popular.module.css";

function Box({item}) {
  return (
    <>
      {item.map((i) => (
        <div key={i.id} className={styles.box} >
          <img src={i.src} className={styles.imgBox} />
        </div>
      ))}
    </>
  );
}

export default Box;
