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
      <div className={styles.container}>
        <div className={styles.right}>
         <Link to='/'><img className={styles.logo} src="https://www.filimo.com/assets/web/ui/img-GkcYsvggLCqFYon6MQ/filimo/fa-filimo-dark-logo.svg" alt="" /></Link>
         <div className={`${styles.rightdesk} span`}>
          <span className={`${styles.allfilm} span`}>|</span>
          <span className={`${styles.allfilm} span`}><Link to="/فیلیموتور"><GiCampfire className={styles.icon}/> فیلیموتور</Link></span>
          <span className={`${styles.allfilm} span`}><Link to="/مقاله ها"><RiArticleLine className={styles.icon}/> مقاله ها</Link></span>
          <span className={`${styles.search} span`} onClick={searchHandler}><LiaSearchSolid className={styles.icon}/> جستجو</span>
         </div>
        </div>
        <div className={styles.left}>
            <span className={`${styles.login} span`}><Link to="/ورود"><CiLogin className={styles.icon}/>ورود</Link></span>
        </div>
        <div className={styles.searchInput} id='searchInput'>
          <Search />
        </div>
      </div>
  )
}
