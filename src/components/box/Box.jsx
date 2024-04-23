import React from "react";
import styles from "../popular/popular.module.css";
import { Link } from "react-router-dom";
function Box({ item }) {
  return (
    <>
      {item.map((i) => (
        <div key={i.id} className={styles.box}>
            <Link to={{pathname: `/detail/${i.id}`}}>
              <img src={i.src} className={styles.imgBox} />
            </Link>
          </div>
        ))}
      </>
  );
}

export default Box;
 