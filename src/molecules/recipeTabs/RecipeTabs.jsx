
import { useState, useRef, useEffect } from 'react'


import styles from './RecipeTabs.module.css'
import cls from "classnames"

const RecipeTabs = ({ handleChange }) => {

    const [actualTab, setActualTab] = useState(0)

    const changeTab = (tab) => {
        setActualTab(tab)
    }

    return(
        <>
        <div className={styles.report__tabs}>
            <div className={styles.report__tabs__tab}>
                <span onClick={()=>{handleChange(0); changeTab(0)}} className={actualTab === 0 ? cls(styles.report__tabs__bg, styles.tab__active) : styles.report__tabs__bg}>
                    <p className={styles.report__tabs__text}>Ingredientes</p>
                </span>
            </div>
            <div className={styles.report__tabs__tab}>
                <span onClick={()=>{handleChange(1); changeTab(1)}} className={actualTab === 1 ? cls(styles.report__tabs__bg, styles.tab__active) : styles.report__tabs__bg}>
                    <p className={styles.report__tabs__text}>Pasos</p>
                </span>
            </div> 
        </div></>
    )
}

export default RecipeTabs