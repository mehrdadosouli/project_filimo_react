import React from 'react'
import { GiCampfire } from "react-icons/gi";
import { RiArticleLine } from "react-icons/ri";
import { LiaSearchSolid } from "react-icons/lia";
import { CiLogin } from "react-icons/ci";
import { RiVideoLine } from "react-icons/ri";
import {Link} from 'react-router-dom'
import styles from "./Menu.module.css"
import {searchHandler} from "../../funcs/utils.js"
import Search from "./Search.jsx"
export default function Menu() {
  
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.right}>
         <Link to='/'><img className={styles.logo} src="https://www.filimo.com/assets/web/ui/img-INpqFqn7oe6Ab4tcD3g/filimo/fa-filimo-dark-logo.svg" alt="" /></Link>
         <div className={styles.rightdesk}>
          <span className={styles.allfilm}>|</span>
          <span className={styles.allfilm}><Link to="/فیلیموتور"><GiCampfire className={styles.icon}/> فیلیموتور</Link></span>
          <span className={styles.allfilm}><Link to="/مقاله ها"><RiArticleLine className={styles.icon}/> مقاله ها</Link></span>
          <span className={styles.search} onClick={searchHandler}><LiaSearchSolid className={styles.icon}/> جستجو</span>
         </div>
        </div>
        <div className={styles.left}>
        <span className={`${styles.search} ${styles.searchmenu}`} onClick={searchHandler}><LiaSearchSolid className={styles.icon}/> جستجو</span>
            <span className={styles.buy}><Link to="/اشتراک"><RiVideoLine className={styles.icon}/> خرید اشتراک</Link></span>
            <span className={styles.login}><Link to="/ورود"><CiLogin className={styles.icon}/>ورود</Link></span>
        </div>
        <div className={styles.searchInput} id='searchInput'>
          <Search />
        </div>
      </div>
    </div>
  )
}
